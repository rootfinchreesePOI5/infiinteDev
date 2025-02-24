import React from "react";
import Link from "next/link";
import Image from "next/image";
import { tools } from "@/assets/assets";
import { cert } from "@/assets/images";

function Hero() {
  return <div className="flex flex-col items-center gap-10 md:gap-4 lg:gap-8 pt-[20%] md:pt-[5%]">
    <h1 className="text-4xl md:text-4xl lg:text-6xl btn-shine text-center font-extrabold text-gradient">BUILD NEXTGEN <br className="flex md:hidden" /> WEBSITES WITH ME</h1>
    <div className="border-style2 p-6">
    <Link href={'/'} className='flex items-center justify-center text-foreground firacode border-[1px] p-2 px-6 hover:scale-105  transition-all duration-700'>visit my portfolio</Link>
    </div>
    <div className="flex gap-4 md:gap-8 lg:gap-16 p-6 border-style  lg:w-[50%] justify-center items-center">
    <Link href={'/components'} className='flex items-center justify-center  firacode bg-foreground text-background p-2 px-6 '>my components</Link>
    <Link href={'/courses'} className='flex items-center justify-center  firacode border-[1px] text-foreground p-2 px-6 '>my courses</Link>
    </div>
    <div className="bg-card border-[1px] p-8 rounded-md flex flex-col md:flex-row gap-6 items-center justify-between w-[80%]">
      <div className="text-center lg:w-[50%] flex flex-col gap-5">
        <h1 className="text-foreground">Get The Course Which Helps You Improve Your Development Skills and Take The Daily Quizez that Come After Every Lesson</h1>
        <button className="bg-foreground p-2 text-background rounded-full text-xs px-8">Explore the quizzes</button>
      </div>
      <Image style={{boxShadow: '8px 8px 0 cyan'}} className="lg:w-[30%]   rounded-xl" src={cert} alt="courses"/>
      <div>
        
      </div>
    </div>
    </div>;
}

export default Hero;
