import { Check } from "lucide-react"

export default function PriceComponent() {
  return (
    <div className="bg-black md:p-8 mx-4 md:mx-0 my-4 pb-5">
      <div className=" md:max-w-7xl mx-auto ">
        {/* Limited Seats Notice */}
        <div className="mb-6">
          <p className="text-white text-sm tracking-tighter">• Limited Seats Only</p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-5 w-full ">
          {/* Standard Card */}
          
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

          {/* Premium Card */}
          
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
        </div>
      </div>
    </div>
  )
}
