import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO at TechStream',
    content: 'Neha transformed our outdated website into a modern, high-converting platform. Her attention to detail and technical expertise are unmatched.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop',
    rating: 5
  },
  {
    name: 'Mark Thompson',
    role: 'Founder of PixelPerfect',
    content: 'The WordPress site Neha built is incredibly fast and easy to manage. She is a true professional and a pleasure to work with.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop',
    rating: 5
  },
  {
    name: 'Emily Davis',
    role: 'Marketing Director',
    content: 'Our SEO rankings spiked after Neha optimized our site speed. The new Next.js frontend looks stunning and feels premium.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop',
    rating: 5
  },
];

export default function Testimonials() {
  return (
    <section className="py-12 bg-background overflow-hidden px-6">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-4"
          >
            Client <span className="gradient-text">Feedback</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Don't just take my word for it. Here's what my clients have to say about working together.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 glass rounded-3xl border border-border group relative flex flex-col"
            >
              <div className="flex gap-1 mb-6">
                 {[...Array(t.rating)].map((_, i) => (
                   <Star key={i} size={14} className="fill-yellow-500 text-yellow-500" />
                 ))}
              </div>

              <Quote className="absolute top-8 right-8 w-12 h-12 text-primary/10 group-hover:text-primary/20 transition-colors" />

              <p className="text-muted-foreground leading-relaxed italic mb-8 flex-grow">
                "{t.content}"
              </p>

              <div className="flex items-center space-x-4 pt-6 border-t border-border">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 border-2 border-primary/20"
                />
                <div>
                  <h4 className="font-bold text-foreground">{t.name}</h4>
                  <p className="text-xs text-muted-foreground tracking-wider uppercase font-medium">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
