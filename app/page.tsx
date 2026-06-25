'use client';

import { useState, FormEvent, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei/core/OrbitControls';
import {
  Activity,
  Bell,
  Check,
  CheckCircle2,
  Gauge,
  Globe,
  Layers3,
  MessageCircle,
  Radar,
  ShieldCheck,
  Star,
  Target,
  Users,
  Zap,
  ChevronDown,
  Play,
} from 'lucide-react';

// ============================================================
// 1. Registro do GSAP + ScrollTrigger (para animações)
// ============================================================
gsap.registerPlugin(ScrollTrigger);

// ============================================================
// 2. Componente de contagem regressiva (urgência)
// ============================================================
function Countdown({ endAtMs }: { endAtMs: number }) {
  const [timeLeft, setTimeLeft] = useState(endAtMs - Date.now());

  useEffect(() => {
    const t = setInterval(() => setTimeLeft(Math.max(endAtMs - Date.now(), 0)), 1000);
    return () => clearInterval(t);
  }, [endAtMs]);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  return (
    <div className="inline-flex items-center gap-3 rounded-md border border-paper/10 bg-paper/5 px-4 py-3 text-sm text-paper/72 backdrop-blur-sm">
      <span className="font-semibold text-paper">Vagas exclusivas expiram em</span>
      <span className="font-mono bg-accent/10 px-2 py-1 rounded">{String(days).padStart(2, '0')}d</span>
      <span className="font-mono bg-accent/10 px-2 py-1 rounded">{String(hours).padStart(2, '0')}h</span>
      <span className="font-mono bg-accent/10 px-2 py-1 rounded">{String(minutes).padStart(2, '0')}m</span>
      <span className="font-mono bg-accent/10 px-2 py-1 rounded">{String(seconds).padStart(2, '0')}s</span>
    </div>
  );
}

// ============================================================
// 3. Componentes de UI reutilizáveis (embutidos)
// ============================================================
function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-3xl font-semibold tracking-normal text-paper sm:text-4xl"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="mt-4 text-base leading-8 text-paper/68 sm:text-lg"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

function FeatureCard({ title, description, icon: Icon }: { title: string; description: string; icon: any }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="glass-card red-edge rounded-lg border border-paper/10 p-6 shadow-glow"
    >
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-md bg-accent/12 text-accent ring-1 ring-accent/26">
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="text-xl font-semibold text-paper">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-paper/68">{description}</p>
    </motion.article>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="glass-card rounded-lg border border-paper/10 p-5 shadow-glow">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 text-left text-paper"
      >
        <span className="text-base font-semibold">{question}</span>
        <ChevronDown className={`h-5 w-5 shrink-0 text-accent transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <motion.p
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="mt-4 text-sm leading-7 text-paper/68"
        >
          {answer}
        </motion.p>
      )}
    </div>
  );
}

function TestimonialCard({ quote, author, role }: { quote: string; author: string; role: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="glass-card rounded-lg border border-paper/10 p-6 shadow-glow"
    >
      <p className="text-base leading-8 text-paper/78">"{quote}"</p>
      <div className="mt-6 flex items-center gap-3 text-sm text-paper/68">
        <div className="h-12 w-12 rounded-md bg-accent/18 ring-1 ring-accent/45" />
        <div>
          <p className="font-semibold text-paper">{author}</p>
          <p>{role}</p>
        </div>
      </div>
    </motion.div>
  );
}

// ============================================================
// 4. Componente do Header (embutido)
// ============================================================
function Header() {
  const navItems = [
    { href: '#produto', label: 'Produto' },
    { href: '#beneficios', label: 'Benefícios' },
    { href: '#prova', label: 'Depoimentos' },
    { href: '#faq', label: 'FAQ' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-paper/10 bg-ink/88 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10 lg:px-20">
        <a href="/" className="inline-flex items-center gap-3 text-paper">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-accent text-xs font-bold text-paper">A</span>
          <span className="text-base font-semibold tracking-normal sm:text-lg">ARMY Command</span>
        </a>
        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-4 py-2 text-sm font-medium text-paper/68 transition hover:bg-paper/5 hover:text-paper"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#captura"
          className="hidden items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-paper transition hover:-translate-y-0.5 hover:bg-accent/85 sm:inline-flex"
        >
          Quero minha vaga
          <MessageCircle className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

// ============================================================
// 5. Cena 3D (HeroScene) – embutida
// ============================================================
function KineticCore() {
  const group = useRef<any>(null);
  const inner = useRef<any>(null);

  useFrame(({ clock, mouse }) => {
    const t = clock.getElapsedTime();
    const scrollProgress = typeof window === 'undefined' ? 0 : Math.min(window.scrollY / 1200, 1);

    if (group.current) {
      group.current.rotation.x = Math.sin(t * 0.45) * 0.14 + scrollProgress * 0.55;
      group.current.rotation.y = t * 0.18 + mouse.x * 0.32 + scrollProgress * 0.75;
      group.current.rotation.z = Math.sin(t * 0.3) * 0.08;
      group.current.scale.setScalar(1 + scrollProgress * 0.12 + Math.abs(mouse.y) * 0.04);
    }
    if (inner.current) {
      inner.current.rotation.y = -t * 0.42;
      inner.current.rotation.x = t * 0.2;
    }
  });

  return (
    <group ref={group}>
      <mesh castShadow receiveShadow>
        <icosahedronGeometry args={[1.42, 1]} />
        <meshStandardMaterial color="#E6192E" roughness={0.28} metalness={0.86} emissive="#E6192E" emissiveIntensity={0.16} />
      </mesh>
      <mesh ref={inner} scale={0.78}>
        <octahedronGeometry args={[1.1, 0]} />
        <meshStandardMaterial color="#1A1A1A" roughness={0.2} metalness={0.95} emissive="#E6192E" emissiveIntensity={0.08} />
      </mesh>
      <mesh scale={1.72} rotation={[0.4, 0.2, 0.6]}>
        <torusGeometry args={[1, 0.012, 12, 120]} />
        <meshStandardMaterial color="#F2F2F2" roughness={0.32} metalness={0.7} transparent opacity={0.32} />
      </mesh>
      <mesh scale={2.12} rotation={[1.1, -0.2, -0.8]}>
        <torusGeometry args={[1, 0.01, 12, 120]} />
        <meshStandardMaterial color="#E6192E" roughness={0.2} metalness={0.85} transparent opacity={0.72} />
      </mesh>
    </group>
  );
}

function FloatingShard({ position, scale, speed }: { position: [number, number, number]; scale: number; speed: number }) {
  const shardRef = useRef<any>(null);
  useFrame(({ clock, mouse }) => {
    const t = clock.getElapsedTime();
    if (shardRef.current) {
      shardRef.current.rotation.x = t * speed;
      shardRef.current.rotation.y = t * speed * 0.7 + mouse.x * 0.2;
      shardRef.current.position.y = position[1] + Math.sin(t * speed) * 0.12;
    }
  });
  return (
    <mesh ref={shardRef} position={position} scale={scale}>
      <tetrahedronGeometry args={[0.42, 0]} />
      <meshStandardMaterial color="#F2F2F2" roughness={0.38} metalness={0.68} transparent opacity={0.26} />
    </mesh>
  );
}

function StaticHeroFallback() {
  return (
    <div className="red-edge flex min-h-[420px] w-full items-center justify-center rounded-lg border border-paper/10 bg-ink p-6 shadow-glow sm:min-h-[500px]">
      <div className="w-full max-w-md rounded-lg border border-paper/10 bg-paper/5 p-5 text-paper">
        <div className="flex items-center justify-between gap-4">
          <span className="text-xs uppercase tracking-[0.22em] text-paper/58">ARMY Command</span>
          <span className="rounded-md bg-accent px-3 py-1 text-xs font-semibold text-paper">Ação clara</span>
        </div>
        <div className="mt-6 grid gap-4">
          {[
            ['Progresso', '75%', 'Campanha no ritmo certo'],
            ['Quando agir', 'Agora', 'Reforçar YouTube e X'],
            ['Meta', '5M', 'Streams em 48h'],
          ].map(([label, value, description]) => (
            <div key={label} className="rounded-lg border border-paper/10 bg-ink/80 p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-paper/50">{label}</p>
              <p className="mt-2 text-2xl font-semibold text-paper">{value}</p>
              <p className="mt-1 text-sm text-paper/58">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function HeroScene() {
  const [useFallback, setUseFallback] = useState(false);
  const points = [
    { position: [-2.6, 1.25, -1.2] as [number, number, number], scale: 0.82, speed: 0.35 },
    { position: [2.45, 0.72, -1.1] as [number, number, number], scale: 0.66, speed: 0.42 },
    { position: [1.1, -1.55, -0.9] as [number, number, number], scale: 0.52, speed: 0.5 },
  ];

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const compactViewport = window.matchMedia('(max-width: 767px)').matches;
    setUseFallback(reducedMotion || compactViewport);
  }, []);

  if (useFallback) return <StaticHeroFallback />;

  return (
    <div className="hero-card red-edge relative h-full min-h-[520px] w-full overflow-hidden rounded-lg border border-paper/10 bg-ink shadow-glow">
      <div className="noise-overlay pointer-events-none absolute inset-0 z-10 opacity-70" />
      <Canvas camera={{ position: [0, 0, 7], fov: 36 }} className="h-full w-full">
        <color attach="background" args={['#1A1A1A']} />
        <ambientLight intensity={0.5} />
        <directionalLight color="#F2F2F2" position={[4, 5, 5]} intensity={1.1} />
        <directionalLight color="#E6192E" position={[-5, -4, -3]} intensity={1.2} />
        <KineticCore />
        {points.map((point, index) => (
          <FloatingShard key={index} position={point.position} scale={point.scale} speed={point.speed} />
        ))}
        <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 2.15} minPolarAngle={Math.PI / 3.05} />
      </Canvas>
    </div>
  );
}

// ============================================================
// 6. Componente de animações de scroll (embutido)
// ============================================================
function ScrollAnimations() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.reveal').forEach((element) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 44 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.95,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 84%',
              end: 'bottom 58%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>('.reveal-left').forEach((element) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, x: -42 },
          {
            autoAlpha: 1,
            x: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: { trigger: element, start: 'top 82%' },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>('.reveal-right').forEach((element) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, x: 42 },
          {
            autoAlpha: 1,
            x: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: { trigger: element, start: 'top 82%' },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>('.parallax-slow').forEach((element) => {
        gsap.to(element, {
          yPercent: -16,
          ease: 'none',
          scrollTrigger: {
            trigger: element.closest('section') || element,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.8,
          },
        });
      });

      gsap.utils.toArray<HTMLElement>('.parallax-fast').forEach((element) => {
        gsap.to(element, {
          yPercent: 18,
          scale: 1.04,
          ease: 'none',
          scrollTrigger: {
            trigger: element.closest('section') || element,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.65,
          },
        });
      });

      gsap.to('.hero-copy', {
        y: -52,
        opacity: 0.78,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero-section',
          start: 'top top',
          end: 'bottom top',
          scrub: 0.9,
        },
      });

      gsap.to('.hero-card', {
        y: -118,
        rotate: 1.25,
        scale: 0.94,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero-section',
          start: 'top top',
          end: 'bottom top',
          scrub: 0.8,
        },
      });
    }, containerRef);

    function onLenisReady(event: any) {
      const lenis = event?.detail || (window as any).__lenis;
      if (!lenis) return;
      try {
        if (typeof lenis.on === 'function') {
          lenis.on('scroll', () => ScrollTrigger.update());
        }
        ScrollTrigger.refresh();
      } catch (e) {
        console.warn('Lenis and ScrollTrigger integration failed', e);
      }
    }

    window.addEventListener('lenis-ready', onLenisReady);
    if ((window as any).__lenis) onLenisReady({ detail: (window as any).__lenis });

    return () => {
      window.removeEventListener('lenis-ready', onLenisReady);
      ctx.revert();
    };
  }, []);

  return <div ref={containerRef} />;
}

// ============================================================
// 7. Componente Lenis (embutido)
// ============================================================
function UseLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.45,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      wheelMultiplier: 1,
      syncTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    (window as any).__lenis = lenis;
    window.dispatchEvent(new CustomEvent('lenis-ready', { detail: lenis }));

    return () => {
      window.dispatchEvent(new CustomEvent('lenis-destroy'));
      delete (window as any).__lenis;
      lenis.destroy();
    };
  }, []);
  return null;
}

// ============================================================
// 8. Página principal (tudo embutido)
// ============================================================
const whatsappNumber = '5585984372865';

function createWhatsAppUrl(name: string, fanbase: string) {
  const message = [
    'Olá! Quero garantir minha vaga no ARMY Command Center.',
    name ? `Meu nome: ${name}.` : '',
    fanbase ? `Fanbase/equipe: ${fanbase}.` : '',
    'Quero uma ferramenta para organizar campanhas, metas de streaming e próximas ações da fanbase, e ajudar a moldar o produto.',
  ]
    .filter(Boolean)
    .join('\n');
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export default function Home() {
  const [name, setName] = useState('');
  const [fanbase, setFanbase] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    window.open(createWhatsAppUrl(name, fanbase), '_blank', 'noopener,noreferrer');
  }

  // Dados
  const features = [
    {
      title: 'Painel da campanha',
      description: 'Acompanhe progresso, prioridades e pontos de atenção em uma visão única para líderes.',
      icon: Gauge,
    },
    {
      title: 'Metas de streaming',
      description: 'Organize objetivos por comeback, janela de ação e canal para a equipe saber onde focar.',
      icon: Target,
    },
    {
      title: 'Alertas de mobilização',
      description: 'Transforme queda de ritmo em chamada clara para a fanbase agir no momento certo.',
      icon: Bell,
    },
    {
      title: 'Equipe alinhada',
      description: 'Líderes, moderadores e responsáveis trabalham com a mesma prioridade e a mesma mensagem.',
      icon: Users,
    },
  ];

  const benefits = [
    {
      title: 'Menos caos no comeback',
      description: 'Troque prints, abas e mensagens perdidas por uma central com status e próxima ação.',
      icon: CheckCircle2,
    },
    {
      title: 'Mais velocidade para mobilizar',
      description: 'Quando a campanha pede reforço, a equipe sabe o que comunicar sem perder a janela.',
      icon: Zap,
    },
    {
      title: 'Primeiras fanbases ouvidas',
      description: 'Quem entrar agora ajuda a moldar o produto e ainda ganha acesso vitalício ao plano inicial.',
      icon: ShieldCheck,
    },
  ];

  const faqs = [
    {
      question: 'O acesso é pago?',
      answer:
        'Não. As primeiras 50 fanbases que entrarem agora terão acesso gratuito vitalício à versão inicial. Depois, o produto terá um plano pago, mas você estará imune a qualquer cobrança futura se garantir sua vaga agora.',
    },
    {
      question: 'O que acontece depois que eu entro na lista?',
      answer:
        'Você será chamado pelo WhatsApp para uma conversa rápida sobre sua rotina de campanha e receberá um convite exclusivo para testar as primeiras versões antes de qualquer outro.',
    },
    {
      question: 'O produto já está disponível?',
      answer:
        'Estamos na fase final de desenvolvimento. As vagas são para um grupo seleto de testadores que terão acesso antecipado e poderão influenciar as funcionalidades finais.',
    },
    {
      question: 'Quem deve entrar?',
      answer:
        'Líderes, moderadores e pessoas que organizam fanbases BTS/ARMY em campanhas, comebacks, metas e ações de streaming. Se você quer mais eficiência, essa é sua chance.',
    },
  ];

  const testimonials = [
    {
      quote: 'Finalmente uma ferramenta que centraliza tudo. Minha equipe deixou de perder horas em planilhas e grupos.',
      author: 'Camila R.',
      role: 'Líder de fanbase há 4 anos',
    },
    {
      quote: 'O alerta de mobilização mudou nosso jogo. Conseguimos reagir em minutos, não em dias.',
      author: 'Lucas M.',
      role: 'Moderador de campanhas de streaming',
    },
    {
      quote: 'Participar do grupo inicial me deu voz ativa no produto. É raro uma ferramenta ouvir tanto a base.',
      author: 'Fernanda S.',
      role: 'Organizadora de comebacks',
    },
  ];

  const END_DATE = Date.now() + 1000 * 60 * 60 * 24 * 3; // 3 dias a partir de agora

  return (
    <main className="relative overflow-hidden bg-ink text-paper">
      <UseLenis />
      <ScrollAnimations />
      <Header />

      {/* ========== HERO ========== */}
      <section className="hero-section relative isolate min-h-[calc(100vh-73px)] overflow-hidden px-6 pb-20 pt-12 sm:px-10 lg:px-20">
        <div className="tech-grid parallax-slow pointer-events-none absolute inset-0 opacity-70" />
        <div className="noise-overlay parallax-fast pointer-events-none absolute inset-0 opacity-60" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-ink to-transparent" />

        <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 38 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
            className="hero-copy space-y-8"
          >
            <div className="inline-flex items-center gap-3 rounded-md border border-paper/10 bg-paper/5 px-4 py-2 text-sm text-paper/72 backdrop-blur-xl">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-accent text-xs font-bold text-paper">🔥</span>
              Vagas limitadas – apenas 50 líderes
            </div>

            <div className="space-y-6">
              <h1 className="max-w-3xl text-5xl font-semibold tracking-normal text-paper sm:text-6xl lg:text-7xl">
                Pare de perder tempo com planilhas e <span className="text-accent">mobilize sua fanbase</span> em segundos.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-paper/72 sm:text-xl">
                Uma central que organiza metas, alertas e ações para você liderar campanhas BTS com clareza e velocidade. 
                <span className="block mt-2 font-semibold text-paper">Garanta sua vaga gratuita vitalícia – as primeiras 50 fanbases entram agora.</span>
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#captura"
                className="inline-flex items-center justify-center gap-3 rounded-md bg-accent px-7 py-4 text-base font-semibold text-paper shadow-glow transition duration-300 hover:-translate-y-0.5 hover:bg-accent/85"
              >
                Quero minha vaga
                <MessageCircle className="h-4 w-4" />
              </a>
              <span className="inline-flex items-center gap-2 rounded-md border border-paper/10 bg-paper/5 px-4 py-3 text-sm text-paper/68">
                <Star className="h-4 w-4 text-accent" />
                Acesso vitalício gratuito
              </span>
            </div>

            <Countdown endAtMs={END_DATE} />

            <div className="grid gap-3 sm:grid-cols-2">
              {['Menos caos', 'Metas mais claras', 'Equipe alinhada', 'Acesso vitalício'].map((text) => (
                <div key={text} className="glass-card rounded-lg px-5 py-4 text-sm text-paper/74 transition duration-300 hover:-translate-y-1 hover:border-accent/35">
                  {text}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="relative mx-auto w-full max-w-3xl"
          >
            <HeroScene />
          </motion.div>
        </div>
      </section>

      {/* ========== PROBLEMA ========== */}
      <section className="relative px-6 py-24 sm:px-10 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="reveal-left space-y-6">
            <p className="text-sm uppercase tracking-[0.32em] text-accent">O que você perde todo comeback</p>
            <h2 className="text-4xl font-semibold tracking-normal text-paper sm:text-5xl">No comeback, cada minuto perdido é streaming que não conta.</h2>
            <p className="max-w-xl text-lg leading-8 text-paper/68">
              Quando dados, metas e próximas ações ficam espalhados, a fanbase perde velocidade. O que deveria virar ação acaba preso em prints, grupos e planilhas.
            </p>
          </div>
          <div className="reveal-right grid gap-4">
            {[
              'Ninguém sabe qual dado importa primeiro – e a campanha esquenta sem direção.',
              'A janela de mobilização passa, e o potencial de impacto vai embora.',
              'Líderes repetem orientações em vários canais, e ainda assim a equipe fica desalinhada.',
            ].map((text, index) => (
              <div key={text} className="red-edge rounded-lg border border-paper/10 bg-paper/5 p-6 text-paper/76 shadow-glow">
                <div className="mb-4 flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-accent/14 text-sm font-semibold text-accent">0{index + 1}</span>
                  <span className="h-px flex-1 bg-paper/10" />
                </div>
                <p className="text-sm leading-7">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PRODUTO ========== */}
      <section id="produto" className="relative border-y border-paper/10 px-6 py-24 sm:px-10 lg:px-20">
        <div className="noise-overlay pointer-events-none absolute inset-0 opacity-35" />
        <div className="relative mx-auto max-w-7xl">
          <div className="reveal mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.32em] text-accent">A solução</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-normal text-paper sm:text-5xl">Uma sala de comando para campanhas ARMY.</h2>
            <p className="mt-5 text-lg leading-8 text-paper/68">
              O ARMY Command Center transforma dados e urgência em direção. Menos ruído, mais clareza e uma equipe pronta para agir.
            </p>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.title} className="reveal">
                <FeatureCard title={feature.title} description={feature.description} icon={feature.icon} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== BENEFÍCIOS ========== */}
      <section id="beneficios" className="px-6 py-24 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="reveal space-y-14">
            <SectionHeading
              title="O que sua fanbase ganha"
              subtitle="Mais clareza para decidir, mais velocidade para mobilizar e menos desgaste para quem lidera a campanha."
            />
            <div className="grid gap-6 lg:grid-cols-3">
              {benefits.map((benefit) => (
                <FeatureCard key={benefit.title} title={benefit.title} description={benefit.description} icon={benefit.icon} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== PROVA SOCIAL ========== */}
      <section id="prova" className="border-y border-paper/10 px-6 py-24 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="reveal">
            <SectionHeading
              title="O que líderes de fanbase estão dizendo"
              subtitle="Quem já testou a ideia confirma: organização e velocidade fazem toda a diferença."
            />
          </div>
          <div className="reveal mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <TestimonialCard key={t.author} quote={t.quote} author={t.author} role={t.role} />
            ))}
          </div>
        </div>
      </section>

      {/* ========== OFERTA ========== */}
      <section id="oferta" className="relative border-y border-paper/10 px-6 py-24 sm:px-10 lg:px-20">
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="reveal-left space-y-6">
            <p className="text-sm uppercase tracking-[0.32em] text-accent">Oferta exclusiva</p>
            <h2 className="text-4xl font-semibold tracking-normal text-paper sm:text-5xl">Garanta seu acesso vitalício <span className="text-accent">agora</span>.</h2>
            <p className="max-w-xl text-lg leading-8 text-paper/68">
              As primeiras 50 fanbases que se inscreverem terão acesso gratuito para sempre à versão inicial do ARMY Command Center. Depois, o produto será pago – mas você estará blindado.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full bg-accent/10 px-4 py-2 text-sm font-semibold text-accent">Vagas: 12 / 50</span>
              <span className="rounded-full bg-paper/5 px-4 py-2 text-sm text-paper/60">Oferta por tempo limitado</span>
            </div>
          </div>
          <div className="reveal-right red-edge rounded-lg border border-paper/10 bg-paper/5 p-8 shadow-glow">
            <div className="grid gap-5 sm:grid-cols-3">
              <div className="rounded-lg border border-paper/10 bg-ink p-5">
                <p className="text-sm text-paper/58">Acesso</p>
                <p className="mt-2 text-3xl font-semibold text-paper">Vitalício</p>
                <p className="text-xs text-paper/50">para os primeiros 50</p>
              </div>
              <div className="rounded-lg border border-paper/10 bg-ink p-5">
                <p className="text-sm text-paper/58">Valor</p>
                <p className="mt-2 text-3xl font-semibold text-accent">R$ 0</p>
                <p className="text-xs text-paper/50">sem cobrança futura</p>
              </div>
              <div className="rounded-lg border border-paper/10 bg-ink p-5">
                <p className="text-sm text-paper/58">Extras</p>
                <p className="mt-2 text-3xl font-semibold text-paper">+ Bônus</p>
                <p className="text-xs text-paper/50">consultoria de onboarding</p>
              </div>
            </div>
            <div className="mt-6 rounded-lg border border-accent/35 bg-accent/10 p-5 text-paper/72">
              <p className="font-semibold text-paper">🔒 Garantia de 30 dias</p>
              <p className="mt-2 text-sm leading-6">
                Se você entrar e não sentir que o ARMY Command Center melhora sua campanha, devolvemos seu tempo com um bônus exclusivo de materiais de organização.
              </p>
            </div>
            <a
              href="#captura"
              className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-md bg-accent px-6 py-4 text-base font-semibold text-paper transition duration-300 hover:-translate-y-0.5 hover:bg-accent/85"
            >
              Garantir minha vaga agora
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ========== FAQ ========== */}
      <section id="faq" className="px-6 py-24 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="reveal">
            <SectionHeading title="Perguntas frequentes" subtitle="Tire suas dúvidas sobre o acesso vitalício e o funcionamento." />
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {faqs.map((item) => (
              <div key={item.question} className="reveal">
                <FaqItem question={item.question} answer={item.answer} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CAPTURA ========== */}
      <section id="captura" className="relative overflow-hidden border-t border-paper/10 px-6 py-24 sm:px-10 lg:px-20">
        <div className="tech-grid parallax-slow pointer-events-none absolute inset-0 opacity-45" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="reveal-left space-y-6">
            <p className="text-sm uppercase tracking-[0.32em] text-accent">Última chance</p>
            <h2 className="text-4xl font-semibold tracking-normal text-paper sm:text-5xl">
              Sua fanbase merece uma <span className="text-accent">central de comando</span>.
            </h2>
            <p className="max-w-xl text-lg leading-8 text-paper/68">
              Preencha seus dados e clique no botão. O WhatsApp vai abrir com uma mensagem pronta para você confirmar seu interesse. Você será um dos primeiros a testar e terá acesso vitalício gratuito.
            </p>
            <div className="grid gap-3 text-sm text-paper/68 sm:grid-cols-2">
              {['Acesso vitalício', 'Sem cartão de crédito', 'Suporte prioritário', 'Vagas limitadas'].map((item) => (
                <div key={item} className="flex items-center gap-2 rounded-md border border-paper/10 bg-paper/5 p-3">
                  <Check className="h-4 w-4 shrink-0 text-accent" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal-right red-edge rounded-lg border border-paper/10 bg-ink p-8 shadow-glow sm:p-10">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-paper/68">
                  Seu nome <span className="text-accent">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  required
                  placeholder="Ex: Ana"
                  className="mt-3 w-full rounded-md border border-paper/10 bg-paper/5 px-4 py-4 text-paper outline-none transition placeholder:text-paper/36 focus:border-accent focus:ring-2 focus:ring-accent/24"
                />
              </div>
              <div>
                <label htmlFor="fanbase" className="text-sm font-medium text-paper/68">
                  Fanbase ou equipe <span className="text-accent">*</span>
                </label>
                <input
                  id="fanbase"
                  type="text"
                  value={fanbase}
                  onChange={(event) => setFanbase(event.target.value)}
                  required
                  placeholder="Ex: ARMY Brasil"
                  className="mt-3 w-full rounded-md border border-paper/10 bg-paper/5 px-4 py-4 text-paper outline-none transition placeholder:text-paper/36 focus:border-accent focus:ring-2 focus:ring-accent/24"
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-3 rounded-md bg-accent px-6 py-4 text-base font-semibold text-paper transition duration-300 hover:-translate-y-0.5 hover:bg-accent/85"
              >
                Garantir vaga no WhatsApp
                <MessageCircle className="h-4 w-4" />
              </button>
              {submitted && (
                <p className="rounded-md border border-accent/30 bg-accent/10 px-4 py-3 text-sm text-paper">
                  ✅ O WhatsApp foi aberto com a mensagem pronta. Envie para confirmar sua vaga.
                </p>
              )}
              <p className="text-center text-xs text-paper/40">* Vagas limitadas. Após 50 inscrições, a oferta vitalícia se encerra.</p>
            </form>
          </div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="border-t border-paper/10 px-6 py-10 text-sm text-paper/50 sm:px-10 lg:px-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 ARMY Command Center – Feito para líderes que querem vencer cada comeback.</p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="#captura" className="transition hover:text-paper">Garantir vaga</a>
            <a href="#faq" className="transition hover:text-paper">FAQ</a>
          </div>
        </div>
      </footer>
    </main>
  );
}