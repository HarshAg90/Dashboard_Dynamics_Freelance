import React, { useRef } from 'react';
import {motion, useScroll, useTransform} from "framer-motion";
import TeamLanding from "../components/TeamLanding"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

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

export default function Team(){

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

  const pathLen = useTransform(scrollYProgress, [0.2, 0.6, 0.65], [0, 0.7, 1]);


  const achieveOpacity1 = useTransform(scrollYProgress, [0, 0.315, 0.325], [0, 0, 1]);
  const xLen1 = useTransform(scrollYProgress, [0, 0.315, 0.325], ["-20%","-20%", "0%"]);
  const achieveOpacity2 = useTransform(scrollYProgress, [0, 0.4, 0.41], [0, 0, 1]);
  const xLen2 = useTransform(scrollYProgress, [0, 0.4, 0.41], ["20%", "20%", "0%"]);
  const achieveOpacity3 = useTransform(scrollYProgress, [0, 0.45, 0.46], [0, 0, 1]);
  const xLen3 = useTransform(scrollYProgress, [0, 0.45, 0.46], ["20%", "20%", "0%"]);
  const achieveOpacity4 = useTransform(scrollYProgress, [0, 0.55, 0.56], [0, 0, 1]);
  const xLen4 = useTransform(scrollYProgress, [0, 0.55, 0.56], ["-20%","-20%", "0%"]);
  const achieveOpacity5 = useTransform(scrollYProgress, [0, 0.6, 0.61], [0, 0, 1]);
  const yLen5 = useTransform(scrollYProgress, [0, 0.6, 0.61], ["20%","20%", "0%"]);
  const achieveOpacity6 = useTransform(scrollYProgress, [0, 0.63, 0.64], [0, 0, 1]);
  const yLen6 = useTransform(scrollYProgress, [0, 0.63, 0.64], ["-20%","-20%", "0%"]);



  return (
    <div id='Team'>
        <TeamLanding/>
        <div className="teamMembers">
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
                    <h1>P. Sanjeevikumar, an accomplished electrical engineer, IEEE member, and fellow of Indian and UK institutions, specializes in Power Electronics, Drives, and renewable energy. With 250+ research papers, he's received Best Paper Awards and serves on editorial boards, contributing significantly to his field.</h1>
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
                    <h1>An accomplished power electronics specialist engineer with 8 years of experience, adept at designing and developing diverse power electronic converters, and integrating renewable sources into EV power management systems.</h1>
                    </div>
                    {/* <div className="member5 member">
                    <motion.img src="../assets/Team/Members/member5.png" alt="Dr. Anadi"
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
                    <h1>Professor of Strategic Management with 7 years of experience at IIM Lucknow with a distinguished academic and industry background and extensive experience in research and case writing.
</h1>
                    </div> */}
                                     
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
        </div>

        <div ref={journeyRef} className="journey">      

            <div className="cols">
                <div className="left">
                    <img src="../assets/Team/Journey/fstBox.png" alt="" />
                    <motion.img style={{opacity: achieveOpacity1, x: xLen1, scale: achieveOpacity1}} className="fstAchivement achieve" src="../assets/Team/Journey/achieve1.png" alt="" />
                    <div className="frthAchivement">
                        <img className="thdBox" src="../assets/Team/Journey/thdBox.png" alt="" />
                        <motion.img style={{opacity: achieveOpacity4, x: xLen4, scale: achieveOpacity4}} className="achieve" src="../assets/Team/Journey/achieve4.png" alt="" />
                    </div>
                    <motion.img style={{opacity: achieveOpacity5, y: yLen5, scale: achieveOpacity5}} className="fthAchivement" src="../assets/Team/Journey/achieve5.png" alt="" />
                    
                </div>
                <div className="right">
                    <div className="scndAchivement">
                        <img src="../assets/Team/Journey/scndBox.png" alt="" />
                        <motion.img style={{opacity: achieveOpacity2, x: xLen2, scale: achieveOpacity2}} className="achieve" src="../assets/Team/Journey/achieve2.png" alt="" />
                    </div>
                    <motion.img style={{opacity: achieveOpacity3, x: xLen3, scale: achieveOpacity3}} className="thdAchivement" src="../assets/Team/Journey/achieve3.png" alt="" />
                    <motion.img style={{opacity: achieveOpacity6, y: yLen6, scale: achieveOpacity6}} className="sxthAchivement" src="../assets/Team/Journey/achieve6.png" alt="" />
                    
                    
                </div>

                <svg width="1278" height="1119" viewBox="0 0 1278 1119" fill="none" xmlns="http://www.w3.org/2000/svg">
<motion.path style={{pathLength: pathLen}} d="M324.14 46.2945V8.34505C324.303 5.8967 323.063 1 316.796 1H6.38566C4.59044 1 1 2.34659 1 7.73297V79.9593C1 81.7956 2.07713 85.4681 6.38566 85.4681H237.969C244.497 85.0601 257.553 88.0389 257.553 103.219V285.009C257.39 290.722 260.001 302.147 271.752 302.147H667.353C683.347 302.147 715.335 314.511 715.335 363.968V680.418C716.151 704.493 707.697 753.011 667.353 754.48H157.184C138.579 755.296 101.369 770.272 101.369 823.646V1035.43C101.206 1061.95 112.14 1115 157.184 1115H1367" stroke="url(#paint0_linear_0_1)" stroke-width="2"/>
<rect x="321" y="39" width="6" height="5" fill="black"/>
<rect x="254" y="225" width="6" height="7" fill="black"/>
<rect x="712" y="348" width="7" height="7" fill="black"/>
<rect x="711" y="692" width="6" height="7" fill="black"/>
<rect x="99" y="828" width="6" height="8" fill="black"/>
<rect x="360" y="1111" width="6" height="8" fill="black"/>
<rect x="983" y="1111" width="6" height="8" fill="black"/>
<defs>
<linearGradient id="paint0_linear_0_1" x1="32.3348" y1="39.5615" x2="1256.67" y2="1878.47" gradientUnits="userSpaceOnUse">
<stop/>
<stop offset="0.0447915" stop-opacity="0.43"/>
<stop offset="0.401042" stop-opacity="0.16"/>
<stop offset="0.984375"/>
</linearGradient>
</defs>
                </svg>
                

            </div>

            <div className="downHead">
                <h1>
                    Want to be a part of the team?
                    <Link to="/Contacts">Contact us</Link>
                    </h1>
            </div>

        </div>
    </div>
  )
}
