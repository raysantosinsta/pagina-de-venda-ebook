import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export function FeatureCard({ title, description, icon: Icon }: FeatureCardProps) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="glass-card rounded-3xl border border-white/10 p-6 shadow-glow"
    >
      <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-white/10 text-bts ring-1 ring-bts/20">
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
    </motion.article>
  );
}
