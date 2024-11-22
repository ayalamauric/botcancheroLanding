import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Integrations from './components/Integrations';
import Footer from './components/Footer';
import Terms from './Pages/Terms';
import Privacy from './Pages/Privacy';

function App() {
  return (

      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <main>
                <Hero />
                <Features />
                <Integrations />
                <Footer />
              </main>
            </>
          } />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </div>
  );
}

export default App;