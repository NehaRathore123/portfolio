import { motion } from 'framer-motion';
import { 
  Code, 
  Zap, 
  Monitor, 
  Smartphone, 
  Settings,
  Layout,
  Database,
  Globe
} from 'lucide-react';

const services = [
  {
    title: 'MERN Stack Development',
    description: 'Building robust, scalable full-stack applications using MongoDB, Express, React, and Node.js.',
    icon: Database,
    color: 'text-green-500',
    bg: 'bg-green-500/10'
  },
  {
    title: 'WordPress Customization',
    description: 'Expertise in Elementor, WooCommerce, and custom theme adjustments for high-performance sites.',
    icon: Code,
    color: 'text-blue-500',
    bg: 'bg-blue-500/10'
  },
  {
    title: 'Frontend UI/UX',
    description: 'Creating pixel-perfect, responsive interfaces with modern CSS, Tailwind, and Framer Motion.',
    icon: Layout,
    color: 'text-purple-500',
    bg: 'bg-purple-500/10'
  },
  {
    title: 'Speed Optimization',
    description: 'Enhancing website performance and SEO metrics to ensure lightning-fast user experiences.',
    icon: Zap,
    color: 'text-yellow-500',
    bg: 'bg-yellow-500/10'
  },
  {
    title: 'Multilingual & RTL',
    description: 'Developing sites with Arabic RTL support and proper localization for global audiences.',
    icon: Globe,
    color: 'text-cyan-500',
    bg: 'bg-cyan-500/10'
  },
  {
    title: 'API Integration',
    description: 'Seamlessly connecting frontends with backend services and third-party APIs.',
    icon: Settings,
    color: 'text-orange-500',
    bg: 'bg-orange-500/10'
  },
];

export default function Services() {
  return (
    <section id="services" className="py-12 bg-background relative px-6">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4"
          >
             My Expertise
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-4"
          >
            Premium <span className="gradient-text">Solutions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Delivering high-end digital solutions that help brands stand out and convert visitors into customers.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 glass rounded-3xl border border-border hover:border-primary/30 transition-all group overflow-hidden relative"
            >
              <div className={`w-14 h-14 rounded-2xl ${service.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className={`w-7 h-7 ${service.color}`} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{service.description}</p>
              
              <div className="absolute -bottom-2 -right-2 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                 <service.icon size={120} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
