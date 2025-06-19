import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Linkedin, Youtube, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';

const Footer = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const logoUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/e5e4cf65-08cb-4e9e-841a-a59554f1b749/f7102225d8531fe5129b861c4a4f4594.jpg";

  const handleSocialClick = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      duration: 3000,
    });
  };

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formspreeEndpoint = 'https://formspree.io/f/mldnblbv';

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        toast({
          title: "✅ Subscribed successfully!",
          description: "Thanks for joining! Keep an eye on your inbox for growth tips.",
          duration: 5000,
        });
        setEmail('');
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      toast({
        title: "❌ Oops! Something went wrong.",
        description: "Could not subscribe. Please try again later.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    { icon: Instagram, name: 'Instagram' },
    { icon: Twitter, name: 'Twitter' },
    { icon: Linkedin, name: 'LinkedIn' },
    { icon: Youtube, name: 'YouTube' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms', path: '/terms' },
    { name: 'Accessibility', path: '/accessibility' },
  ];

  return (
    <footer className="bg-secondary/50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/">
              <motion.img
                src={logoUrl}
                alt="Strivo Labs Logo"
                className="h-10"
                whileHover={{ scale: 1.05 }}
              />
            </Link>
            <p className="text-muted-foreground text-sm">
              Building performance-driven systems for ambitious brands. Growth made inevitable.
            </p>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Mail className="h-4 w-4" />
              <span className="text-sm">hello@strivolabs.com</span>
            </div>
          </div>

          <div className="space-y-4">
            <span className="text-lg font-semibold text-foreground">Quick Links</span>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block text-muted-foreground hover:text-orange-500 transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <span className="text-lg font-semibold text-foreground">Follow Us</span>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.button
                  key={social.name}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSocialClick}
                  className="p-2 rounded-lg bg-background hover:bg-accent transition-colors"
                >
                  <social.icon className="h-5 w-5 text-muted-foreground hover:text-orange-500" />
                </motion.button>
              ))}
            </div>
            <p className="text-xs text-muted-foreground/50">@strivolabs</p>
          </div>

          <div className="space-y-4">
            <span className="text-lg font-semibold text-foreground">Growth Tips</span>
            <p className="text-muted-foreground text-sm">
              Subscribe to get actionable insights delivered weekly.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
                required
              />
              <Button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-muted-foreground hover:text-orange-500 transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <p className="text-muted-foreground/50 text-sm">
              © 2025 Strivo Labs. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;