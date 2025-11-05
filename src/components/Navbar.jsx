import { motion } from "framer-motion";
import { PenTool, Sparkles } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <motion.div
            initial={{ rotate: -15, scale: 0.9, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 220, damping: 16 }}
            className="p-2 rounded-xl bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-pink-500 text-white"
          >
            <PenTool size={18} />
          </motion.div>
          <span className="font-semibold text-gray-900 text-lg tracking-tight">
            Wordlift
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm text-gray-700">
          <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
          <a href="#pricing" className="hover:text-gray-900 transition-colors">Pricing</a>
          <a href="#cta" className="hover:text-gray-900 transition-colors">Get started</a>
        </div>

        <div className="flex items-center gap-3">
          <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">Sign in</button>
          <motion.a
            href="#cta"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-1 px-4 py-2 rounded-lg bg-gray-900 text-white text-sm font-medium shadow-sm hover:shadow transition-shadow"
          >
            <Sparkles size={16} /> Try free
          </motion.a>
        </div>
      </nav>
    </header>
  );
}
