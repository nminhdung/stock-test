import Image from "next/image";
import Link from "next/link";
import LineChart from "./components/LineChart";

export default function Home() {
  return (
    <main className="flex items-center justify-center h-[100vh] w-[100vw]">
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-2">
          <h1 className="text-5xl md:text-4xl lg:text-3xl">Welcome </h1>
          <img
            src="/victory.svg"
            alt="victory emoji"
            className="w-[80px] h-[80px] object-cover"
          />
        </div>
        <div className="flex gap-4">
          <Link
            href="/signin"
            className="flex p-4 border rounded-lg hover:bg-black hover:text-white transition-all duration-300"
          >
            Sign in
          </Link>
          <Link
            href="/signup"
            className="flex p-4 border rounded-lg hover:bg-black hover:text-white transition-all duration-300"
          >
            Sign up
          </Link>
          <Link
            href="/dashboard"
            className="flex p-4 border rounded-lg hover:bg-black hover:text-white transition-all duration-300"
          >
            Dashboard
          </Link>
        </div>
      </div>

     
    </main>
  );
}
