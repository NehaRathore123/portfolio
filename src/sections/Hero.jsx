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
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-background pt-32 lg:pt-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-[0.05] dark:opacity-[0.07] pointer-events-none z-0"></div>

      {/* Large Layered Background Text */}
      <div className="large-bg-text top-1/2 left-0 -translate-y-1/2 select-none">
        DEVELOPER
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">

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

            <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter leading-none text-foreground">
              Neha <br />
              <span className="text-foreground/90">Rathore</span>
            </h1>

            <div className="text-2xl md:text-5xl font-extrabold mb-10 h-[2.4em] md:h-[1.2em] flex items-center justify-center lg:justify-start">
              <span className="text-foreground/60 mr-3 whitespace-nowrap">I'm a</span>
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
                href="/images/neha-rathore-resume.pdf"
                download="Neha_Rathore_Resume.pdf"
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
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 w-full aspect-square flex items-center justify-center"
              >
                {/* Tech Core Animation */}
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Outer Rotating Ring */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute w-[90%] h-[90%] border-2 border-dashed border-[#e91e63]/30 rounded-full"
                  ></motion.div>

                  {/* Middle Rotating Ring (Counter) */}
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute w-[70%] h-[70%] border-2 border-[#e91e63]/20 rounded-full flex items-center justify-center"
                  >
                    <div className="w-4 h-4 bg-[#e91e63] rounded-full absolute -top-2 left-1/2 -translate-x-1/2 blur-[2px]"></div>
                  </motion.div>

                  {/* Inner Glowing Core */}
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="relative w-32 h-32 md:w-48 md:h-48 bg-gradient-to-br from-[#e91e63] to-purple-600 rounded-[2rem] md:rounded-3xl rotate-45 flex items-center justify-center shadow-[0_0_50px_rgba(233,30,99,0.4)]"
                  >
                    <div className="rotate-[-45deg] flex flex-col items-center">
                      <span className="text-white font-black text-2xl md:text-4xl tracking-tighter">NR</span>
                      <div className="h-[2px] w-6 md:w-8 bg-white/50 mt-1 rounded-full"></div>
                    </div>
                  </motion.div>

                  {/* Floating Tech Icons */}
                  {[
                    {
                      name: 'React',
                      delay: 0,
                      x: -120,
                      y: -140,
                      color: '#61DAFB',
                      svg: (
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                          <circle cx="12" cy="12" r="2" />
                          <path d="M12 7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6m0-2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8z" opacity=".3" />
                          <ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="currentColor" strokeWidth="1" fill="none" />
                          <ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="currentColor" strokeWidth="1" fill="none" transform="rotate(60 12 12)" />
                          <ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="currentColor" strokeWidth="1" fill="none" transform="rotate(120 12 12)" />
                        </svg>
                      )
                    },
                    {
                      name: 'JS',
                      delay: 1,
                      x: 140,
                      y: -120,
                      color: '#F7DF1E',
                      svg: (
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 rounded-sm">
                          <path d="M3 3h18v18H3V3zm13.14 14.24c.05.51.21.95.48 1.34.27.39.63.7 1.09.93.46.23 1.02.35 1.67.35.68 0 1.25-.13 1.71-.39.46-.26.81-.62 1.05-1.09.24-.47.36-1.02.36-1.66 0-.82-.2-1.46-.59-1.92s-.98-.79-1.78-1l-.7-.16c-.46-.11-.81-.25-1.04-.43s-.34-.43-.34-.78c0-.28.11-.5.33-.68.22-.18.52-.27.9-.27.34 0 .61.08.82.25s.36.4.45.69l1.64-.69c-.14-.52-.39-.96-.75-1.32-.36-.36-.83-.63-1.4-.81s-1.22-.27-1.93-.27c-.77 0-1.44.15-2.02.45-.58.3-1.02.72-1.32 1.27-.3.55-.45 1.18-.45 1.89 0 .84.21 1.51.62 2.01.41.5 1.01.86 1.8 1.08l.73.2c.5.14.88.3 1.13.48s.38.45.38.8c0 .35-.14.63-.42.84s-.65.32-1.12.32c-.44 0-.8-.11-1.08-.34-.28-.23-.48-.56-.61-.98l-1.63.7zM7.34 14v-2.08H5.66V14c0 .87.21 1.53.64 1.98.43.45 1.07.68 1.93.68.74 0 1.34-.14 1.8-.42.46-.28.78-.69.96-1.23l-1.63-.61c-.08.28-.23.5-.45.67-.22.17-.5.25-.85.25-.33 0-.58-.08-.75-.25-.17-.18-.25-.47-.25-.88z" />
                        </svg>
                      )
                    },
                    {
                      name: 'WP',
                      delay: 2,
                      x: 120,
                      y: 140,
                      color: '#21759B',
                      svg: (
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                          <path d="M12.2,2C6.7,2,2.2,6.5,2.2,12c0,1,0.1,1.9,0.4,2.8c0.1,0.2,0.2,0.4,0.3,0.6c1.1,2.8,3.2,5.1,5.9,6.2 c0.4,0.2,0.8,0.3,1.2,0.4c0,0,0,0,0.1,0c0.6,0.2,1.2,0.2,1.8,0.2c5.5,0,10-4.5,10-10C22.2,6.5,17.7,2,12.2,2z M19.4,7.4 c0.5,1.4,0.8,3,0.8,4.6c0,1.9-0.4,3.6-1.1,5.2l-3.3-9.1C17,8.2,18.3,7.7,19.4,7.4z M11.8,20c-1.4,0-2.8-0.4-4.1-1.2l3.4-9.9 l3.4,9.9C13.8,19.6,12.8,20,11.8,20z M4.1,13.8c0-0.7,0.1-1.3,0.3-2l2.3,6.3C5.3,16.8,4.4,15.4,4.1,13.8z" />
                        </svg>
                      )
                    },
                    {
                      name: 'Tailwind',
                      delay: 3,
                      x: -140,
                      y: 120,
                      color: '#38B2AC',
                      svg: (
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                          <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.335,6.182,14.975,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.335,13.382,8.975,12,6.001,12z" />
                        </svg>
                      )
                    },
                  ].map((badge, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        x: typeof window !== 'undefined' && window.innerWidth < 768 ? badge.x * 0.5 : badge.x,
                        y: typeof window !== 'undefined' && window.innerWidth < 768 ? badge.y * 0.5 : badge.y,
                        translateY: [0, -15, 0]
                      }}
                      whileHover={{ scale: 1.2, zIndex: 50 }}
                      transition={{
                        opacity: { duration: 1, delay: badge.delay },
                        translateY: { duration: 3, repeat: Infinity, delay: badge.delay },
                        scale: { type: "spring", stiffness: 300 }
                      }}
                      className="absolute p-2 md:p-3 bg-background/80 backdrop-blur-md border border-border rounded-xl md:rounded-2xl shadow-2xl z-20 group cursor-pointer hover:!bg-[#e91e63] hover:!text-white transition-all"
                      style={{ color: badge.color }}
                    >
                      <div className="relative">
                        <div className="w-5 h-5 md:w-6 md:h-6">
                          {badge.svg}
                        </div>
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-foreground text-background text-[8px] font-black px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                          {badge.name}
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  {/* Connecting Lines (Decorative) */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                    <motion.line
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: 1 }}
                      x1="50%" y1="50%" x2={typeof window !== 'undefined' && window.innerWidth < 768 ? "35%" : "20%"} y2={typeof window !== 'undefined' && window.innerWidth < 768 ? "35%" : "20%"} stroke="#e91e63" strokeWidth="1"
                    />
                    <motion.line
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: 1.5 }}
                      x1="50%" y1="50%" x2={typeof window !== 'undefined' && window.innerWidth < 768 ? "65%" : "80%"} y2={typeof window !== 'undefined' && window.innerWidth < 768 ? "65%" : "80%"} stroke="#e91e63" strokeWidth="1"
                    />
                  </svg>
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

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 hover:opacity-100 transition-opacity cursor-pointer"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-[10px] uppercase font-black tracking-[0.3em]">Scroll</span>
        <div className="w-[1px] h-6 md:h-10 bg-gradient-to-b from-foreground to-transparent"></div>
      </motion.div>
    </section>
  );
}
