import { motion } from "framer-motion";

const data = [
  {
    quote:
      "Logan installed our full fire alarm and serviced our fire doors. Professional, tidy, and clearly experts.",
    name: "J. Matthews",
  },
  {
    quote:
      "We upgraded our security alarm with monitoring. The team handled everything and the app is great.",
    name: "A. Khan",
  },
  {
    quote: "Fast response and detailed reports that satisfied our insurer.", name: "R. Patel" },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-extrabold text-center"
        >
          What our clients say
        </motion.h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {data.map((t, i) => (
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm"
            >
              <p className="text-gray-700">“{t.quote}”</p>
              <footer className="mt-4 text-sm font-semibold text-gray-900">{t.name}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
