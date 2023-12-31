import React, { useRef } from 'react';
import {motion, useScroll, useTransform} from "framer-motion";
import TechnologyLanding from '../components/Technology_Landing';
import CarCanvas from '../components/CarCanvas';


export default function Technology() {

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"], 
  });

  const fstOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);
  const fstY = useTransform(scrollYProgress, [0, 0.2], ["40%", "0%"]);
  const fstScale = useTransform(scrollYProgress, [0, 0.2], [1.1, 1]);

  const scndOpacity = useTransform(scrollYProgress, [0.15, 0.3], [0, 1]);
  const scndY = useTransform(scrollYProgress, [0.2, 0.4], ["40%", "0%"]);
  const scndScale = useTransform(scrollYProgress, [0.2, 0.4], [1.1, 1]);


  const thdOpacity = useTransform(scrollYProgress, [0.3, 0.45], [0, 1]);
  const thdY = useTransform(scrollYProgress, [0.4, 0.6], ["40%", "0%"]);
  const thdScale = useTransform(scrollYProgress, [0.4, 0.6], [1.1, 1]);


  const frthOpacity = useTransform(scrollYProgress, [0.5, 0.65], [0, 1]);
  const frthY = useTransform(scrollYProgress, [0.5, 0.69], ["40%", "0%"]);
  const frthScale = useTransform(scrollYProgress, [0.5, 0.69], [1.01, 1]);


  //SVG ANIMATION
  const fstPathLength = useTransform(scrollYProgress, [0, 0.8], [0, 1]);


  return (
    <div  id='Technology'>
      
      <TechnologyLanding/>


   {/* PRODUCT PAGE */}
    <div className='product'>
      <div className='productHead'>
      <hr/>
      <div className='sqr'/>
      <h1 className='heading'>Product</h1>        
      </div>
    </div> 

    <div className="carCanvas">
    <div className="imageCar">
      <motion.img className='left' src="../assets/Technology/productLeft.png"
        initial={{x: "-15%", opacity: 0.5}}
        whileInView={{x: "0%", opacity: 1}}
        transition={{
          type: "spring",
          stiffness: 25,
        }}
      />
      <img className='car' src="../assets/Technology/2dCar.png" alt="" />
      <motion.img className='right' src="../assets/Technology/productRight.png"
      initial={{x: "15%", opacity: 0.5}}
      whileInView={{x: "0%", opacity: 1}}
      transition={{
        type: "spring",
        stiffness: 25,
        delay: 0.5
      }}
      />
    </div>
    {/* <CarCanvas/> */}
    </div>
    

  
    {/* WORKING */}
    <div className='working'>
    <h1 className='headingTop'>HOW DOES IT</h1>
      <div className='workingHead'>
        <h1 className='heading'>WORK</h1>
        <div className='sqr'/>
        <hr/>
      </div>


      <div ref={targetRef} className='explanation'>

        <div className='fstCol'> 
        <motion.img src='../assets/Technology/Working_1.png' className='illustration' alt='W1'
          style={{y: fstY, opacity: fstOpacity, scale: fstScale}}
        ></motion.img>


        <div className='txt scnd'>
          <h1 style={{fontSize: 25, fontWeight: "bold"}}>Step 2: Magnetic Magic</h1><br/>
          <h1 style={{fontSize: 17}}>Our revolutionary double D coil configuration, integrated into the Ground Assembly (GA), creates a robust and impactful magnetic field. This innovative design guarantees the smooth and efficient flow of power, optimizing the charging process and ensuring maximum effectiveness for your EV's battery.</h1>
        </div>


        <motion.img src='../assets/Technology/Working_3.png' className='illustration thd' alt='W1'
          style={{y: thdY, opacity: thdOpacity, scale: thdScale}}
        ></motion.img>



        <div className='txt frth'>
          <h1 style={{fontSize: 25, fontWeight: "bold"}}>Step 4: Charging Made Easy</h1><br/>
          <h1 style={{fontSize: 17}}>When the magnetic field resonates, it generates electricity in the receiver coil. Our wireless system is designed to adapt, accommodating up to 25% misalignment. This means you can enjoy convenient charging, even when parking isn't perfectly aligned with the charging pad.</h1>
        </div>
        </div>

        <div className='scndCol'>
        <div className="svgs">
        <svg width="8" height="2500" viewBox="0 0 8 2500" fill="none" xmlns="http://www.w3.org/2000/svg">
  <motion.path
    style={{ pathLength: fstPathLength }}
    d="M3.99993 3.99997L6.00014 1600"
    stroke="url(#paint0_linear_1983_480)"
    stroke-width="10"
    stroke-linecap="round"
  />
  <defs>
    <linearGradient
      id="paint0_linear_1983_480"
      x1="4.43853"
      y1="2500"
      x2="4.43847"
      y2="-19.7916"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0.466667" stop-color="#9C1313" />
      <stop offset="1" stop-color="#D9D8D8" stop-opacity="0" />
    </linearGradient>
  </defs>
</svg>


        </div>

        <svg className='bg' width="8" height="1416" viewBox="0 0 8 1416" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 4L3.99994 1412" stroke="#D9D8D8" stroke-width="8" stroke-linecap="round"/>
        </svg>


        

        
        </div>

        <div className="thdCol">
        <motion.div className='txt fst'>
          <h1 style={{fontSize: 25, fontWeight: "bold"}}>Step 1: Park and Power</h1><br/>
          <h1 style={{fontSize: 17}}>Effortlessly park your EV directly over our discreet wireless charging pad, seamlessly integrated beneath the parking spot. No need for manual connection—simply position your vehicle, and charging begins automatically.</h1>
        </motion.div>


        <motion.img src='../assets/Technology/Working_2.png' className='illustration scnd' alt='W1'
          style={{y: scndY, opacity: scndOpacity, scale: scndScale}}
        ></motion.img>



        <div className='txt thd'>
          <h1 style={{fontSize: 25, fontWeight: "bold"}}>Step 3: Resonant Connection</h1><br/>
          <h1 style={{fontSize: 17}}>Inside the Vehicle Assembly (VA), the receiver coil syncs with the magnetic field, creating a strong bond called magnetic resonant coupling. This bond allows power to flow smoothly without any physical contact, that charges your EV effortlessly and reliably.
</h1>
        </div>


        <motion.img src='../assets/Technology/Working_4.png' className='illustration frth'
          style={{y: frthY, opacity: frthOpacity, scale: frthScale}}
        ></motion.img>
        </div>

      </div>

      <div className="btn">
            <button>
              <span> Learn more about the existing technology</span>
            </button>
          </div>

    </div>

    
    <div className='why'>
      <div className='whyText'>
        <h1>W</h1>
        <h1>H</h1>
        <h1>Y</h1><br/>
        <h1>D</h1>
        <h1>A</h1>
        <h1>S</h1>
        <h1>H</h1>
      </div>
      <div className='picGrid'>
        <motion.img src="../assets/Technology/Grids/Grid1.png" className='g1'
          whileHover={{
            scale: 1.1
          }}
          whileTap={{
            scale: 0.95
          }}
          transition={{
            type: "spring",
            stiffness: 60,
          }}
        />
        <motion.img src="../assets/Technology/Grids/Grid2.png" className='g2'
        whileHover={{
            scale: 1.1
          }}
          whileTap={{
            scale: 0.95
          }}
          transition={{
            type: "spring",
            stiffness: 60,
          }}/>
        <motion.img src="../assets/Technology/Grids/Grid3.png" className='g3'
        whileHover={{
            scale: 1.1
          }}
          whileTap={{
            scale: 0.95
          }}
          transition={{
            type: "spring",
            stiffness: 60,
          }}/>
        <motion.img src="../assets/Technology/Grids/Grid4.png" className='g4'
            whileHover={{
              scale: 1.1
            }}
            whileTap={{
              scale: 0.95
            }}
            transition={{
              type: "spring",
              stiffness: 60,
            }}
        />
        <motion.img src="../assets/Technology/Grids/Grid5.png" className='g5'
        whileHover={{
          scale: 1.1
        }}
        whileTap={{
          scale: 0.95
        }}
        transition={{
          type: "spring",
          stiffness: 60,
        }}/>
        <motion.img src="../assets/Technology/Grids/Grid6.png" className='g6'whileHover={{
              scale: 1.1
            }}
            whileTap={{
              scale: 0.95
            }}
            transition={{
              type: "spring",
              stiffness: 60,
            }}/>
        <motion.img src="../assets/Technology/Grids/Grid7.png" className='g6'whileHover={{
              scale: 1.1
            }}
            whileTap={{
              scale: 0.95
            }}
            transition={{
              type: "spring",
              stiffness: 60,
            }}/>
      </div>
    </div>

    </div>
  )
}
