import { motion } from 'framer-motion';
import { User, Target, Mail, Phone, Code2, Layout, Globe } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'Experience', value: '1+ Years' },
    { label: 'Projects', value: '10+' },
    { label: 'Skills', value: '15+' },
    { label: 'Location', value: 'Indore, IN' },
  ];

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Profile Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/3 relative"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-purple-600 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative glass rounded-[2.5rem] p-3 border border-border overflow-hidden">
                <img
                  src="/images/about-professional.png"
                  alt="Neha Rathore"
                  className="rounded-[2rem] w-full aspect-[4/5] object-cover hover:scale-105 transition-all duration-700"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-2/3"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#e91e63]/10 text-[#e91e63] text-[10px] font-bold uppercase tracking-[0.2em] mb-6 font-black italic">
               About Me
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight text-foreground">
              Passionate About <br />
              <span className="gradient-text">Clean Code & Design</span>
            </h2>
            
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed mb-10">
              <p>
                I'm <strong>Neha Rathore</strong>, a Frontend Developer with over a year of experience specializing in building responsive, high-performance web applications using **React** and **WordPress**.
              </p>
              <p>
                My expertise lies in transforming complex design concepts into pixel-perfect reality. I thrive on the bridge between aesthetics and logic, ensuring every website I build is not only visually stunning but also technically excellent.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
              {stats.map((stat, i) => (
                <div key={i} className="glass p-4 md:p-5 rounded-2xl border border-border text-center group hover:bg-[#e91e63]/5 transition-all">
                  <p className="text-[#e91e63] font-black text-xl md:text-2xl mb-1">{stat.value}</p>
                  <p className="text-muted-foreground text-[8px] md:text-[10px] font-bold uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
               <div className="flex items-start gap-4 p-8 glass rounded-[2rem] border border-border group hover:border-[#e91e63]/30 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-[#e91e63]/10 flex items-center justify-center text-[#e91e63] flex-shrink-0 group-hover:scale-110 transition-transform">
                     <Layout size={24} />
                  </div>
                  <div>
                     <h4 className="font-bold text-foreground mb-1">UI/UX Focus</h4>
                     <p className="text-sm text-muted-foreground">Prioritizing user-centric designs that are intuitive and accessible.</p>
                  </div>
               </div>
               <div className="flex items-start gap-4 p-8 glass rounded-[2rem] border border-border group hover:border-purple-500/30 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500 flex-shrink-0 group-hover:scale-110 transition-transform">
                     <Globe size={24} />
                  </div>
                  <div>
                     <h4 className="font-bold text-foreground mb-1">WordPress Expert</h4>
                     <p className="text-sm text-muted-foreground">Custom theme development and advanced Elementor performance.</p>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
