"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { useEffect, useRef } from "react";

const HeroSection = () => {
  const imageRef = useRef();

  useEffect(()=> {
    const imageElement = imageRef.current; 

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if(scrollPosition > scrollThreshold){
        imageElement.classList.add('scrolled');
      }
      else{
        imageElement.classList.remove('scrolled');
      }

    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },[]);
 



  return (
    <div className="pb-15 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-8xl lg:text-[85px] pb-6 pt-5 bg-gradient-to-br from-green-400 to-blue-500 font-extrabold tracking-tighter pr-2 text-transparent bg-clip-text">
          Manage Your Finances <br />
          With Intelligence
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          An AI-powered finance management app that helps you to track your
          expenses, income and savings.
        </p>
        <div className="pb-10">
          <Link href="/dashboard">
            <Button size="lg" className="px-8  cursor-pointer hover:scale-103 transform transition duration-300">
              Get Started
            </Button>
          </Link>
        </div>
        <div className="hero-image-wrapper">
        <div className="hero-image" ref={imageRef}>
          <Image
            src="/banner.webp"
            width={1100}
            height={720}
            alt="Dashboard preview"
            className="rounded-lg shadow-2xl border mx-auto"
            priority={true}
          />
        </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
