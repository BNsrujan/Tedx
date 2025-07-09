import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { db } from '@/lib/db';
import { otps, users } from '@/lib/schema';
import { eq, and, gt } from 'drizzle-orm';

// Generate a 6-digit OTP
function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export async function POST(request: Request) {
  console.log('🔥 API /api/send-otp called roter');
  console.log('EMAIL_USER:', process.env.EMAIL_USER);
  console.log('EMAIL_PASSWORD:', process.env.EMAIL_PASSWORD ? '✔️ Set' : '❌ Not Set');

  let email, name, phone, type, otp, expiresAt;
  try {
    ({ email, name, phone, type } = await request.json());
    console.log('📥 Received:', { email, name, phone, type });
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }
    otp = generateOTP();
    expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes from now
  } catch (err) {
    console.error('❌ Error parsing request body:', err);
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  try {
    // Store OTP in database
    await db.insert(otps).values({ email, otp, expiresAt });
    console.log('✅ OTP inserted into DB');
  } catch (err) {
    console.error('❌ Error inserting OTP into DB:', err);
    return NextResponse.json({ error: 'Database error (OTP)' }, { status: 500 });
  }

  try {
    // Create or update user
    await db.insert(users).values({ email, name, phone, type }).onConflictDoUpdate({
      target: users.email,
      set: { name, phone, type },
    });
    console.log('✅ User upserted into DB');
  } catch (err) {
    console.error('❌ Error upserting user into DB:', err);
    return NextResponse.json({ error: 'Database error (user)' }, { status: 500 });
  }

  let transporter;
  try {
    transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
    console.log('✅ Nodemailer transporter created');
  } catch (err) {
    console.error('❌ Error creating nodemailer transporter:', err);
    return NextResponse.json({ error: 'Email configuration error' }, { status: 500 });
  }

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Your TEDx AIET Verification Code',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <img src="https://postimg.cc/Cd3yvzy0" alt="TEDx AIET Logo" style="width:100%; max-width: 300px; margin: 20px auto; display: block;" />
          <p>Your verification code is:</p>
          <h1 style="color: #e62b1e; font-size: 32px; letter-spacing: 5px;">${otp}</h1>
          <p>This code will expire in 10 minutes.</p>
          <p>If you didn't request this code, please ignore this email.</p>
        </div>
      `,
    });
    console.log('✅ Email sent');
  } catch (err) {
    console.error('❌ Error sending email:', err);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }

  return NextResponse.json({ message: 'OTP sent successfully' });
}

export async function PUT(request: Request) {
  try {
    const { email, otp } = await request.json();

    if (!email || !otp) {
      return NextResponse.json(
        { error: 'Email and OTP are required' },
        { status: 400 }
      );
    }

    // Find the most recent valid OTP
    const validOtp = await db.query.otps.findFirst({
      where: and(
        eq(otps.email, email),
        eq(otps.otp, otp),
        eq(otps.isUsed, false),
        gt(otps.expiresAt, new Date())
      ),
    });

    if (!validOtp) {
      return NextResponse.json(
        { error: 'Invalid or expired OTP' },
        { status: 400 }
      );
    }

    // Mark OTP as used
    await db.update(otps)
      .set({ isUsed: true })
      .where(eq(otps.id, validOtp.id));

    // Update user verification status
    await db.update(users)
      .set({ isVerified: true })
      .where(eq(users.email, email));

    return NextResponse.json({ message: 'OTP verified successfully' });
  } catch (error) {
    console.error('Error verifying OTP:', error);
    return NextResponse.json(
      { error: 'Failed to verify OTP' },
      { status: 500 }
    );
  }
} 