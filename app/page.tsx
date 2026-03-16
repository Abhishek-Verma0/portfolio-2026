"use client";

import About from "../components/about/about";
import Landing from "../components/Landing/Landing";
import Project from "../components/Projects/Project";
import Contact from "../components/contact/Contact";
import Skill from "@/components/skills/Skill";
import Navbar from "@/components/navbar/Navbar";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "../components/Preloader/Preloader";


export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const scrollRef = useRef(null);

  useEffect(() => {
    let locomotiveScroll: InstanceType<Awaited<typeof import("locomotive-scroll")>["default"]>;

    const init = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      // Wait for preloader animation, then smooth scroll
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);

        
        locomotiveScroll = new LocomotiveScroll();
      }, 2000);
    };

    init();

    return () => {
      locomotiveScroll?.destroy();
    };
  }, []);


  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>

      {/* Show content only after loading */}
      {!isLoading && (
          <div ref={scrollRef} data-scroll-container>

        <>

          <Navbar />
          <Landing />
          <About />
          <Skill />
          <Project />
          <Contact />
        </>
  </div>
      )}
    </>
  );
}
