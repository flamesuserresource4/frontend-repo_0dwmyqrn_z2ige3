import { motion } from "framer-motion";
import { CheckCircle2, Sparkles, Shield, Bolt } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Smart rewrites",
    desc: "One‑click improvements for clarity, tone, and flow with context‑aware suggestions.",
  },
  {
    icon: Shield,
    title: "Your voice, protected",
    desc: "Style locking ensures edits stay true to your brand and writing personality.",
  },
  {
    icon: Bolt,
    title: "Real‑time feedback",
    desc: "Inline hints for grammar, readability, and structure as you type.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 bg-white">
      <div className="absolute inset-x-0 -top-20 mx-auto h-40 max-w-5xl pointer-events-none bg-gradient-to-b from-indigo-500/10 to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900"
          >
            Everything you need to write better
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-3 text-gray-600"
          >
            From brainstorming to final polish, get a co‑pilot that elevates every sentence.
          </motion.p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {features.map((f) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-fuchsia-500 text-white inline-flex items-center justify-center">
                <f.icon size={18} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2"><CheckCircle2 className="text-emerald-500 mt-0.5" size={16} /> Polished suggestions</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="text-emerald-500 mt-0.5" size={16} /> Clearer structure</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="text-emerald-500 mt-0.5" size={16} /> Tone guidance</li>
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
