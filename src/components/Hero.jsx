import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import { ArrowRight, Rocket } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Q6b6cV2wVvV1m3cI/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Soft gradient overlay that doesn't block pointer events */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-8 items-center">
        <div className="py-28 md:py-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 backdrop-blur px-3 py-1 text-xs text-gray-700"
          >
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-gradient-to-tr from-indigo-500 to-fuchsia-500 text-white">
              <Rocket size={12} />
            </span>
            New: Real‑time rewrite suggestions and tone control
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="mt-6 text-4xl md:text-6xl font-bold leading-tight text-gray-900"
          >
            Write better, faster.
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-pink-600">
              Your AI writing co‑pilot.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-5 text-base md:text-lg text-gray-600 max-w-xl"
          >
            Turn rough ideas into polished copy. Get instant suggestions for clarity,
            tone, and style—without losing your voice.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
          >
            <a
              href="#cta"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-gray-900 text-white font-medium shadow-lg shadow-gray-900/10 hover:shadow-gray-900/20 transition"
            >
              Start free trial <ArrowRight size={18} />
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-black/10 bg-white text-gray-900 font-medium hover:bg-gray-50"
            >
              See how it works
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-8 grid grid-cols-3 gap-6 text-center"
          >
            {[
              { label: "Writers assisted", value: "120k+" },
              { label: "Avg. time saved", value: "3.1h/wk" },
              { label: "Satisfaction", value: "98%" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-xl border border-black/10 bg-white/70 backdrop-blur p-4">
                <div className="text-xl font-semibold text-gray-900">{stat.value}</div>
                <div className="text-xs text-gray-600">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="hidden md:block" />
      </div>
    </section>
  );
}
