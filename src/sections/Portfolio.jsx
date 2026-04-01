import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Filter, Layout, Globe, Code2 } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'TVET Compass',
    category: 'WordPress',
    description: 'Strategic consultancy for technical vocational education, driving operational excellence and growth through digital solutions.',
    tech: ['WordPress', 'Elementor', 'Custom CSS', 'Strategy'],
    image: '/project/tvtcompass.png',
    github: '#',
    demo: 'https://tvetcompass.com/',
  },
  {
    id: 2,
    title: 'Global Food Oman',
    category: 'React',
    description: 'A premium corporate experience built with React. Focused on performance, international engagement, and pixel-perfect responsiveness.',
    tech: ['React.js', 'Tailwind CSS', 'Framer Motion', 'RTL Support'],
    image: '/project/global-food.png',
    github: '#',
    demo: 'https://globalfoodoman.com',
  },
  {
    id: 3,
    title: 'ICG - Certifications',
    category: 'React',
    description: 'High-performance React solution for an international certification group. Optimized for speed, professional clarity, and user engagement.',
    tech: ['React.js', 'Tailwind', 'REST API', 'Modern UI'],
    image: '/project/international-certification-group.png',
    github: '#',
    demo: 'https://international-certification-group.com',
  },
  {
    id: 4,
    title: 'GovEdge Consultants',
    category: 'WordPress',
    description: 'A professional consultancy firm specializing in governance, risk, and compliance (GRC) for institutional excellence.',
    tech: ['WordPress', 'Divi', 'Business GRC', 'SEO'],
    image: '/project/govedge.png',
    github: '#',
    demo: 'https://www.govedge.co/',
  },
  {
    id: 5,
    title: 'Quiet Orbit',
    category: 'WordPress',
    description: 'Clarity-focused private consultations for life transitions, career shifts, and personal structural relocation in Luxembourg.',
    tech: ['WordPress', 'Modern Aesthetic', 'Premium Typography'],
    image: '/project/quietorbit.png',
    github: '#',
    demo: 'https://quietorbit.lu/',
  },
  {
    id: 6,
    title: 'Silk Strands',
    category: 'WordPress',
    description: 'Premium e-commerce destination for high-end hair styling tools and professional-grade beauty accessories.',
    tech: ['WordPress', 'WooCommerce', 'E-commerce', 'Payment Gateway'],
    image: '/project/silkstrands.png',
    github: '#',
    demo: 'https://www.silkstrands.in/',
  },
  {
    id: 7,
    title: 'Vellymeta',
    category: 'WordPress',
    description: 'A global beauty and skincare brand presence delivering high-performance personal care products to millions.',
    tech: ['WordPress', 'WooCommerce', 'Global Reach', 'UX Design'],
    image: '/project/vellymeta.png',
    github: '#',
    demo: 'https://www.vellymeta.com/',
  },
  {
    id: 8,
    title: 'Palette Wealth',
    category: 'WordPress',
    description: 'Strategic wealth management and investment advisory services designed to create lasting financial masterpieces.',
    tech: ['WordPress', 'Finance Dashboard', 'Premium Dark Mode'],
    image: '/project/palettewealth.png',
    github: '#',
    demo: 'https://palettewealth.com',
  },
  {
    id: 9,
    title: 'Blusapent',
    category: 'WordPress',
    description: 'Innovative consulting and technology services empowering businesses with precise, high-performance software solutions.',
    tech: ['WordPress', 'Corporate', 'Consulting Theme'],
    image: '/project/blusapent.png',
    github: '#',
    demo: 'https://blusapent.com/',
  },
  {
    id: 10,
    title: 'FHIZO',
    category: 'WordPress',
    description: 'A global fuel and commodity supply powerhouse fueling international trade through reliable energy solutions.',
    tech: ['WordPress', 'Industrial', 'Energy Portfolio'],
    image: '/project/fhizo.png',
    github: '#',
    demo: 'http://fhizo.com/',
  },
];

const categories = ['All', 'React', 'WordPress'];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('All');

  const filteredProjects = activeTab === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <section id="portfolio" className="py-24 bg-background relative px-6 overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-8">
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
             className="flex flex-wrap gap-2 glass p-2 rounded-2xl border border-border"
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
                       <a href={project.github} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-xl hover:!bg-[#e91e63] hover:text-white">
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
                <div className="p-6 md:p-8 flex-grow flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                     {project.category === 'React' && <Code2 size={16} className="text-[#e91e63]" />}
                     {project.category === 'WordPress' && <Globe size={16} className="text-purple-500" />}
                     {project.category === 'HTML/CSS' && <Layout size={16} className="text-orange-500" />}
                     <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-[#e91e63] transition-colors">{project.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 md:mb-8 flex-grow font-medium">
                    {project.description}
                  </p>
                  
                  <div className="pt-6 border-t border-border flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-lg bg-foreground/5 text-muted-foreground border border-border group-hover:border-[#e91e63]/20 group-hover:text-[#e91e63] transition-colors">
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
