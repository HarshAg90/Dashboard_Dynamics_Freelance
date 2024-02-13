import React, { useRef, useEffect } from 'react';
import {motion, useScroll, useTransform, useInView, useAnimation, useAnimate} from "framer-motion";
import { isMobile } from "react-device-detect";


const carLeftVariant = {
    hidden: {
        opacity: 1,
        y: "470%"
    },
    visible: {
        y: "200%",
        opacity: [1, 1, 1, 1, 1, 0]
    }
}

const carMidVariant = {
    visible: {
        y: ["0%", "-700%"],
        opacity: [1,1,1,1,1,1,1, 1, 1, 0]
    }
}

const carRightVariant = {
    visible: {
        // path: pathRight,
        y: ["100%", "-100%"],
        // x: ["0%", "50%", "50%", "50%"],
        // rotate: [0,30, 30, 30, 30],
        opacity: [1,1,1,1,1,1,0]
    }
}








const Fleets = () => {

    const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  //LANDING PG ANIMATION
  const opacity = useTransform(scrollYProgress, [0, 0.95], [1, isMobile ? 1:  0]);
  const scale = useTransform(scrollYProgress, [0, 0.95], [1, isMobile ? 1:  0.8]);





  const roadRef = useRef(null);
  const isRoadInView = useInView(roadRef, {once: true});
  const roadAnimationControls = useAnimation();


  useEffect(() => {
    if(isRoadInView){
      roadAnimationControls.start("visible");
    }
  }, [isRoadInView]);


  return (
    <div id='Fleets'>
        <motion.div ref={targetRef} className='basicLand landing'  style={{opacity, scale}}>
            <h1>
            ENHANCING FLEET PERFORMANCE WITH REAL-TIME INSIGHTS AND DYNAMIC TOOLS
            </h1>
        </motion.div>


        <div className="nextPg">

            <div className="txt">
            <div className="fst">
                <h1 className="head">Automated Wireless Charging</h1>
                <h1 className="subHead">
                Our advanced technology enables seamless and automated charging for your fleet. Vehicles parked over the charging pad start charging automatically and stop when fully charged, thereby eliminating the need for a manual connection. This eliminates downtime and maximizes operational hours for increased efficiency.
                </h1>
            </div>   
            <div className="scnd">
            <div className="fst">
                <h1 className="head">In-Route Opportunity Charging</h1>
                <h1 className="subHead">
                Strategically placed charging stations along popular routes ensure convenient access for your fleet. Real-time data analysis and predictive analytics identify optimal locations, minimizing range anxiety and enabling extended operational hours without passenger service disruptions.
                </h1>
            </div>

            
                
            </div> 
            <div className="scd">
                <h1 className="head">Dynamic Charging for Continuous Operations</h1>
                <h1 className="subHead">Retrofitting short sections of the road, we embed charging infrastructure that delivers continuous power to your fleet during transit. This eliminates the need for extended charging stops, extends range, and reduces downtime.</h1>
            </div>     

            
            </div>

            <div className="mob carMob">
            <motion.div className='carContainer1Mob'
                    initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 2 }}
      variants={{
        visible: { opacity: 0, y: "-65%" },
        hidden: { opacity: 1, y: "10%" }
      }}
                >
                    <img src="../assets/Fleets/leftCar.png" alt="Left-car" className='car1'/>
                    </motion.div>
                    <motion.div className="carContainer2Mob"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    variants={{
                      visible: { opacity: 0, y: "-95%" },
                      hidden: { opacity: 1, y: "0%" }
                    }}
                        
                    >
                    <img src="../assets/Fleets/midCar.png" alt="Mid-car" className='car2' />
                    </motion.div>
                    <motion.div className="carContainer3Mob"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 2.1 }}
                        variants={{
                          visible: { opacity: 0, y: "-40%" },
                          hidden: { opacity: 1, y: "0%" }
                        }}
                    >
                    <img src="../assets/Fleets/rightCar.png" alt="Right-car" className='car3'/>
                    </motion.div> 
            </div>



            <div className='web road'>
            <div className="left outerContainer">
                <motion.div className='carContainer1'
                    variants={carLeftVariant}
                    initial="hidden"
                    animate={roadAnimationControls}
                    transition={{
                        duration: 3
                    }}
                >
                    <img src="../assets/Fleets/leftCar.png" alt="Left-car" className='car1'/>
                    </motion.div>
                    <img src="../assets/Fleets/leftArrow.png" alt="Left-arrow" className='arrow'/>
                </div>

                <div className="mid outerContainer">
                    <img src="../assets/Fleets/midArrow.png" alt="Mid-arrow" className='arrow'/>
                    <motion.div className="carContainer2"
                        initial={{
                            opacity: 0
                        }}
                        variants={carMidVariant}
                        animate={roadAnimationControls}
                        transition={{
                            duration: 3.5
                        }}
                    >
                    <img src="../assets/Fleets/midCar.png" alt="Mid-car" className='car2' />
                    </motion.div>                    
                </div>

                <div className="right outerContainer">
                <motion.div className="carContainer3"
                        variants={carRightVariant}
                        initial={{
                            opacity: 0
                        }}
                        animate={roadAnimationControls}
                        transition={{
                            duration: 1.5
                        }}
                    >
                    <img src="../assets/Fleets/rightCar.png" alt="Right-car" className='car3'/>
                    </motion.div>   
                    <img src="../assets/Fleets/rightArrow.png" alt="Right-arrow" className='arrow'/>                 
                </div>
            </div> 
            
            <div ref={roadRef} className='web optimDiv'>
            <img src="../assets/Fleets/optimizeTxt.png" className='optimTxt' alt="" />
            </div>
            
        </div>

        <div className="lastPg web">
            <div className="btmRoads">
                <img src="../assets/Fleets/leftDown.png" alt="" className='left' />
                <img src="../assets/Fleets/midDown.png" alt="" />
                <img src="../assets/Fleets/rightDown.png" alt="" className='right'/>
            </div>
        </div>
    </div>
  )
}

export default Fleets