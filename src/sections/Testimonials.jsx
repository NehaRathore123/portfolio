import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Amit Vikram',
    content: 'Neha transformed our outdated website into a modern, high-converting platform. Her attention to detail and technical expertise in WordPress and Elementor are unmatched.',
    rating: 5
  },
  {
    name: 'Priya Sharma',
    content: 'The e-commerce site Neha built for Silk Strands is incredibly fast and easy to manage. She is a true professional and a pleasure to work with.',
    rating: 5
  },
  {
    name: 'Rohan Mehta',
    content: 'Our digital presence reached new heights after Neha optimized our site. The premium dark mode and financial dashboard looks stunning and feels premium.',
    rating: 5
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-background overflow-hidden px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
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
              className="p-6 md:p-8 glass rounded-3xl border border-border group relative flex flex-col"
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
                <div>
                  <h4 className="font-bold text-foreground">{t.name}</h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
