import Image from "next/image";

export default function Home() {
  return (
      <main className="min-h-screen bg-white">
        <div className="max-w-7xl min-h-screen items-stretch mx-auto px-8 py-20 flex items-center gap-12">
          {/*Left Column - images */}
          <div className="flex gap-4 flex-1">
            <div className="rounded-t-[50px] overflow-hidden h-[500px] w-60">
              <img src="/content-image1.jpg" alt="Church member" className="w-full h-full object-cover"/>
            </div>
            <div className="rounded-t-[50px] overflow-hidden h-[500px]  w-60">
              <img src="/content-image6.jpg" alt="Church member" className="w-full h-full object-cover"/>
            </div>
          </div>
          {/*Right Column - text */}
          <div className="flex-1 flex flex-col justify-start gap-8">
            <h1 className="text-6xl font-bold text-[#1E2A5E]">Striving for the Rebirth of Apostolic Christianity</h1>
            <p className='text-lg text-[#1E2A5E]'>Whether you’re searching for faith, returning to church, or looking for a Spirit-filled community; you are welcome here. Come and experience authentic, apostolic Christianity in the heart of Devon.</p>
            <p className="text-lg text-[#1E2A5E]">Join us as we pursue authentic, spirit-led christianity in Devon.</p>
            <p className="text-lg text-[#DF6427]">Sunday Service · 10:30am · Exeter</p>
            <button className="bg-[#DF6427] text-white px-8 py-3 rounded w-fit">Join Us</button>
          </div>


        </div>
      </main>
  );
}
