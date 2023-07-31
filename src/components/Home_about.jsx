import React from "react";
import {motion, useScroll, useSpring} from "framer-motion";
import {fadeIn, textVariant, slideIn} from "../utils/motion"
import { animate, stagger } from "framer-motion/dom"

export default function Home_about() { 
  return (
    <div id="Home_about">
      <div className="image">
        <motion.img src="../assets/product.png" alt=""
          whileHover={{
            scale: 1.05
          }}
          whileTap={{
            scale: 0.9
          }}
          whileInView={{
            x: 0,
            opacity: 1
          }}
            initial={{
              x: -90,
              opacity: 0
            }}
            transition={{
              type: "spring",
              stiffness: 50,
            }}
        />
      </div>
      <div className="about"     >
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
          Our wireless charging solution reduces maintenance costs by eliminating physical connectors and cables, resulting in savings on repairs and labor. It eliminates the need for manual vehicle connection, minimizing downtime between charging sessions and allowing for the accommodation of more EVs. 
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
          Our wireless charging solution reduces maintenance costs by eliminating physical connectors and cables, resulting in savings on repairs and labor. It eliminates the need for manual vehicle connection, minimizing downtime between charging sessions and allowing for the accommodation of more EVs. 
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
              stiffness: 30,
              delay: 0.4
            }}
        >
          <img src="../assets/bullet_pic.png" alt="" className="bullet" />
          <p>
          Our wireless charging solution reduces maintenance costs by eliminating physical connectors and cables, resulting in savings on repairs and labor. It eliminates the need for manual vehicle connection, minimizing downtime between charging sessions and allowing for the accommodation of more EVs. 
This enables operators to increase their revenue potential by serving a larger customer base without incurring additional infrastructure costs.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
