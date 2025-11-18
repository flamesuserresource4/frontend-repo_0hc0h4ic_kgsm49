import { motion } from "framer-motion";
import { CheckCircle2, Clock, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Certified Installers",
    desc: "NSI Gold and BAFE accredited engineers with years of experience.",
  },
  { icon: Clock, title: "24/7 Monitoring", desc: "Always-on alarm monitoring with rapid response." },
  { icon: CheckCircle2, title: "Compliance First", desc: "Installations and maintenance to relevant British Standards." },
];

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold">Why Logan</h2>
            <p className="mt-4 text-gray-600">
              We deliver end-to-end fire and security solutions: consultation, design, install, and ongoing maintenance. Our focus is safety, reliability, and clear reporting.
            </p>
            <div className="mt-6 grid gap-4">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-1 h-9 w-9 rounded-lg bg-green-500/10 text-green-600 grid place-content-center">
                    <f.icon />
                  </div>
                  <div>
                    <div className="font-semibold">{f.title}</div>
                    <div className="text-gray-600">{f.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-black/5 bg-gradient-to-br from-white to-gray-50 p-8"
          >
            <div className="aspect-video rounded-xl bg-[radial-gradient(circle_at_30%_30%,rgba(255,0,0,0.08),transparent_60%),radial-gradient(circle_at_70%_70%,rgba(255,165,0,0.08),transparent_60%)] border border-black/5" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
