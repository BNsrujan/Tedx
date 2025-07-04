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
  try {
    const { email, name, phone, type } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    const otp = generateOTP();
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes from now

    // Store OTP in database
    await db.insert(otps).values({
      email,
      otp,
      expiresAt,
    });

    // Create or update user
    await db.insert(users).values({
      email,
      name,
      phone,
      type,
    }).onConflictDoUpdate({
      target: users.email,
      set: {
        name,
        phone,
        type,
      },
    });

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Your TEDx AIET Verification Code',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <img src="https://ibb.co/j97NLmkY" alt="TEDx AIET Logo" style="width:100%; max-width: 300px; margin: 20px auto; display: block;" />
          <p>Your verification code is:</p>
          <h1 style="color: #e62b1e; font-size: 32px; letter-spacing: 5px;">${otp}</h1>
          <p>This code will expire in 10 minutes.</p>
          <p>If you didn't request this code, please ignore this email.</p>
        </div>
      `,
    });

      console.log('EMAIL_USER:', process.env.EMAIL_USER);
      console.log('EMAIL_PASSWORD:', process.env.EMAIL_PASSWORD ? '✔️ Set' : '❌ Not Set');
    return NextResponse.json({ message: 'OTP sent successfully' });
  } catch (error) {
    console.error('Error sending OTP:', error);
    return NextResponse.json(
      { error: 'Failed to send OTP' },
      { status: 500 }
    );
  }
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