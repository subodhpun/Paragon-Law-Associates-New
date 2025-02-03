import React from 'react';
import { motion } from 'framer-motion';

const CustomLoader = () => {
  return (
    <div className="fixed inset-0 bg-[#0F172A] flex items-center justify-center z-[9999]">
      <div className="relative">
        {/* Gavel Animation */}
        <motion.div
          initial={{ rotate: -45 }}
          animate={{ rotate: 45 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1,
            ease: "easeInOut"
          }}
          className="w-16 h-4 bg-[#FBBF24] rounded-full absolute -top-8 left-1/2 transform -translate-x-1/2 origin-right"
        />
        
        {/* Scales of Justice Animation */}
        <div className="relative">
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: [0, -10, 10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut"
            }}
            className="w-24 h-1 bg-[#FBBF24] rounded-full mb-4"
          >
            <div className="absolute -left-2 -bottom-2 w-4 h-4 bg-[#FBBF24] rounded-full" />
            <div className="absolute -right-2 -bottom-2 w-4 h-4 bg-[#FBBF24] rounded-full" />
          </motion.div>
          
          {/* Stand */}
          <div className="w-1 h-12 bg-[#FBBF24] mx-auto" />
          <div className="w-12 h-1 bg-[#FBBF24] mx-auto mt-1" />
        </div>

        {/* Loading Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1
          }}
          className="text-[#FBBF24] mt-6 text-center font-semibold"
        >
          Justice Loading...
        </motion.p>
      </div>
    </div>
  );
};

export default CustomLoader; 