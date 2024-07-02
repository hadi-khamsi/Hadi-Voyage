import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import WeatherPage from "./pages/WeatherPage";
import Reserve from "./pages/Reserve";
import RisksPage from "./pages/RisksPage";
import LaunchesPage from "./pages/LaunchesPage";
import NewsPage from "./pages/NewsPage";
import AboutPage from "./pages/AboutPage";
import AircraftsPage from "./pages/AircraftsPage";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow overflow-auto">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/weather" element={<WeatherPage />} />
          <Route path="/reserve" element={<Reserve />} />
          <Route path="/risks" element={<RisksPage />} />
          <Route path="/launches" element={<LaunchesPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/aircrafts" element={<AircraftsPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
