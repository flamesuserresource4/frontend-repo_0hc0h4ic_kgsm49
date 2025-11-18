import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-red-500/10 blur-3xl" />
        <div className="absolute -right-24 -bottom-24 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-red-600 bg-red-50 px-3 py-1 rounded-full">Certified Specialists</span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
            Detect. Contain. Secure.
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Logan provides certified fire and security systems for homes and businesses. From fire alarms to fire doors and monitored security — we protect what matters.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:justify-center lg:justify-start">
            <a href="#contact" className="inline-flex justify-center rounded-lg bg-gradient-to-r from-red-500 to-orange-500 px-6 py-3 text-white font-semibold shadow-sm hover:shadow-md transition-shadow">Request a Site Survey</a>
            <a href="#products" className="inline-flex justify-center rounded-lg border border-gray-200 px-6 py-3 font-semibold hover:bg-gray-50 transition-colors">Explore Solutions</a>
          </div>
          <div className="mt-6 text-xs text-gray-500">BAFE • NSI Gold • 24/7 Monitoring</div>
        </motion.div>

        {/* Visual Panel (replaces external Spline scene to avoid 403 errors) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="relative h-[360px] sm:h-[420px] lg:h-[520px] rounded-2xl overflow-hidden border border-black/5 bg-gradient-to-br from-white to-orange-50"
        >
          <div className="absolute inset-0">
            <div className="absolute -top-16 -left-16 h-72 w-72 rounded-full bg-red-500/20 blur-3xl" />
            <div className="absolute -bottom-16 -right-16 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />
          </div>

          <div className="relative h-full w-full p-8 flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="text-sm font-semibold text-gray-700"
            >
              Live Protection Dashboard
            </motion.div>

            <div className="mt-4 grid grid-cols-3 gap-4">
              {[
                { label: "Fire Alarms", emoji: "🔥", color: "from-red-500 to-orange-500" },
                { label: "Security", emoji: "🛡️", color: "from-emerald-500 to-teal-500" },
                { label: "Fire Doors", emoji: "🚪", color: "from-amber-500 to-yellow-500" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                  className="rounded-xl border border-black/5 bg-white/60 backdrop-blur p-4 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className={`h-10 w-10 rounded-lg bg-gradient-to-br ${item.color} text-white grid place-items-center text-lg`}>{item.emoji}</div>
                  <div className="mt-3 font-semibold">{item.label}</div>
                  <div className="text-xs text-gray-500">Monitored • Certified • Maintained</div>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="h-2 rounded-full bg-gray-100 overflow-hidden"
              >
                <div className="h-full w-1/2 bg-gradient-to-r from-red-500 to-orange-500" />
              </motion.div>
              <div className="mt-3 text-xs text-gray-500">System Health: Excellent</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
