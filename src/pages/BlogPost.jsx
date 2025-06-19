import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogPosts } from '@/data/blogPosts';
import { Calendar, Clock, User, ArrowLeft, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const BlogPost = () => {
  const { slug } = useParams();
  const { toast } = useToast();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen pt-20 bg-background text-center px-4">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-5xl font-bold text-orange-500 mb-4">404</h1>
          <h2 className="text-3xl font-semibold text-foreground mb-8">Post Not Found</h2>
          <p className="text-muted-foreground mb-8">Sorry, we couldn't find the article you're looking for.</p>
          <Button asChild>
            <Link to="/blog" className="inline-flex items-center">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
          </Button>
        </motion.div>
      </div>
    );
  }

  const handleShare = () => {
    toast({
      title: 'Sharing is caring!',
      description: "🚧 This feature isn't implemented yet, but you can request it! 🚀",
      duration: 3000,
    });
  };

  const createMarkup = (htmlContent) => {
    return { __html: htmlContent };
  };

  return (
    <div className="min-h-screen pt-20 bg-background">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <div className="mb-8">
          <Link to="/blog" className="inline-flex items-center text-orange-500 hover:text-orange-600 group font-semibold">
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to All Articles
          </Link>
        </div>

        <article>
          <header className="mb-10">
            <span className="px-3 py-1 bg-orange-500/10 text-orange-500 rounded-full font-medium text-sm mb-4 inline-block">{post.category}</span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-foreground leading-tight mb-6 gradient-text">{post.title}</h1>
            <div className="flex flex-wrap items-center justify-between gap-4 text-muted-foreground">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>Strivo Labs Team</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
              <Button onClick={handleShare} variant="outline" size="sm">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
            </div>
          </header>

          <img  
            className="w-full h-auto max-h-[500px] object-cover rounded-2xl shadow-2xl mb-12" 
            alt={post.title}
           src="https://images.unsplash.com/photo-1504983875-d3b163aba9e6" />

          <div 
            className="blog-content space-y-6"
            dangerouslySetInnerHTML={createMarkup(post.content)}
          />
        </article>
      </motion.div>
    </div>
  );
};

export default BlogPost;