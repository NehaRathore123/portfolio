import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Filter, Layout, Globe, Code2 } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'ShipMent Hub',
    category: 'React',
    description: 'Transforming shipping logistics with a high-performance React frontend. Integrated complex tracking and cost management interfaces.',
    tech: ['React.js', 'Tailwind', 'Framer Motion', 'REST API'],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop',
    github: 'https://github.com/neharathore',
    demo: 'https://shipment-hub.demo.com',
  },
  {
    id: 2,
    title: 'Global Food Oman',
    category: 'HTML/CSS',
    description: 'A premium bilingual corporate experience built for global engagement. Focused on RTL optimization and pixel-perfect responsiveness.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'RTL Support'],
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop',
    github: '#',
    demo: 'https://globalfoodoman.com',
  },
  {
    id: 3,
    title: 'Palette Wealth',
    category: 'WordPress',
    description: 'A premium wealth management platform focused on personalized financial strategies. Built with a sophisticated corporate aesthetic.',
    tech: ['WordPress', 'Elementor', 'Financial Strategy', 'Custom CSS'],
    image: '/images/palette-wealth.png',
    github: '#',
    demo: 'https://www.palettewealth.com/',
  },
  {
    id: 4,
    title: 'BluSapent',
    category: 'WordPress',
    description: 'Global technology consulting site providing precision-driven software solutions and strategic operational streamlining.',
    tech: ['WordPress', 'Software Solutions', 'Responsive Design', 'API Integration'],
    image: '/images/blusapent.png',
    github: '#',
    demo: 'https://blusapent.com/',
  },
  {
    id: 5,
    title: 'ICG - Certifications',
    category: 'WordPress',
    description: 'High-ticket WordPress solution for an international certification group. Optimized for speed, SEO, and professional clarity.',
    tech: ['WordPress', 'Elementor Pro', 'Custom CSS', 'Seo Optimized'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    github: '#',
    demo: 'https://icg-cert.com',
  },
];

const categories = ['All', 'React', 'WordPress', 'HTML/CSS'];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('All');

  const filteredProjects = activeTab === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <section id="portfolio" className="py-12 bg-background relative px-6 overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-8 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#e91e63]/10 text-[#e91e63] text-[10px] font-bold uppercase tracking-[0.2em] mb-4 font-black">
               Portfolio
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-foreground">Featured <span className="gradient-text">Case Studies</span></h2>
            <p className="text-muted-foreground text-lg italic font-medium">
              "Bringing premium digital visions to life through code"
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div 
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="flex flex-wrap gap-2 glass p-2 rounded-2xl border border-border justify-center lg:justify-start"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-6 py-3 rounded-xl text-[10px] uppercase tracking-widest font-black transition-all ${
                  activeTab === cat 
                  ? 'bg-[#e91e63] text-white shadow-lg shadow-[#e91e63]/20' 
                  : 'text-muted-foreground hover:bg-foreground/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative glass rounded-[2.5rem] border border-border overflow-hidden flex flex-col h-full hover:shadow-2xl hover:shadow-[#e91e63]/5 transition-all hover:border-[#e91e63]/30"
              >
                {/* Image Preview */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>
                  
                  <div className="absolute inset-0 bg-background/20 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-4 backdrop-blur-[2px]">
                     {project.github !== '#' && (
                       <a href={project.github} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center hover:scale-110 active:scale-95 transition-transform shadow-xl">
                          <Github size={20} />
                       </a>
                     )}
                     <a href={project.demo} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-[#e91e63] text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-transform shadow-xl">
                        <ExternalLink size={20} />
                     </a>
                  </div>
                  <div className="absolute top-6 left-6 bg-white/90 dark:bg-black/90 text-[#e91e63] text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full backdrop-blur-md border border-[#e91e63]/20 shadow-lg">
                     {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                     {project.category === 'React' && <Code2 size={16} className="text-[#e91e63]" />}
                     {project.category === 'WordPress' && <Globe size={16} className="text-purple-500" />}
                     {project.category === 'HTML/CSS' && <Layout size={16} className="text-orange-500" />}
                     <h3 className="text-2xl font-bold text-foreground group-hover:text-[#e91e63] transition-colors">{project.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-grow font-medium">
                    {project.description}
                  </p>
                  
                  <div className="pt-6 border-t border-border flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg bg-foreground/5 text-muted-foreground border border-border group-hover:border-[#e91e63]/20 group-hover:text-[#e91e63] transition-colors">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
