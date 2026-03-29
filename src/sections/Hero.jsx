import { motion } from 'framer-motion';
import { ArrowRight, Download, Play } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [text, setText] = useState('');
  const roles = ['Frontend Developer', 'WordPress Expert', 'React Developer'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < roles[roleIndex].length) {
        setText(roles[roleIndex].substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setText(roles[roleIndex].substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === roles[roleIndex].length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((roleIndex + 1) % roles.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-background pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-[0.05] dark:opacity-[0.07] pointer-events-none z-0"></div>
      
      {/* Large Layered Background Text */}
      <div className="large-bg-text top-1/2 left-0 -translate-y-1/2 select-none">
        DEVELOPER
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0">
          
          {/* Text Content Area */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <div className="inline-block mb-6 relative">
               <span className="text-[#e91e63] font-black tracking-[0.3em] uppercase text-sm block mb-2">Hello, I'm</span>
               <div className="h-1 w-12 bg-[#e91e63] rounded-full"></div>
            </div>

            <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter leading-none text-foreground">
              Neha <br />
              <span className="text-foreground/90">Rathore</span>
            </h1>

            <div className="text-3xl md:text-5xl font-extrabold mb-10 h-[1.2em] flex items-center justify-center lg:justify-start">
              <span className="text-foreground/60 mr-3">I'm a</span>
              <span className="text-[#e91e63] relative">
                {text}
                <span className="absolute -right-1 top-0 bottom-0 w-[2px] bg-[#e91e63] animate-pulse"></span>
              </span>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-12 leading-relaxed font-medium mx-auto lg:mx-0">
              Specializing in building high-end, responsive web experiences with **React** and **WordPress**. Transforming complex ideas into pixel-perfect digital reality.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
              <a
                href="#portfolio"
                className="magenta-button group"
              >
                <span>View My Work</span>
                <Play size={16} className="fill-current group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/resume.pdf"
                className="flex items-center gap-2 px-8 py-4 rounded-full border-2 border-border font-bold text-foreground hover:bg-[#e91e63] hover:border-[#e91e63] hover:text-white transition-all duration-300"
              >
                <Download size={18} />
                <span>Download Resume</span>
              </a>
            </div>
          </motion.div>

          {/* Portrait Image Area */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="lg:w-1/2 relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[550px]">
              {/* Dynamic Glow behind image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#e91e63]/20 blur-[130px] rounded-full animate-pulse"></div>
              
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                {/* Image Container with Border and Clipping */}
                <div className="relative overflow-hidden group">
                  <img 
                    src="/images/hero-tech.png" 
                    alt="Neha Rathore - Professional Tech Concept" 
                    className="w-full h-auto object-cover rounded-b-[2rem] group-hover:scale-105 transition-all duration-700"
                  />
                  {/* Abstract Line overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>
                </div>
              </motion.div>

              {/* Floating Decorative Elements */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-10 -right-10 w-32 h-32 border border-[#e91e63]/20 rounded-full hidden md:block"
              ></motion.div>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-gradient-to-tr from-[#e91e63]/10 to-transparent rounded-full blur-3xl hidden md:block"></div>
            </div>
          </motion.div>

        </div>
      </div>
      
      {/* Bottom Scroll Indicator (Optional, but adds premium feel) */}
      <motion.div 
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay: 2 }}
         className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 hover:opacity-100 transition-opacity cursor-pointer"
         onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
         <span className="text-[10px] uppercase font-black tracking-[0.3em]">Scroll</span>
         <div className="w-[1px] h-10 bg-gradient-to-b from-foreground to-transparent"></div>
      </motion.div>
    </section>
  );
}
