import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Single from "./components/Single";
import Write from "./components/Write";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const user = true;
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={user ? <Home /> : <Login />} />
            <Route path="/register" element={user ? <Home /> : <Register />} />
            <Route path="/write" element={user ? <Write /> : <Login />} />
            <Route path="/single/:id" element={<Single />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
