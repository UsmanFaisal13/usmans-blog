import Link from "next/link";
export default function AlertBanner() {

  return (
    <>
      <div className="flex items-center justify-between px-12 fixed top-0 left-0 z-50 w-full border-b bg-white/55 text-black backdrop-blur">
        <div className="lg:block md:block sm:block hidden py-2 text-center text-sm">
          🔥 Hot topic
        </div>
        <nav className="flex items-center space-x-4">
          <Link href={'/'}>Home</Link>
          <Link href={'/about'}>About</Link>
          <Link href={'/contact'}>Contact</Link>
        </nav>
      </div>
    </>
  );
};
