import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";

export default function MeteorShowersPage() {
  const [asteroids, setAsteroids] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const perPage = 5;
  const apiKey = "NO47MajqqasZv5SlhkVAjKxrp8cVyxEMuPX2VEkE";

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const { data } = await axios.get(
          `https://api.nasa.gov/neo/rest/v1/feed?start_date=2024-07-01&end_date=2024-07-08&api_key=${apiKey}`
        );
        const all = Object.values(data.near_earth_objects).flat();
        setAsteroids(all);
      } catch {
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const total = Math.ceil(asteroids.length / perPage);
  const current = asteroids.slice((page - 1) * perPage, page * perPage);

  const calcHitProb = (min, max, missKm, velKmH) => {
    const avg = (min + max) / 2;
    const area = Math.PI * Math.pow((avg * 1000) / 2, 2);
    const hours = missKm / velKmH;
    const prob = (area / (hours * 3600)) * 100;
    return prob.toFixed(2);
  };

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  const card = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-50 to-white p-6 sm:p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <header className="text-center space-y-2">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900">
            Upcoming Near‑Earth Asteroids
          </h1>
          <p className="text-gray-600">
            Stay updated on celestial bodies approaching Earth’s orbit.
          </p>
        </header>

        {loading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-purple-600 border-t-transparent"></div>
          </div>
        ) : (
          <motion.div
            className="grid gap-6"
            initial="hidden"
            animate="visible"
            variants={container}
          >
            {current.map((ast, idx) => {
              const close = ast.close_approach_data[0] || {};
              const minKm = ast.estimated_diameter.kilometers.estimated_diameter_min;
              const maxKm = ast.estimated_diameter.kilometers.estimated_diameter_max;
              const missKm = Number(close.miss_distance?.kilometers || 0);
              const velKmH = Number(close.relative_velocity?.kilometers_per_hour || 1);
              const prob = calcHitProb(minKm, maxKm, missKm, velKmH);

              return (
                <motion.article
                  key={idx}
                  variants={card}
                  className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition p-6 space-y-4"
                >
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                    {ast.name}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2 text-gray-700">
                      <p>
                        <span className="font-medium">Close Date:</span>{" "}
                        {close.close_approach_date || "N/A"}
                      </p>
                      <p>
                        <span className="font-medium">Diameter:</span>{" "}
                        {minKm.toFixed(2)}–{maxKm.toFixed(2)} km
                      </p>
                      <p>
                        <span className="font-medium">Miss Distance:</span>{" "}
                        {close.miss_distance?.kilometers || "N/A"} km
                      </p>
                      <p>
                        <span className="font-medium">Velocity:</span>{" "}
                        {close.relative_velocity?.kilometers_per_hour || "N/A"} km/h
                      </p>
                    </div>
                    <div className="space-y-2 text-gray-700">
                      <p>
                        <span className="font-medium">Orbit:</span>{" "}
                        {close.orbiting_body || "N/A"}
                      </p>
                      <p className="mt-4 font-semibold">Impact Probability:</p>
                      <p
                        className={`text-3xl font-bold ${
                          prob >= 1 ? "text-red-500" : "text-green-500"
                        }`}
                      >
                        {prob}%
                      </p>
                      <button
                        onClick={() => window.open(ast.nasa_jpl_url, "_blank")}
                        className="mt-4 w-full bg-purple-600 text-white py-2 rounded-full shadow hover:bg-purple-700 transition"
                      >
                        View Report
                      </button>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        )}

        {!loading && (
          <nav className="flex justify-center items-center space-x-4">
            <button
              onClick={() => setPage((p) => Math.max(p - 1, 1))}
              disabled={page === 1}
              className="px-3 py-1 rounded-full bg-white shadow hover:bg-purple-100 disabled:opacity-50 transition"
            >
              ←
            </button>
            <span className="text-gray-700">
              {page} / {total}
            </span>
            <button
              onClick={() => setPage((p) => Math.min(p + 1, total))}
              disabled={page === total}
              className="px-3 py-1 rounded-full bg-white shadow hover:bg-purple-100 disabled:opacity-50 transition"
            >
              →
            </button>
          </nav>
        )}

        <p className="text-sm text-gray-500 text-center">
          Ensure your API key is valid if data fails to load.
        </p>
      </div>
    </section>
  );
}
