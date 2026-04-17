import { Download, Mail } from "lucide-react";

export default function FourthSection() {

    return(
        <div className="w-full h-fit bg-white py-12 sm:py-20 px-8 sm:px-0">
            <div className="container sm:max-w-3xl max-w-full shadow-md shadow-purple-300/30 mx-auto border border-black/5 rounded-xl sm:p-10 p-6 text-center flex flex-col gap-6 items-center justify-center">
           <div className="space-y-2">
             <h1 className="sm:text-2xl text-xl font-bold">More Projects Coming Soon</h1>
            <p className="font-medium">The rest of my projects are currently being updated and prepared for hosting.</p>
           </div>
           <div className="flex flex-row items-center gap-2">
            <a href="/KristijanVasikj-2026CV.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="px-4 py-2 text-sm font-medium rounded-lg bg-black text-white border flex items-center gap-2"><Download size={16}/>My CV</button>  
            </a>
            <a href="mailto:vasickiko@gmail.com" className="px-4 py-2 text-sm font-medium rounded-lg bg-black/5 text-black border flex items-center gap-2">
                <Mail size={16}/>Contact me
            </a> 
        </div>
            </div>
        </div>
    )
}