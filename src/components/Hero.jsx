import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

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

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="relative h-[360px] sm:h-[420px] lg:h-[520px] rounded-2xl overflow-hidden border border-black/5 bg-white/50"
        >
          <Spline scene="https://prod.spline.design/T2vM1rH3QkHkDq7y/scene.splinecode" />
        </motion.div>
      </div>
    </section>
  );
}
