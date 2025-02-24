import { components } from '@/assets/assets'
import React from 'react'

function SideBar({ selected, setSelected }) {
  return (
    <div className='flex flex-col  gap-6 md:border-r border-b md:border-b-0 p-3'>
      <p className='btn-shine firacode text-xl underline'>All Components</p>
      <div className='flex md:flex-col w-full overflow-x-scroll gap-3 p-2 md:p-0  rounded-sm'>
        {
          components.map((item, index) => {
            return <p onClick={() => setSelected(item)} className={`cursor-pointer active:bg-primary bg-gray-200 p-1 px-3 rounded-full md:hover:translate-x-2 transition-all duration-700 text-black ${selected === item ? "text-primary" : ""}`} key={index}>{item}</p>
          })
        }
      </div>
    </div>
  )
}

export default SideBar
