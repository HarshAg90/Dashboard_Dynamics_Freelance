import React from "react";
import {motion} from "framer-motion";
import {fadeIn, textVariant} from "../utils/motion"

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
          // animate={{
          //   x: -100
          // }}
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
              stiffness: 50
            }}
        />
      </div>
      <motion.div className="about"
      whileInView={{
        x: 0
      }}
        initial={{
          x: 500
        }}
        transition={{
          type: "spring",
          stiffness: 50
        }}
      >
        <div className="content">
          <img src="../assets/bullet_pic.png" alt="" className="bullet"/>
          <p>
          Our wireless charging solution reduces maintenance costs by eliminating physical connectors and cables, resulting in savings on repairs and labor. It eliminates the need for manual vehicle connection, minimizing downtime between charging sessions and allowing for the accommodation of more EVs. 
This enables operators to increase their revenue potential by serving a larger customer base without incurring additional infrastructure costs.
          </p>
        </div>
        <div className="content">
          <img src="../assets/bullet_pic.png" alt="" className="bullet" />
          <p>
          Our wireless charging solution reduces maintenance costs by eliminating physical connectors and cables, resulting in savings on repairs and labor. It eliminates the need for manual vehicle connection, minimizing downtime between charging sessions and allowing for the accommodation of more EVs. 
This enables operators to increase their revenue potential by serving a larger customer base without incurring additional infrastructure costs.
          </p>
        </div>
        <div className="content">
          <img src="../assets/bullet_pic.png" alt="" className="bullet" />
          <p>
          Our wireless charging solution reduces maintenance costs by eliminating physical connectors and cables, resulting in savings on repairs and labor. It eliminates the need for manual vehicle connection, minimizing downtime between charging sessions and allowing for the accommodation of more EVs. 
This enables operators to increase their revenue potential by serving a larger customer base without incurring additional infrastructure costs.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
