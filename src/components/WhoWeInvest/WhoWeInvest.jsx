import React from "react";
import "./WhoWeInvest.css";
import { whoWeInvest } from "@/src/utils/data";
import Image from "next/image";
const WhoWeInvest = () => {
  return (
    <div className="wwi-wrapper">
      <div className="container">
        <div className="wwi-container">
          <div className="left">
           <div className="head">
           <span className="tag">Who we invest in</span>
            <span className="title" >
                {" "}
              Digital Businesses 
              <br />
              With Early Traction
            </span>
           </div>
            <div className="details">
              {whoWeInvest.map((detail,i) => (
                <div className="detail" key={i}>
                  <span className="des">{detail.title}</span>
                  <span className="text">{detail.des}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="right">
                <img src="/persons.png" alt="person-image"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeInvest;
