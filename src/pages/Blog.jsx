// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { Calendar, Clock, ArrowRight, TrendingUp } from 'lucide-react';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { useToast } from '@/components/ui/use-toast';
// import { blogPosts as allPosts } from '@/data/blogPosts';

// const Blog = () => {
//   const { toast } = useToast();
//   const [selectedCategory, setSelectedCategory] = useState('All');

//   const handleSubscribeClick = () => {
//     toast({
//       title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
//       duration: 3000,
//     });
//   };
  
//   const blogPosts = allPosts;
//   const categories = ['All', ...new Set(blogPosts.map(p => p.category))];

//   const featuredPosts = blogPosts.filter(post =>
//     post.featured && (selectedCategory === 'All' || post.category === selectedCategory)
//   );

//   const otherPosts = blogPosts.filter(post =>
//     !post.featured && (selectedCategory === 'All' || post.category === selectedCategory)
//   );

//   return (
//     <div className="min-h-screen pt-20 bg-background">
//       <section className="py-20 hero-pattern relative">
//         <div className="absolute inset-0 gradient-bg" />
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-center space-y-8"
//           >
//             <h1 className="text-5xl md:text-7xl font-bold">
//               <span className="gradient-text">Insights</span>
//               <br />
//               <span className="text-foreground">That Drive Growth</span>
//             </h1>
//             <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
//               The latest strategies on digital execution, automation, hiring, and smart scaling. Actionable, not fluffy.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       <section className="py-8 bg-secondary/50 sticky top-[72px] z-10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="flex flex-wrap justify-center gap-4"
//           >
//             {categories.map((category) => (
//               <Button
//                 key={category}
//                 onClick={() => setSelectedCategory(category)}
//                 variant={selectedCategory === category ? 'default' : 'outline'}
//                 className={`transition-all duration-300 ${selectedCategory === category
//                   ? 'bg-orange-500 hover:bg-orange-600 text-white'
//                   : 'border-orange-500 text-orange-500 hover:bg-orange-500/20 hover:text-orange-400'
//                   }`}
//               >
//                 {category}
//               </Button>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {featuredPosts.length > 0 && (
//         <section className="py-16">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="mb-12"
//             >
//               <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
//                 <span className="gradient-text">Featured</span> Articles
//               </h2>
//               <p className="text-muted-foreground">Our most popular and impactful content</p>
//             </motion.div>

//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
//               {featuredPosts.map((post, index) => (
//                 <motion.div
//                   key={post.title}
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.8, delay: index * 0.2 }}
//                   viewport={{ once: true }}
//                 >
//                   <Link to={`/blog/${post.slug}`} className="block h-full">
//                     <Card className="bg-card hover:shadow-xl transition-shadow duration-300 h-full group">
//                       <div className="relative">
//                         <img
//                           className="w-full h-48 object-cover rounded-t-lg"
//                           alt={`Featured blog post: ${post.title}`}
//                           src={post.image} />
//                         <div className="absolute top-4 left-4">
//                           <span className="px-3 py-1 bg-orange-500 text-white text-sm font-semibold rounded-full">
//                             Featured
//                           </span>
//                         </div>
//                       </div>
//                       <CardHeader>
//                         <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
//                           <span className="px-2 py-1 bg-orange-500/10 text-orange-500 rounded font-medium">{post.category}</span>
//                           <div className="flex items-center space-x-4">
//                             <div className="flex items-center space-x-1">
//                               <Calendar className="h-4 w-4" />
//                               <span>{post.date}</span>
//                             </div>
//                             <div className="flex items-center space-x-1">
//                               <Clock className="h-4 w-4" />
//                               <span>{post.readTime}</span>
//                             </div>
//                           </div>
//                         </div>
//                         <CardTitle className="text-foreground group-hover:text-orange-500 transition-colors">
//                           {post.title}
//                         </CardTitle>
//                       </CardHeader>
//                       <CardContent>
//                         <CardDescription className="text-muted-foreground mb-4">
//                           {post.excerpt}
//                         </CardDescription>
//                         <div className="flex items-center text-orange-500 font-semibold group-hover:translate-x-1 transition-transform">
//                           Read More
//                           <ArrowRight className="ml-2 h-4 w-4" />
//                         </div>
//                       </CardContent>
//                     </Card>
//                   </Link>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>
//       )}

//       {otherPosts.length > 0 && (
//         <section className="py-16 bg-secondary/50">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="mb-12"
//             >
//               <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
//                 {selectedCategory === 'All' ? 'Latest' : selectedCategory} <span className="gradient-text">Insights</span>
//               </h2>
//               <p className="text-muted-foreground">
//                 {selectedCategory === 'All'
//                   ? 'Fresh strategies and actionable advice for growing businesses'
//                   : `Explore our articles on ${selectedCategory.toLowerCase()}.`
//                 }
//               </p>
//             </motion.div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {otherPosts.map((post, index) => (
//                 <motion.div
//                   key={post.title}
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.8, delay: index * 0.1 }}
//                   viewport={{ once: true }}
//                 >
//                   <Link to={`/blog/${post.slug}`} className="block h-full">
//                     <Card className="bg-card hover:shadow-xl transition-shadow duration-300 h-full group">
//                       <img
//                         className="w-full h-40 object-cover rounded-t-lg"
//                         alt={`Blog post: ${post.title}`}
//                         src={post.image} />
//                       <CardHeader>
//                         <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
//                           <span className="px-2 py-1 bg-orange-500/10 text-orange-500 rounded font-medium">{post.category}</span>
//                           <div className="flex items-center space-x-1">
//                             <Clock className="h-4 w-4" />
//                             <span>{post.readTime}</span>
//                           </div>
//                         </div>
//                         <CardTitle className="text-foreground group-hover:text-orange-500 transition-colors text-lg">
//                           {post.title}
//                         </CardTitle>
//                       </CardHeader>
//                       <CardContent>
//                         <CardDescription className="text-muted-foreground mb-4">
//                           {post.excerpt}
//                         </CardDescription>
//                         <div className="flex items-center justify-between">
//                           <span className="text-sm text-muted-foreground">{post.date}</span>
//                           <div className="flex items-center text-orange-500 font-semibold group-hover:translate-x-1 transition-transform">
//                             Read More
//                             <ArrowRight className="ml-2 h-4 w-4" />
//                           </div>
//                         </div>
//                       </CardContent>
//                     </Card>
//                   </Link>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>
//       )}

//       {featuredPosts.length === 0 && otherPosts.length === 0 && (
//         <section className="py-20">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
//           >
//             <h2 className="text-3xl font-bold text-foreground mb-4">
//               No articles found in <span className="gradient-text">{selectedCategory}</span>
//             </h2>
//             <p className="text-muted-foreground max-w-xl mx-auto">
//               It looks like we haven't published anything in this category yet. Check back soon, or explore our other topics!
//             </p>
//           </motion.div>
//         </section>
//       )}

//       <section className="py-20">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="space-y-8"
//           >
//             <div className="flex justify-center mb-6">
//               <TrendingUp className="h-16 w-16 text-orange-500" />
//             </div>
//             <h2 className="text-4xl md:text-5xl font-bold text-foreground">
//               Never Miss a <span className="gradient-text">Growth Insight</span>
//             </h2>
//             <p className="text-xl text-muted-foreground">
//               Get our best strategies delivered to your inbox weekly. No fluff, just actionable advice.
//             </p>
//             <Button
//               onClick={handleSubscribeClick}
//               size="lg"
//               className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 text-lg glow-effect"
//             >
//               Subscribe to Growth Tips
//             </Button>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   // );
// };
// export default Blog;