import React from "react";
import {motion, useScroll, useSpring} from "framer-motion";
import {fadeIn, textVariant, slideIn} from "../utils/motion"
import { animate, stagger } from "framer-motion/dom"

export default function Charge_about() {

  const scrollControls = useScroll();

  return (
    <div id="Charge_about">
      <div className="image">
      <motion.img src="../assets/product.png" alt=""
      animate={scrollControls}
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
  );
}
