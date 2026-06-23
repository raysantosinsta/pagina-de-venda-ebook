"use client";

import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Star, Ticket, Trophy, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { FeatureCard } from '../components/FeatureCard';
import { FaqItem } from '../components/FaqItem';
import { SectionHeading } from '../components/SectionHeading';
import { TestimonialCard } from '../components/TestimonialCard';

const features = [
  { title: 'História completa do BTS', description: 'Linha do tempo clara, com momentos que definem o sonho do grupo.', icon: Trophy },
  { title: 'Conheça os 7 membros', description: 'Perfis fáceis de lembrar e como cada integrante contribui para o BTS.', icon: Users },
  { title: 'Álbuns essenciais', description: 'Seleção dos lançamentos que toda ARMY precisa conhecer primeiro.', icon: Star },
  { title: 'Músicas para iniciantes', description: 'Playlist de entrada para sentir a energia e a emoção do grupo.', icon: Sparkles },
  { title: 'Onde assistir conteúdos oficiais', description: 'Plataformas confiáveis, vídeos e redes para você começar com segurança.', icon: Ticket },
  { title: 'Glossário ARMY', description: 'Termos, siglas e expressões que a comunidade usa todos os dias.', icon: CheckCircle2 },
  { title: 'Curiosidades exclusivas', description: 'Fatos que só quem acompanha a cultura BTS vai valorizar.', icon: ShieldCheck },
  { title: 'Quiz e desafios', description: 'Ative sua memória com perguntas e missões que tornam aprender divertido.', icon: ArrowRight },
];

const chapters = [
  { title: 'Capítulo 1', label: 'Conheça os Integrantes' },
  { title: 'Capítulo 2', label: 'História do BTS' },
  { title: 'Capítulo 3', label: 'Álbuns Essenciais' },
  { title: 'Capítulo 4', label: 'Músicas Para Começar' },
  { title: 'Capítulo 5', label: 'Conteúdos Oficiais' },
  { title: 'Capítulo 6', label: 'Linguagem da ARMY' },
  { title: 'Capítulo 7', label: 'Curiosidades' },
  { title: 'Capítulo 8', label: 'Como Fazer Parte da Comunidade' },
];

const bonus = [
  { title: 'Checklist ARMY', description: 'Verificação passo a passo para sentir que você já faz parte.', icon: CheckCircle2 },
  { title: 'Quiz Exclusivo', description: 'Teste sua evolução com perguntas feitas para novas ARMYs.', icon: Sparkles },
  { title: 'Desafio 7 Dias BTS', description: 'Rotina prática para viver o universo BTS desde o primeiro dia.', icon: Trophy },
];

const testimonials = [
  { quote: 'Eu era completamente perdida e agora entendo tudo sobre BTS.', author: 'Marina S.', role: 'Nova ARMY de 2026' },
  { quote: 'Foi o melhor guia para começar no fandom.', author: 'Luana M.', role: 'Fã em formação' },
  { quote: 'Me ajudou a conhecer cada integrante rapidamente.', author: 'Bianca T.', role: 'ARMY em ascensão' },
];

const faqs = [
  { question: 'O ebook é digital?', answer: 'Sim, você recebe o arquivo digital imediatamente após a compra, pronto para ler no celular e no computador.' },
  { question: 'Recebo imediatamente?', answer: 'Sim! O acesso é instantâneo para você começar sua jornada BTS hoje mesmo.' },
  { question: 'Serve para quem acabou de conhecer BTS?', answer: 'Perfeito para novas ARMYs que querem entender o fandom sem se sentir perdida.' },
  { question: 'Funciona no celular?', answer: 'Sim, o conteúdo foi feito para leitura fluida em dispositivos móveis e desktops.' },
  { question: 'O ebook inclui termos da ARMY?', answer: 'Inclui um glossário completo com palavras, siglas e referências usados pela comunidade.' },
  { question: 'Preciso saber inglês?', answer: 'Não, todo o conteúdo está em português com explicações claras e exemplos reais.' },
  { question: 'É um material oficial do BTS?', answer: 'Não. É um guia independente criado por especialistas em fandoms com base em fontes oficiais.' },
  { question: 'Quantas páginas tem o ebook?', answer: 'Mais de 60 páginas com guias, infográficos e dicas de conteúdo oficial.' },
  { question: 'Tem garantias?', answer: 'Sim, você tem 7 dias para pedir reembolso se não ficar satisfeita.' },
  { question: 'Posso compartilhar com amigas?', answer: 'Sim, o ebook é ideal para presentear amigas que querem se tornar ARMYs.' },
];

