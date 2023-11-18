"use client"
import React, { useState } from "react";
import "./Navbar.css";
import { BiMenuAltRight } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
const Navbar = () => {
  const [mobileMenuOpen,setMobileMenuOpen] = useState(false);

  return (
    <div className="n-wrapper">
      <div className="container">
        <div className="n-container">
          <div className="n-logo">
            <span>left</span>
          </div>

          <div className="n-right">
            <div className="n-menu">
              <span>What we do</span>
              <span>How it works</span>
              <span>Who we invest</span>
              <span>Testimonial</span>
            </div>
            <div className="fund-button">get funded</div>
          </div>
        </div>
      </div>

      <div className="nm-container">
        <span>FUNDLELO</span>
        {
          !mobileMenuOpen? 
          <BiMenuAltRight size={30}
        onClick={()=>setMobileMenuOpen(true)} /> :
        <RxCross2 size={30} onClick={()=>setMobileMenuOpen(false)}/>
        }
        <div className="nm-menu"
        style={{transform: mobileMenuOpen && "translateX(0%)"}}>
          <span>What we do</span>
          <span>How it works</span>
          <span>Who we invest in</span>
          <span>Testimonials</span>
          <div className="m-funded-button">
            get funded
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
