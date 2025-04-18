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
  const [menuOpen, setMenuOpen] = useState(false);
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
    <nav className="bg-black text-white px-4 sm:px-6 py-4 shadow-md">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <div className="flex items-center space-x-4 flex-shrink-0">
          <Link to="/" className="block">
            <img
              src={Logo}
              alt="Hadi Voyage"
              className="h-10 w-auto max-w-[120px] object-contain"
            />
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          {pages.slice(1, 6).map(p => (
            <Link
              key={p.path}
              to={p.path}
              className={
                p.label.includes('Book')
                  ? 'bg-white text-black font-bold px-4 py-2 rounded-full border-2 border-white shadow hover:bg-gray-100 transition'
                  : 'hover:text-gray-300 transition'
              }
            >
              {p.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative" ref={refSearch}>
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onFocus={() => setShowSearchMenu(true)}
              onChange={e => {
                setSearchTerm(e.target.value);
                setShowSearchMenu(true);
              }}
              className="pl-8 pr-3 py-1 rounded-lg text-black text-sm w-32 md:w-48"
            />
            <span className="absolute left-2 top-1.5 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m1.7-5.15A7 7 0 1110 3a7 7 0 017.35 8.5z" />
              </svg>
            </span>
            {showSearchMenu && searchTerm && (
              <ul className="absolute right-0 mt-1 w-48 bg-white text-black rounded-lg shadow-lg z-20 text-sm">
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
              className="flex items-center space-x-1 text-sm px-2 py-1 border border-white rounded-lg"
            >
              <span>{selectedCountry.code}</span>
              <span>{selectedCountry.label}</span>
            </button>
            {showCountryMenu && (
              <ul className="absolute right-0 mt-1 w-40 bg-white text-black rounded-lg shadow-lg z-20 text-sm">
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
                    <span>{c.code}</span>
                    <span>{c.label}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <Link
            to="/news"
            className="hidden md:inline-block bg-white text-black px-3 py-1 rounded-md text-sm hover:bg-gray-100"
          >
            Help
          </Link>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-4 px-4 space-y-2">
          {pages.slice(1, 6).map(p => (
            <Link
              key={p.path}
              to={p.path}
              onClick={() => setMenuOpen(false)}
              className={
                p.label.includes('Book')
                  ? 'block py-2 bg-white text-black font-bold text-center rounded-full'
                  : 'block py-2 border-b border-white text-white'
              }
            >
              {p.label}
            </Link>
          ))}
          <Link
            to="/news"
            onClick={() => setMenuOpen(false)}
            className="block py-2 text-white"
          >
            Help
          </Link>
        </div>
      )}
    </nav>
  );
}
