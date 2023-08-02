import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Single from "./pages/Single";
import Write from "./pages/Write";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const user = false;
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Navbar />
          <div className="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={user ? <Home /> : <Login />} />
              <Route
                path="/register"
                element={user ? <Home /> : <Register />}
              />
              <Route path="/write" element={user ? <Write /> : <Login />} />
              <Route path="/post/:id" element={<Single />} />
            </Routes>
          </div>
          {/* <Footer /> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
