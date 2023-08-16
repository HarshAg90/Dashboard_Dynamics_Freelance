import React, { useRef } from 'react';
import {motion, useScroll, useTransform} from "framer-motion";
// import Sticky from 'react-stickynode';
import Sticky from 'react-sticky-el';



export default function Charge_final (){  

 const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  //CAR ANIMATION
  const carInitialX = useTransform(scrollYProgress, [0, 0.18, 0.28, 0.37], ["80%", "0%", "0%", "-70%"]);
  const carFinalY = useTransform(scrollYProgress, [0.28, 0.37, 0.6, 0.8 ], ["0%","45%", "45%", "170%"]);
  const carScale = useTransform(scrollYProgress, [0.28, 0.37], [1, 0.9]);
  const carRotation = useTransform(scrollYProgress, [0.28, 0.37], [0,-90]);
  const carFinalOpacity = useTransform(scrollYProgress, [0.6, 0.8], [1, 0]);
  
  //INITIAL LINE AND CHARGER ANIMATION
  const opacity = useTransform(scrollYProgress, [0.19, 0.194, 0.2, 0.25, 0.27], [0, 0.6, 1, 1, 0]);
  const chargerOpacity = useTransform(scrollYProgress, [0.25, 0.27], [1, 0]);

  //FINAL LINE ANIMATION
  const opacityFinal = useTransform(scrollYProgress, [0, 0.37, 0.43, 0.57, 0.6], [0, 0, 1, 1, 0]);
  const xLineFinal = useTransform(scrollYProgress, [0.57, 0.69], ["0%", "50%"]);

  const pgOpacity = useTransform(scrollYProgress, [0.8, 0.95], [1, 0]);
  const pgScale = useTransform(scrollYProgress, [0.8, 0.95], [1, 0.88]);
   


  return (
    <div>  

    {/* //CAR ANIMATION */}

    
    <motion.div ref={targetRef} id='Charge_page' >

      <Sticky  Sticky enabled={true} bottomBoundary="#Charge_page" innerZ={2}> 
      
            <motion.div className="carSection" style={{opacity: pgOpacity, scale: pgScale}}>

            <div className="heading">
        <h1>CHARGE POINT OPERATORS</h1>
      </div>
      <div className="subHeading">
        <h5>
        Unlock the full potential of your charging infrastructure with Dash Dynamic. Our comprehensive wireless charging<br/>solution enhances operational efficiency and user experience, empowering Charge Point Operators (CPOs) to stay ahead<br/>in the evolving EV market.
        </h5>
      </div>

      

      <div className="cars">
      <motion.img src="../assets/charge/chargerTopFull.png" alt="" className="charger" style={{opacity: chargerOpacity}}/>

      <motion.img src="../assets/charge/car.png" alt="" className="car"
    style={{x: carInitialX, rotate: carRotation, y: carFinalY, opacity: carFinalOpacity, scale: carScale}}/>

      <motion.img src='../assets/charge/initLine.png' className='initLine' style={{opacity}}></motion.img> 

      <motion.img src='../assets/charge/finalLine.png' className='finalLine' style={{opacity: opacityFinal, x: xLineFinal}}></motion.img> 
      </div>

    </motion.div>
    </Sticky>
      </motion.div>
    
    
      

    


    {/* //CHARGE ABOUT */}

    <div id="Charge_about">
      <div className="image">
      <motion.img src="../assets/product.png" alt=""
          whileHover={{
            scale: 1.2
          }}
          whileTap={{
            scale: 1
          }}
          whileInView={{
            x: 0,
            opacity: 1
          }}
            initial={{
              x: -90,
              scale: 1.05,
              opacity: 0
            }}
            transition={{
              type: "spring",
              stiffness: 50,
            }}
        />
      </div>
      <div className="about">
      <motion.div className="content">
          <img src="../assets/bullet_pic.png" alt="" className="bullet"/>
          <motion.p
          whileInView={{
            x: 0,
            opacity: 1
          }}
            initial={{
              opacity: 0,
              x: 50
            }}
            transition={{
              type: "spring",
              stiffness: 25,
              delay: 0.1
            }}>
          Our wireless charging solution reduces maintenance costs by eliminating physical connectors and cables, resulting in savings on repairs and labor. It eliminates the need for manual vehicle connection, minimizing downtime between charging sessions and allowing for the accommodation of more EVs.<br></br> 
This enables operators to increase their revenue potential by serving a larger customer base without incurring additional infrastructure costs.
          </motion.p>
        </motion.div>
        <motion.div className="content"
        >
          <img src="../assets/bullet_pic.png" alt="" className="bullet" />
          <motion.p
          whileInView={{
            x: 0,
            opacity: 1
          }}
            initial={{
              opacity: 0,
              x: 50
            }}
            transition={{
              type: "spring",
              stiffness: 20,
              delay: 0.25
            }}>
          We ensure seamless integration of our system with existing charging infrastructure. We guarantee efficient and reliable power transfer. The charging infrastructure including access to real-time data on power transfer efficiency, temperature, and fault detection can be monitored remotely with features like proactive maintenance and troubleshooting.<br/> 
The wireless charging technology is designed to be user-friendly, so it streamlines operations and reduces complexities for charge point operators for CPOs.
          </motion.p>
        </motion.div>
        <motion.div className="content" >
        <img src="../assets/bullet_pic.png" alt="" className="bullet" />
          <motion.p
          whileInView={{
            x: 0,
            opacity: 1
          }}
            initial={{
              opacity: 0,
              x: 50
            }}
            transition={{
              type: "spring",
              stiffness: 15,
              delay: 0.4
            }}
            >
          We provide all type of protection features that is necessary for safety. Also by eliminating the need for physical cables and connectors, the risk of accidents, such as trips, falls, or electric shock, is significantly reduced. We ensure a safe working environment for the management staff.
          </motion.p>
        </motion.div>
      </div>
    </div>
    </div>
    
  )
}
