import React from "react";
import "./HowItWorks.css";
import { hitFeatures } from "@/src/utils/data";
import Image from "next/image";
import { motion } from "framer-motion";
import { tagVariants, titleVariants } from "@/src/utils/animation";
const HowItWorks = () => {
    const featureVarients = {
        offscreen:{
            scale: 0.5,
        },
        onscreen:{
            scale:1,
            transition:{
                type:"spring",
                duration: 1.5
            }
        }
    }
  return (
    <div className="hit-wrapper">
      <div className="container">
        <div className="hit-container">
          <div className="hit-head">
            <motion.span 
            variants={tagVariants}
            initial="offscreen"
            whileInView={"onscreen"}
            className="tag">How it works</motion.span >
            <motion.span  
            variants={titleVariants}
            initial="offscreen"
            whileInView={"onscreen"}
            className="title">
              Unlocking Potential Along The Growth Journey
            </motion.span >
            </div>
            <div className="features">
              {hitFeatures.map((feature, i) => (
                <motion.div 
                variants={featureVarients}
                initial="offscreen"
                whileInView={"onscreen"}
                key={i}
                className="feature">
                  <motion.div 
                  initial={{opacity:0,x:-100}}
                  whileInView={{
                    opacity:1,
                    x:0,
                    transition:{
                        type:"easeIn",
                        duration:1,
                        delay:.7
                    }
                  }}
                  className="details">
                    <span className="des">0{i + 1}</span>

                    <span className="sec-title">{feature.title}</span>
                    <span className="des">{feature.des}</span>
                  </motion.div>

                  <div className="icon">
                    <Image
                      src={feature.icon}
                      alt="feature"
                      width="128"
                      height="128"
                      
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
