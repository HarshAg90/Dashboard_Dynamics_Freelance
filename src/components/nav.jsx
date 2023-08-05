import React from 'react'
import { Link } from "react-router-dom";
import { motion,  useScroll } from "framer-motion";
// import logo from '../../public/assets/logo.png';
export default function Nav() {

  /** this hook gets the scroll y-axis **/
  const { scrollY } = useScroll();
  /** this hook manages state **/
  const [hidden, setHidden] = React.useState(false);

  /** this onUpdate function will be called in the `scrollY.onChange` callback **/
  function update() {
    if (scrollY?.current < scrollY?.prev) {
      setHidden(false);
    } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
      setHidden(true);
    }
  }

  /** update the onChange callback to call for `update()` **/
  React.useEffect(() => {
    return scrollY.onChange(() => update());
  });

  const variants = {
    /** this is the "visible" key and it's correlating styles **/
    visible: { opacity: 1, y: 10 },
    /** this is the "hidden" key and it's correlating styles **/
    hidden: { opacity: 0, y: -25 }
  };

  // Calculate the background color based on scrollY?.current value
const backgroundColor = scrollY?.current >= 500 && "";

// Use the calculated backgroundColor in the variants
variants.visible = { ...variants.visible, background: backgroundColor };


  return (
    <motion.div id='nav'
    variants={variants}
      /** it's right here that we match our boolean state with these variant keys **/
      animate={hidden ? "hidden" : "visible"}
      /** I'm also going to add a custom easing curve and duration for the animation **/
      transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
      /** basic nav styles **/
      // style={navStyles}
      >
        <ul>
            <Link to="/"><li className="nav_elements logo"><img src="../assets/logo.png" alt="" /></li></ Link>
            <Link to="/"><li className="nav_elements">Home</li></ Link>
            <Link to="/Technology"><li className="nav_elements">Technology</li></ Link>
            <Link to="/Products"><li className="nav_elements">Our Products</li></ Link>
            <Link to="/Use_case"><li className="nav_elements">Use cases</li></ Link>
            <Link to="/Contacts"><li className="nav_elements">Contact</li></ Link>
            <Link to="/News_rooms"><li className="nav_elements">News Room</li></ Link>
            <Link to="/Careers"><li className="nav_elements">Career</li></ Link>
        </ul>
    </motion.div>
  )
}
