import React, { useState } from "react";
import WorldMap from "../images/WorldMap.jpeg";
import Pin from "../images/pin.png";

const LaunchesPage = () => {
  const launchData = [
    {
      id: 1,
      mission: "Falcon Heavy • GOES U",
      company: "SpaceX",
      date: "June 25",
      site: "LC-39A, Kennedy Space Center, Florida",
      destination: "Geostationary Orbit",
      coordinates: { top: "33%", left: "29%" },
    },
    {
      id: 2,
      mission: "Alpha • ELaNa 43",
      company: "Firefly Aerospace",
      date: "June 26/27",
      site: "SLC-2, Vandenberg Space Force Base, California",
      destination: "",
      coordinates: { top: "30%", left: "21%" },
    },
    {
      id: 3,
      mission: "Eris • TestFlight",
      company: "Gilmour Space",
      date: "TBD",
      site: "Pad 1, Bowen Orbital Spaceport",
      destination: "",
    },
    {
      id: 4,
      mission: "Soyuz • Kondor-FKA 2",
      company: "Russian Space Agency",
      date: "NET June",
      site: "Pad 1S, Vostochny Cosmodrome",
      destination: "",
      coordinates: { top: "15%", left: "60%" },
    },
    {
      id: 5,
      mission: "H3 • DAICHI-4",
      company: "Japanese Exploration Aerospace Agency (JAXA)",
      date: "June 29/30",
      site: "Yoshinobu Launch Complex at the JAXA Tanegashima Space Center",
      destination: "",
      coordinates: { top: "27%", left: "83%" },
    },
    {
      id: 6,
      mission: "Falcon 9 • Transporter-11",
      company: "SpaceX",
      date: "NET July",
      site: "SLC-4E, Vandenberg Space Force Base, California",
      destination: "",
      coordinates: { top: "30%", left: "21%" },
    },
    {
      id: 7,
      mission: "Falcon 9 • Starlink",
      company: "SpaceX",
      date: "June 27",
      site: "Space Launch Complex 40 (SLC-40), Cape Canaveral Space Force Station, Florida",
      destination: "Low Earth Orbit",
      coordinates: { top: "33%", left: "29%" },
    },
  ];

  const knownLocationLaunches = launchData.filter(
    (launch) => launch.coordinates
  );
  const unknownLocationLaunches = launchData.filter(
    (launch) => !launch.coordinates
  );
  const sortedLaunchData = [
    ...knownLocationLaunches,
    ...unknownLocationLaunches,
  ];

  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const startIndex = currentPage * 4;
  const paginatedLaunches = sortedLaunchData.slice(startIndex, startIndex + 4);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Upcoming Spacecraft Launches</h1>
      <p className="text-lg mb-6">
        For more detailed schedules, check the{" "}
        <a
          href="https://spaceflightnow.com/launch-schedule/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Spaceflight Now Launch Schedule
        </a>
      </p>

      {paginatedLaunches.map((launch) => (
        <div
          key={launch.id}
          className="bg-white shadow-md rounded-lg p-6 mb-6 transition duration-300 ease-in-out transform hover:scale-105"
        >
          <h2 className="text-xl font-semibold mb-2">{launch.mission}</h2>
          <p className="mb-2">Company: {launch.company}</p>
          <p className="mb-2">Launch Date: {launch.date}</p>
          <p className="mb-2">Launch Site: {launch.site}</p>
          {launch.destination && (
            <p className="mb-2">Destination: {launch.destination}</p>
          )}
          {launch.coordinates && (
            <div className="relative mt-4">
              <img src={WorldMap} alt="World Map" className="w-full h-auto" />
              <img
                src={Pin}
                alt="Launch Location"
                className="absolute"
                style={{
                  top: launch.coordinates.top,
                  left: launch.coordinates.left,
                  transform: "translate(-50%, -100%)",
                  width: "40px",
                  height: "40px",
                }}
              />
            </div>
          )}
        </div>
      ))}

      <div className="flex justify-between mt-8">
        <button
          onClick={prevPage}
          disabled={currentPage === 0}
          className={`bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out ${
            currentPage === 0 ? "cursor-not-allowed opacity-50" : ""
          }`}
        >
          Previous
        </button>
        <button
          onClick={nextPage}
          disabled={startIndex + 4 >= sortedLaunchData.length}
          className={`bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out ${
            startIndex + 4 >= sortedLaunchData.length
              ? "cursor-not-allowed opacity-50"
              : ""
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default LaunchesPage;
