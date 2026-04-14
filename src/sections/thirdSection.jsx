import reactIcon from "../assets/tech/mongodb-1.jpg"
import nodeIcon from "../assets/tech/node.jpg"
import expressIcon from "../assets/tech/express.jpg"
import mongoDb from "../assets/tech/mongodb.jpg"
import tailwindIcon from "../assets/tech/tailwind.jpg"
import figma from "../assets/tech/figma.jpg"
import jsIcon from "../assets/tech/js.jpg"
import tsIcon from "../assets/tech/ts.jpg"

const technologies = [
  { name: "JavaScript", icon: jsIcon },
  { name: "TypeScript", icon: tsIcon },
  { name: "React.js", icon: reactIcon },
  { name: "Node.js", icon: nodeIcon },
  { name: "Express", icon: expressIcon },
  { name: "MongoDB", icon: mongoDb },
  { name: "Tailwind", icon: tailwindIcon },
  { name: "Figma", icon: figma },
]

export default function ThirdSection() {
  return (
    <div className="w-full h-fit bg-white sm:py-20 pb-8">
      <div className="container flex flex-col mx-auto items-center justify-between p-8 sm:p-0 space-y-10">
        <div className="flex gap-10 items-center justify-center sm:px-20 flex-wrap">
          {technologies.map((tech) => (
            <div key={tech.name} className="flex flex-col items-center gap-2  sm:w-24">
              <div className="w-20 h-20 flex items-center justify-center">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-20 h-20 object-contain rounded-lg"
                />
              </div>
              <p className="font-medium text-center">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}