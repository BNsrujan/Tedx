import crypto from "crypto";
import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { users } from "@/lib/schema";
import { eq } from "drizzle-orm";

export async function POST(req: Request) {
    const {
        razorpayOrderId,
        razorpaySignature,
        razorpayPaymentId,
        email,
    } = await req.json();
    const body = razorpayOrderId + "|" + razorpayPaymentId;

    if (!process.env.RAZORPAY_SECRET_KEY) {
        return NextResponse.json({ message: "Server misconfiguration: missing Razorpay secret key", error: true }, { status: 500 });
    }

    const exportedSignature = crypto
        .createHmac("sha256", process.env.RAZORPAY_SECRET_KEY)
        .update(body.toString())
        .digest("hex");

    const isAuthentic = exportedSignature === razorpaySignature;

    if (!isAuthentic) {
        return NextResponse.json({ message: "invalid payment signature", error: true }, { status: 400 });
    }

    // Update user payment status using Drizzle
    await db.update(users)
        .set({
            hasPaid: true,
            lastPaymentId: razorpayPaymentId,
            lastPaymentDate: new Date(),
        })
        .where(eq(users.email, email));

    return NextResponse.json({ message: "payment success", error: false }, { status: 200 });
} 