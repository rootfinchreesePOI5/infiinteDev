import React, { useState } from 'react'
import SideBar from './SideBar'
import ComponentsContainer from './ComponentsContainer'

function Components() {
  const [selected , setSelected] = useState('Toggle')
  return (
    <div className='flex flex-col gap-6  items-center p-6'>
      <h1 className="btn-shine text-2xl md:text-3xl font-extrabold text-center text-gradient">CREATE QUICK AND <br className='flex md:hidden' /> UNDERSTANDBLE COMPONENTS</h1>
      <p className='text-center text-xs text-zinc-600 font-extralight w-[80%]'><span className='text-primary text-sm'>Infinite dev</span> provided al ready made components together with their code which is easily understandable and instructions on how to use the components</p>
      <div className='flex flex-col md:grid-auto w-full p-4 bg-card border rounded-sm'>
        <SideBar selected={selected} setSelected={setSelected} />
        <ComponentsContainer  selected={selected} setSelected={setSelected} />
      </div>
      <div>

      </div>
    </div>
  )
}

export default Components
