import React from "react";
import "./OurDiff.css";
import { ourDiffFeatures } from "@/src/utils/data";
import Image from "next/image";
import { motion } from "framer-motion";
import { containerVariants, desVariants, tagVariants, titleVariants } from "@/src/utils/animation";
const OurDiff = () => {
  return (
    <div className="od-wrapper">
      <div className="container">
        <div className="od-container">
          <div className="od-head">
            <motion.span 
            variants={tagVariants}
            initial="offscreen"
            whileInView={"onscreen"}
            className="tag">Our difference</motion.span >
            <motion.span  
            variants={titleVariants}
            initial="offscreen"
            whileInView={"onscreen"}
            className="title">Fair Capital, Hassle Free</motion.span >
            <motion.span  
            variants={desVariants}
            initial="offscreen"
            whileInView={"onscreen"}
            className="text">
                  Our mission is to level the playing field for early stage growth
              capital. We provide capital that is unbiased, flexible and non
              dilutive with the execution support to accelerate value creation.
            </motion.span >
          </div>
          <div className="card-features">
              {
                 
                ourDiffFeatures.map((card, i) => (
                   <motion.div 
                   variants={containerVariants(0.1*(i+0.5))}
                   initial="offscreen"
                   whileInView={"onscreen"}
                   className="card-feature">
                     <Image
                       src={card.icon}
                       alt="feature"
                       width={128}
                       height={128}
                     />
                     <span className="sec-title"> {card.title} </span>
                     <span className="text">{card.des}</span>
                   </motion.div>
                 ))
                 }
              
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurDiff;
