"use client";

import { motion } from "framer-motion";

export default function HeroCard() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 20,
      }}
      whileHover={{
        scale: 1.01,
      }}
      className="relative overflow-hidden bg-gradient-to-br from-purple-500/20 via-zinc-900 to-cyan-500/10 border border-white/10 rounded-3xl p-6 min-h-[220px] flex flex-col justify-between backdrop-blur-xl"
    >

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 blur-3xl rounded-full pointer-events-none" />

      {/* FLOATING LIGHT */}
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 right-10 w-32 h-32 bg-cyan-400/10 blur-2xl rounded-full"
      />

      {/* TOP CONTENT */}
      <div className="relative z-10">
        <p className="text-sm text-white/60 mb-2 tracking-wide uppercase">
          Daily Streak
        </p>

        <div className="flex items-center gap-3">
          <h2 className="text-5xl font-bold">
            12
          </h2>

          <div>
            <p className="text-xl font-semibold">
              Days 🔥
            </p>

            <p className="text-sm text-white/50">
              Keep it going
            </p>
          </div>
        </div>
      </div>

      {/* BOTTOM CONTENT */}
      <div className="relative z-10">
        <h1 className="text-3xl md:text-4xl font-bold leading-tight">
          Welcome Back, Pushp 👋
        </h1>

        <p className="text-white/60 mt-3 max-w-lg">
          Continue your learning journey and complete your active courses today.
        </p>
      </div>

    </motion.article>
  );
}