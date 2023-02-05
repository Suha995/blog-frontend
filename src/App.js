import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Single from "./components/Single";
import Write from "./components/Write";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/write" element={<Write />} />
            <Route path="/single/:id" element={<Single />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
