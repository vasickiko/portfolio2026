import FirstSection from "./sections/firstSection"
import SecondSection from "./sections/secondSextion"
import ThirdSection from "./sections/thirdSection"
import FourthSection from "./sections/fourthSection"
import Footer from "./sections/Footer"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start mx-auto h-screen bg-red-500">
    <FirstSection />
    <ThirdSection />
    <SecondSection />
    <FourthSection/>
    <Footer/>
    </div>
  )
}