import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  ScrollRestoration,
} from 'react-router-dom';
import { ModalProvider } from '@/context/ModalContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Services from '@/pages/Services';
// import Blog from '@/pages/Blog';
// import BlogPost from '@/pages/BlogPost';
import Contact from '@/pages/Contact';
import LiveChatWidget from '@/components/LiveChatWidget';
import QuoteRequestModal from '@/components/QuoteRequestModal';
import ScheduleCallModal from '@/components/ScheduleCallModal';
import ScrollToTop from '@/components/ScrollToTop';

const Layout = () => {
  return (
    <ModalProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <main>
          <Outlet />
        </main>
        <Footer />
        <Toaster />
        <LiveChatWidget />
        <QuoteRequestModal />
        <ScheduleCallModal />
        <ScrollToTop />
        <ScrollRestoration />
      </div>
    </ModalProvider>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/services', element: <Services /> },
      // { path: '/blog', element: <Blog /> },
      // { path: '/blog/:slug', element: <BlogPost /> },
      { path: '/contact', element: <Contact /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;