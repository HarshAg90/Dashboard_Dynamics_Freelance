import React, { useRef, useEffect, useState } from 'react';
import {gsap, Power2} from 'gsap'
import {motion, useScroll, useSpring, useAnimation} from "framer-motion";

export default function Charge_page() {
  return ( 
    <div id='Charge_page'>
      <div className="heading sticky">
        <h1>CHARGE POINT OPERATORS</h1>
      </div>
      <div className="subHeading">
        <h5>
        Unlock the full potential of your charging infrastructure with Dash Dynamic. Our comprehensive wireless charging<br/>solution enhances operational efficiency and user experience, empowering Charge Point Operators (CPOs) to stay ahead<br/>in the evolving EV market.
        </h5>
      </div>

      <div className="carSection">
      <div className="sticky thass">
  <motion.img src="../assets/charge/car.png" alt="" className="car"
  // whileInView={{
  //   x: "0%",
  //   opacity: 1
  // }}
  //   initial={{
  //     x: 1000,
  //     opacity: 0.2
  //   }}
  //   transition={{
  //     duration: 1.5,
  //     delay: 0.2
  //   }}
  />
  </div>
  <img src="../assets/charge/charger.png" alt="" className="sticky charger"
    // whileInView={{
    //   opacity: 1
    // }}
    // initial={{
    //   opacity: 0
    // }}
    // transition={{
    //   duration: 1,
    //   delay: 1.5
    // }}
  />
  
  

   {/* <motion.div class="line line1"
    whileInView={{
      opacity: 1
    }}
      initial={{
        opacity: 0
      }}
      transition={{
        duration: 1,
        delay: 2.2
      }}
  >
    <img src="../assets/charge/vector-1.svg" alt="" />
    <h3>High maintenance cost</h3>
  </motion.div> */}
  {/*
  <motion.div class="line line2"
  whileInView={{
    opacity: 1
  }}
    initial={{
      x: 100,
      opacity: 0
    }}
    transition={{
      duration: 1,
      delay: 1
    }}>
    <img src="../assets/charge/vector-2.svg" alt="" />
    <h3>Complex hardware and software challenges</h3>
  </motion.div>

  <motion.div class="line line3"
  whileInView={{
    opacity: 1
  }}
    initial={{
      y: 10,
      opacity: 0
    }}
    transition={{
      duration: 1,
      delay: 1
    }}>
    <img src="../assets/charge/vector-3.svg" alt="" />
    <h3>Safety hazards</h3>
  </motion.div>

  <div class="line finalLine1" >
    <img src="../assets/charge/vector-3.svg" alt=""/>
    <h3>This</h3>
  </div>
  <div class="line finalLine2" >
    <img src="../assets/charge/vector-2.svg" alt="" />
    <h3>That</h3>
  </div>
  <div class="line finalLine3" >
    <img src="../assets/charge/vector-2.svg" alt="" />
    <h3>No</h3>
  </div> */}



</div>

    </div>
  )
}
