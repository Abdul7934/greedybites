import { motion } from 'framer-motion';

const GradientBackground = () => {
  return (
    <motion.div
      animate={{
        background: [
          'linear-gradient(45deg, #ff4b4b, #ff9f4b)',
          'linear-gradient(45deg, #ff9f4b, #ff4b9f)',
          'linear-gradient(45deg, #ff4b9f, #4b4bff)',
          'linear-gradient(45deg, #4b4bff, #ff4b4b)',
        ],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.1,
      }}
    />
  );
};

export default GradientBackground; 