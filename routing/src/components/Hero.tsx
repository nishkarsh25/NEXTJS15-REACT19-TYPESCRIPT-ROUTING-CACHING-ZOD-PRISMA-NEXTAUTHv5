import Image from "next/image";
import React from "react";
import GymMan from "public/gyman.jpg";

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 -z-10">
        <Image
          src={GymMan}
          fill
          alt="NextImage"
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900"/>
      </div>
      <div className="flex items-center justify-center pt-[500px]">
        <h1 className="font-bold text-6xl text-white ">Professional Gym trainer</h1>
      </div>
    </div>
  );
};


