import React, { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/sections/Home';
import About from './components/sections/About';
import WhatIDo from './components/sections/WhatIDo';
import Highlights from './components/sections/Highlights';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Certifications from './components/sections/Certifications';
import Contact from './components/sections/Contact';
import { ThemeProvider } from './context/ThemeContext';
import ScrollToTop from './components/ui/ScrollToTop';
import AnimatedSection from './components/ui/AnimatedSection';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white dark:bg-slate-950 flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-slate-950 text-gray-800 dark:text-gray-200 transition-colors duration-300">
        <Header />
        <main>
          <AnimatedSection><Home /></AnimatedSection>
          <AnimatedSection><About /></AnimatedSection>
          <AnimatedSection><WhatIDo /></AnimatedSection>
          <AnimatedSection><Highlights /></AnimatedSection>
          <AnimatedSection><Skills /></AnimatedSection>
          <AnimatedSection><Projects /></AnimatedSection>
          <AnimatedSection><Certifications /></AnimatedSection>
          <AnimatedSection><Contact /></AnimatedSection>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;
