import Image from "next/image";


import About from "../components/about/about"
import Landing from "../components/Landing/Landing"


import Skill from "@/components/skills/Skill";
import Navbar from "@/components/navbar/Navbar";
export default function Home() {
  return (
    <>
      <Navbar />
      <div className="scroll-cont">
      <Landing/>
      <About />
        <Skill />
        
    </div>
      
    </>
  );
}
