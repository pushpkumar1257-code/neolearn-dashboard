"use client";

import { motion } from "framer-motion";

const activityData = [40, 70, 55, 90, 60, 80, 45];

export default function ActivityCard() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      whileHover={{
        scale: 1.02,
      }}
      className="relative overflow-hidden bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-5 h-full min-h-[320px]"
    >

      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 pointer-events-none" />

      <div className="relative z-10">

        <p className="text-sm text-white/60 mb-2">
          Weekly Activity
        </p>

        <h2 className="text-2xl font-bold mb-8">
          Learning Progress
        </h2>

        <div className="flex items-end justify-between gap-2 h-40">

          {activityData.map((value, index) => (
            <motion.div
              key={index}
              initial={{ height: 0 }}
              animate={{ height: `${value}%` }}
              transition={{
                delay: index * 0.08,
                duration: 0.5,
              }}
              className="w-full rounded-xl bg-gradient-to-t from-cyan-500 to-purple-500"
            />
          ))}

        </div>

        <div className="flex justify-between text-xs text-white/40 mt-4">
          <span>Mon</span>
          <span>Tue</span>
          <span>Wed</span>
          <span>Thu</span>
          <span>Fri</span>
          <span>Sat</span>
          <span>Sun</span>
        </div>

      </div>

    </motion.article>
  );
}