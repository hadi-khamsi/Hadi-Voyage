import React from 'react';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const container = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, duration: 0.6 }
    }
  };
  const item = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-50 to-white flex items-center justify-center p-6">
      <motion.div
        className="max-w-3xl w-full space-y-8"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 text-center"
          variants={item}
        >
          About Hadi Voyage
        </motion.h1>

        <motion.div
          className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 space-y-6"
          variants={item}
        >
          <motion.p className="text-base sm:text-lg leading-relaxed text-gray-700" variants={item}>
            Hadi Voyage™ is an end‑to‑end platform that simplifies commercial space travel planning. We aggregate mission schedules, live orbital & climate data, safety guidelines, and booking tools into one seamless hub.
          </motion.p>
          <motion.p className="text-base sm:text-lg leading-relaxed text-gray-700" variants={item}>
            Explore launch sites on our interactive map, compare spacecraft capabilities, and reserve your mission in just a few clicks. From childhood dream to reality—Hadi Voyage makes space travel accessible.
          </motion.p>
          <motion.p className="text-base sm:text-lg leading-relaxed text-gray-700" variants={item}>
            Built by engineers, adventurers, and space enthusiasts, our mission is to guide you beyond Earth with clarity, safety, and confidence.
          </motion.p>
        </motion.div>

        <motion.div className="flex justify-center" variants={item}>
          <a
            href="/reserve"
            className="inline-block bg-purple-600 text-white py-3 px-6 rounded-full font-semibold shadow hover:bg-purple-700 transition"
          >
            Book Your Mission
          </a>
        </motion.div>
      </motion.div>
    </section>
);
}
