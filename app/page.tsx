import Image from "next/image";


import About from "../components/about/about"
import Landing from "../components/Landing/Landing"

import Project from "../components/Projects/Project"

export default function Home() {
  return (
    <>
      
      <div className="scroll-cont">
      <Landing/>
        <About />
        <Project/>
       
        
    </div>
      
    </>
  );
}
