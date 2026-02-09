import Image from "next/image";


import About from "../components/about/about"
import Landing from "../components/Landing/Landing"

import Project from "../components/Projects/Project"
import Contact from "../components/contact/Contact"

export default function Home() {
  return (
    <>
      
      
      <Landing/>
        <About />
        <Project />
        <Contact/>
   
      
    </>
  );
}
