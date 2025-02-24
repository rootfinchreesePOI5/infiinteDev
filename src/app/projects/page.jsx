'use client'

import { filterBytype, MyProjects } from '@/assets/assets';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Projects = () => {
  const [type, setType] = useState('All');
  const [filtered,setFiltered] = useState([]);

  const applyfilter = () =>{
    if(type === 'All'){
        setFiltered(MyProjects)
    }else{    
        setFiltered(MyProjects.filter(item => item.category[0] === type || item.category[1] === type))
    }
  }

  useEffect(() =>{
    applyfilter();
    console.log(filtered)
  },[type , MyProjects])
  return (
    <div className='flex flex-col gap-8 py-[24%] lg:py-[8%] px-[5%]'>
        <h1 className='firacode text-2xl md:text-4xl text-foreground'>Projects</h1>
      <div className='flex items-center gap-10'>
      {
        filterBytype.map((item , index) =>{
          return <button style={type === item ?{border:'1px solid'}:{}} className='border-2 w-full text-xs md:w-[10%] rounded-lg h-10 hover:bg-foreground hover:text-background bg-background text-foreground transition-all duration-700' onClick={() =>setType(item)} key={index}>{item}</button>
        })
      }
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-8'>
        {filtered.map((item ,index) => (
          <Link key={index} href={`/projects/${item.name}`}><Image className='rounded-xl border-mine border-2 cursor-pointer transition-all duration-700'  src={item.mainImg} alt='project-image'/></Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
