import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './Navbar/Navbar';
import { Memories } from './pages/Memories/Memories';
import { Home } from './pages/Home/Home';
import { Memory } from './pages/Memory/Memory';
import { About } from './pages/About/About';
import { Contact } from './pages/Contact/Contact';
import { Cinematography } from './pages/Cinematography/Cinematography';
import './App.css';
import { Footer } from './layout/Footer';
import { Helmet } from 'react-helmet';

import { Gallery } from './pages/Galllery/Gallery';
function App() {
  return (
    <>
      <Helmet>
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta
          name="google-site-verification"
          content="PciObAIFUSMiTGLcBy3MXo0biGXph8pe1bP7uW5g6jc"
        />
        <meta property="og:site_name" content="Celebration Chapters" />
      </Helmet>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/photos" element={<Gallery />}></Route>
          <Route path="memories/:id" element={<Memory />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="films" element={<Cinematography />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
