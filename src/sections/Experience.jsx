import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Zap } from 'lucide-react';

const experiences = [
  {
    company: 'FODUU - Web Design Company India',
    role: 'Web Designer & Frontend Developer',
    duration: '11/2024 - Present',
    location: 'Indore, India',
    description: [
      'Designing and developing responsive and multilingual websites using WordPress and Elementor for international clients.',
      'Specialized in Arabic, French, and German websites with proper localization and RTL support.',
      'Creating high-fidelity, interactive frontend interfaces using HTML5, CSS3, ES6+, and React.js.',
      'Customizing complex WordPress themes focusing on core web vitals, SEO, and responsive aesthetics.',
      'Collaborated on dynamic frontend components for MERN-based applications.'
    ]
  },
  {
    company: 'YPSILON IT SOLUTION PVT. LTD',
    role: 'Frontend Developer Intern',
    duration: '09/2023 - 03/2024',
    location: 'Indore, India',
    description: [
      'Built intuitive user interfaces using React.js and modern state management.',
      'Integrated backend APIs with frontend components ensuring seamless data flow.',
      'Collaborated on responsive design implementations using CSS Grid and Flexbox.',
      'Refined UI components based on user feedback and accessibility standards.'
    ]
  }
];

const education = [
  {
    institution: 'Sage University Indore',
    degree: 'Master of Computer Application (MCA)',
    duration: '2022 - 2024',
    score: 'CGPA of 7.28'
  },
  {
    institution: 'Maharani Laxmi Bai Girls PG College',
    degree: 'Bachelor of Computer Science (Bsc.cs)',
    duration: '2019 - 2022',
    score: '63%'
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-12 bg-background relative overflow-hidden px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#e91e63]/10 text-[#e91e63] text-[10px] font-bold uppercase tracking-[0.2em] mb-4 font-black">
             Career Path
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-foreground">Professional <span className="gradient-text">Journey</span></h2>
          <p className="text-muted-foreground italic font-medium">Developing digital excellence across every project</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Experience Timeline */}
          <div className="space-y-10">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Briefcase className="text-[#e91e63]" /> Experience
            </h3>
            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:w-[1px] before:-translate-x-px before:bg-gradient-to-b before:from-[#e91e63]/50 before:via-border/50 before:to-transparent">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-12"
                >
                  <div className="absolute left-0 top-0 w-10 h-10 bg-background border-2 border-[#e91e63] rounded-full flex items-center justify-center z-10 shadow-lg shadow-[#e91e63]/20">
                    <div className="w-2.5 h-2.5 bg-[#e91e63] rounded-full"></div>
                  </div>
                  <div className="glass p-8 rounded-[2rem] border border-border group hover:border-[#e91e63]/40 transition-all">
                    <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                      <div>
                        <h4 className="text-xl font-bold text-foreground group-hover:text-[#e91e63] transition-colors">{exp.role}</h4>
                        <p className="text-muted-foreground font-bold text-sm tracking-wide">{exp.company}</p>
                      </div>
                      <div className="text-[10px] font-bold text-muted-foreground flex flex-col items-end gap-1 uppercase tracking-widest">
                        <span className="flex items-center gap-1 bg-foreground/5 px-2 py-1 rounded-md"><Calendar size={12} /> {exp.duration}</span>
                        <span className="flex items-center gap-1 bg-foreground/5 px-2 py-1 rounded-md"><MapPin size={12} /> {exp.location}</span>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-muted-foreground text-sm flex gap-3">
                          <Zap size={14} className="text-primary mt-1 flex-shrink-0" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education & Extra */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <Briefcase className="text-primary" /> Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass p-8 rounded-[2rem] border border-border relative overflow-hidden"
                  >
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="text-lg font-bold text-foreground">{edu.degree}</h4>
                      <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">{edu.duration}</span>
                    </div>
                    <p className="text-muted-foreground text-sm font-medium mb-1">{edu.institution}</p>
                    <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">{edu.score}</p>
                    
                    <div className="absolute -bottom-6 -right-6 opacity-5">
                       <Briefcase size={80} />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <Briefcase className="text-primary" /> Certifications
              </h3>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-[2rem] border border-l-4 border-l-primary border-border"
              >
                <h4 className="text-lg font-bold mb-2">Advanced Frontend Development</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">Certified in React.js, WordPress Performance, and Modern UI/UX implementation.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
