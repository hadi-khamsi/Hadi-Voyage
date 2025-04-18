import { Link, useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import Logo from '../images/Logo.png';

export default function Navbar() {
  const navigate = useNavigate();
  const pages = [
    { label: 'Home', path: '/' },
    { label: 'Book (BETA)', path: '/reserve' },
    { label: 'Spacecrafts', path: '/spacecrafts' },
    { label: 'Risks', path: '/risks' },
    { label: 'Weather', path: '/weather' },
    { label: 'About', path: '/about' },
    { label: 'Help', path: '/news' },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [showSearchMenu, setShowSearchMenu] = useState(false);
  const [showCountryMenu, setShowCountryMenu] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({ code: '🇺🇸', label: 'USA' });
  const refSearch = useRef();
  const refCountry = useRef();

  useEffect(() => {
    const closeAll = e => {
      if (refSearch.current && !refSearch.current.contains(e.target)) {
        setShowSearchMenu(false);
      }
      if (refCountry.current && !refCountry.current.contains(e.target)) {
        setShowCountryMenu(false);
      }
    };
    document.addEventListener('mousedown', closeAll);
    return () => document.removeEventListener('mousedown', closeAll);
  }, []);

  const filtered = pages.filter(p =>
    p.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <nav className="bg-black text-white px-10 py-6">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <div className="flex items-center space-x-6">
          <Link to="/">
            <img src={Logo} alt="Hadi Voyage" className="h-12" />
          </Link>
          <Link
            to="/reserve"
            className="border-2 border-white rounded-full px-4 py-2 font-bold hover:bg-white hover:text-black"
          >
            Book (BETA)
          </Link>
          <Link to="/spacecrafts" className="hover:text-gray-300">
            Spacecrafts
          </Link>
          <Link to="/risks" className="hover:text-gray-300">
            Risks
          </Link>
          <Link to="/weather" className="hover:text-gray-300">
            Weather
          </Link>
          <Link to="/about" className="hover:text-gray-300">
            About
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative" ref={refSearch}>
            <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              {/* search icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35m1.7-5.15A7 7 0 1110 3a7 7 0 017.35 8.5z"
                />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search HadiVoyage.com"
              value={searchTerm}
              onFocus={() => setShowSearchMenu(true)}
              onChange={e => {
                setSearchTerm(e.target.value);
                setShowSearchMenu(true);
              }}
              className="pl-10 pr-4 py-2 bg-white placeholder-gray-400 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {showSearchMenu && searchTerm && (
              <ul className="absolute right-0 mt-1 w-56 bg-white text-black rounded-lg shadow-lg z-20">
                {filtered.length ? (
                  filtered.map(p => (
                    <li
                      key={p.path}
                      onClick={() => {
                        navigate(p.path);
                        setShowSearchMenu(false);
                        setSearchTerm('');
                      }}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      {p.label}
                    </li>
                  ))
                ) : (
                  <li className="px-4 py-2 text-gray-500">No matches</li>
                )}
              </ul>
            )}
          </div>

          <div className="relative" ref={refCountry}>
            <button
              onClick={() => setShowCountryMenu(!showCountryMenu)}
              className="flex items-center space-x-1 px-3 py-2 bg-black rounded-lg focus:outline-none"
            >
              <span className="text-xl">{selectedCountry.code}</span>
              <span>{selectedCountry.label}</span>
            </button>
            {showCountryMenu && (
              <ul className="absolute right-0 mt-1 w-40 bg-white text-black rounded-lg shadow-lg z-20">
                {[
                  { code: '🇺🇸', label: 'USA' },
                  { code: '🇬🇧', label: 'UK' },
                  { code: '🇨🇦', label: 'Canada' },
                  { code: '🇦🇺', label: 'Australia' },
                ].map(c => (
                  <li
                    key={c.label}
                    onClick={() => {
                      setSelectedCountry(c);
                      setShowCountryMenu(false);
                    }}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center space-x-2"
                  >
                    <span className="text-xl">{c.code}</span>
                    <span>{c.label}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <Link
            to="/news"
            className="bg-white hover:bg-gray-100 text-black px-4 py-2 rounded-lg"
          >
            Help
          </Link>
        </div>
      </div>
    </nav>
  );
}
