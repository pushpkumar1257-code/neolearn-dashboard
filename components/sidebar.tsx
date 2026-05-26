"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  Home,
  BookOpen,
  BarChart3,
  Settings,
} from "lucide-react";

const items = [
  {
    name: "Dashboard",
    href: "/",
    icon: Home,
  },
  {
    name: "Courses",
    href: "/courses",
    icon: BookOpen,
  },
  {
    name: "Analytics",
    href: "/analytics",
    icon: BarChart3,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="relative z-20 w-24 md:w-72 min-h-screen border-r border-white/10 bg-black/40 backdrop-blur-2xl p-4 flex flex-col">

      <div className="mb-10 hidden md:block">
        <h1 className="text-3xl font-bold tracking-tight">
          Dashboard
        </h1>
      </div>

      <nav className="flex flex-col gap-3">

        {items.map((item) => {
          const Icon = item.icon;

          const active = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className="relative"
            >

              <motion.div
                whileHover={{
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className={`relative flex items-center gap-4 px-5 py-4 rounded-2xl overflow-hidden transition-all duration-300 ${
                  active
                    ? "text-white"
                    : "text-zinc-400 hover:text-white"
                }`}
              >

                {active && (
                  <motion.div
                    layoutId="sidebar-highlight"
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-white/10 rounded-2xl"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  />
                )}

                <Icon
                  size={22}
                  className="relative z-10 shrink-0"
                />

                <span className="relative z-10 hidden md:block text-lg font-medium">
                  {item.name}
                </span>

              </motion.div>

            </Link>
          );
        })}

      </nav>

      <div className="mt-auto hidden md:flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10">

        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center font-bold text-lg">
          P
        </div>

        <div>
          <p className="font-semibold">Pushp</p>
          <p className="text-sm text-zinc-400">
            Premium Member
          </p>
        </div>

      </div>

    </aside>
  );
}