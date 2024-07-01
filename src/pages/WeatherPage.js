import React, { useState, useEffect } from "react";
import axios from "axios";

const WeatherPage = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 5;
  const apiKey = "kY9NOpRbzQNXFKLzdVyPitHdZnRJRhoLFybsD0nh";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const urls = [
          `https://api.nasa.gov/DONKI/GST?startDate=2024-06-01&endDate=2024-06-30&api_key=${apiKey}`,
          `https://api.nasa.gov/DONKI/CME?startDate=2024-06-01&endDate=2024-06-30&api_key=${apiKey}`,
          `https://api.nasa.gov/DONKI/IPS?startDate=2024-06-01&endDate=2024-06-30&api_key=${apiKey}`,
          `https://api.nasa.gov/DONKI/FLR?startDate=2024-06-01&endDate=2024-06-30&api_key=${apiKey}`,
        ];

        const responses = await Promise.all(urls.map((url) => axios.get(url)));

        let combinedData = responses.flatMap((response) => response.data);
        combinedData.sort(
          (a, b) => new Date(b.submissionTime) - new Date(a.submissionTime)
        );

        setWeatherData(combinedData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [apiKey]);

  const totalPages = Math.ceil(weatherData.length / eventsPerPage);

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const goToPrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = weatherData.slice(indexOfFirstEvent, indexOfLastEvent);

  const getEventType = (event) => {
    if (event.hasOwnProperty("gstID")) return "Geomagnetic Storm";
    if (event.hasOwnProperty("cmeID")) return "Coronal Mass Ejection";
    if (event.hasOwnProperty("ipsID")) return "Interplanetary Shock";
    if (event.hasOwnProperty("flrID")) return "Solar Flare";
    return "Other Event";
  };

  const formatStartTime = (startTime) => {
    const date = new Date(startTime);
    return isNaN(date.getTime()) ? "Unknown" : date.toUTCString();
  };

  const displayEventType = (event) => {
    if (getEventType(event) === "Other Event") {
      return "Coronal Mass Ejection";
    }
    return getEventType(event);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Space Weather Reports</h1>
      <p className="text-lg mb-6">
        See the latest reports for space weather events.
      </p>

      {loading && (
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      )}

      {!loading && (
        <div className="space-y-8">
          {currentEvents.map((event, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 transition duration-300 ease-in-out transform hover:scale-105"
            >
              <h2 className="text-xl font-semibold mb-2">
                Event Type: {displayEventType(event)}
              </h2>
              <p>
                <span className="font-semibold">Start Time:</span>{" "}
                {formatStartTime(event.startTime)}
              </p>

              {event.linkedEvents && event.linkedEvents.length > 0 && (
                <div className="mt-4">
                  <p className="font-semibold">Linked Events:</p>
                  <ul className="list-disc pl-4">
                    {event.linkedEvents.map((linkedEvent, idx) => (
                      <li key={idx}>Activity ID: {linkedEvent.activityID}</li>
                    ))}
                  </ul>
                </div>
              )}

              <button
                onClick={() => window.open(event.link, "_blank")}
                className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out"
              >
                View Report
              </button>

              <p className="mt-4">
                <span className="font-semibold">Submission Time:</span>{" "}
                {new Date(event.submissionTime).toUTCString()}
              </p>
            </div>
          ))}
        </div>
      )}

      {!loading && (
        <div className="mt-8 flex justify-between">
          <button
            onClick={goToPrevPage}
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
            onClick={goToNextPage}
            disabled={currentPage === totalPages || currentEvents.length === 0}
            className={`px-4 py-2 rounded-md ${
              currentPage === totalPages || currentEvents.length === 0
                ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default WeatherPage;
