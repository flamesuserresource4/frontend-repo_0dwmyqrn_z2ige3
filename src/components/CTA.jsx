import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section id="cta" className="relative py-24">
      <div className="absolute inset-x-0 top-0 pointer-events-none h-48 bg-gradient-to-b from-fuchsia-500/10 via-indigo-500/10 to-transparent blur-3xl" />
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl border border-black/10 bg-gradient-to-br from-white to-white/90 backdrop-blur shadow-xl"
        >
          <div className="absolute -left-10 -top-10 w-56 h-56 rounded-full bg-fuchsia-500/20 blur-3xl" />
          <div className="absolute -right-10 -bottom-10 w-56 h-56 rounded-full bg-indigo-500/20 blur-3xl" />

          <div className="relative z-10 p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                Start writing better in minutes
              </h3>
              <p className="mt-2 text-gray-600">
                Try the full editor, no credit card required. Cancel anytime.
              </p>
              <ul className="mt-4 text-sm text-gray-700 list-disc list-inside">
                <li>Unlimited drafts during trial</li>
                <li>Export anywhere</li>
                <li>Team collaboration</li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 justify-end">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-gray-900 text-white font-medium shadow-lg shadow-gray-900/10 hover:shadow-gray-900/20 transition"
              >
                Create free account <ArrowRight size={18} />
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-black/10 bg-white text-gray-900 font-medium hover:bg-gray-50"
              >
                View pricing
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
