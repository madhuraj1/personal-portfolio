import { Routes, Route } from 'react-router-dom';
import { Navbar } from './Navbar/Navbar';
import { Home } from './pages/Home/Home';
import { About } from './pages/About/About';
import { Contact } from './pages/Contact/Contact';
import { Cinematography } from './pages/Cinematography/Cinematography';
import './App.css';
import { Footer } from './layout/Footer';

import { Gallery } from './pages/Galllery/Gallery';
function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/photos" element={<Gallery />}></Route>
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
