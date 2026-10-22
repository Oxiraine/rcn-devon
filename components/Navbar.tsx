import Link from "next/link";
import Image from "next/image";


export default function Navbar() {
  return (
    <nav className="w-full bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4">
        <Link href="/">
          <Image src="/logo-biggg.png" alt="RCN Devon Logo" width={120} height={60} />
        </Link>
        <div className="flex gap-16">
          <Link href="/about" className="text-[#1E2A5E]">
            About
          </Link>
          <Link href="/programmes" className="text-[#1E2A5E]">
            Programmes
          </Link>
          <Link href="/sermons" className="text-[#1E2A5E]">
            Sermons
          </Link>
          <Link href="/contact" className="text-[#1E2A5E]">
            Contact
          </Link>
          <Link
            href="/give"
            className="bg-[#DF6427] text-white px-4 py-2 rounded"
          >
            Give
          </Link>
        </div>
      </div>
    </nav>
  );
}
