import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import DragonInside from '../images/DragonInside.webp';
import DragonOutside from '../images/DragonOutside.avif';
import StarlinerInside from '../images/StarlinerInside.jpeg';
import StarlinerOutside from '../images/StarlinerOutside.webp';
import BlueInside from '../images/BlueInside.webp';
import BlueOutside from '../images/BlueOutside.jpeg';
import VirginInside from '../images/VirginInside.jpeg';
import VirginOutside from '../images/VirginOutside.webp';
import StarshipInside from '../images/StarshipInside.jpeg';
import StarshipOutside from '../images/StarshipOutside.webp';
import HypersonicInside from '../images/HypersonicInside.webp';
import HypersonicOutside from '../images/HypersonicOutside.jpeg';
import HavenInside from '../images/HavenInside.webp';
import HavenOutside from '../images/HavenOutside.jpeg';
import AxiomInside from '../images/AxiomInside.jpeg';
import AxiomOutside from '../images/AxiomOutside.jpeg';

export default function SpacecraftsPage() {
  const [passengerRange, setPassengerRange] = useState('Any');
  const [topSpeed, setTopSpeed] = useState('Any');
  const [filtered, setFiltered] = useState([]);

  const vessels = [
    { name: 'SpaceX Dragon', images: [DragonOutside, DragonInside], speed: 27600, capacity: 4, cost: 6000000, link: 'https://www.spacex.com/vehicles/dragon/' },
    { name: 'Boeing CST-100 Starliner', images: [StarlinerOutside, StarlinerInside], speed: 28000, capacity: 7, cost: 9000000, link: 'https://www.boeing.com/space/starliner' },
    { name: 'Blue Origin New Shepard', images: [BlueOutside, BlueInside], speed: 3563, capacity: 6, cost: 250000, link: 'https://www.blueorigin.com/new-shepard' },
    { name: 'Virgin Galactic SpaceShipTwo', images: [VirginOutside, VirginInside], speed: 3530, capacity: 6, cost: 250000, link: 'https://www.virgingalactic.com/' },
    { name: 'SpaceX Starship', images: [StarshipOutside, StarshipInside], speed: 7800, capacity: 100, cost: 1000000, link: 'https://www.spacex.com/vehicles/starship/' },
    { name: 'Boeing Hypersonic Concept', images: [HypersonicOutside, HypersonicInside], speed: 6174, capacity: 250, cost: 10000000, link: 'https://www.boeing.com/hypersonics/' },
    { name: 'Vast Space’s Haven-1', images: [HavenOutside, HavenInside], speed: 27577, capacity: 4, cost: 5000000, link: 'https://www.vastspace.com/' },
    { name: 'Axiom Space Module', images: [AxiomOutside, AxiomInside], speed: 11000, capacity: 8, cost: 2000000, link: 'https://www.axiomspace.com/' },
  ];

  useEffect(() => {
    const result = vessels.filter(v => {
      const passOk = passengerRange === 'Any' || v.capacity >= Number(passengerRange.replace('+',''));
      const speedOk = topSpeed === 'Any' || v.speed >= Number(topSpeed);
      return passOk && speedOk;
    });
    setFiltered(result);
  }, [passengerRange, topSpeed]);

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  const card = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-50 to-white py-12 px-6">
      <div className="max-w-5xl mx-auto space-y-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center">
          Explore Space Vessels
        </h1>

        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-lg font-medium mb-3">Passengers</h2>
              <div className="flex flex-wrap gap-3">
                {['Any','2','4','6','8','10+'].map(opt => (
                  <button
                    key={opt}
                    onClick={() => setPassengerRange(opt)}
                    className={`px-4 py-2 rounded-full transition ${
                      passengerRange===opt ? 'bg-purple-600 text-white' : 'bg-white text-gray-700 hover:bg-purple-100'
                    }`}
                  >{opt}</button>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-lg font-medium mb-3">Top Speed (km/h)</h2>
              <div className="flex flex-wrap gap-3">
                {['Any',5000,10000,15000,20000,25000].map(opt => (
                  <button
                    key={opt}
                    onClick={() => setTopSpeed(opt)}
                    className={`px-4 py-2 rounded-full transition ${
                      topSpeed===opt ? 'bg-purple-600 text-white' : 'bg-white text-gray-700 hover:bg-purple-100'
                    }`}
                  >{opt==='Any'?opt:opt.toLocaleString()}</button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={container}
        >
          {filtered.length ? filtered.map((v,i)=>(
            <motion.article key={i} variants={card} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition">
              <div className="group relative h-48">
                <img src={v.images[0]} alt={`${v.name} Exterior`} className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0" />
                <img src={v.images[1]} alt={`${v.name} Interior`} className="absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
                  Exterior ↔ Interior
                </span>
              </div>
              <div className="p-6 space-y-3">
                <h2 className="text-xl font-semibold text-gray-900">{v.name}</h2>
                <p><strong>Speed:</strong> {v.speed.toLocaleString()} km/h</p>
                <p><strong>Capacity:</strong> {v.capacity}</p>
                <p><strong>Cost:</strong> ${v.cost.toLocaleString()}</p>
                <button
                  onClick={()=>window.open(v.link,'_blank')}
                  className="mt-4 w-full bg-purple-600 text-white py-2 rounded-full transition hover:bg-purple-700"
                >View More</button>
              </div>
            </motion.article>
          )) : (
            <p className="col-span-full text-center text-gray-600">No vessels match your criteria.</p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
