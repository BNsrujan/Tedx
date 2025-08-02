import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { db } from "@/lib/db";
import { otps, users } from "@/lib/schema";
import { eq, and, gt } from "drizzle-orm";

// Generate a 6-digit OTP
function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export async function POST(request: Request) {
  let email, name, phone, type, otp, expiresAt;
  try {
    ({ email, name, phone, type } = await request.json());
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    otp = generateOTP();
    expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes
  } catch (err) {
    console.error("❌ Error parsing request body:", err);
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }

  try {
    await db.insert(otps).values({
      email,
      otp,
      expiresAt,
      isUsed: false, // Ensure you include this if your schema requires it
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Database error (OTP)" },
      { status: 500 }
    );
  }

  try {
    await db
      .insert(users)
      .values({ email, name, phone, type })
      .onConflictDoUpdate({
        target: users.email,
        set: { name, phone, type },
      });
  } catch (err) {
    console.error("❌ Error upserting user into DB:", err);
    return NextResponse.json(
      { error: "Database error (user)" },
      { status: 500 }
    );
  }

  let transporter;
  try {
    transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  } catch (err) {
    console.error("❌ Error creating nodemailer transporter:", err);
    return NextResponse.json(
      { error: "Email configuration error" },
      { status: 500 }
    );
  }

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Your TEDx AIET Verification Code",
      html: `
       <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff;">
        <div style="text-align: center; padding: 15px; background-color: #000000;">
            <img src="${
              process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
            }/logo-white.svg" alt="TEDxAIET" style="max-width: 200px; height: auto;"/>
        </div>
        <div style="text-align: center; padding: 20px; border: 2px solid #e62b1e;  background-color: #f9f9f9;">
          <h2 style="color: #333; margin-bottom: 20px;">Your Verification Code</h2>
          <div style="background-color: #e62b1e; color: white; padding: 15px; border-radius: 8px; margin: 20px 0; display: inline-block;">
            <h1 style="margin: 0; font-size: 32px; letter-spacing: 5px; font-weight: bold;">${otp}</h1>
          </div>
          <p style="color: #666; margin: 15px 0;">This code will expire in 10 minutes.</p>
          <p style="color: #999; font-size: 14px;">If you didn't request this code, please ignore this email.</p>
        </div>
        <div style="text-align: center; margin-top: 20px; color: #999; font-size: 12px;">
          <p>© 2025 TEDx AIET. All rights reserved.</p>
        </div>
      </div>
      `,
    });
  } catch (err) {
    console.error("❌ Error sending email:", err);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }

  return NextResponse.json({ message: "OTP sent successfully" });
}

export async function PUT(request: Request) {
  try {
    const { email, otp } = await request.json();

    if (!email || !otp) {
      return NextResponse.json(
        { error: "Email and OTP are required" },
        { status: 400 }
      );
    }

    const [validOtp] = await db
      .select()
      .from(otps)
      .where(
        and(
          eq(otps.email, email),
          eq(otps.otp, otp),
          eq(otps.isUsed, false),
          gt(otps.expiresAt, new Date())
        )
      )
      .limit(1);

    if (!validOtp) {
      return NextResponse.json(
        { error: "Invalid or expired OTP" },
        { status: 400 }
      );
    }

    // Mark OTP as used
    await db.update(otps).set({ isUsed: true }).where(eq(otps.id, validOtp.id));

    // Update user verification status
    await db
      .update(users)
      .set({ isVerified: true })
      .where(eq(users.email, email));

    return NextResponse.json({ message: "OTP verified successfully" });
  } catch (error) {
    console.error("Error verifying OTP:", error);
    return NextResponse.json(
      { error: "Failed to verify OTP" },
      { status: 500 }
    );
  }
}
