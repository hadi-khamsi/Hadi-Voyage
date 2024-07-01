import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import WeatherPage from "./pages/WeatherPage";
import Reserve from "./pages/Reserve"; // Ensure this import is correct
import RisksPage from "./pages/RisksPage"; // Import the new component
import LaunchesPage from "./pages/LaunchesPage";
import NewsPage from './pages/NewsPage'; // Ensure this import is correct
import AboutPage from "./pages/AboutPage";
import AircraftsPage from "./pages/AircraftsPage"; // Import the new component

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow overflow-auto">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/weather" element={<WeatherPage />} />
            <Route path="/reserve" element={<Reserve />} /> {/* Updated to use Reserve */}
            <Route path="/risks" element={<RisksPage />} /> {/* Changed from "/meteor-showers" */}
            <Route path="/launches" element={<LaunchesPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/aircrafts" element={<AircraftsPage />} /> {/* Changed from "/space-vessels" */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
