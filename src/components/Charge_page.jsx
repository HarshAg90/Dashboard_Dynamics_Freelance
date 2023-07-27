import React, { useRef, useEffect, useState } from 'react';
import {gsap, Power2} from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'; // Import ScrollTrigger
gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger with GSAP

export default function Charge_page() {
  const disableScroll = () => {
    window.onscroll = function() {
      // Prevent scrolling
      window.scrollTo(0, 0);
    };
  }

  
  const [animationComplete, setAnimationComplete] = useState(false);

  const del = 4;
  

  let charger = useRef(null);
  let car = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let finalLine1 = useRef(null);
  let finalLine2 = useRef(null);
  let finalLine3 = useRef(null);

  let tlCarger = new gsap.timeline();
  let tlLine = new gsap.timeline();

  useEffect(() => {
    tlCarger.to(charger, 1, {
      opacity: 0,
      duration: 0.45,
      delay: del,
      x: "-69%",
      pin: true, // Pin the element during the animation
      pinSpacing: false, // Do not add additional spacing when pinned
      invalidateOnRefresh: true, // Ensure that the animation is recalculated on page refresh
    });
    tlCarger.to(car, {
      rotation: -90,
      duration: 1, x: "-60%",
      ease: "power4.out",
      y: "10%",
      pin: true, // Pin the element during the animation
      pinSpacing: false, // Do not add additional spacing when pinned
      invalidateOnRefresh: true, // Ensure that the animation is recalculated on page refresh
    })


    tlLine.to([line1, line2, line3], 2, {
      opacity: 0,
      duration: 0.45,
      delay: del,
      x: "69%",
      pin: true, // Pin the element during the animation
      pinSpacing: false, // Do not add additional spacing when pinned
      invalidateOnRefresh: true, // Ensure that the animation is recalculated on page refresh
    });
  })

  return ( 
    <div id='Charge_page' >
      <div className="heading">
        <h1>CHARGE POINT OPERATORS</h1>
      </div>
      <div className="subHeading">
        <h5>
        Unlock the full potential of your charging infrastructure with Dash Dynamic. Our comprehensive wireless charging<br/>solution enhances operational efficiency and user experience, empowering Charge Point Operators (CPOs) to stay ahead<br/>in the evolving EV market.
        </h5>
      </div>

      <div class="carSection">
  <img src="../assets/charge/charger.png" alt="" class="charger" ref={el => charger = el}/>
  <img src="../assets/charge/car.png" alt="" class="car" ref={el => car = el}/>

  <div class="line line1" ref={el => line1 = el}>
    <img src="../assets/charge/vector-1.svg" alt="" />
    <h3>High maintenance cost</h3>
  </div>
  <div class="line line2" ref={el => line2 = el}>
    <img src="../assets/charge/vector-2.svg" alt="" />
    <h3>Complex hardware and software challenges</h3>
  </div>
  <div class="line line3" ref={el => line3 = el}>
    <img src="../assets/charge/vector-3.svg" alt="" />
    <h3>Safety hazards</h3>
  </div>

  <div class="line finalLine1" ref={el => finalLine1 = el}>
    <img src="../assets/charge/vector-3.svg" alt=""/>
    <h3>This</h3>
  </div>
  <div class="line finalLine2" ref={el => finalLine2 = el}>
    <img src="../assets/charge/vector-2.svg" alt="" />
    <h3>That</h3>
  </div>
  <div class="line finalLine3" ref={el => finalLine3 = el}>
    <img src="../assets/charge/vector-2.svg" alt="" />
    <h3>No</h3>
  </div>



</div>




    </div>
  )
}




