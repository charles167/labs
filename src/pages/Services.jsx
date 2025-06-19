import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Globe, Bot, PenTool, Users, TrendingUp, Headphones, Code, UserCheck, Briefcase, Shield, Crown } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Services = () => {
  const { toast } = useToast();

  const handleCTAClick = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      duration: 3000,
    });
  };

  const digitalServices = [
    {
      icon: Zap,
      title: 'Sales Automation',
      description: 'WhatsApp bots, email flows, and triggers that close deals in your sleep.',
    },
    {
      icon: Globe,
      title: 'Website & MVP Development',
      description: 'Clean, low-code builds that launch fast and convert better.',
    },
    {
      icon: Bot,
      title: 'AI & Workflow Automation',
      description: 'Save hours with automations for admin, onboarding, reporting, and more.',
    },
    {
      icon: PenTool,
      title: 'Copywriting & Content',
      description: 'Words that win sales and investors—from websites to pitch decks.',
    },
    {
      icon: Users,
      title: 'Client Experience Systems',
      description: 'Make onboarding, support, and feedback seamless and scalable.',
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Smart campaigns, social content, and funnels that drive engagement.',
    },
    {
      icon: Headphones,
      title: 'Virtual Assistant Services',
      description: 'Trusted admin help for daily tasks, follow-ups, and operations.',
    },
  ];

  const talentRoles = [
    {
      icon: Code,
      title: 'Full-stack Developers',
      description: 'End-to-end development expertise for your entire tech stack.',
    },
    {
      icon: Shield,
      title: 'Software Engineers',
      description: 'Senior-level engineers who build scalable, maintainable systems.',
    },
    {
      icon: Briefcase,
      title: 'Product Managers',
      description: 'Strategic product leaders who turn vision into reality.',
    },
    {
      icon: UserCheck,
      title: 'Project / Client Managers',
      description: 'Experienced managers who keep projects on track and clients happy.',
    },
    {
      icon: Crown,
      title: 'CTOs & Tech Leads',
      description: 'Technical leadership to guide your engineering strategy.',
    },
    {
      icon: Headphones,
      title: 'Executive Assistants',
      description: 'High-level support to keep your operations running smoothly.',
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
              <span className="gradient-text">Services</span>
              <br />
              <span className="text-foreground">That Scale</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              From digital growth systems to top-tier tech talent—everything you need to build and scale your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Digital Growth Services */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 mb-6">
              <span className="text-2xl">🔷</span>
              <span className="text-lg font-semibold text-orange-500">Digital Growth Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Systems That <span className="gradient-text">Drive Results</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We build the digital infrastructure that turns your business into a growth machine.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {digitalServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-card hover:shadow-xl transition-shadow duration-300 h-full group">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="p-3 rounded-full bg-orange-500/10">
                        <service.icon className="h-6 w-6 text-orange-500" />
                      </div>
                      <CardTitle className="text-foreground text-lg">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Talent Sourcing */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 mb-6">
              <span className="text-2xl">🔷</span>
              <span className="text-lg font-semibold text-orange-500">Tech Talent Sourcing</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              <span className="gradient-text">Elite Talent</span> That Delivers
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Need a reliable team? We help you hire the best talent in the industry.
            </p>
            <p className="text-lg text-orange-500 font-semibold">
              We don't just send resumes—we build your team.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {talentRoles.map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-card hover:shadow-xl transition-shadow duration-300 h-full group">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="p-3 rounded-full bg-orange-500/10">
                        <role.icon className="h-6 w-6 text-orange-500" />
                      </div>
                      <CardTitle className="text-foreground text-lg">{role.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {role.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Ready to <span className="gradient-text">Scale Smart</span>?
            </h2>
            <p className="text-xl text-muted-foreground">
              Let's discuss which services and talent will accelerate your growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleCTAClick}
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 text-lg glow-effect"
              >
                Get Started Today
              </Button>
              <Button
                onClick={handleCTAClick}
                variant="outline"
                size="lg"
                className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 text-lg"
              >
                Schedule a Call
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;