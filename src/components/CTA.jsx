import { motion } from "framer-motion";
import { useState } from "react";

export default function CTA() {
  const [status, setStatus] = useState("idle");

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      // Placeholder – backend integration can be wired later
      await new Promise((r) => setTimeout(r, 800));
      setStatus("success");
      e.currentTarget.reset();
    } catch (e) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-gradient-to-br from-red-500 to-orange-500 p-1"
        >
          <div className="rounded-3xl bg-white p-8 md:p-12">
            <div className="max-w-2xl">
              <h3 className="text-2xl md:text-3xl font-extrabold">Request a site survey</h3>
              <p className="mt-2 text-gray-600">Tell us a little about your property and we’ll call you back.</p>
            </div>
            <form onSubmit={onSubmit} className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="grid gap-2">
                <label className="text-sm font-medium">Name</label>
                <input name="name" required className="h-11 rounded-lg border border-gray-200 px-3 focus:outline-none focus:ring-2 focus:ring-red-500" />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium">Phone</label>
                <input name="phone" required className="h-11 rounded-lg border border-gray-200 px-3 focus:outline-none focus:ring-2 focus:ring-red-500" />
              </div>
              <div className="md:col-span-2 grid gap-2">
                <label className="text-sm font-medium">Message</label>
                <textarea name="message" rows={4} className="rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500" />
              </div>
              <div className="md:col-span-2">
                <button
                  disabled={status === "loading"}
                  className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-red-500 to-orange-500 px-6 py-3 text-white font-semibold shadow-sm hover:shadow-md transition disabled:opacity-60"
                >
                  {status === "loading" ? "Sending..." : status === "success" ? "Sent!" : "Request Callback"}
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
