import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Kannada_Siri from './pages/Kannada_Siri';  // ✅ fixed here
import Photos from './pages/Photos';
import Updates from './pages/Updates';
import Team from './pages/Team';


function App() {
  // ✅ define this outside JSX
  const isDev = import.meta.env.MODE === 'development';

  return (
    <Router basename={isDev ? '/' : '/ponda-kannada-sangh'}>
      <div className="min-h-screen bg-blue-50 flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            {/* Redirect root to /home */}
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />

            {/* Other pages */}
            <Route path="/About" element={<About />} />
            <Route path="/kannada_siri" element={<Kannada_Siri />} />
            <Route path="/Photos" element={<Photos />} />
            <Route path="/Updates" element={<Updates />} />
            <Route path="/Team" element={<Team />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
