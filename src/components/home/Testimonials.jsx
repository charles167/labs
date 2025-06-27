import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Strivo Labs transformed our digital presence. Their team is incredibly skilled and delivered beyond our expectations. Our growth has been phenomenal since partnering with them.",
      // name: "Sarah Johnson",
      // title: "CEO, Innovate Inc.",
      // avatar: "https://images.unsplash.com/photo-1670400829835-2ab87c352ada"
    },
    {
      quote: "The automation systems they built for us saved us over 20 hours a week. It's been a complete game-changer for our operations. Highly recommend!",
      // name: "Michael Chen",
      // title: "Founder, ScaleUp Co.",
      // avatar: "https://images.unsplash.com/photo-1642257859842-c95f9fa8121d"
    },
    {
      quote: "The tech talent they sourced for us was top-notch. We struggled for months to find the right fit, and Strivo Labs delivered in weeks. Their process is seamless.",
      // name: "Jessica Rodriguez",
      // title: "Marketing Director, Visionary Brands",
      // avatar: "https://images.unsplash.com/photo-1690192079529-9fd57e5b24d0"
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
            Trusted by <span className="gradient-text">Visionaries</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear what our partners have to say about their growth journey with Strivo Labs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                <CardContent className="pt-6 flex-grow">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                </CardContent>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <img
                      className="h-12 w-12 rounded-full object-cover"
                      alt={`Portrait of ${testimonial.name}`}
                      src={testimonial.avatar}
                    />
                    <div>
                      <CardTitle className="text-base">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.title}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;