import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./Navbar/Navbar";
import { Memories } from "./pages/Memories/Memories";
import { Home } from "./pages/Home/Home";
import { Memory } from "./pages/Memory/Memory";
import { About } from "./pages/About/About";
import { Contact } from "./pages/Contact/Contact";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/memories" element={<Memories />}></Route>
        <Route path="memories/:id" element={<Memory />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
