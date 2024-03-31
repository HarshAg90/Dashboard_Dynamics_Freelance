import { useEffect } from "react";
import { useAnimation } from "framer-motion";

const useScroll = () => {
  const controls = useAnimation();

  const handleScroll = () => {
    // Calculate the scroll progress (0 to 1)
    const scrollProgress =
      window.scrollY /
      (document.documentElement.scrollHeight - window.innerHeight);

    // Update your animation based on the scroll progress
    // For example, you can animate opacity or translateY based on scroll progress
    controls.start({ opacity: 1 - scrollProgress });
  };

  useEffect(() => {
    // Add event listener to the scroll event
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return controls;
};

export default useScroll;