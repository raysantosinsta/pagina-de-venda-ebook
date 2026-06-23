"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export function VslPlayer({ videoUrl }: { videoUrl: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="relative mx-auto w-full overflow-hidden rounded-2xl shadow-2xl">
        <div className="aspect-video bg-black">
          {!open ? (
            <button
              aria-label="Play VSL"
              onClick={() => setOpen(true)}
              className="absolute inset-0 m-auto flex h-full w-full items-center justify-center bg-gradient-to-b from-black/40 to-black/40"
            >
              <motion.div whileTap={{ scale: 0.96 }} className="inline-flex items-center gap-3 rounded-full bg-bts px-6 py-3 text-white">
                <Play className="h-5 w-5" />
                Assistir Video
              </motion.div>
            </button>
          ) : (
            <iframe
              className="h-full w-full"
              src={videoUrl}
              title="VSL"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>
      </div>
    </div>
  );
}
