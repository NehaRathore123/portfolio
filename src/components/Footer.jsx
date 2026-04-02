import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border pt-10 pb-10 px-6 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-10">
          <div className="col-span-2">
             <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#e91e63] flex items-center justify-center text-white font-bold">
                  NR
                </div>
                <span className="text-2xl font-black tracking-tighter text-foreground">Neha <span className="text-[#e91e63]">Rathore</span></span>
             </div>
             <p className="text-muted-foreground text-lg max-w-sm mb-8 font-medium italic">
                Crafting digital experiences with precision and passion. Specialized in Frontend and WordPress development.
             </p>
             <div className="flex gap-4">
                {[
                  { icon: <Github size={20}/>, href: 'https://github.com/neharathore' },
                  { icon: <Linkedin size={20}/>, href: 'https://linkedin.com/in/neharathore' },
                  { icon: <Mail size={20}/>, href: 'mailto:neharathore25088@gmail.com' }
                ].map((item, i) => (
                  <a key={i} href={item.href} className="w-10 h-10 rounded-full glass border border-border flex items-center justify-center text-foreground hover:!bg-[#e91e63] hover:text-white hover:border-[#e91e63] hover:shadow-[0_0_15px_rgba(233,30,99,0.4)] transition-all transform hover:-translate-y-1">
                    {item.icon}
                  </a>
                ))}
             </div>
          </div>

          <div>
             <h3 className="text-sm font-black uppercase tracking-[0.2em] mb-8 text-foreground">Quick Links</h3>
             <ul className="space-y-4">
                {['Home', 'About', 'Services', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase().replace('projects', 'portfolio')}`} className="text-muted-foreground hover:text-[#e91e63] transition-colors font-bold text-sm uppercase tracking-widest">
                      {item}
                    </a>
                  </li>
                ))}
             </ul>
          </div>

          <div>
             <h3 className="text-sm font-black uppercase tracking-[0.2em] mb-8 text-foreground">Contact</h3>
             <ul className="space-y-4">
                <li className="text-muted-foreground font-medium">Indore, India</li>
                <li className="text-muted-foreground hover:text-[#e91e63] transition-colors font-medium">
                   <a href="mailto:neharathore25088@gmail.com">neharathore25088@gmail.com</a>
                </li>
                <li className="text-muted-foreground font-medium">+91 7223055830</li>
             </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
           <p className="text-xs text-muted-foreground font-bold tracking-widest uppercase">
              © {currentYear} <span className="text-[#e91e63] font-black">Neha Rathore</span>. All rights reserved.
           </p>
           
           <button 
             onClick={scrollToTop}
             className="w-12 h-12 rounded-full glass border border-border flex items-center justify-center text-[#e91e63] hover:bg-[#e91e63] hover:text-white hover:border-[#e91e63] transition-all group shadow-xl shadow-[#e91e63]/5 hover:shadow-[#e91e63]/30"
           >
              <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
           </button>
           
           <p className="text-xs text-muted-foreground font-bold tracking-widest uppercase">
              Built with <span className="text-[#e91e63]">React</span> & <span className="text-[#e91e63]">Tailwind</span>
           </p>
        </div>
      </div>
      
      {/* Decorative Blob */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#e91e63]/5 rounded-full blur-[100px] pointer-events-none"></div>
    </footer>
  );
}
