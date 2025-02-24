import { curious } from "@/assets/images";
import Image from "next/image";
import Link from "next/link";

export default function NotFound(){
    return(
        <div className="text-foreground w-full h-screen  flex flex-col gap-24 items-center justify-center">
            <div className="flex items-center gap-14 p-6">
            <Image className="w-24 h-24" src={curious} alt="notdound"/>
            <div className="flex flex-col gap-2 items-center text-center border-l-2 p-6">
                <h1 className="text-7xl text-gradient">404</h1>
                <p className="firacode text-xl">You are not supposed to be here</p>
            </div>
            </div>
            <Link href='/' className="md:w-[20%] px-14 border-2 flex items-center justify-center h-[5vh] hover:bg-foreground hover:text-background transition-all duration-700">Go Back Home</Link>
        </div>
    )
}