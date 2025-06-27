
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useModal } from '@/context/ModalContext';

const Cta = () => {
  const { openQuoteModal, openScheduleModal } = useModal();

  return (
    <section className="py-20 gradient-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-foreground">
            Let's Make Your Growth <span className="gradient-text">Inevitable</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Ready to transform your business with systems that actually work? Let's talk.
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="my-8"
          >
            <img  
              className="mx-auto rounded-xl shadow-lg max-w-2xl w-full" 
              alt="High-level business meeting discussing growth strategies" src="/Whisk_d548c95a19.jpg" />
          </motion.div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={openScheduleModal}
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-12 py-6 text-xl glow-effect pulse-glow group w-full sm:w-auto"
            >
              Schedule a Call
              <Phone className="ml-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
            </Button>
            <Button
              onClick={openQuoteModal}
              size="lg"
              variant="outline"
              className="font-semibold px-12 py-6 text-xl w-full sm:w-auto border-orange-500/50 text-orange-500 hover:bg-orange-500/10 hover:text-orange-400"
            >
              Request a Quote
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Cta;
