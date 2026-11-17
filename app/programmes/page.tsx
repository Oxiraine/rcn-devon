import Image from "next/image";

export default function Programmes() {
  return (
    <main className="bg-white min-h-screen">
      <div className="relative h-[600px]">
        <Image
          src="/content-image1.jpg"
          alt="Church member"
          fill
          className=" brightness-75 object-cover object-top"
        ></Image>
        <div className="absolute inset-0 bg-white/70 flex flex-col items-center text-center justify-center p-12">
          <h1 className="text-6xl font-bold text-[#1E2A5E] mb-4">Pray. Fellowship. Intercede.</h1>
<p className="text-xl text-[#1E2A5E] max-w-2xl">Our times of fellowship give us opportunity to pray, fellowship and intercede for our land and territory as we push for God's will to be done in our lives and land.</p>
        </div>
      </div>
      <div className="flex max-w-7xl mx-auto px-8 py-12 gap-8 flex-1">
          <div className="relative rounded-t-[50px] overflow-hidden h-[500px] flex-1">
            <img
              src="/prog1.png"
              alt="time of fellowship"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white/95 p-4">
          <p className="font-bold text-[#1E2A5E]">TIME OF FELLOWSHIP</p>
          <p className="font-bold text-[#1E2A5E]">Holds every forthnight</p>
          <p className="font-bold text-[#1E2A5E]">Online</p>
          </div>
        </div>
          <div className="relative rounded-t-[50px] overflow-hidden h-[500px]  flex-1">
            <img
              src="/prog2.png"
              alt="prayer meeting"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white/95 p-4">
          <p className="font-bold text-[#1E2A5E]">PRAYER MEETING</p>
          <p className="font-bold text-[#1E2A5E]">Holds every thursday</p>
          <p className="font-bold text-[#1E2A5E]">Offline</p>
          </div>
        </div>
          <div className="relative rounded-t-[50px] overflow-hidden h-[500px]  flex-1">
            <img
              src="/prog3.png"
              alt="AIZ"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white/95 p-4">
             <p className="font-bold text-[#1E2A5E]">APPEARANCES IN ZION</p>
          <p className="font-bold text-[#1E2A5E]">Holds every first week of the month</p>
          <p className="font-bold text-[#1E2A5E]">Online</p>
            </div>
          </div>
      </div>
    </main>
  );
}
