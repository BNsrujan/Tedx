"use client";
import PaymentButton from '@/components/PaymentButton'
import React, { useEffect, useState } from 'react'

function Page() {
  const [email, setEmail] = useState("");

  useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail");
    if (storedEmail) setEmail(storedEmail);
  }, []);

  if (!email) {
    return (
      <div className='h-screen bg-black flex justify-center items-center text-white text-xl'>
        Please register or log in to continue.
      </div>
    );
  }

  return (
    <div className='h-screen bg-black flex justify-center items-center'>
      <PaymentButton amount={400} email={email} />
    </div>
  );
}

export default Page;