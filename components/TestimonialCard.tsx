import { motion } from 'framer-motion';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
}

export function TestimonialCard({ quote, author, role }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="glass-card rounded-3xl border border-white/10 p-6 shadow-glow"
    >
      <p className="text-base leading-8 text-slate-200">“{quote}”</p>
      <div className="mt-6 flex items-center gap-3 text-sm text-slate-300">
        <div className="h-12 w-12 rounded-full bg-gradient-to-br from-bts to-white/10" />
        <div>
          <p className="font-semibold text-white">{author}</p>
          <p>{role}</p>
        </div>
      </div>
    </motion.div>
  );
}
