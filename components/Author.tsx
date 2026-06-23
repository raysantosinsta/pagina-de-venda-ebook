import { motion } from 'framer-motion';

export function Author() {
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="glass-card rounded-3xl border border-white/10 p-6">
      <div className="flex items-center gap-4">
        <div className="h-16 w-16 rounded-full bg-gradient-to-br from-bts to-violet-600" />
        <div>
          <p className="text-lg font-semibold text-white">Por Equipe Guia ARMY</p>
          <p className="text-sm text-slate-300">Pesquisadores de fandom e curadores de conteúdo BTS — confiança e clareza para novas fãs.</p>
        </div>
      </div>
      <div className="mt-4 text-sm text-slate-300">
        <p>Mais de 1.200 leituras iniciais validadas por novas membros da ARMY. Método objetivo e passo a passo testado em lançamentos educativos.</p>
      </div>
    </motion.div>
  );
}