export default function Home() {
  return (
    <main className="relative overflow-hidden px-6 pb-24 pt-10 sm:px-10 lg:px-20">
      <div className="absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.22),_transparent_45%)] blur-3xl" />
      <div className="absolute inset-x-0 top-20 h-[300px] bg-[radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.08),_transparent_30%)] blur-3xl" />

      <section className="relative mx-auto max-w-7xl pt-10">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-8">
            <span className="inline-flex rounded-full bg-white/7 px-4 py-2 text-sm font-semibold uppercase tracking-[0.22em] text-white/80 ring-1 ring-white/10">
              Guia premium para novas ARMYs
            </span>
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl"
              >
                Seu Guia Definitivo Para Entrar no Universo BTS Sem Se Sentir Perdida
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, ease: 'easeOut', delay: 0.1 }}
                className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl"
              >
                Descubra a história do BTS, conheça os 7 integrantes, aprenda os termos da ARMY e saiba exatamente por onde começar.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: 'easeOut', delay: 0.2 }}
              className="flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <a
                href="https://pay.kiwify.com.br/Iy4LsUs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-bts px-7 py-4 text-base font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-violet-500"
              >
                Quero Me Tornar ARMY
              </a>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300">
                <Star className="h-4 w-4 text-bts" />
                Oferta relâmpago por tempo limitado
              </span>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2 sm:max-w-xl">
              {['R$9,90', 'Acesso instantâneo', 'Leitura mobile', 'Bônus exclusivos'].map((item) => (
                <div key={item} className="glass-card rounded-3xl border border-white/10 px-5 py-4 text-sm text-slate-200">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative mx-auto max-w-md overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-white/5 via-white/5 to-black/20 p-6 shadow-[0_40px_120px_rgba(124,58,237,0.18)]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_60%)] opacity-80" />
            <div className="relative space-y-5">
              <div className="rounded-[32px] border border-white/10 bg-gradient-to-b from-[#150d29] via-[#0a0912] to-[#050406] p-5 shadow-2xl shadow-black/30">
                <div className="flex items-center justify-between text-white/80">
                  <span className="text-xs uppercase tracking-[0.3em]">Ebook</span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-white">ARMY</span>
                </div>
                <div className="mt-6 space-y-4">
                  <div className="rounded-3xl bg-gradient-to-br from-bts to-violet-500 p-5 text-white shadow-glow">
                    <p className="text-sm uppercase tracking-[0.24em] text-white/80">Guia de Sobrevivência</p>
                    <h2 className="text-3xl font-semibold leading-tight">BTS para Novas ARMYs</h2>
                  </div>
                  <div className="grid gap-3 text-sm text-slate-200">
                    <p>Guia visual com 8 capítulos de aprendizado rápido.</p>
                    <p>Checklist, quiz e desafio de 7 dias para dominar o fandom.</p>
                  </div>
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-[#0c0719] p-5 text-white/90">
                <p className="text-xs uppercase tracking-[0.28em] text-bts">Bônus</p>
                <div className="mt-4 grid gap-3">
                  {bonus.map((item) => (
                    <div key={item.title} className="flex items-start gap-3 rounded-3xl bg-white/5 p-4">
                      <item.icon className="mt-1 h-5 w-5 text-bts" />
                      <div>
                        <p className="font-semibold text-white">{item.title}</p>
                        <p className="text-sm text-slate-300">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mt-20">
        <SectionHeading
          title="Você ainda sente o fandom distante?"
          subtitle="As principais dificuldades das novas ARMYs que ainda não encontraram o caminho certo." 
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {[
            '❌ Não entende quem é quem',
            '❌ Não sabe por onde começar',
            '❌ Fica perdida nas referências',
            '❌ Não conhece os conteúdos oficiais',
            '❌ Não entende os termos usados pela ARMY',
          ].map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 }}
              className="glass-card rounded-3xl border border-white/10 px-6 py-5 text-slate-200"
            >
              <p className="font-semibold text-white">{item}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mt-24">
        <SectionHeading title="Tudo o Que Você Precisa em Um Só Lugar" />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {features.map((feature) => (
            <FeatureCard key={feature.title} title={feature.title} description={feature.description} icon={feature.icon} />
          ))}
        </div>
      </section>

      <section className="mt-24">
        <SectionHeading title="O Que Você Vai Aprender" subtitle="Cada capítulo foi pensado para transformar curiosidade em confiança dentro do fandom." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {chapters.map((chapter, index) => (
            <motion.div
              key={chapter.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              className="glass-card rounded-[32px] border border-white/10 p-6 text-white"
            >
              <span className="inline-flex rounded-full bg-bts/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-bts">
                {chapter.title}
              </span>
              <p className="mt-5 text-lg font-semibold">{chapter.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mt-24 bg-white/5 p-8 rounded-[36px] border border-white/10 shadow-glow">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-bts">Bônus premium</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Conteúdo extra que acelera sua entrada na comunidade</h2>
            <p className="mt-5 max-w-xl text-slate-300">Não é só um ebook. É uma imersão guiada com ferramentas que ajudam você a sentir confiança, memorizando membros, termos e referências rapidamente.</p>
          </div>
          <div className="grid gap-4">
            {bonus.map((item) => (
              <div key={item.title} className="flex items-center gap-4 rounded-3xl border border-white/10 bg-slate-950/80 p-5">
                <item.icon className="h-7 w-7 text-bts" />
                <div>
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-slate-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-24">
        <SectionHeading title="Depoimentos de quem já virou ARMY" subtitle="Histórias reais de fãs que saíram da dúvida para a confiança em poucos dias." />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <TestimonialCard key={item.author} quote={item.quote} author={item.author} role={item.role} />
          ))}
        </div>
      </section>

      <section className="mt-24 rounded-[36px] border border-white/10 bg-gradient-to-r from-[#1a0f34] via-[#0a0816] to-[#120d25] p-10 shadow-glow">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-bts/15 text-bts">
            <ShieldCheck className="h-10 w-10" />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-bts">Garantia</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">7 dias de garantia para sua jornada ARMY</h2>
            <p className="mt-4 text-slate-300">Se você não sentir que ganhou clareza, confiança e economia de tempo para entender o fandom, devolvemos seu investimento sem perguntas.</p>
          </div>
        </div>
      </section>

      <section id="oferta" className="mt-24 rounded-[40px] border border-white/10 bg-slate-950/70 p-10 shadow-glow">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.28em] text-bts">Oferta especial</p>
            <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">Transforme sua curiosidade em confiança com apenas R$9,90</h2>
            <p className="max-w-xl text-slate-300">De R$49,90 por R$9,90 — você economiza R$40,00 e recebe um guia curto, direto e feito para você se sentir ARMY desde o primeiro capítulo.</p>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <span className="rounded-full bg-white/5 px-4 py-3 text-sm text-slate-200">Economia de 80%</span>
              <span className="rounded-full bg-bts/10 px-4 py-3 text-sm text-bts">Pagamento seguro e envio instantâneo</span>
            </div>
          </div>
          <div className="rounded-[32px] border border-white/10 bg-[#0f0b1c] p-8 text-white shadow-glow">
            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-300">
              <span className="rounded-full bg-white/5 px-3 py-2">Ebook Digital</span>
              <span className="rounded-full bg-white/5 px-3 py-2">Bônus Premium</span>
            </div>
            <div className="mt-8 space-y-6">
              <div className="rounded-3xl bg-white/5 p-5">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-300">Preço original</p>
                <p className="mt-2 text-3xl font-semibold text-slate-100 line-through">R$49,90</p>
              </div>
              <div className="rounded-3xl bg-gradient-to-r from-bts to-violet-500 p-6 text-white shadow-[0_20px_60px_rgba(124,58,237,0.2)]">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-200">Preço especial</p>
                <p className="mt-2 text-5xl font-semibold">R$9,90</p>
                <p className="mt-3 text-sm text-slate-200">Oferta limitada para novas ARMYs que querem começar com segurança.</p>
              </div>
              <a
                href="https://pay.kiwify.com.br/Iy4LsUs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-full bg-black/90 px-6 py-4 text-base font-semibold text-white transition hover:-translate-y-0.5"
              >
                Quero Receber Meu Ebook
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-24">
        <SectionHeading title="Perguntas frequentes" subtitle="Tudo que você precisa saber antes de garantir seu guia." />
        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {faqs.map((item) => (
            <FaqItem key={item.question} question={item.question} answer={item.answer} />
          ))}
        </div>
      </section>

      <section id="final-cta" className="mt-24 rounded-[40px] border border-white/10 bg-gradient-to-br from-[#120915] via-[#0b0b11] to-[#1d1135] p-12 text-center shadow-glow">
        <p className="text-sm uppercase tracking-[0.32em] text-bts">É a sua vez</p>
        <h2 className="mt-6 text-4xl font-semibold text-white sm:text-5xl">Sua Jornada Como ARMY Começa Hoje</h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300">O guia rápido, confiável e com design premium que te ajuda a entrar no fandom com clareza, sem sentir vergonha de não saber nada.</p>
        <a
          href="https://pay.kiwify.com.br/Iy4LsUs"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center justify-center rounded-full bg-bts px-10 py-4 text-base font-semibold text-white transition hover:bg-violet-500"
        >
          Quero Receber Meu Ebook
        </a>
      </section>
    </main>
  );
}
