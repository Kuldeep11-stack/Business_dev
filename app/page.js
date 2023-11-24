"use client";
import Navbar from "@/src/components/Navbar/Navbar";
import "./page.css";
import Hero from "@/src/components/Hero/Hero";
import BrandingVedio from "../src/components/BrandingVedio/BrandingVedio";
import WhatWeDo from "@/src/components/What we do/WhatWeDo";
import OurDiff from "@/src/components/OurDiff/OurDiff";
import { motion, useAnimation } from "framer-motion";
import HowItWorks from "@/src/components/HowItWorks/HowItWorks";
import WhoWeInvest from "@/src/components/WhoWeInvest/WhoWeInvest";
export default function Home() {
  const controls = useAnimation();
  return (
    <motion.div className="app" animate={controls}>
      <Navbar />
      <Hero />
      <BrandingVedio />
      <WhatWeDo />

      <motion.div
        onViewportEnter={() =>
          controls.start({
            backgroundColor: "var(--secondary-color)",
          })
        }
        onViewportLeave={() =>
          controls.start({
            backgroundColor: "white",
          })
        }
        viewport={{ amount: 0.4 }}
      >
        <OurDiff />
       
      </motion.div>
      <HowItWorks/>

      <motion.div
        onViewportEnter={() =>
          controls.start({
            backgroundColor: "var(--primary-color)",
          })
        }
        onViewportLeave={() =>
          controls.start({
            backgroundColor: "white",
          })
        }
        viewport={{ amount: 0.4 }}
      >
       <WhoWeInvest/>
       
      </motion.div>
      
    </motion.div>
  );
}
