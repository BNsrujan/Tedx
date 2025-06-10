"use client"
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function page() {
    const router = useRouter();
  return (
    <div className='min-h-screen flex flex-col justify-center items-center w-full bg-black text-white p-4'>
      <div className='text-center space-y-6 max-w-2xl'>
        <h1 className='text-4xl md:text-6xl font-bold text-red-500 mb-4'>
          Coming Soon
        </h1>
        <p className='text-lg md:text-xl text-gray-300 mb-8'>
          We're working hard to bring you an amazing ticket purchasing experience. Stay tuned!
        </p>
        <Button 
          onClick={() => router.push("/home")}
          className='bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg transition-colors'
        >
          Go Back
        </Button>
      </div>
    </div>
  )
}