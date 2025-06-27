import React from 'react';
import Hero from '@/components/home/Hero';
import WhyStrivo from '@/components/home/WhyStrivo';
import OurApproach from '@/components/home/OurApproach';
import HowWeWork from '@/components/home/HowWeWork';
// import InvestmentGuide from '@/components/home/InvestmentGuide';
import Testimonials from '@/components/home/Testimonials';
import Cta from '@/components/home/Cta';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhyStrivo />
      <OurApproach />
      <HowWeWork />
      {/* <InvestmentGuide /> */}
      <Testimonials />
      <Cta />
    </div>
  );
};

export default Home;