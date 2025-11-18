import { motion } from "framer-motion";
import { AlarmClock, ShieldAlert, DoorClosed } from "lucide-react";

const items = [
  {
    icon: AlarmClock,
    title: "Fire Alarms",
    desc: "Design, installation, and maintenance to BS 5839 standards for full compliance.",
  },
  {
    icon: ShieldAlert,
    title: "Security Alarms",
    desc: "Smart intruder systems with 24/7 monitoring and police response options.",
  },
  {
    icon: DoorClosed,
    title: "Fire Doors",
    desc: "Supply and install certified fire doorsets with full inspection and reporting.",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-extrabold text-center"
        >
          Solutions
        </motion.h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 text-white grid place-content-center">
                <item.icon />
              </div>
              <h3 className="mt-4 text-xl font-bold">{item.title}</h3>
              <p className="mt-2 text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
