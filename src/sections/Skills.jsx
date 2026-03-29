import { motion } from 'framer-motion';
import { 
  Layout, 
  Globe, 
  Settings,
  Monitor,
  Smartphone,
  Figma,
  Code2,
  FileCode
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: <Code2 className="text-blue-500" />,
    skills: [
      { name: 'HTML5', level: '95%' },
      { name: 'CSS3 / SCSS', level: '90%' },
      { name: 'JavaScript (ES6+)', level: '85%' },
      { name: 'React.js', level: '80%' },
    ]
  },
  {
    title: 'CMS & Ecommerce',
    icon: <Globe className="text-purple-500" />,
    skills: [
      { name: 'WordPress', level: '95%' },
      { name: 'Elementor / Pro', level: '95%' },
      { name: 'WooCommerce', level: '90%' },
      { name: 'RTL Layouts', level: '85%' },
    ]
  },
  {
    title: 'Frameworks & Tools',
    icon: <Settings className="text-green-500" />,
    skills: [
      { name: 'Bootstrap / Tailwind', level: '90%' },
      { name: 'Git / GitHub', level: '85%' },
      { name: 'VS Code', level: '95%' },
      { name: 'Vite', level: '80%' },
    ]
  },
  {
    title: 'Optimization & Design',
    icon: <Monitor className="text-orange-500" />,
    skills: [
      { name: 'SEO Best Practices', level: '85%' },
      { name: 'Site Speed Optimization', level: '80%' },
      { name: 'Responsive UI Design', level: '95%' },
      { name: 'Figma to Code', level: '80%' },
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-background relative px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#e91e63]/10 text-[#e91e63] text-[10px] font-bold uppercase tracking-[0.2em] mb-4 font-black">
             My Toolkit
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-foreground">Expertise in <span className="gradient-text">Modern Tech</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto italic font-medium">
            "Crafting digital experiences using the best frontend tools"
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-[2rem] border border-border group hover:border-[#e91e63]/40 transition-all hover:shadow-2xl hover:shadow-[#e91e63]/5"
            >
              <div className="w-14 h-14 rounded-2xl bg-foreground/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-6 text-foreground">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-xs mb-2">
                      <span className="font-bold text-foreground/70 uppercase tracking-tighter">{skill.name}</span>
                      <span className="text-[#e91e63] font-black">{skill.level}</span>
                    </div>
                    <div className="h-1.5 bg-foreground/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.level }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                        className="h-full bg-[#e91e63] rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
