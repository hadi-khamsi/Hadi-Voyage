import React, { useState, useEffect } from "react";
import axios from "axios";

const MeteorShowersPage = () => {
  const [asteroidData, setAsteroidData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const asteroidsPerPage = 5;
  const apiKey = "kY9NOpRbzQNXFKLzdVyPitHdZnRJRhoLFybsD0nh";

  useEffect(() => {
    const fetchAsteroidData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.nasa.gov/neo/rest/v1/feed?start_date=2024-07-01&end_date=2024-07-08&api_key=${apiKey}`
        );
        const nearEarthObjects = response.data.near_earth_objects;
        const combinedData = Object.keys(nearEarthObjects).flatMap(
          (date) => nearEarthObjects[date]
        );
        setAsteroidData(combinedData);
      } catch (error) {
        console.error("Error fetching asteroid data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAsteroidData();
  }, [apiKey]);

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const totalPages = Math.ceil(asteroidData.length / asteroidsPerPage);

  const indexOfLastAsteroid = currentPage * asteroidsPerPage;
  const indexOfFirstAsteroid = indexOfLastAsteroid - asteroidsPerPage;
  const currentAsteroids = asteroidData.slice(
    indexOfFirstAsteroid,
    indexOfLastAsteroid
  );

  const calculateHitProbability = (
    diameterMin,
    diameterMax,
    missDistance,
    relativeVelocity
  ) => {
    const minArea = Math.PI * Math.pow(diameterMin / 2, 2);
    const maxArea = Math.PI * Math.pow(diameterMax / 2, 2);
    const area = (minArea + maxArea) / 2;
    const crossSectionalArea = area * Math.pow(10, 6);
    const timeToImpact = missDistance / relativeVelocity;
    const probability = (crossSectionalArea / (timeToImpact * 3600)) * 100;
    return probability.toFixed(2);
  };

  const estimateLocationDescription = (orbitingBody) => {
    switch (orbitingBody) {
      case "Earth":
        return "Earth Orbit";
      default:
        return orbitingBody;
    }
  };

  const getProbabilityColor = (probability) => {
    return probability >= 1.0 ? "text-red-500" : "text-green-500";
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Upcoming Near-Earth Asteroids</h1>
      <p className="text-lg mb-6">
        Explore information about upcoming near-Earth asteroids approaching
        Earth. Be aware of the potential risks associated with these celestial
        bodies.
      </p>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
        </div>
      ) : (
        <div>
          <div className="space-y-8">
            {currentAsteroids.map((asteroid, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 transform transition-transform hover:scale-105"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0 sm:space-x-8">
                  <div className="w-full sm:w-auto">
                    <h2 className="text-xl font-semibold mb-2">
                      {asteroid.name}
                    </h2>
                    <p>
                      <span className="font-semibold">
                        Close Approach Date:
                      </span>{" "}
                      {asteroid.close_approach_data[0]?.close_approach_date}
                    </p>
                    <p>
                      <span className="font-semibold">
                        Estimated Diameter (km):
                      </span>{" "}
                      {`${asteroid.estimated_diameter.kilometers.estimated_diameter_min.toFixed(
                        2
                      )} - ${asteroid.estimated_diameter.kilometers.estimated_diameter_max.toFixed(
                        2
                      )}`}
                    </p>
                    <p>
                      <span className="font-semibold">Miss Distance (km):</span>{" "}
                      {
                        asteroid.close_approach_data[0]?.miss_distance
                          .kilometers
                      }
                    </p>
                    <p>
                      <span className="font-semibold">
                        Relative Velocity (km/h):
                      </span>{" "}
                      {
                        asteroid.close_approach_data[0]?.relative_velocity
                          .kilometers_per_hour
                      }
                    </p>
                  </div>
                  <div className="w-full sm:w-auto">
                    <p className="text-lg font-semibold">Location:</p>
                    <p>
                      {estimateLocationDescription(
                        asteroid.close_approach_data[0]?.orbiting_body
                      )}
                    </p>
                    <p className="text-lg font-semibold mt-4">
                      Estimated Probability of Impact:
                    </p>
                    <p
                      className={`text-3xl font-bold ${getProbabilityColor(
                        calculateHitProbability(
                          asteroid.estimated_diameter.kilometers
                            .estimated_diameter_min,
                          asteroid.estimated_diameter.kilometers
                            .estimated_diameter_max,
                          asteroid.close_approach_data[0]?.miss_distance
                            .kilometers,
                          asteroid.close_approach_data[0]?.relative_velocity
                            .kilometers_per_hour
                        )
                      )}`}
                    >
                      {calculateHitProbability(
                        asteroid.estimated_diameter.kilometers
                          .estimated_diameter_min,
                        asteroid.estimated_diameter.kilometers
                          .estimated_diameter_max,
                        asteroid.close_approach_data[0]?.miss_distance
                          .kilometers,
                        asteroid.close_approach_data[0]?.relative_velocity
                          .kilometers_per_hour
                      )}
                      %
                    </p>
                  </div>
                  <div className="w-full sm:w-auto mt-4 sm:mt-0">
                    <button
                      onClick={() =>
                        window.open(asteroid.nasa_jpl_url, "_blank")
                      }
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                    >
                      View Report
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 flex justify-between">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-md ${
                currentPage === 1
                  ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
            >
              Previous
            </button>
            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-md ${
                currentPage === totalPages
                  ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MeteorShowersPage;
