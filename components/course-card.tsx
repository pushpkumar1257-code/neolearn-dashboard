"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";

function getIcon(iconName) {
  const Icon = Icons[iconName];

  return Icon ? (
    <Icon size={20} />
  ) : (
    <Icons.BookOpen size={20} />
  );
}

export default function CourseCard({
  title,
  progress,
  icon_name,
}) {
  return (
    <motion.article
      variants={{
        hidden: {
          opacity: 0,
          y: 20,
        },
        show: {
          opacity: 1,
          y: 0,
        },
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      whileHover={{
        scale: 1.015,
        y: -2,
        boxShadow: "0px 0px 30px rgba(139,92,246,0.20)",
      }}
      className="relative overflow-hidden rounded-3xl border border-zinc-800/50 hover:border-purple-500/40 transition-colors bg-zinc-900/60 backdrop-blur-xl p-5"
    >

      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10 opacity-40 pointer-events-none" />

      <div className="relative z-10 flex items-center justify-between">

        <div className="flex items-center gap-3">

          <div className="flex items-center justify-center w-10 h-10 rounded-2xl bg-white/5 border border-white/10">
            {getIcon(icon_name)}
          </div>

          <div>
            <h3 className="text-white font-semibold leading-tight">
              {title}
            </h3>

            <p className="text-xs text-zinc-400 mt-1">
              In Progress
            </p>
          </div>

        </div>

        <div className="text-sm font-medium text-purple-400">
          {progress}%
        </div>

      </div>

      <div className="relative z-10 mt-6">

        <div className="w-full h-2 rounded-full bg-zinc-800 overflow-hidden">

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-purple-500"
          />

        </div>

      </div>

    </motion.article>
  );
}