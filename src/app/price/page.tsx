"use client"
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function PricePage() {
  const [userType, setUserType] = useState<string>('');
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const type = localStorage.getItem('userType');
    setUserType(type || '');
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return;
    setUploading(true);
    setError('');
    setSuccess(false);
    try {
      // Upload to Vercel Blob
      const uploadRes = await fetch('/api/upload', {
        method: 'POST',
        headers: {
          'x-vercel-filename': file.name,
          'content-type': file.type,
        },
        body: file,
      });
      if (!uploadRes.ok) throw new Error('Failed to upload image');
      const blob = await uploadRes.json();
      const photoUrl = blob.url;
      // Save URL to DB
      const email = localStorage.getItem('userEmail');
      if (!email) throw new Error('User email not found');
      const saveRes = await fetch('/api/transaction-photo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, photoUrl }),
      });
      if (!saveRes.ok) throw new Error('Failed to save photo URL');
      setSuccess(true);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Upload failed');
      }
     } finally {
      setUploading(false);
    }
  };

  return (
    <div className='min-h-screen flex flex-col justify-center items-center w-full bg-black text-white p-4'>
      <div className='w-full max-w-md space-y-8 text-center'>
        <h1 className='text-4xl font-bold text-red-500 pt-[70px]'>
          {userType === 'corporate' ? 'Corporate Ticket' : 'Student Ticket'}
        </h1>
        <div className='space-y-4'>
          <p className='text-lg text-gray-300'>
            Please scan the QR code below to complete your payment
          </p>
          <div className='bg-white p-4 inline-block'>
            {userType === 'corporate' ? (
              <Image
                src={'/400r.svg'}
                alt='Payment QR Code'
                width={300}
                height={300}
                className='w-[300px] h-[300px]'
              />
            ) : (
              <Image
                src={'/300r.png'}
                alt='Payment QR Code'
                width={300}
                height={300}
                className='w-[300px] h-[300px]'
              />
            )}
          </div>
          {/* Upload Button and Input */}
          <div className='flex flex-col items-center gap-2 mt-4'>
            <h1>Upload the Transaction ScreenShot</h1>
            <Input type='file' accept='image/*' onChange={handleFileChange} className='w-full max-w-xs bg-black font-semibold' />
            <Button onClick={handleUpload} disabled={!file || uploading} className='w-full max-w-xs bg-red-500  text-white'>
              {uploading ? 'Uploading...' : 'Upload the transaction photo'}
            </Button>
            {success && <p className='text-green-400 text-sm'>Photo uploaded successfully!</p>}
            {error && <p className='text-red-400 text-sm'>{error}</p>}
          </div>
          <div className='space-y-2'>
            <p className='text-gray-400'>
              {userType === 'corporate'
                ? 'Corporate Ticket Price: ₹400'
                : 'Student Ticket Price: ₹300'}
            </p>
            <p className='text-sm text-gray-500'>
              Have questions about payment? Contact us here: +91 96220 30738
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 