"use client";

import { useState } from "react";
import {useRouter} from "next/navigation";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "../lib/utils";

// Add Razorpay type declaration if not present
declare global {
  interface Window {
    Razorpay: new (options: RazorpayOptions) => RazorpayInstance;
  }
}

interface RazorpayOptions {
  key: string;
  name: string;
  currency: string;
  order_id: string;
  modal: {
    ondismiss: () => void;
  };
  handler: (response: RazorpayResponse) => void;
}

interface RazorpayInstance {
  open: () => void;
  on: (event: string, handler: (response: unknown) => void) => void;
}

interface RazorpayResponse {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}

interface PaymentButtonProps {
  amount: number;
  email?: string;
}

const PaymentButton = ({amount, email}: PaymentButtonProps) => {
    const router = useRouter();
    const [isLoading,setIsLoading] = useState(false);


    const makePayment = async () =>{
        setIsLoading(true);

        const key = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "";
        const data = await fetch("/api/order/create?amount=" + amount);
        const { order } = await data?.json();
        const userEmail = email || "TEDx User";
        const option: RazorpayOptions = {
            key: key,
            name: userEmail,
            currency: order.currency,
            order_id: order.id,
            modal: {
                ondismiss: function(){
                    setIsLoading(false);
                }
            },
            handler: async function (response: RazorpayResponse) {
                const data = await fetch("/api/order/verify",{
                    method:"POST",
                    body:JSON.stringify({
                        razorpayPaymentId:response.razorpay_payment_id,
                        razorpayOrderId:response.razorpay_order_id,
                        razorpaySignature:response.razorpay_signature,
                        email: userEmail,
                    })
                })

                const res = await data.json();
                if(res?.error === false){
                    router.push("/success");
                }
            }
        }

        const PaymentObject = new window.Razorpay(option);
        PaymentObject.open();

        PaymentObject.on("payment.failed",function(){
            alert("Payment failed. Please try again.");
            setIsLoading(false);
        })

    }

    return (
        <div className="">
            <Button
            className={cn(buttonVariants({size:"lg"}))}
            disabled={isLoading}
            onClick={makePayment}
            >
                Book a ticket 
            </Button>
        </div>
    )
}

export default PaymentButton;