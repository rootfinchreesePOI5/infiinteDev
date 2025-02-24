'use client'

import Components from "@/components/Components";
import Courses from "@/components/Courses";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { Toaster } from "sonner";

export default function Home() {
  return (
    <div className="flex flex-col px-[5%] py-[5%] gap-[5rem] lg:gap-[8rem] text-foreground bg-background">
      <Toaster/>
      <Hero/>
      <Projects/>
      <Courses/>
      <Components/>
    </div>
  );
}
