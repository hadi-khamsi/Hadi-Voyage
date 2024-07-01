import React, { useState, useEffect } from "react";
import DragonInside from "../images/DragonInside.webp";
import DragonOutside from "../images/DragonOutside.avif";
import StarlinerInside from "../images/StarlinerInside.jpeg";
import StarlinerOutside from "../images/StarlinerOutside.webp";
import BlueInside from "../images/BlueInside.webp";
import BlueOutside from "../images/BlueOutside.jpeg";
import VirginInside from "../images/VirginInside.jpeg";
import VirginOutside from "../images/VirginOutside.webp";
import StarshipInside from "../images/StarshipInside.jpeg";
import StarshipOutside from "../images/StarshipOutside.webp";
import HypersonicInside from "../images/HypersonicInside.webp";
import HypersonicOutside from "../images/HypersonicOutside.jpeg";
import HavenInside from "../images/HavenInside.webp";
import HavenOutside from "../images/HavenOutside.jpeg";
import AxiomInside from "../images/AxiomInside.jpeg";
import AxiomOutside from "../images/AxiomOutside.jpeg";

const SpaceVesselsPage = () => {
  const [passengerRange, setPassengerRange] = useState("Any");
  const [topSpeed, setTopSpeed] = useState("Any");
  const [filteredVessels, setFilteredVessels] = useState([]);

  useEffect(() => {
    filterVessels();
  }, [passengerRange, topSpeed]);

  const handlePassengerChange = (range) => {
    setPassengerRange(range);
  };

  const handleSpeedChange = (speed) => {
    setTopSpeed(speed);
  };

  const vessels = [
    {
      name: "SpaceX Dragon",
      outsideImage: DragonOutside,
      insideImage: DragonInside,
      topSpeed: 27600,
      passengers: 4,
      link: "https://www.spacex.com/vehicles/dragon/",
    },
    {
      name: "Boeing's CST-100 Starliner",
      outsideImage: StarlinerOutside,
      insideImage: StarlinerInside,
      topSpeed: 28000,
      passengers: 7,
      link: "https://www.boeing.com/space/starliner",
    },
    {
      name: "Blue Origin's New Shepard",
      outsideImage: BlueOutside,
      insideImage: BlueInside,
      topSpeed: 3563,
      passengers: 6,
      link: "https://www.blueorigin.com/new-shepard",
    },
    {
      name: "Virgin Galactic's SpaceShipTwo",
      outsideImage: VirginOutside,
      insideImage: VirginInside,
      topSpeed: 3530,
      passengers: 6,
      link: "https://www.virgingalactic.com/",
    },
    {
      name: "SpaceX Starship",
      outsideImage: StarshipOutside,
      insideImage: StarshipInside,
      topSpeed: 7800,
      passengers: 100,
      link: "https://www.spacex.com/vehicles/starship/",
    },
    {
      name: "Boeing Hypersonic Concept",
      outsideImage: HypersonicOutside,
      insideImage: HypersonicInside,
      topSpeed: 6174,
      passengers: 250,
      link: "https://www.boeing.com/hypersonics/",
    },
    {
      name: "Vast Space’s Haven-1",
      outsideImage: HavenOutside,
      insideImage: HavenInside,
      topSpeed: 27577,
      passengers: 4,
      link: "https://www.vastspace.com/",
    },
    {
      name: "Axiom Space’s Module",
      outsideImage: AxiomOutside,
      insideImage: AxiomInside,
      topSpeed: 11000,
      passengers: 8,
      link: "https://www.axiomspace.com/",
    },
  ];

  function filterVessels() {
    const filtered = vessels.filter((vessel) => {
      let showPassengerRange = true;
      let showTopSpeed = true;

      if (passengerRange && passengerRange !== "Any") {
        const rangeValues = passengerRange.split("-");
        const minPassengers = parseInt(rangeValues[0], 10);
        const maxPassengers = rangeValues[1]
          ? parseInt(rangeValues[1], 10)
          : Infinity;

        if (
          vessel.passengers < minPassengers ||
          vessel.passengers > maxPassengers
        ) {
          showPassengerRange = false;
        }
      }

      if (topSpeed && topSpeed !== "Any") {
        const speedValue = parseInt(topSpeed, 10);

        if (vessel.topSpeed < speedValue) {
          showTopSpeed = false;
        }
      }

      return showPassengerRange && showTopSpeed;
    });

    setFilteredVessels(filtered);
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Explore Space Vessels</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Select Passenger Range:</h2>
          <div className="space-y-4">
            {["Any", "0-2", "2-4", "4-6", "7-8", "8+"].map((option) => (
              <button
                key={option}
                className={`block w-full py-2 px-4 rounded-md text-center ${
                  passengerRange === option
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={() => handlePassengerChange(option)}
              >
                {option === "Any" ? "Any Passengers" : `${option} Passengers`}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Select Top Speed:</h2>
          <div className="space-y-4">
            {["Any", 5000, 10000, 15000, 20000, 25000].map((option) => (
              <button
                key={option}
                className={`block w-full py-2 px-4 rounded-md text-center ${
                  topSpeed === option
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={() => handleSpeedChange(option)}
              >
                {option === "Any"
                  ? "Any Speed"
                  : `${option.toLocaleString()} km/h`}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="my-8 border-t-2 border-gray-300"></div>

      <div className="mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVessels.length > 0 ? (
            filteredVessels.map((vessel, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 transform transition-transform hover:scale-105"
              >
                <h2 className="text-2xl font-bold mb-4">{vessel.name}</h2>
                <div className="flex space-x-4">
                  <div className="w-1/2 relative">
                    <img
                      src={vessel.outsideImage}
                      alt={`${vessel.name} Outside`}
                      className="w-full rounded-lg"
                    />
                    <p className="absolute bottom-0 left-0 right-0 bg-gray-800 text-white text-sm py-1 px-2 rounded-b-lg opacity-75">
                      Outside View
                    </p>
                  </div>
                  <div className="w-1/2 relative">
                    <img
                      src={vessel.insideImage}
                      alt={`${vessel.name} Inside`}
                      className="w-full h-full rounded-lg object-cover"
                    />
                    <p className="absolute bottom-0 left-0 right-0 bg-gray-800 text-white text-sm py-1 px-2 rounded-b-lg opacity-75">
                      Inside View
                    </p>
                  </div>
                </div>
                <p className="mt-4">
                  <span className="font-semibold">Top Speed:</span>{" "}
                  {vessel.topSpeed.toLocaleString()} km/h
                </p>
                <p>
                  <span className="font-semibold">Crew Capacity:</span>{" "}
                  {vessel.passengers} Passengers
                </p>
                <p>
                  <span className="font-semibold">
                    Estimated Cost per Passenger:
                  </span>{" "}
                  {getEstimatedCost(vessel.name)} USD
                </p>
                <button
                  className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
                  onClick={() => window.open(vessel.link, "_blank")}
                >
                  View More
                </button>
              </div>
            ))
          ) : (
            <p>No vessels match your criteria.</p>
          )}
        </div>
      </div>
    </div>
  );
};

function getEstimatedCost(vesselName) {
  const costs = {
    "SpaceX Dragon": 6000000,
    "Boeing's CST-100 Starliner": 9000000,
    "Blue Origin's New Shepard": 250000,
    "Virgin Galactic's SpaceShipTwo": 250000,
    "SpaceX Starship": 1000000,
    "Boeing Hypersonic Concept": 10000000,
    "Vast Space’s Haven-1": 5000000,
    "Axiom Space’s Module": 2000000,
  };

  return costs[vesselName] ? costs[vesselName].toLocaleString() : "N/A";
}

export default SpaceVesselsPage;
