import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
const SlideOnScroll = ({ children, direction = 'up', duration = 1 }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
      triggerOnce: false,
      threshold: 0.2,
    });
  
    useEffect(() => {
      if (inView) {
        controls.start('visible');
      } else {
        controls.start('hidden');
      }
    }, [controls, inView]);
  
    const getDirectionOffset = () => {
      switch (direction) {
        case 'up': return { y: 50 };
        case 'down': return { y: -50 };
        case 'left': return { x: 50 };
        case 'right': return { x: -50 };
        default: return { y: 50 };
      }
    };
  
    const variants = {
      hidden: {
        opacity: 0,
        ...getDirectionOffset(),
      },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration,
          ease: "easeOut"
        }
      },
      exit: {
        opacity: 0,
        ...getDirectionOffset(),
        transition: {
          duration,
          ease: "easeIn"
        }
      }
    };
  
    return (
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        exit="exit"
        variants={variants}
        className="slide-animation"
      >
        {children}
      </motion.div>
    );
  };

  export default SlideOnScroll;