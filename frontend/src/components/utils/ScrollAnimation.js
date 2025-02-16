import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ScrollAnimation = ({ children, animation = "fade" }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const animations = {
    fade: {
      visible: { opacity: 1, y: 0 },
      hidden: { opacity: 0, y: 50 }
    },
    scale: {
      visible: { opacity: 1, scale: 1 },
      hidden: { opacity: 0, scale: 0.5 }
    },
    slideLeft: {
      visible: { opacity: 1, x: 0 },
      hidden: { opacity: 0, x: -100 }
    },
    slideRight: {
      visible: { opacity: 1, x: 0 },
      hidden: { opacity: 0, x: 100 }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={animations[animation]}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation; 