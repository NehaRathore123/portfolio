import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, CheckCircle2, Loader2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Using a proxy or different content type might be needed depending on Google Script deployment
      // But we'll follow the user's script structure
      await fetch('https://script.google.com/macros/s/AKfycbxPJm6V454QfqggmC8C-29_IAswGbGZA1BLSVllrx2cLWwIgHu0Bil-eBS5UH5ig5iz/exec', {
        method: 'POST',
        mode: 'no-cors', // Standard for Google Script Web Apps to avoid CORS issues
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-12 bg-background relative px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6">Let's Build Something <br className="hidden sm:block" /><span className="gradient-text">Great Together</span></h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="space-y-6">
              {[
                { icon: <Mail size={24} />, label: 'Email', value: 'neharathore25088@gmail.com', href: 'mailto:neharathore25088@gmail.com' },
                { icon: <Phone size={24} />, label: 'Phone', value: '+91 7223055830', href: 'tel:+917223055830' },
                { icon: <MapPin size={24} />, label: 'Location', value: 'Indore, India', href: '#' },
              ].map((item, i) => (
                <a 
                  key={i} 
                  href={item.href}
                  className="flex items-center gap-4 sm:gap-6 p-4 sm:p-6 glass rounded-2xl border border-border hover:border-[#e91e63]/50 transition-all group min-w-0"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-xl bg-[#e91e63]/10 flex items-center justify-center text-[#e91e63] group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] sm:text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">{item.label}</p>
                    <p className="text-sm sm:text-lg font-bold text-foreground truncate">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
               <p className="text-xs sm:text-sm font-bold text-muted-foreground uppercase tracking-widest">Connect with me:</p>
               <div className="flex gap-3 sm:gap-4">
                  {[
                    { icon: <Linkedin size={20} />, href: 'https://linkedin.com/in/neharathore' },
                    { icon: <Github size={20} />, href: 'https://github.com/neharathore' },
                    { icon: <Instagram size={20} />, href: '#' },
                  ].map((social, i) => (
                    <a key={i} href={social.href} className="w-10 h-10 shrink-0 rounded-full glass border border-border flex items-center justify-center text-foreground hover:!bg-[#e91e63] hover:text-white hover:border-[#e91e63] transition-all">
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
             className="glass p-6 md:p-10 rounded-3xl border border-border shadow-2xl relative overflow-hidden"
          >
            {submitted && (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="absolute inset-0 bg-background/80 backdrop-blur-sm z-10 flex flex-col items-center justify-center text-center p-6"
              >
                <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 mb-6">
                  <CheckCircle2 size={48} />
                </div>
                <h3 className="text-2xl font-black mb-2">Message Sent!</h3>
                <p className="text-muted-foreground font-medium">Thank you for reaching out. I'll get back to you soon.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-[#e91e63] font-bold text-sm uppercase tracking-widest hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground/80 lowercase tracking-wider ml-1">Your Name</label>
                  <input 
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-foreground/5 border border-border rounded-xl px-5 py-3 focus:outline-none focus:border-[#e91e63] transition-colors text-foreground"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground/80 lowercase tracking-wider ml-1">Email Address</label>
                  <input 
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-foreground/5 border border-border rounded-xl px-5 py-3 focus:outline-none focus:border-[#e91e63] transition-colors text-foreground"
                  />
                </div>
              </div> */}
              
                 <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground/80 lowercase tracking-wider ml-1">Your Name</label>
                  <input 
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-foreground/5 border border-border rounded-xl px-5 py-3 focus:outline-none focus:border-[#e91e63] transition-colors text-foreground"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground/80 lowercase tracking-wider ml-1">Email Address</label>
                  <input 
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-foreground/5 border border-border rounded-xl px-5 py-3 focus:outline-none focus:border-[#e91e63] transition-colors text-foreground"
                  />
                </div>
              {/* Subject Field Removed */}

              <div className="space-y-2">
                <label className="text-sm font-bold text-foreground/80 lowercase tracking-wider ml-1">Your Message</label>
                <textarea 
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="8"
                  placeholder="Tell me about your project..."
                  className="w-full bg-foreground/5 border border-border rounded-xl px-5 py-3 focus:outline-none focus:border-[#e91e63] transition-colors text-foreground resize-none"
                ></textarea>
              </div>
              <button 
                disabled={loading}
                type="submit" 
                className="magenta-button w-full justify-center group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <Loader2 size={18} className="animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
