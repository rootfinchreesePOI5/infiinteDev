import { client5 } from '@/assets/images'
import Image from 'next/image'
import React from 'react'

function Card() {
    return (
        <div className='bg-white text-black py-10 px-12 md:py-20 md:px-24 insta w-[200%] rounded-3xl flex items-center justify-center'>
            <div className=' flex flex-col items-center justify-center gap-4 w-full'>
                <Image className='w-32 rounded-full' src={client5} />
                <div className='flex flex-col gap-1 items-center justify-center'>
                    <div className='bg-primary text-white text-xs md:w-[200%] flex items-center justify-center py-1 px-2 rounded-sm'>
                        <p>@INFINITE_DEV</p>
                    </div>
                    <h1 className='font-medium text-2xl'>InfinteDev</h1>
                    <p className='flex flex-col items-center justify-center  mt-4 text-sm'>
                        <span>Be Loyal,</span>
                        <span>Respectful,🙏</span>
                        <span>And A Gentleman...</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Card
