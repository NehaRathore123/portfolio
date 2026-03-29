import { motion } from 'framer-motion';
import { Download, Eye, FileText } from 'lucide-react';

export default function Resume() {
  return (
    <section id="resume" className="py-24 bg-background px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">My <span className="gradient-text">Resume</span></h2>
          <p className="text-muted-foreground tracking-wide">View or download my professional credentials</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-primary to-purple-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative glass p-4 rounded-2xl border border-border overflow-hidden">
              <div className="aspect-[3/4] bg-white/5 rounded-xl flex items-center justify-center relative overflow-hidden">
                {/* Simplified Resume Mockup */}
                <div className="absolute inset-0 p-8 flex flex-col gap-4 opacity-50">
                  <div className="h-6 w-3/4 bg-foreground/20 rounded"></div>
                  <div className="h-4 w-1/2 bg-foreground/10 rounded"></div>
                  <div className="h-4 w-full bg-foreground/10 rounded"></div>
                  <div className="mt-8 h-4 w-1/3 bg-primary/30 rounded"></div>
                  <div className="h-24 w-full bg-foreground/10 rounded"></div>
                  <div className="h-24 w-full bg-foreground/10 rounded"></div>
                  <div className="h-24 w-full bg-foreground/10 rounded"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-background/40 backdrop-blur-sm group-hover:backdrop-blur-none transition-all duration-500">
                  <Eye className="w-12 h-12 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4">
               <button className="flex items-center gap-2 px-6 py-3 rounded-full gradient-bg text-white font-bold shadow-xl shadow-primary/20 hover:scale-105 transition-transform">
                  <Eye size={20} /> Preview
               </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold mb-4">Looking for a <span className="text-primary">Skilled Developer?</span></h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am ready to bring my expertise in MERN stack development and WordPress customization to your next project. 
                My resume provides a comprehensive overview of my technical skills, professional experience, and academic background.
              </p>
            </div>

            <div className="grid gap-4">
              <div className="flex items-center gap-4 p-4 glass rounded-2xl border border-border">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <FileText size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Resume.pdf</h4>
                  <p className="text-sm text-muted-foreground">PDF Format • 1.2 MB</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="/resume.pdf" 
                download 
                className="flex items-center gap-2 px-8 py-4 rounded-full gradient-bg text-white font-bold hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all"
              >
                <Download size={20} /> Download CV
              </a>
              <a 
                href="#contact" 
                className="flex items-center gap-2 px-8 py-4 rounded-full glass font-bold hover:bg-white/10 transition-all border border-border"
              >
                Get In Touch
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
