import { Download, Mail } from "lucide-react"
import image from "../assets/me.png"

export default function FirstSection() {
  return (
    <div className="w-full h-fit bg-white py-12 sm:py-0 px-8 sm:px-0">
      <div className="container flex flex-col sm:flex-row mx-auto items-center justify-between sm:gap-32 gap-10">

        <div className="w-full sm:w-1/2 space-y-5 sm:space-y-7">
        <div className="flex items-center gap-1">
            <div className="w-5 h-5 rounded-full bg-purple-200 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-purple-500"></div>
            </div>
            <p className="font-semibold">Full-Stack MERN Developer</p>
        </div>  
        <h1 className="sm:text-5xl text-4xl font-bold ">👋Hi, I'm Kristijan Vasikj</h1>
        <p className="font-medium text-base">I’m Kristijan Vasic, a full-stack developer specializing in the MERN stack. I build modern, scalable web applications using React on the frontend and Node.js, Express, and MongoDB on the backend. My focus is on creating clean, responsive interfaces combined with efficient, well-structured backend systems that deliver a smooth user experience.
        </p>

        <div className="flex items-center gap-2">
            <a href="/KristijanVasikj-2026CV.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="px-4 py-2 text-sm font-medium rounded-lg bg-black text-white border flex items-center gap-2"><Download size={16}/>My CV</button>  
            </a>
            <a href="mailto:vasickiko@gmail.com" className="px-4 py-2 text-sm font-medium rounded-lg bg-black/5 text-black border flex items-center gap-2">
                <Mail size={16}/>Contact me
            </a> 
        </div>

        <p className="text-sm text-black/50">Note: I am currently working on my portfolio and will be updating it soon with my latest projects.</p>
      </div>


      <div className="w-full flex items-center justify-center sm:w-1/2">
        <img src={image} alt=""/>
      </div>
      </div>
    </div>
  )
}