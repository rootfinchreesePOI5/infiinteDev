import React, { useEffect, useState } from 'react'
import { MyComponents } from '@/assets/assets';
import Image from 'next/image';

function ComponentsContainer({ selected, setSelected }) {
    const [change, setChange] = useState('Preview');
    const [previewComponent, setPreview] = useState([])
    const [page, setpage] = useState(0)
    const seeCode = () => {
        change === 'Preview' ? setChange('Code') : setChange("Preview")
        page === 0 ? setpage(1) : setpage(0)
    }

    const applyFilter = () => {
        setPreview(MyComponents.filter(item => item.name === selected))
    }
    useEffect(() => {
        applyFilter();
        console.log(selected)
    }, [selected])
    return (
        <div className='p-6 w-full flex flex-col gap-6 h-[65vh] md:h-[100vh] overflow-y-scroll'>
            <div className='flex items-center gap-3'>
                <button onClick={seeCode} className={`py-1 px-4 transition-all duration-700 border rounded-full ${change === 'Preview' ? "bg-primary" : ""}`}>Preview</button>
                <button onClick={seeCode} className={`py-1 px-4 transition-all duration-700 border rounded-full ${change === 'Code' ? "bg-primary" : ""}`}>Code</button>
            </div>
            <div className='w-ful h-full flex justify-center items-center p-6 bg-background border rounded-lg'>
                {
                    page === 0 ? <div>
                        {
                            previewComponent.map((item, index) => {
                                return <div className='w-full flex justify-center items-center h-full' key={index}>
                                    {item.component}
                                </div>
                            })
                        }
                    </div> : <div>
                        {
                            previewComponent.map((item, index) => {
                                return <div className='w-full flex justify-center items-center h-full' key={index}>
                                    <Image className='w-full' src={item.img} alt="" />
                                </div>
                            })
                        }
                    </div>
                }
            </div>
        </div>
    )
}

export default ComponentsContainer
