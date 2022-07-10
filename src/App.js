import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';

import Home from './pages/home/Home';
import About from './pages/about/About';
import Events from './pages/events/Events';
import Exhibit from './pages/exhibit/Exhibit';
import Essentials from './essentials/Essentials';
import Footer from './components/footer/Footer';

function App() {
  // to connect the observer to showcase
  const location = useLocation();
  const headerHomeRef = useRef(null);
  const headerAboutRef = useRef(null);
  const headerEventsRef = useRef(null);
  const headerExhibitsRef = useRef(null);
  const headerContactRef = useRef(null);

  const findingheaderActiveRef = () => {
    if (location.pathname === '/about') return headerAboutRef;
    if (location.pathname === '/events') return headerEventsRef;
    if (location.pathname === '/exhibits') return headerExhibitsRef;
    if (location.pathname === '/contact') return headerContactRef;

    if (location.pathname === '/') return headerHomeRef;
  };

  const headerActiveRef = findingheaderActiveRef();

  // spinner
  const [isLoading, setLoading] = useState(true);

  const fakeRequest = () => {
    return new Promise(resolve => setTimeout(() => resolve(), 3500));
  };

  useEffect(() => {
    fakeRequest().then(() => {
      const spinner = document.querySelector('.spinner');

      if (spinner) {
        spinner.remove();
        setLoading(!isLoading);
      }
    });
  }, [isLoading]);

  if (isLoading) {
    return null;
  }

  return (
    <div className="container-main">
      {/* Navs */}
      <Essentials headerRef={headerActiveRef} />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home ref={headerHomeRef} />} />
        <Route path="/about" element={<About ref={headerAboutRef} />} />
        <Route path="/events" element={<Events ref={headerEventsRef} />} />
        <Route path="/exhibits" element={<Exhibit ref={headerExhibitsRef} />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
