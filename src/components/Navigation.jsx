import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useModal } from '@/context/ModalContext';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { openQuoteModal, openScheduleModal } = useModal();
  const logoUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/e5e4cf65-08cb-4e9e-841a-a59554f1b749/f7102225d8531fe5129b861c4a4f4594.jpg";

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleScheduleClick = () => {
    openScheduleModal();
    setIsOpen(false);
  };

  const handleQuoteClick = () => {
    openQuoteModal();
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass-effect">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2">
            <motion.img
              src={logoUrl}
              alt="Strivo Labs Logo"
              className="h-10"
              whileHover={{ scale: 1.05 }}
            />
          </Link>

          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-orange-500'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            <Button
              onClick={handleScheduleClick}
              variant="outline"
              className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300"
            >
              Schedule a Call
            </Button>
            <Button 
              onClick={handleQuoteClick}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 glow-effect"
            >
              Request a Quote
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 space-y-2"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 text-base font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-orange-500'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button
              onClick={handleScheduleClick}
              variant="outline"
              className="w-full mt-4 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
            >
              Schedule a Call
            </Button>
            <Button 
              onClick={handleQuoteClick}
              className="w-full mt-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold"
            >
              Request a Quote
            </Button>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;