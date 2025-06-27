// import React from 'react';
// import { motion } from 'framer-motion';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// const InvestmentGuide = () => {
//   const investmentTiers = [
//     {
//       range: '$700–$1,000',
//       services: 'Landing pages, CRM setup',
//       icon: '📈',
//     },
//     {
//       range: '$1,000–$5,000',
//       services: 'MVPs, funnels, digital upgrades',
//       icon: '💼',
//     },
//     {
//       range: '$5,000+',
//       services: 'Full transformation, senior hires, scaling systems',
//       icon: '🚀',
//     },
//   ];

//   return (
//     <section className="py-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
//             <span className="gradient-text">Investment</span> Guide
//           </h2>
//           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//             Clear pricing tiers designed to match your growth stage and ambitions.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {investmentTiers.map((tier, index) => (
//             <motion.div
//               key={tier.range}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: index * 0.2 }}
//               viewport={{ once: true }}
//             >
//               <Card className="bg-card hover:shadow-xl transition-shadow duration-300 h-full">
//                 <CardHeader className="text-center">
//                   <div className="text-4xl mb-4">{tier.icon}</div>
//                   <CardTitle className="text-2xl text-orange-500">{tier.range}</CardTitle>
//                 </CardHeader>
//                 <CardContent className="text-center">
//                   <p className="text-muted-foreground text-lg">{tier.services}</p>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default InvestmentGuide;