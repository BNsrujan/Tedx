"use client"
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function PricePage() {
  const [userType, setUserType] = useState<string>('')

  useEffect(() => {
    const type = localStorage.getItem('userType')
    setUserType(type || '')
  }, [])

  return (
    <div className='min-h-screen flex flex-col justify-center items-center w-full bg-black text-white p-4'>
      <div className='w-full max-w-md space-y-8 text-center'>
        <h1 className='text-4xl font-bold text-red-500'>
          {userType === 'corporate' ? 'Corporate Ticket' : 'Student Ticket'}
        </h1>
        
        <div className='space-y-4'>
          <p className='text-lg text-gray-300'>
            Please scan the QR code below to complete your payment
          </p>
          
          <div className='bg-white p-4 inline-block'>
            {userType === 'corporate' ? 
           <Image
           src={"/400r.svg"}
           alt="Payment QR Code"
           width={300}
           height={300}
           className='w-[300px] h-[300px]'
         /> :  
         <Image
              src={"/300r.png"}
              alt="Payment QR Code"
              width={300}
              height={300}
              className='w-[300px] h-[300px]'
            />
          }
            
          </div>

          <div className='space-y-2'>
            <p className='text-gray-400'>
              {userType === 'corporate' 
                ? 'Corporate Ticket Price: ₹400'
                : 'Student Ticket Price: ₹300'
              }
            </p>
            <p className='text-sm text-gray-500'>
              After payment, you will receive a confirmation email
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 