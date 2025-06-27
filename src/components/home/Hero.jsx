import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = ({ handleCTAClick }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
        duration: 0.8,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 1.2 },
    },
  };

  return (
   <section
  className="relative py-32 md:py-48 overflow-hidden bg-cover bg-center min-h-[70vh] flex items-center justify-center"
  style={{ backgroundImage: "url('public/Whisk_611266db1d.jpg')" }}
>

      <div className="absolute inset-0 bg-black/50 z-0" />
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center space-y-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold"
            variants={itemVariants}
          >
            <span className="bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent block hover:brightness-125 transition duration-300">
              Growth Systems
            </span>
            <span className="text-white block mt-2 md:mt-4 hover:text-orange-400 transition duration-300">
              That Actually Work
            </span>
          </motion.h1>

          <motion.p
            className="text-2xl md:text-3xl text-white max-w-3xl mx-auto hover:text-orange-300 transition duration-300"
            variants={itemVariants}
          >
            We build performance-driven systems and source top tech talent for ambitious brands ready to scale
            sustainably.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            variants={buttonVariants}
          >
            <Button
              onClick={handleCTAClick}
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-10 py-6 text-xl group w-full sm:w-auto"
            >
              Request a Custom Quote
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={handleCTAClick}
              variant="outline"
              size="lg"
              className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-10 py-6 text-xl w-full sm:w-auto"
            >
              View Our Work
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
