import Image from 'next/image'


export default function About() {
  return (
   <main className="min-h-screen bg-white">
   {/* Mission Section */}
   <div className="max-w-5xl mx-auto px-8 py-12 pt-24">
      <p className='text-lg leading-relaxed text-[#1E2A5E] mb-4'>
        Remnant Christian Network is an interdenominational and non-denominational 
        international ministry with the mandate of restoring the apostolic order 
        and Christianity as seen in the days of the first generation of apostles 
        of Jesus Christ.
      </p>

      <p className='text-lg leading-relaxed text-[#1E2A5E] mb-4'>
        Our mission is to herald the coming of the Lord Jesus Christ in this end 
        of the age by calling the body of Christ back to the foundations of prayer, 
        the ministry of the Word, and authentic Christian fellowship.
      </p>

      <p className='text-lg leading-relaxed text-[#1E2A5E] mb-4'>
        We are dedicated to the ministries of prayer, the teaching of God’s Word, 
        and expressing the love of Jesus Christ in action, restoring the Church’s 
        focus on prayer as declared in Matthew 18:18–20.
      </p>
   </div>

   {/* Pastor Section */}
   <div className="flex flex-1 max-w-5xl mx-auto px-8 py-12 items-center gap-8 mb-4">
    {/* Left Image */}
    <div className="">
      <Image src="/Apostle-about.png" alt="Apostle Arome Osayi" width={300} height={350} ></Image>
    </div>
    {/* Right - bio */} 
    <div className='text-lg'>
      <h2 className='text-2xl font-bold text-[#1E2A5E]'>Apostle Arome Osayi</h2>
      <p className='text-lg text-[#DF6427]'>SetMan RCN Global</p>
      <p className="text-base text-[#1E2A5E] leading-relaxed">
  Apostle Arome Osayi is the founder and SetMan of Remnant Christian Network. 
  His ministry is devoted to prayer, the Word, and restoring apostolic Christianity across the nations.
  </p>
    </div>
   </div>
   </main>
  );
}