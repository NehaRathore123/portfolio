import { motion } from 'framer-motion';
import {
  Globe,
  Settings,
  Monitor,
  Code2,
  CheckCircle2
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: <Code2 size={20} className="text-[#e91e63]" />,
    skills: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind']
  },
  {
    title: 'CMS & Store',
    icon: <Globe size={20} className="text-[#e91e63]" />,
    skills: ['WordPress', 'Elementor', 'WooCommerce', 'Shopify']
  },
  {
    title: 'Tools',
    icon: <Settings size={20} className="text-[#e91e63]" />,
    skills: ['Git / GitHub', 'VS Code', 'Vite', 'NPM / Yarn']
  },
  {
    title: 'Design & SEO',
    icon: <Monitor size={20} className="text-[#e91e63]" />,
    skills: ['Figma', 'UI/UX', 'SEO', 'Site Speed']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-background px-6">
      <div className="container mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            My <span className="gradient-text">Toolkit</span>
          </h2>
          <p className="text-muted-foreground text-sm uppercase tracking-widest font-bold">
            What I use to build amazing things
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl border border-border bg-card/30 hover:bg-card hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-xl bg-[#e91e63]/5 group-hover:bg-[#e91e63]/10 transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  {category.title}
                </h3>
              </div>

              <ul className="space-y-4">
                {category.skills.map((skill, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group/item"
                  >
                    <CheckCircle2
                      size={14}
                      className="text-[#e91e63] opacity-40 group-hover/item:opacity-100 transition-opacity"
                    />
                    <span className="text-sm font-medium">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}