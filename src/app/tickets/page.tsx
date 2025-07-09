"use client"
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function TicketsPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'corporate'
  });
  
  const [otp, setOtp] = useState('');
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleTypeChange = (value: string) => {
    setFormData({
      ...formData,
      type: value
    });
  };

  const sendOTP = async () => {
    try {
      setLoading(true);
      setError('');
      console.log("🔥 /api/send-otp called");
      const response = await fetch('/api/send-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      console.log("🔥 /api/send-otp sent");
      console.log(JSON.stringify(formData));
      let data;
      try {
        data = await response.json();
      } catch {
        throw new Error('Server error: Received invalid response. Please try again later.');
      }
      console.log(data)
      if (!response.ok) {
        throw new Error(data.error || 'Failed to send OTP');
      }
      setShowOtpInput(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send OTP');
    } finally {
      setLoading(false);
    }
  };

  const verifyOTP = async () => {
    try {
      setLoading(true);
      setError('');
      const response = await fetch('/api/send-otp', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: formData.email, otp }),
      });
      let data;
      try {
        data = await response.json();
      } catch {
        throw new Error('Server error: Received invalid response. Please try again later.');
      }
      if (!response.ok) {
        throw new Error(data.error || 'Failed to verify OTP');
      }
      localStorage.setItem('userType', formData.type);
      router.push('/price');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to verify OTP');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!showOtpInput) {
      await sendOTP();
    } else {
      await verifyOTP();
    }
  };

  return (
    <div className='min-h-screen flex flex-col justify-center items-center w-full bg-black text-white p-4'>
      <div className='w-full max-w-md space-y-6'>
        <h1 className='text-4xl font-bold text-red-500 text-center mb-8'>
          Ticket Registration
        </h1>
        
        <form onSubmit={handleSubmit} className='space-y-6'>
          {!showOtpInput ? (
            <>
              <div className='space-y-2'>
                <label htmlFor="name" className='block text-sm font-medium'>
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className='bg-black border-gray-700 text-white'
                />
              </div>

              <div className='space-y-2'>
                <label htmlFor="email" className='block text-sm font-medium'>
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className='bg-black border-gray-700 text-white'
                />
              </div>

              <div className='space-y-2'>
                <label htmlFor="phone" className='block text-sm font-medium'>
                  Phone Number
                </label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className='bg-black border-gray-700 text-white'
                />
              </div>

              <div className='space-y-2'>
                <label htmlFor="type" className='block text-sm font-medium'>
                  Type
                </label>
                <Select defaultValue="corporate" onValueChange={handleTypeChange}>
                  <SelectTrigger className='bg-black border-gray-700 text-white'>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="corporate">Corporate</SelectItem>
                    <SelectItem value="student">Student</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </>
          ) : (
            <div className='space-y-2'>
              <label htmlFor="otp" className='block text-sm font-medium'>
                Enter Verification Code
              </label>
              <Input
                id="otp"
                type="text"
                required
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter 6-digit code"
                maxLength={6}
                className='bg-black border-gray-700 text-white'
              />
            </div>
          )}

          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          <Button 
            type="submit"
            className='w-full bg-red-500 hover:bg-red-600 text-white py-3'
            disabled={loading}
          >
            {loading ? 'Processing...' : showOtpInput ? 'Verify & Continue' : 'Send Verification Code'}
          </Button>
        </form>
      </div>
    </div>
  )
}