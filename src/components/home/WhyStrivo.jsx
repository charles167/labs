import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Target, Users, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const WhyStrivo = () => {
  const features = [
    {
      icon: Zap,
      title: 'Performance-First',
      description: 'We build for performance, not just aesthetics.',
    },
    {
      icon: Target,
      title: 'Clear & Structured',
      description: 'We keep projects clear, fast, and structured.',
    },
    {
      icon: TrendingUp,
      title: 'Scalable Solutions',
      description: "We're flexible for growing businesses.",
    },
    {
      icon: Users,
      title: 'End-to-End Support',
      description: 'We support you end-to-end—from systems to staffing.',
    },
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
            Why <span className="gradient-text">Strivo Labs</span>?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card hover:shadow-xl transition-shadow duration-300 h-full">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 rounded-full bg-gradient-to-r from-orange-500/20 to-orange-400/20">
                    <feature.icon className="h-8 w-8 text-orange-500" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {feature.description}
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

export default WhyStrivo;