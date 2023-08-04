import React, { useRef } from 'react';
import {motion, useScroll, useTransform} from "framer-motion";
import Sticky from 'react-stickynode';



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
  const lineX = useTransform(scrollYProgress, [0.19, 0.22], ["0%", "0%"]);
  const lineInit1 = useTransform(scrollYProgress, [0.19, 0.2], ["20%", "0%"]);
  const lineInit2 = useTransform(scrollYProgress, [0, 0.17], ["0%", "0%"]);
  const lineInit3 = useTransform(scrollYProgress, [0.19, 0.2], ["-20%", "0%"]);
  const chargerOpacity = useTransform(scrollYProgress, [0.25, 0.27], [1, 0]);

  //FINAL LINE ANIMATION
  const opacityFinal = useTransform(scrollYProgress, [0, 0.37, 0.47, 0.57, 0.75], [0, 0, 1, 1, 0]);
  const finalLineX = useTransform(scrollYProgress, [0.6, 0.72], ["0%", "50%"]);
  const finalTextX = useTransform(scrollYProgress, [0.6, 0.72], ["0%", "100%"]);

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


      <motion.img src="../assets/charge/car.png" alt="" className="car"
    style={{x: carInitialX, rotate: carRotation, y: carFinalY, opacity: carFinalOpacity, scale: carScale}}
  />
  <motion.img src="../assets/charge/charger.png" alt="" className="charger" style={{opacity: chargerOpacity}}/>


  <div className='initLine' >
  <motion.img src='../assets/charge/vector-1.svg' className='line line1 aniSet' style={{opacity, y: lineInit1, x: lineX}}></motion.img>
  <motion.h3 className='initText1 line aniSet' style={{opacity, y: lineInit1, x: lineX}}>High maintenance cost</motion.h3>
  </div>

  <div className='initLine'>
  <motion.img src='../assets/charge/vector-2.svg' className='line line2 aniSet' style={{opacity, x: lineInit2, x: lineX}}></motion.img>
  <motion.h3 className='initText2 line aniSet' style={{opacity, y: lineInit1, x: lineX}}>Complex hardware and <br></br> software challenges</motion.h3>
  </div>

  <div className='initLine'>
  <motion.img src='../assets/charge/vector-3.svg' className='line line3 aniSet' style={{opacity, y: lineInit3, x: lineX}}></motion.img>
  <motion.h3 className='initText3 line aniSet' style={{opacity, y: lineInit1, x: lineX}}>Safety hazards</motion.h3>
  </div>



  <div className='finalLine'>
  <motion.img src='../assets/charge/Vector168.png' className='line finalLine1' style={{opacity: opacityFinal, x: finalLineX}}></motion.img>
  <motion.h3 className='finalText1 line finalLine1' style={{opacity: opacityFinal, x: finalTextX}}>Cost-effective and Efficient <br/> Charging Infrastructure</motion.h3>
  </div>

  <div className='finalLine'>
  <motion.img src='../assets/charge/Vector169.png' className='line finalLine2'style={{opacity: opacityFinal, x: finalLineX}}></motion.img>
  <motion.h3 className='finalText2 line finalLine2' style={{opacity: opacityFinal, x: finalTextX}}>Seamless Integration and <br/> Simplified Operations</motion.h3>
  </div>

  <div className='finalLine'>
  <motion.img src='../assets/charge/Vector170.png' className='line finalLine3' style={{opacity: opacityFinal, x: finalLineX}}></motion.img>
  <motion.h3 className='finalText3 line finalLine3'style={{opacity: opacityFinal, x: finalTextX}}>Enhanced Safety for <br/> Management Staff</motion.h3>
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
      <motion.div className="content"
          whileInView={{
            x: 0,
            opacity: 1
          }}
            initial={{
              opacity: 0,
              x: 500
            }}
            transition={{
              type: "spring",
              stiffness: 50,
              delay: 0.1
            }}
        >
          <img src="../assets/bullet_pic.png" alt="" className="bullet"/>
          <p>
          Our wireless charging solution reduces maintenance costs by eliminating physical connectors and cables, resulting in savings on repairs and labor. It eliminates the need for manual vehicle connection, minimizing downtime between charging sessions and allowing for the accommodation of more EVs.<br></br> 
This enables operators to increase their revenue potential by serving a larger customer base without incurring additional infrastructure costs.
          </p>
        </motion.div>
        <motion.div className="content"
          whileInView={{
            x: 0,
            opacity: 1
          }}
            initial={{
              opacity: 0,
              x: 500
            }}
            transition={{
              type: "spring",
              stiffness: 40,
              delay: 0.25
            }}
        >
          <img src="../assets/bullet_pic.png" alt="" className="bullet" />
          <p>
          We ensure seamless integration of our system with existing charging infrastructure. We guarantee efficient and reliable power transfer. The charging infrastructure including access to real-time data on power transfer efficiency, temperature, and fault detection can be monitored remotely with features like proactive maintenance and troubleshooting.<br/> 
The wireless charging technology is designed to be user-friendly, so it streamlines operations and reduces complexities for charge point operators for CPOs.
          </p>
        </motion.div>
        <motion.div className="content"
          whileInView={{
            x: 0,
            opacity: 1
          }}
            initial={{
              opacity: 0,
              x: 500
            }}
            transition={{
              type: "spring",
              stiffness: 30,
              delay: 0.4
            }}
        >
          <img src="../assets/bullet_pic.png" alt="" className="bullet" />
          <p>
          We provide all type of protection features that is necessary for safety. Also by eliminating the need for physical cables and connectors, the risk of accidents, such as trips, falls, or electric shock, is significantly reduced. We ensure a safe working environment for the management staff.
          </p>
        </motion.div>
      </div>
    </div>
    </div>
    
  )
}
