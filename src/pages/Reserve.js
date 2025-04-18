import React, { useState } from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import SpaceMap from '../images/SpaceMap.jpg';
import VisaIcon from '../images/visa.png';
import MastercardIcon from '../images/mastercard.png';
import AmexIcon from '../images/amex.png';
import DiscoverIcon from '../images/discover.png';

export default function Reserve() {
  const cities = [
    'Houston, TX',
    'Cape Canaveral, FL',
    'Los Angeles, CA',
    'New York, NY',
    'Seattle, WA',
    'Baikonur Cosmodrome, Kazakhstan',
    'Guiana Space Centre, French Guiana',
  ];
  const destinations = [
    'Low Earth Orbit',
    'International Space Station',
    'Lunar Gateway',
    'Moon Base Alpha',
    'Mars Colony',
    'Titan Station',
  ];
  const spacecrafts = [
    'SpaceX Dragon',
    "Boeing's CST-100 Starliner",
    "Blue Origin's New Shepard",
    "Virgin Galactic's SpaceShipTwo",
    'SpaceX Starship',
    'Boeing Hypersonic Concept',
    'Vast Space’s Haven-1',
    'Axiom Space’s Module',
  ];
  const baseCosts = {
    'SpaceX Dragon': 6000000,
    "Boeing's CST-100 Starliner": 9000000,
    "Blue Origin's New Shepard": 250000,
    "Virgin Galactic's SpaceShipTwo": 250000,
    'SpaceX Starship': 1000000,
    'Boeing Hypersonic Concept': 10000000,
    'Vast Space’s Haven-1': 5000000,
    'Axiom Space’s Module': 2000000,
  };
  const serviceFee = 6499.99;
  const insuranceFee = 50000;
  const trainingFee = 10000;

  const [fromFilter, setFromFilter] = useState('');
  const [toFilter, setToFilter] = useState('');
  const [showFrom, setShowFrom] = useState(false);
  const [showTo, setShowTo] = useState(false);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [passengers, setPassengers] = useState('');
  const [training, setTraining] = useState(false);
  const [insurance, setInsurance] = useState(false);
  const [spacecraft, setSpacecraft] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [requirements, setRequirements] = useState('');
  const [message, setMessage] = useState('');

  const filteredCities = cities.filter(c =>
    c.toLowerCase().includes((fromFilter || from).toLowerCase())
  );
  const filteredDest = destinations.filter(d =>
    d.toLowerCase().includes((toFilter || to).toLowerCase())
  );

  const canSchedule =
    from &&
    to &&
    date &&
    time &&
    fullName &&
    email &&
    phone &&
    passengers &&
    spacecraft;

  const clearField = (setVal, setFilt, setShow) => {
    setVal('');
    setFilt('');
    setShow(false);
  };

  const handleSchedule = () => {
    if (!canSchedule) return;
    setFrom('');
    setTo('');
    setDate('');
    setTime('');
    setPassengers('');
    setTraining(false);
    setInsurance(false);
    setSpacecraft('');
    setFullName('');
    setEmail('');
    setPhone('');
    setRequirements('');
    setMessage('Scheduled! An agent will contact you shortly.');
  };

  const base = spacecraft ? baseCosts[spacecraft] : 0;
  const insCost = insurance ? insuranceFee : 0;
  const trainCost = training ? trainingFee : 0;
  const total = serviceFee + base + insCost + trainCost;

  return (
    <div className="min-h-screen bg-indigo-50">
      <div className="max-w-6xl mx-auto p-6 space-y-8">
        <h1 className="text-3xl font-semibold text-gray-900">Plan Your Mission</h1>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/2 bg-white rounded-xl shadow-lg overflow-hidden">
            <TransformWrapper initialScale={1.2} minScale={1} maxScale={3} wheel={{ step: 0.1 }}>
              {({ zoomIn, zoomOut }) => (
                <div className="relative h-64">
                  <TransformComponent>
                    <img src={SpaceMap} alt="Space Map" className="w-full h-full object-cover" />
                  </TransformComponent>
                  <div className="absolute bottom-2 right-2 flex flex-col space-y-1 bg-black bg-opacity-60 rounded-md p-1">
                    <button onClick={() => zoomIn()} className="w-8 h-8 flex items-center justify-center text-white">+</button>
                    <button onClick={() => zoomOut()} className="w-8 h-8 flex items-center justify-center text-white">–</button>
                  </div>
                </div>
              )}
            </TransformWrapper>
          </div>

          <div className="md:w-1/2 space-y-4">
            {[
              {
                label: 'Launch Site',
                value: from,
                filter: fromFilter,
                setFilter: setFromFilter,
                show: showFrom,
                setShow: setShowFrom,
                list: filteredCities,
                onSelect: c => {
                  setFrom(c);
                  setFromFilter('');
                  setShowFrom(false);
                },
                clear: () => clearField(setFrom, setFromFilter, setShowFrom),
              },
              {
                label: 'Destination',
                value: to,
                filter: toFilter,
                setFilter: setToFilter,
                show: showTo,
                setShow: setShowTo,
                list: filteredDest,
                onSelect: d => {
                  setTo(d);
                  setToFilter('');
                  setShowTo(false);
                },
                clear: () => clearField(setTo, setToFilter, setShowTo),
              },
            ].map((fld, i) => (
              <div key={i} className="relative">
                <input
                  type="text"
                  placeholder={fld.label}
                  value={fld.filter || fld.value}
                  onFocus={() => fld.setShow(true)}
                  onBlur={() => setTimeout(() => fld.setShow(false), 200)}
                  onChange={e => {
                    fld.setFilter(e.target.value);
                    fld.setShow(true);
                  }}
                  className="w-full pl-10 pr-10 py-2 border rounded-lg"
                />
                <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">🔍</span>
                {(fld.value || fld.filter) && (
                  <button
                    onMouseDown={fld.clear}
                    className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600"
                  >
                    ×
                  </button>
                )}
                {fld.show && (
                  <ul className="absolute z-10 w-full bg-white border rounded-lg mt-1 max-h-48 overflow-y-auto">
                    {fld.list.map(item => (
                      <li
                        key={item}
                        onMouseDown={() => fld.onSelect(item)}
                        className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-sm text-gray-700 md:hidden mb-1">Date</label>
                <input
                  type="date"
                  value={date}
                  onChange={e => setDate(e.target.value)}
                  placeholder="Select Date"
                  className="w-full py-2 px-3 border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 md:hidden mb-1">Time</label>
                <input
                  type="time"
                  value={time}
                  onChange={e => setTime(e.target.value)}
                  placeholder="Select Time"
                  className="w-full py-2 px-3 border rounded-lg"
                />
              </div>
              <input
                type="number"
                min="1"
                placeholder="Passengers"
                value={passengers}
                onChange={e => setPassengers(e.target.value)}
                className="py-2 px-3 border rounded-lg"
              />
              <select
                value={spacecraft}
                onChange={e => setSpacecraft(e.target.value)}
                className="py-2 px-3 border rounded-lg"
              >
                <option value="">Select Spacecraft</option>
                {spacecrafts.map(name => (
                  <option key={name} value={name}>{name}</option>
                ))}
              </select>
            </div>

            <div className="flex items-center space-x-6">
              <label className="flex items-center space-x-2">
                <input type="checkbox" checked={insurance} onChange={e => setInsurance(e.target.checked)} />
                <span className="text-gray-700">Mission Insurance</span>
              </label>
              <label className="flex items-center space-x-2 whitespace-nowrap">
                <input type="checkbox" checked={training} onChange={e => setTraining(e.target.checked)} />
                <span className="text-gray-700">Pre‑Mission Training</span>
              </label>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={e => setFullName(e.target.value)}
              className="w-full py-2 px-3 border rounded-lg"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full py-2 px-3 border rounded-lg"
            />
            <input
              type="tel"
              placeholder="Phone"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              className="w-full py-2 px-3 border rounded-lg"
            />
          </div>
          <textarea
            placeholder="Special Requirements"
            value={requirements}
            onChange={e => setRequirements(e.target.value)}
            className="w-full py-2 px-3 border rounded-lg"
            rows="6"
          />
        </div>

        <div className="bg-purple-50 shadow rounded-lg p-6 border border-purple-200">
          <h3 className="text-lg font-semibold mb-4 text-gray-900">Estimated Cost</h3>
          <div className="space-y-2 text-gray-700">
            <div className="flex justify-between">
              <span>Base Fare</span>
              <span>{spacecraft ? `$${base.toLocaleString()}` : '—'}</span>
            </div>
            <div className="flex justify-between">
              <span>Service Fee</span>
              <span>${serviceFee.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-purple-600">Insurance</span>
              <span className="text-purple-600">{insurance ? `$${insCost.toLocaleString()}` : '—'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-purple-600">Training</span>
              <span className="text-purple-600">{training ? `$${trainCost.toLocaleString()}` : '—'}</span>
            </div>
            <div className="border-t pt-2 mt-2 flex justify-between font-bold text-gray-900">
              <span>Total</span>
              <span>${total.toLocaleString()}</span>
            </div>
          </div>
          <div className="mt-4">
            <span className="text-sm text-gray-600">Payment Methods:</span>
            <div className="flex items-center space-x-3 mt-2 bg-purple-100 p-2 rounded-lg">
              <img src={VisaIcon} alt="Visa" className="h-6" />
              <img src={MastercardIcon} alt="Mastercard" className="h-6" />
              <img src={AmexIcon} alt="Amex" className="h-6" />
              <img src={DiscoverIcon} alt="Discover" className="h-6" />
            </div>
          </div>
        </div>

        <div className="mt-4 mb-32">
          <button
            onClick={handleSchedule}
            disabled={!canSchedule}
            className={`w-full py-3 rounded-lg font-medium transition ${canSchedule ? 'bg-purple-600 text-white hover:bg-purple-700' : 'bg-gray-300 text-gray-600 cursor-not-allowed'}`}
          >
            Schedule
          </button>
          {message && <p className="mt-4 text-green-600">{message}</p>}
        </div>

        <div className="pb-16">
          <h2 className="text-xl font-semibold mb-4 text-gray-900">You Might Also Like</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              { title: 'Orbital Tours', text: 'Experience Earth from space.', icon: '🛰️' },
              { title: 'Cargo Delivery', text: 'Send supplies beyond Earth.', icon: '📦' },
              { title: 'Station Stay', text: 'Live aboard ISS or Gateway.', icon: '🏠' },
              { title: 'Research Missions', text: 'Conduct experiments in orbit.', icon: '🔬' },
            ].map(({ title, text, icon }) => (
              <div key={title} className="bg-white rounded-lg p-4 flex items-center justify-between transform transition hover:-translate-y-1 shadow">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{title}</h3>
                  <p className="text-sm text-gray-600">{text}</p>
                  <button onClick={() => alert('Coming soon!')} className="mt-2 bg-purple-600 text-white py-1 px-4 rounded-full text-sm hover:bg-purple-700">Details</button>
                </div>
                <span className="text-4xl">{icon}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
