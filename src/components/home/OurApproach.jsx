
import React from 'react';
import { motion } from 'framer-motion';

const OurApproach = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img  
              className="rounded-2xl shadow-xl w-full"
              alt="Focused professional working on a growth strategy at a modern desk" 
             src="/public/Whisk_2e4ytaxnmu.jpg
             "
               />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our <span className="gradient-text">Approach</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              We don't just build things—we build momentum. Our approach combines strategic thinking with rapid execution to deliver systems that are not only powerful but also perfectly aligned with your business goals.
            </p>
            <p className="text-muted-foreground">
              We believe in a partnership model. Your vision becomes our mission. By embedding ourselves in your operations, we identify opportunities for growth and efficiency that others miss, ensuring every solution we implement drives tangible value.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
