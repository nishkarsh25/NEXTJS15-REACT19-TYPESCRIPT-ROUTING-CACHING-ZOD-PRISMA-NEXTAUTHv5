import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="absolute z-10 w-full text-3xl text-white p-[20px]">
      <nav className="container flex items-center justify-between mx-auto h-12">
        <Link href="/">
          <h1 className="font-bold">Home</h1>
        </Link>
        <div className="flex gap-10">
          <Link href="/performance">
            <h1>Performance</h1>
          </Link>
          <Link href="/reliability">
            <h1>Reliability</h1>
          </Link>
        </div>
      </nav>
    </div>
  );
};


