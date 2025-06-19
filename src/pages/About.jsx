import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, CheckCircle, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Results-First Systems',
      description: 'Not just shiny websites—we build systems that drive real business outcomes.',
    },
    {
      icon: CheckCircle,
      title: 'Clear Communication',
      description: 'On-time delivery with transparent progress updates every step of the way.',
    },
    {
      icon: Users,
      title: 'Tech Talent That Performs',
      description: 'We source developers and teams that actually deliver on their promises.',
    },
    {
      icon: Eye,
      title: 'Deep Understanding',
      description: 'We get startup and scale-up needs—because we\'ve been there ourselves.',
    },
  ];

  return (
    <div className="min-h-screen pt-20 bg-background">
      {/* Hero Section */}
      <section className="py-20 hero-pattern relative">
        <div className="absolute inset-0 gradient-bg" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="gradient-text">About</span>
              <br />
              <span className="text-foreground">Strivo Labs</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              We're not just another agency. We're growth partners for ambitious brands ready to scale sustainably.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Our <span className="gradient-text">Mission</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                To help ambitious brands grow smarter and scale sustainably with the right systems and the right people.
              </p>
              <p className="text-lg text-muted-foreground/80 leading-relaxed">
                We believe that every growing business deserves access to world-class systems and talent—without the complexity, guesswork, or endless revisions that plague the industry.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img  
                className="rounded-2xl shadow-2xl glow-effect w-full"
                alt="Team collaboration in modern office"
               src="https://images.unsplash.com/photo-1552581234-26160f608093" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <img  
                className="rounded-2xl shadow-2xl glow-effect w-full"
                alt="Future of business growth visualization"
               src="https://images.unsplash.com/photo-1651505942687-efc26cb528ba" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8 order-1 lg:order-2"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Our <span className="gradient-text">Vision</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                A world where growing businesses have access to the tools and teams they need to succeed—without complexity or guesswork.
              </p>
              <p className="text-lg text-muted-foreground/80 leading-relaxed">
                We envision a future where every entrepreneur can focus on what they do best, while we handle the systems and talent that make growth inevitable.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              What Makes Us <span className="gradient-text">Different</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're not just service providers—we're strategic partners invested in your long-term success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-card hover:shadow-xl transition-shadow duration-300 h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="p-3 rounded-full bg-orange-500/10">
                        <value.icon className="h-6 w-6 text-orange-500" />
                      </div>
                      <CardTitle className="text-foreground text-xl">{value.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground text-base leading-relaxed">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Who We <span className="gradient-text">Serve</span>
            </h2>
            <div className="space-y-6">
              <p className="text-2xl md:text-3xl font-semibold text-orange-500">
                Founders. Operators. Visionaries.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed">
                If you're building something bold—we're built for you.
              </p>
              <p className="text-lg text-muted-foreground/80 leading-relaxed max-w-2xl mx-auto">
                We work with ambitious entrepreneurs, scaling startups, and established businesses ready to take their growth to the next level. Our clients share a common trait: they refuse to settle for mediocre results.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;