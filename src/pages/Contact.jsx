import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send, Phone, Linkedin, Instagram, Twitter, Youtube } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  });
  const { toast } = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      duration: 3000,
    });
  };

  const handleSocialLinkClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const openLiveChat = () => {
    if (window.Tawk_API && typeof window.Tawk_API.maximize === 'function') {
      window.Tawk_API.maximize();
    } else {
      toast({
        title: "Live Chat Unavailable",
        description: "The live chat feature is currently initializing. Please try again in a moment.",
        variant: "destructive",
        duration: 3000,
      });
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Get in touch directly',
      value: 'hello@strivolabs.com',
      action: () => { window.location.href = 'mailto:hello@strivolabs.com' },
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Quick questions & support',
      value: 'Available 9AM-6PM EST',
      action: openLiveChat,
    },
    {
      icon: Phone,
      title: 'Schedule a Call',
      description: 'Book a strategy session',
      value: '30-min consultation',
      action: () => toast({
        title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
        duration: 3000,
      }),
    },
  ];

  const socialLinks = [
    { icon: Linkedin, name: 'LinkedIn', handle: '@strivo-labs', url: 'https://www.linkedin.com/company/strivo-labs' },
    { icon: Twitter, name: 'X (Twitter)', handle: '@StrivoLabs', url: 'https://x.com/StrivoLabs' },
    { icon: Instagram, name: 'Instagram', handle: '@strivolabs', url: '#' },
    { icon: Youtube, name: 'YouTube', handle: '@strivolabs', url: '#' },
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
              <span className="text-foreground">Let's Talk About</span>
              <br />
              <span className="gradient-text">Growth</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Ready to transform your business? We're here to help you build systems that scale and find talent that delivers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-card hover:shadow-xl transition-shadow duration-300 h-full group cursor-pointer" onClick={method.action}>
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 p-4 rounded-full bg-orange-500/10 group-hover:bg-orange-500/20 transition-all duration-300 w-fit">
                      <method.icon className="h-8 w-8 text-orange-500" />
                    </div>
                    <CardTitle className="text-foreground group-hover:text-orange-500 transition-colors">
                      {method.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {method.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-orange-500 font-semibold">{method.value}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">Send Us a Message</CardTitle>
                  <CardDescription>
                    Tell us about your project and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-muted-foreground mb-2">
                        Full Name
                      </label>
                      <Input
                        id="fullName"
                        name="fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="min-h-[120px]"
                        placeholder="Tell us about your project, goals, and how we can help..."
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 glow-effect group"
                    >
                      Send Message
                      <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-6">
                  Get in <span className="gradient-text">Touch</span>
                </h3>
                <p className="text-lg text-muted-foreground mb-8">
                  Whether you need growth systems, tech talent, or strategic guidance—we're here to help you scale smart.
                </p>
              </div>

              {/* Direct Contact */}
              <Card className="bg-card shadow-sm">
                <CardHeader>
                  <CardTitle className="text-foreground flex items-center">
                    <Mail className="h-5 w-5 mr-3 text-orange-500" />
                    Direct Contact
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">Email:</span> hello@strivolabs.com
                  </p>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="bg-card shadow-sm">
                <CardHeader>
                  <CardTitle className="text-foreground">Follow Us</CardTitle>
                  <CardDescription>
                    Stay updated with our latest insights and behind-the-scenes content
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map((social) => (
                      <button
                        key={social.name}
                        onClick={() => social.url === '#' ? toast({ title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀", duration: 3000 }) : handleSocialLinkClick(social.url)}
                        className="text-left p-3 rounded-lg bg-secondary hover:bg-accent transition-colors group flex items-center space-x-3"
                      >
                        <social.icon className="h-5 w-5 text-orange-500" />
                        <div>
                          <div className="font-semibold text-foreground group-hover:text-orange-500">
                            {social.name}
                          </div>
                          <div className="text-sm text-muted-foreground">{social.handle}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Custom Quote CTA */}
              <Card className="gradient-bg border-orange-500/30 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-foreground">Prefer a Custom Quote?</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Get a detailed proposal tailored to your specific needs and goals.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    onClick={() => toast({
                      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
                      duration: 3000,
                    })}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold glow-effect"
                  >
                    Request a Custom Quote →
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;