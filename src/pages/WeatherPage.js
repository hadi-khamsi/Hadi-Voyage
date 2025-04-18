import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import placeholder from "../data/spaceWeatherPlaceholder.json";

export default function WeatherPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const perPage = 5;
  const apiKey = "NO47MajqqasZv5SlhkVAjKxrp8cVyxEMuPX2VEkE";

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const types = ["GST","CME","IPS","FLR"];
        const endpoints = types.map(
          t => `https://api.nasa.gov/DONKI/${t}?startDate=2024-06-01&endDate=2024-06-30&api_key=${apiKey}`
        );
        const res = await Promise.all(endpoints.map(u => axios.get(u)));
        const all = res.flatMap(r => r.data);
        all.sort((a,b) => new Date(b.submissionTime) - new Date(a.submissionTime));
        localStorage.setItem("cachedSpaceWeather", JSON.stringify(all));
        setEvents(all);
      } catch {
        const cached = localStorage.getItem("cachedSpaceWeather");
        setEvents(cached ? JSON.parse(cached) : placeholder);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const total = Math.ceil(events.length / perPage);
  const current = events.slice((page - 1) * perPage, page * perPage);

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
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
            Space Weather Alerts
          </h1>
          <p className="text-gray-600">
            Live updates on geomagnetic storms, CMEs, shocks and flares.
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
            {current.map((ev,i) => (
              <motion.article
                key={i}
                variants={card}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition p-6 space-y-3"
              >
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                  {ev.gstID
                    ? "Geomagnetic Storm"
                    : ev.cmeID
                    ? "Coronal Mass Ejection"
                    : ev.ipsID
                    ? "Interplanetary Shock"
                    : ev.flrID
                    ? "Solar Flare"
                    : "Coronal Mass Injection"}
                </h2>
                <p className="text-gray-700">
                  <span className="font-medium">Start:</span>{" "}
                  {new Date(ev.startTime).toUTCString()}
                </p>
                {ev.linkedEvents?.length > 0 && (
                  <p className="text-gray-700">
                    <span className="font-medium">Linked IDs:</span>{" "}
                    {ev.linkedEvents.map(le => le.activityID).join(", ")}
                  </p>
                )}
                <div className="flex justify-between items-center flex-wrap">
                  <a
                    href={ev.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 font-medium hover:underline"
                  >
                    View Report
                  </a>
                  <time className="text-gray-500 text-sm mt-2 sm:mt-0">
                    {new Date(ev.submissionTime).toUTCString()}
                  </time>
                </div>
              </motion.article>
            ))}
          </motion.div>
        )}

        {!loading && (
          <nav className="flex justify-center items-center space-x-4">
            <button
              onClick={() => setPage(p => Math.max(p - 1, 1))}
              disabled={page === 1}
              className="px-3 py-1 rounded-full bg-white shadow hover:bg-purple-100 disabled:opacity-50 transition"
            >
              ←
            </button>
            <span className="text-gray-700">{page} / {total}</span>
            <button
              onClick={() => setPage(p => Math.min(p + 1, total))}
              disabled={page === total}
              className="px-3 py-1 rounded-full bg-white shadow hover:bg-purple-100 disabled:opacity-50 transition"
            >
              →
            </button>
          </nav>
        )}

        <p className="text-sm text-gray-500 text-center">
          If no data appears, ensure your API key is valid and CORS policy allows requests.
        </p>
      </div>
    </section>
  );
}
