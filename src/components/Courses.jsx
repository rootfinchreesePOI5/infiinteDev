import { courses } from "@/assets/assets"
import Image from "next/image"

function Courses() {

    return (
        <div className='flex flex-col gap-8'>
            <h1 className='firacode text-3xl underline text-foreground'>Courses</h1>
            <div className="flex flex-col items-center gap-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-2 md:p-8">
                {
                    courses.map((item , index) =>{
                        return <div key={index} className="flex flex-col gap-4 cursor-pointer hover:scale-105 transition-all duration-700">
                            <Image className="max-h-[80%] border-2 rounded-xl" src={item.img} alt="couses" />
                            <h5>{item.name}</h5>
                        </div>
                    })
                }
            </div>
            <button className=" w-[40%] h-[5vh] border-2 rounded-lg hover:bg-foreground hover:text-background transition-all duration-700">Explore more</button>
            </div>
        </div>
    )
}

export default Courses
