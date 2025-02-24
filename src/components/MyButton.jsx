import { Link } from 'lucide-react'
import React from 'react'
import { toast } from 'sonner'

const MyButton = () => {

    const notify =  () =>{
        toast.success('It works 👌')
    }
  return (
    <div className="md:flex items-center gap-4 w-full">
        <button onClick={notify} className="p-2 px-[2rem] bg-primary rounded-sm active:scale-90 transition-all duration-700" href=''>Click Me 🥳</button>
    </div>
  )
}

export default MyButton
