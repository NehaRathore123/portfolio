import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-12 bg-background relative px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">Let's Build Something <br /><span className="gradient-text">Great Together</span></h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="space-y-6">
              {[
                { icon: <Mail size={24} />, label: 'Email', value: 'neharathore855@gmail.com', href: 'mailto:neharathore855@gmail.com' },
                { icon: <Phone size={24} />, label: 'Phone', value: '+91 8817652701', href: 'tel:+918817652701' },
                { icon: <MapPin size={24} />, label: 'Location', value: 'Indore, India', href: '#' },
              ].map((item, i) => (
                <a 
                  key={i} 
                  href={item.href}
                  className="flex items-center gap-6 p-6 glass rounded-2xl border border-border hover:border-[#e91e63]/50 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#e91e63]/10 flex items-center justify-center text-[#e91e63] group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">{item.label}</p>
                    <p className="text-lg font-bold text-foreground">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-12 flex items-center gap-6">
               <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Connect with me:</p>
               <div className="flex gap-4">
                  {[
                    { icon: <Linkedin size={20} />, href: 'https://linkedin.com/in/neharathore' },
                    { icon: <Github size={20} />, href: 'https://github.com/neharathore' },
                    { icon: <Instagram size={20} />, href: '#' },
                  ].map((social, i) => (
                    <a key={i} href={social.href} className="w-10 h-10 rounded-full glass border border-border flex items-center justify-center text-foreground hover:bg-[#e91e63] hover:text-white transition-all">
                       {social.icon}
                    </a>
                  ))}
               </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="glass p-10 rounded-3xl border border-border shadow-2xl"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground/80 lowercase tracking-wider ml-1">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-foreground/5 border border-border rounded-xl px-5 py-3 focus:outline-none focus:border-[#e91e63] transition-colors text-foreground"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground/80 lowercase tracking-wider ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-foreground/5 border border-border rounded-xl px-5 py-3 focus:outline-none focus:border-[#e91e63] transition-colors text-foreground"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-foreground/80 lowercase tracking-wider ml-1">Subject</label>
                <input 
                  type="text" 
                  placeholder="Project Inquiry"
                  className="w-full bg-foreground/5 border border-border rounded-xl px-5 py-3 focus:outline-none focus:border-[#e91e63] transition-colors text-foreground"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-foreground/80 lowercase tracking-wider ml-1">Your Message</label>
                <textarea 
                  rows="5"
                  placeholder="Tell me about your project..."
                  className="w-full bg-foreground/5 border border-border rounded-xl px-5 py-3 focus:outline-none focus:border-[#e91e63] transition-colors text-foreground resize-none"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="magenta-button w-full justify-center group"
              >
                <span>Send Message</span>
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
