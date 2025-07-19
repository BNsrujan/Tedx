import {NextResponse} from "next/server";
import Razorpay from "razorpay"
import {v4 as uuid} from "uuid"

const instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret:process.env.RAZORPAY_SECRET_KEY,
})

export async function GET(request:Request) {
        const { searchParams } = new URL(request.url);
        const amount = Number(searchParams.get("amount"));

        const totalAmount = amount * 100;

        const options = {
            amount: totalAmount.toString(),
            currency:"INR",
            receipt:uuid(),
        }

        const order = await  instance.orders.create(options);
        return NextResponse.json({message:"success",order})
} 