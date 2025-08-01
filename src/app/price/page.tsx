"use client";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import * as animationData from "@/components/lotties/SuccessTick.json";
import { Check } from "lucide-react";
import { useRouter } from "next/navigation";
export default function PricePage() {

  const [userType, setUserType] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const router = useRouter();

  useEffect(() => {
    const type = localStorage.getItem("userType");
    setUserType(type || "");

    const email = localStorage.getItem("userEmail");
    console.log(email);
    if(!email ){
      router.push("/tickets")
    }
  }, []);

  // Control Lottie animation when success state changes
  useEffect(() => {
    if (success && lottieRef.current) {
      lottieRef.current.play();
    }
  }, [success]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setError("Please select a file first");
      return;
    }

    // Validate file type
    if (!file.type.startsWith("image/")) {
      setError("Please select an image file");
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError("File size must be less than 5MB");
      return;
    }

    setUploading(true);
    setError("");
    setSuccess(false);

    try {
      // Upload to Vercel Blob
      const uploadRes = await fetch("/api/upload", {
        method: "POST",
        headers: {
          "x-vercel-filename": file.name,
          "content-type": file.type,
        },
        body: file,
      });

      if (!uploadRes.ok) {
        let errorMessage = `Upload failed with status: ${uploadRes.status}`;
        try {
          const errorData = await uploadRes.json();
          if (errorData.error) {
            errorMessage = errorData.error;
          }
        } catch (parseError) {
          console.error("Failed to parse error response:", parseError);
        }
        throw new Error(errorMessage);
      }

      const blob = await uploadRes.json();

      if (!blob.url) {
        throw new Error("No URL returned from upload");
      }

      const photoUrl = blob.url;

      // Save URL to DB
      const email = localStorage.getItem("userEmail");
      if (!email) {
        throw new Error("User email not found. Please log in again.");
      }

      const saveRes = await fetch("/api/transaction-photo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, photoUrl }),
      });

      if (!saveRes.ok) {
        const errorData = await saveRes.json().catch(() => ({}));
        throw new Error(errorData.error || "Failed to save photo URL");
      }

      setSuccess(true);
      setFile(null); // Clear the file input

      // Reset file input
      const fileInput = document.querySelector(
        'input[type="file"]'
      ) as HTMLInputElement;
      if (fileInput) fileInput.value = "";
    } catch (err) {
      console.error("Upload error:", err);
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Upload failed. Please try again.");
      }
    } finally {
      setUploading(false);
    }
  };



  return (
    <div className="min-h-screen flex  flex-wrap-reverse  justify-center items-center gap-24 w-full bg-black text-white p-4">
      <div  className="">
        {userType === "Premium" ? (
        
          <div className=" relative bg-ted-red text-white p-8 md:p-16 h-full w-full">
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-baseline-last mb-2">
              <h2 className="text-3xl md:text-7xl font-light mb-2 tracking-tighter">Premium</h2> 
              <h4 className="font-light text-2xl md:text-4xl ">₹400</h4>
              </div>
              <hr className="fill-white"/>
              <p className="text-sm py-2">For Attendees</p>
            </div>

            <div className="space-y-4 text-xl md:text-2xl  tracking-tight flex justify-center flex-col w-full">
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 flex-shrink-0 " />
                <span>Speaker Interaction</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 flex-shrink-0 " />
                <span>Speakers from across India</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 flex-shrink-0 " />
                <span>Networking opportunities</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 flex-shrink-0 " />
                <span>1 Grand meal</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 flex-shrink-0 " />
                <span>Exclusive TEDxAIET merchandise</span>
              </div>
            </div>

            <div className="pt-8">
              <p className=" absolute bottom-8 md:bottom-16 text-sm  font-bold ">For Students and Corporates</p>
            </div>
          </div>
        </div>
        ):(
          <div className=" relative bg-white text-black p-8 md:p-16 h-full w-full ">
            <div className="space-y-6">
              <div>
              <div className="flex justify-between items-baseline-last mb-2">
                <h2 className="text-3xl md:text-7xl font-light mb-2 tracking-tighter ">Standard</h2>
                <h3 className="font-light text-2xl md:text-4xl">₹300</h3>
                </div>
                <hr className="fill-black"/>
                <p className="text-sm opacity-90 py-2">For Attendees</p>
              </div>

              <div className="space-y-4 text-xl md:text-2xl tracking-tight flex justify-center  flex-col w-full">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 flex-shrink-0" />
                  <span>Speaker Interaction</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 flex-shrink-0" />
                  <span>Speakers from across India</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 flex-shrink-0" />
                  <span>Networking opportunities</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 flex-shrink-0" />
                  <span>1 Grand meal</span>
                </div>
              </div>

              <div className="pt-8 h-full flex  items-end">
                <p className=" absolute bottom-8 md:bottom-16 text-sm  font-bold ">For Students only</p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="w-full max-w-md space-y-8 text-center">
        <h1 className="text-4xl font-bold text-red-500 pt-[70px]">
          {userType === "Premium" ? "Premium Ticket" : "Standard Ticket"}
        </h1>
        <div className="space-y-4 flex justify-center items-center flex-col w-full">
          <p
            className={`${success ? "hidden" : "block"} text-lg text-gray-300`}
          >
            Please scan the QR code below to complete your payment
          </p>
          <div className={` ${success ? "block" : "hidden"} flex justify-center contain-content`}>
            <Lottie
              lottieRef={lottieRef}
              animationData={animationData}
              loop={false}
              autoplay={false}
              style={{ height: 100, width: 100 }}
            />
          </div>
          <h1 className={`${success ? "block" : "hidden"} font-bold text-2xl`}>
            After verification, your ticket will be sent to your
            email.
          </h1>
          <div
            className={`bg-white   w-[300px] flex justify-center ${success ? "hidden" : "block"
              }`}
          >
            {userType === "Premium" ? (
              <Image
                src={"/400r.svg"}
                alt="Payment QR Code"
                width={300}
                height={300}
                className="w-[300px] h-[300px]"
              />
            ) : (
              <Image
                src={"/300r.png"}
                alt="Payment QR Code"
                width={300}
                height={300}
                className="w-[300px] h-[300px]"
              />
            )}
          </div>
          {/* Upload Button and Input */}
          <div className="flex flex-col items-center gap-4 mt-4 w-full">
            <h1>Upload the Transaction ScreenShot</h1>
            <Input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full max-w-lg bg-black font-semibold"
              placeholder="Choose you file "
            />
            <Button
              onClick={handleUpload}
              disabled={!file || uploading}
              className="w-full max-w-lg py-6 bg-red-500  text-white"
            >
              {uploading ? "Uploading..." : "Upload the transaction photo"}
            </Button>
            {success && (
              <p className="text-green-400 text-lg">
                Photo uploaded successfully!
              </p>
            )}
            {error && <p className="text-red-400 text-sm">{error}</p>}
          </div>

          <div className="space-y-2">
            <p className="text-sm text-gray-500">
              Have questions about payment? Contact us here: +91 63634 52392
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
