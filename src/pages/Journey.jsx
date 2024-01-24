import React, { useRef } from 'react';
import TeamLanding from "../components/TeamLanding"
import {motion, useScroll, useTransform} from "framer-motion";
import BoardLanding from '../components/BoardLanding';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const transition = { duration: 3, yoyo: Infinity, ease: "easeInOut" };

const pathVariants = { 
    hidden: {
      pathLength: 0,
    },
    visible: {
      pathLength: 1,
      transition: { 
        duration: 10
      }
    }
  };

export default function Journey(){

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };


    const journeyRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: journeyRef,
    offset: ["start end", "end start"], 
  });

  const caroffSet = useTransform(scrollYProgress, [0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.87, 0.98], ["0%", "12.3%", "25%", "38%", "50%", "62%", "75%", "87%", "100%"]);
  const stMicro_Opacity = useTransform(scrollYProgress, [0, 0.1, 0.125], ["0%", "25%", "100%"]);
  const fitt_Opacity = useTransform(scrollYProgress, [0.125, 0.2, 0.25], ["0%", "25%", "100%"]);
  const mg_Opacity = useTransform(scrollYProgress, [0.25, 0.35, 0.375], ["0%", "25%", "100%"]);
  const iim_Opacity = useTransform(scrollYProgress, [0.375, 0.45, 0.5], ["0%", "25%", "100%"]);
  const birla_Opacity = useTransform(scrollYProgress, [0.5, 0.6, 0.625], ["0%", "25%", "100%"]);
  const patent_Opacity = useTransform(scrollYProgress, [0.625, 0.7, 0.75], ["0%", "25%", "100%"]);
  const nex_Opacity = useTransform(scrollYProgress, [0.75, 0.85, 0.87], ["0%", "25%", "100%"]);




  return (
    
    <div id='Journey'>
    <TeamLanding/>
    <div className="head">
          <h1 className='subHeading'>MILESTONES</h1>
          </div>
    <div ref={journeyRef} className="container">
    
  <svg xmlns="http://www.w3.org/2000/svg" width="1236" height="4004">
    <motion.path
      d="M0 5H947C1041.17 15.3333 1229.5 86.3 1229.5 287.5C1229.5 550.5 1041.17 566 947 579.5L434.5 592C335.667 589.5 111 643 111 851C111 1094.2 252 1154 434.5 1154L947 1168C1041.17 1162.33 1219.77 1241.75 1229.5 1429C1241.5 1660 1041.17 1712.33 947 1718L434.5 1736.5C335.667 1738.67 80.9653 1764.9 103 2034.5C120 2242.5 296.167 2290 395 2286.5L947 2307.5C1041.17 2310.33 1229.5 2366.73 1229.5 2602.5C1229.5 2795.5 1041.17 2865.17 947 2859.5L395 2878.5C291 2878.5 87.5 2948 103 3164.5C118.5 3381 308.333 3429.67 395 3428.5L947 3447C1041.17 3453.33 1248.5 3498 1229.5 3765.5C1214.56 3975.77 1061 3982.5 947 3999H103"
      fill="transparent"
      strokeWidth="12"
      stroke="rgba(168, 168, 168, 1)"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={transition}
    />
  </svg>
  <motion.img src="../assets/Journey/car.png" className='box'
  style={{offsetDistance: caroffSet}} />
  
  <div className="milestonesRow">
    <div className="partnerSet">
      <motion.img className='bg' src="../assets/Journey/Partners/stBg.png" style={{opacity: stMicro_Opacity}} />
    <img className='fg' src="../assets/Journey/Partners/STMicro.png" alt="" />
    <h1 className='fg'>Incubated in <br/>
STMicroelectronics <br/>
Private Limited</h1>
    </div>

    <div className="partnerSet">
      <motion.img className='bg' src="../assets/Journey/Partners/fittBg.png" style={{opacity: fitt_Opacity}} />
    <img className='fg' src="../assets/Journey/Partners/Fitt.png" alt="" />
    <h1 className='fg'>Incubated with <br/>
FITT IIT-Delhi, <br/>
Faculty Mentor <br/>
Prof B.K. Panigrahi</h1>
    </div>

    <div className="partnerSet">
      <motion.img className='bg' src="../assets/Journey/Partners/mgBg.png" style={{opacity: mg_Opacity}} />
    <img className='fg' src="../assets/Journey/Partners/mg.png" alt="" />
    <h1 className='fg'>Pilot with <br/>
MG Motors,<br/>
MGZS EV</h1>
    </div>

    <div className="partnerSet">
      <motion.img className='bg' src="../assets/Journey/Partners/iimBg.png" style={{opacity: iim_Opacity}} />
    <img className='fg' src="../assets/Journey/Partners/iim.png" alt="" />
    <h1 className='fg'>Accelerating <br/>
with IIML-EIC, <br/>
IIM LUCKNOW </h1>
    </div>

    <div className="partnerSet">
      <motion.img className='bg' src="../assets/Journey/Partners/birlaBg.png" style={{opacity: birla_Opacity}} />
    <img className='fg' src="../assets/Journey/Partners/birla.png" alt="" />
    <h1 className='fg'>MOU With Aditya<br/>
Birla Innovation<br/>
Group For dynamic<br/>
charging</h1>
    </div>

    <div className="partnerSet">
      <motion.img className='bg' src="../assets/Journey/Partners/patentBg.png" style={{opacity: patent_Opacity}} />
    <img className='fg' src="../assets/Journey/Partners/patent.png" alt="" />
    <h1 className='fg'>Technology<br/>
patent filed,<br/>
Filing dtd.</h1>
    </div>

    <div className="partnerSet">
      <motion.img className='bg' src="../assets/Journey/Partners/nexusBg.png" style={{opacity: nex_Opacity}} />
    <img className='fg' src="../assets/Journey/Partners/nexus.png" alt="" />
    <h1 className='fg'>Startup Nexus US <br/>
    Embassy<br/>
Incubated, Batch <br/> of Cohort 14</h1>
    </div>
    
    
  </div>


</div>
    {/* <div className="teamMembers">
        <h1 className='subHeading'>OUR TEAM</h1>
        <div className="teamGrid">
            <div className="grid fst">
            <div className="member2 member">
                    <motion.img src="../assets/Team/Members/Robin_Singh.png" alt="Robin Singh"
                    initial={{
                      scale: 1
                  }}
                    whileTap={{
                      scale: 0.95
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 60,
                    }}/>
                    <a href="https://www.linkedin.com/in/robin-singh-b9952028/" className="linkedin" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" style={{fill:"#000000"}}><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg></a>
                    <h1>A highly successful electrical engineer with 7 years of entrepreneurial experience, founder of Tron Fire Protection Pvt Ltd, known for innovative solutions in transformer fire safety, and COVID initiatives.
</h1>
                </div>
                <div className="member1 member">
                    <motion.img src="../assets/Team/Members/Shashank_Sawai.png" alt="Shashank Sawai"
                        initial={{
                          scale: 1
                        }}
                          whileTap={{
                            scale: 0.95
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 60,
                          }}
                    />
                    <a href="https://www.linkedin.com/in/shashank-sawai-8a0511125/" className="linkedin" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" style={{fill:"#000000"}}><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg></a>
                    
                    <h1>An M.Tech professional with 7 years of experience, excelling in electrical & telecommunications project management.</h1>
                </div>
                
                <div className="member3 member">
                    <motion.img src="../assets/Team/Members/BK_Panigrahi.png" alt="B K Panigrahi"
                    initial={{
                      scale: 1
                    }}
                    whileTap={{
                      scale: 0.95
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 60,
                    }}/>
                    <a href="https://www.linkedin.com/in/bkpanigrahi/" className="linkedin" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" style={{fill:"#000000"}}><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg></a>
                    <h1>A highly esteemed professor with 40 years of teaching experience at IIT Delhi, specializing in Power Electronics and Power Systems, and currently researching EV Charging Infrastructure & Grid Impact</h1>
                </div>                                  
            </div>
            <div className="grid scnd">
            <div className="member6 member">
                <motion.img src="../assets/Team/Members/Eric_Azulay.png" alt="Eric Azulay"
                initial={{
                  scale: 1
              }}
                whileTap={{
                  scale: 0.95
                }}
                transition={{
                  type: "spring",
                  stiffness: 60,
                }}
                />
                <a href="https://www.linkedin.com/in/erikazulay/" className="linkedin" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" style={{fill:"#000000"}}><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg></a>
                <h1>Executive Director of Startup Nexus, ACIR, responsible for promoting economic development and tech commercialization, while incubating start-ups and forming strategic partnerships.
</h1>
                </div>  

                <div className="member8 member">
                <motion.img src="../assets/Team/Members/Sanjeevi.png" alt="Sanjeevikumar Padmanaban"
                initial={{
                  scale: 1
              }}
                whileTap={{
                  scale: 0.95
                }}
                transition={{
                  type: "spring",
                  stiffness: 60,
                }}/>
                <a href="https://www.linkedin.com/in/sanjeevikumarpadmanaban/" className="linkedin" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" style={{fill:"#000000"}}><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg></a>
                <h1>Sanjeevikumar Padmanaban, an accomplished electrical engineer, IEEE member, and fellow of Indian and UK institutions, specializes in Power Electronics, Drives, and renewable energy. With 250+ research papers, he's received Best Paper Awards and serves on editorial boards, contributing significantly to his field.</h1>
                </div>
                
                <div className="member8 member">
                <motion.img src="../assets/Team/Members/Kiran_Pandav.png" alt="Kiran Pandav"
                initial={{
                  scale: 1
              }}
                whileTap={{
                  scale: 0.95
                }}
                transition={{
                  type: "spring",
                  stiffness: 60,
                }}/>
                <a href="https://www.linkedin.com/in/dr-kiran-maroti-pandav-smieee-ab619a66/" className="linkedin" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" style={{fill:"#000000"}}><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg></a>
                <h1>An accomplished power electronics specialist engineer with 8 years of experience, adept at designing and developing diverse power electronic converters, and integrating renewable sources into EV power management systems.</h1>
                </div>
                                 
            </div>
            <div className="grid thd">
            <div className="member4 member">
                <motion.img src="../assets/Team/Members/Ajeet.png" alt="Ajeet Prabhakar"
                initial={{
                  scale: 1
              }}
                whileTap={{
                  scale: 0.95
                }}
                transition={{
                  type: "spring",
                  stiffness: 60,
                }}/>
                <a href="https://www.linkedin.com/in/ajeet-prabhakar-79a4841b1/" className="linkedin" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" style={{fill:"#000000"}}><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg></a>
                <h1>With 5 years of experience, a skilled product designer passionate about UI/UX, graphic design, and animation, crafting visually captivating user interfaces.</h1>
                </div>
                <div className="member7 member">
                <motion.img src="../assets/Team/Members/Sayan.png" alt="Sayan Mandal"
                initial={{
                  scale: 1
              }}
                whileTap={{
                  scale: 0.95
                }}
                transition={{
                  type: "spring",
                  stiffness: 60,
                }}/>
                <a href="https://www.linkedin.com/in/sayan-mondal-b56287174/" className="linkedin" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" style={{fill:"#000000"}}><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg></a>
                <h1>Dedicated R&D engineer with 5 years of industrial experience, proficient in circuit design, signal processing, and control algorithms, committed to collaborative problem-solving for innovative solutions.

</h1>
                </div>
                
            </div>
        </div>
    </div>

    <div className="partners"> 
        <h1 className='heading'>STRATEGIC PARTNERS</h1>
        <div className="fstLine">
            <div className="sqr"/>
            <hr/>
        </div>
        <div className="container">
    <div className="lft"/>
    <div className="parteners_li"> 
    <Slider {...settings} className='carouselKaItem'>
      <motion.img src="../assets/Home/partner_1.png" alt="" 
        whileHover={{scale: 1.15}}
        transition={{
          type: "spring",
          stiffness: 60,
        }}
      />
      <motion.img src="../assets/Home/partner_2.png" alt=""
      whileHover={{scale: 1.15}}
      transition={{
        type: "spring",
        stiffness: 60,
      }}/>
      <motion.img src="../assets/Home/partner_3.png" alt=""
      whileHover={{scale: 1.15}}
      transition={{
        type: "spring",
        stiffness: 60,
      }}/>
      <motion.img src="../assets/Home/partner_4.png" alt=""
      whileHover={{scale: 1.15}}
      transition={{
        type: "spring",
        stiffness: 60,
      }}/>
      <motion.img src="../assets/Home/partner_5.png" alt=""
      whileHover={{scale: 1.15}}
      transition={{
        type: "spring",
        stiffness: 60,
      }}/>
    </Slider>          
    </div>
    <div className="rght"/>
    </div>
        <div className="lstLine">
            <hr/>
            <div className="sqr"/>
        </div>
    </div> */}

</div>
  )
}
