import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./Navbar/Navbar";
import { Memories } from "./pages/Memories";
import { Home } from "./pages/Home";
import { Memory } from "./pages/Memory";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/memories" element={<Memories />}></Route>
          <Route path="memories/:id" element={<Memory />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
