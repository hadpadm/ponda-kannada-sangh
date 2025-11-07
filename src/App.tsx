// src/App.tsx
import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Kannada_Siri from './pages/Kannada_Siri';
import Photos from './pages/Photos';
import Updates from './pages/Updates';
import Team from './pages/Team';

function App() {
  // in case you want to inspect environment later
  const isDev = import.meta.env.MODE === 'development';

  return (
    // HashRouter removes the need for basename and works great on GH Pages + custom domain
    <Router>
      <div className="min-h-screen bg-blue-50 flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            {/* Redirect root to /home */}
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />

            {/* Use lowercase paths to avoid accidental mismatches */}
            <Route path="/about" element={<About />} />
            <Route path="/kannada_siri" element={<Kannada_Siri />} />
            <Route path="/photos" element={<Photos />} />
            <Route path="/updates" element={<Updates />} />
            <Route path="/team" element={<Team />} />

            {/* catch-all: redirect unknown routes back to home */}
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
