'use client'
import { github, logo, menuB, menuW, xB, xW } from "@/assets/images";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import ModeToggle from "./ModeToggle";
import { useTheme } from "next-themes";

function Navbar({menu, setMenu}) {
    const {theme} = useTheme()
    const openMenu = () =>{
        menu === false? setMenu(true): setMenu(false)
    }
  return <div style={{backdropFilter:"blur(10px)"}} className="flex fixed w-full items-center justify-between p-4 bg-navcolor border-b-[0.5px] z-[5]">
    <Link href={'/'}  className="flex items-center gap-4">
        <Image className="w-8 h-8 rounded-full" src={logo} alt="logo"/>
        <h5 className="text-foreground">Infinite<span className="text-primary">Dev</span></h5>
    </Link>

    <div className="flex md:hidden">
        <Image onClick={openMenu} className={theme ==='dark' ? 'flex' : 'hidden'} src={menu === false ? menuB : xB} alt="menu"/>
        <Image onClick={openMenu} className={theme ==='dark' ? 'hidden' : 'flex'} src={menu === false ? menuW : xW} alt="menu"/>
    </div>
    <div className="hidden lg:flex md:gap-6 lg:gap-9 text-foreground">
        <Link className="hover:text-primary transition-all duration-500 text-foreground" href='/projects'>Projects</Link>
        <Link className="hover:text-primary transition-all duration-500 text-foreground" href='/courses'>Courses</Link>
        <Link className="hover:text-primary transition-all duration-500 text-foreground" href='/articles'>Articles</Link>
        <Link className="hover:text-primary transition-all duration-500 text-foreground" href='/components'>Components</Link>
        <Link className="hover:text-primary transition-all duration-500 text-foreground" href='/contact'>Contact</Link>
    </div>

    

    <div className={`flex w-full h-screen bg-background absolute top-[101%] transition-all duration-700 ${menu === false ? '-left-full' : 'left-0'} p-5 flex-col gap-5 md:hidden`}>
    <Link className="hover:text-primary transition-all duration-500 text-foreground" href='/projects' onClick={openMenu}>Projects</Link>
        <Link className="hover:text-primary transition-all duration-500 text-foreground" href='/courses' onClick={openMenu}>Courses</Link>
        <Link className="hover:text-primary transition-all duration-500 text-foreground" href='/articles onClick={openMenu}'>Articles</Link>
        <Link className="hover:text-primary transition-all duration-500 text-foreground" href='/components' onClick={openMenu}>Components</Link>
        <Link className="hover:text-primary transition-all duration-500 text-foreground" href='/contact' onClick={openMenu}>Contact</Link>
        <div className="flex flex-col gap-4">
        <Link href={''}><Image className="bg-black w-[30px] h-[30px] p-1 rounded-sm cursor-pointer hover:bg-primary transition-all duration-700" src={github} alt="github"/></Link>
        <ModeToggle />
        <Link className="p-2 px-[2rem] bg-primary rounded-sm hover:bg-foreground hover:text-background transition-all duration-700 flex items-center justify-center" href=''>Subscribe</Link>
    </div>
    </div>

    <div className=" hidden md:flex items-center gap-4">
        <Link href={''}><Image className="bg-black w-[30px] h-[30px] p-1 rounded-sm cursor-pointer hover:bg-primary transition-all duration-700" src={github} alt="github"/></Link>
        <ModeToggle/>
        <Link className="p-2 px-[2rem] bg-primary rounded-sm hover:bg-textcolor hover:text-background transition-all duration-700" href=''>Subscribe</Link>
    </div>
    </div>;
}

export default Navbar;
