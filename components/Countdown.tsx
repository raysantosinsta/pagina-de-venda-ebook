"use client";

import { useEffect, useState } from 'react';

export function Countdown({ endAtMs }: { endAtMs: number }) {
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
    <div className="inline-flex items-center gap-3 rounded-full bg-white/5 px-3 py-2 text-sm text-slate-200">
      <span className="font-semibold text-white">Oferta termina em</span>
      <span className="font-mono">{String(days).padStart(2, '0')}d</span>
      <span className="font-mono">{String(hours).padStart(2, '0')}h</span>
      <span className="font-mono">{String(minutes).padStart(2, '0')}m</span>
      <span className="font-mono">{String(seconds).padStart(2, '0')}s</span>
    </div>
  );
}
