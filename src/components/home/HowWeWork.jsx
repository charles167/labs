import React from 'react';
import { motion } from 'framer-motion';
import { Search, ClipboardCheck, Rocket, Scaling } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const HowWeWork = () => {
  const processSteps = [
    {
      icon: Search,
      title: 'Discovery & Audit',
      description: 'We dive deep into your goals, processes, and pain points to understand your exact needs.'
    },
    {
      icon: ClipboardCheck,
      title: 'Strategy & Roadmap',
      description: 'We design a custom, actionable plan focused on high-impact results and clear milestones.'
    },
    {
      icon: Rocket,
      title: 'Execution & Delivery',
      description: 'Our expert team builds, automates, and deploys your systems with precision and speed.'
    },
    {
      icon: Scaling,
      title: 'Scale & Support',
      description: 'We provide ongoing support and optimization to ensure your systems grow with you.'
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How We <span className="gradient-text">Work</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A transparent, four-step process designed for clarity, speed, and impactful results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card hover:shadow-xl transition-shadow duration-300 h-full text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 p-4 rounded-full bg-gradient-to-r from-orange-500/20 to-orange-400/20 w-fit">
                    <step.icon className="h-10 w-10 text-orange-500" />
                  </div>
                  <CardTitle>{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;