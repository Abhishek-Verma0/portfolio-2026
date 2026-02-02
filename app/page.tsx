import Image from "next/image";


import About from "../components/about/about"
import Landing from "../components/Landing/Landing"



export default function Home() {
  return (
    <>
      
      <div className="scroll-cont">
      <Landing/>
      <About />
       
        
    </div>
      
    </>
  );
}
