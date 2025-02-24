'use client'
import {useEffect , useState} from "react";
import { useTheme } from "next-themes";
import {Moon , Sun} from 'lucide-react'
import { Button } from "./ui/button";
function ModeToggle() {

    const {theme , setTheme} = useTheme()
    const [mounted , setMounted] = useState(false)
    const changetheme = () =>{
        theme === 'dark' ? setTheme("light") : setTheme("dark")
    }

    useEffect(() =>{
        setMounted(true)
    })

    if(!mounted){
        <Button variant='secondary' size='icon' disabled={true} ></Button>
    }


  return <Button variant='secondary' size='icon' onClick={changetheme}>
    {theme === 'dark' ? <Sun className="hover:cursor-pointer hover:text-primary"/> : <Moon className="hover:cursor-pointer hover:text-primary"/>}
  </Button>;
}

export default ModeToggle;
