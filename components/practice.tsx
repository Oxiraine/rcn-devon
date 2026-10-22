import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="w-full px-4 py-4">
      <div className="px-4 py-6 flex items-center justify-between">
        <Link href="/home">
          <h1>Harbour Roast</h1>
        </Link>
        <div className="flex gap-6">
          <Link href="/home">Home</Link>
          <Link href="/home">About</Link>
          <Link href="/home" className=' bg-dark text-white rounded px-4 py-6'>Contact</Link>
        </div>
      </div>
    </nav>
  );
}
