import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import About from './Pages/About';
import Application from './Pages/Application';
import Contact from './Pages/Contact';
import Approval from './Pages/Approval';
import Home from './Pages/Home';
import Security from './Pages/Security';
import Services from './Pages/Services';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/excise-approval" element={<Approval />} />
          <Route path="/services" element={<Services />} />
          <Route path="/application" element={<Application />} />
          <Route path="/security" element={<Security />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;


