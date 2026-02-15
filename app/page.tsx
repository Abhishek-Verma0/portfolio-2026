import Image from "next/image";


import About from "../components/about/about"
import Landing from "../components/Landing/Landing"

import Project from "../components/Projects/Project"
import Contact from "../components/contact/Contact"
import Skill from "@/components/skills/Skill";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <>
      
      <Navbar/>
      <Landing/>
      <About />
      <Skill/>
        <Project />
        <Contact/>
   
      
    </>
  );
}
