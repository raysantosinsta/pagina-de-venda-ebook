import { Countdown } from './Countdown';

export function OfferDetails() {
  // set offer end to 48 hours from now
  const endAt = Date.now() + 1000 * 60 * 60 * 48;

  return (
    <div className="rounded-[32px] border border-white/10 bg-[#0f0b1c] p-8 text-white shadow-glow">
      <div className="flex flex-wrap items-center gap-3 text-sm text-slate-300">
        <span className="rounded-full bg-white/5 px-3 py-2">Ebook Digital</span>
        <span className="rounded-full bg-white/5 px-3 py-2">Bônus Premium</span>
      </div>
      <div className="mt-6 flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-slate-300">Preço especial</p>
          <p className="mt-2 text-5xl font-semibold">R$9,90</p>
          <p className="mt-1 text-sm text-slate-400 line-through">De R$49,90</p>
        </div>
        <Countdown endAtMs={endAt} />
      </div>

      <ul className="mt-6 space-y-3 text-sm text-slate-300">
        <li>✅ Acesso imediato</li>
        <li>✅ Leitura otimizada para celular</li>
        <li>✅ Checklist, Quiz e Desafio de 7 dias</li>
      </ul>

      <a
        href="https://go.hotmart.com/S106454503X?dp=1"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-bts to-violet-500 px-6 py-4 text-base font-semibold text-white"
      >
        Quero Receber Meu Ebook
      </a>

      <p className="mt-4 text-xs text-slate-400">7 dias de garantia — satisfeito ou seu dinheiro de volta.</p>
    </div>
  );
}
