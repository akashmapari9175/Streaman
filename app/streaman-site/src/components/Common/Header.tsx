"use client";

import Image from "next/image";
import Link from "next/link";

import { FaGithub } from "react-icons/fa";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white ">
      {/*Logo*/}
      <div className="flex items-center space-x-2">
        <Image
          src="/Bruno.png"
          alt="Bruno Logo"
          width={100}
          height={100}
          className="rounded-full"
        />
        <span className="text-lg font-semibold">Streaman</span>
      </div>

      {/* Navigation */}
      <nav className="flex ml-auto px-4 space-x-6">
        <Link href="/manifesto" className="hover:text-orange-600 ">
          Manifesto
        </Link>
        <Link href="/pricing" className="hover:text-orange-600">
          Pricing
        </Link>
        <Link href="/docs" className="hover:text-orange-600">
          Docs
        </Link>
        <Link href="/changelog" className="hover:text-orange-600">
          Changelog
        </Link>
        <Link href="/roadmap" className="hover:text-orange-600">
          Roadmap
        </Link>
        <Link href="/support" className="hover:text-orange-600">
          Support
        </Link>
      </nav>

      {/*GitHub & Download Buttons */}
      <div className="flex space-x-4">
        <a
          href="https://github.com/usebruno/bruno"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-gray-900 text-white py-2 px-6 rounded-3xl hover:bg-gray-700 transition duration-300"
        >
          <FaGithub className="text-sm mr-2" />
          <span className="text-sm">Star</span>
        </a>
        <a
          href="https://www.usebruno.com/download"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#F4AA41] text-white font-semibold py-2 px-6 rounded-3xl border-4 border-[#fceed8] cursor-pointer"
        >
          Download
        </a>
      </div>
    </header>
  );
}
