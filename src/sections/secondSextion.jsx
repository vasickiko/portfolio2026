
import { Drone, ExternalLink, Mouse } from "lucide-react"
import image from "../assets/Frame 32.png"

export default function SecondSection() {
  return (
    <div className="w-full h-fit bg-[#F6F6FC] py-12 sm:py-20 px-8 sm:px-0">
      <div className="container flex flex-col sm:flex-row mx-auto items-center justify-between sm:gap-32 gap-10 ">

        {/* LEFT SIDE */}
        <div className="sm:w-1/3 w-full space-y-7">

          {/* LABEL */}
           <div className="flex w-fit items-center gap-2 p-1.5 bg-purple-200 text-white rounded-2xl">   
            <div className="flex items-center gap-2 bg-purple-500 p-2 px-2 sm:px-4 rounded-xl">
              <h1 className="text-lg font-medium">Featured Project</h1>
            </div>         
          </div>

          {/* TITLE */}  
            <div className="flex items-center gap-2">
              <Drone size={40}  />
              <h1 className="sm:text-5xl text-4xl font-bold">MouseLab</h1>
            </div>         
        

          {/* DESCRIPTION */}
          <p className="font-medium">
            MouseLab is a full-stack MERN application that helps users discover and compare gaming mice. 
            It provides detailed specifications, side-by-side comparisons, and personalized recommendations 
            based on user preferences and grip style.
          </p>

          {/* BUTTONS */}
          <div className="flex items-center gap-2">
            <a href="https://mouse-lab-frontend.vercel.app/">
              <button className="px-4 py-2 text-sm font-medium rounded-lg bg-black text-white flex items-center gap-2">
                <ExternalLink size={16}/> Live Demo
              </button>
            </a>
          </div>

          {/* NOTE */}
          <p className="text-sm text-black/50">
            The rest of my projects are currently being updated, improved, and prepared for hosting.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="sm:w-2/3 w-full ">
          <img src={image} alt="MouseLab preview"/>
        </div>

      </div>
    </div>
  )
}