import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Single from "./pages/Single";
import Write from "./pages/Write";
import User from "./pages/User";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Context } from "./context/Context";
import { useContext } from "react";
function App() {
  const { user } = useContext(Context);
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
              <Route path="/write" element={user ? <Write /> : <Register />} />
              <Route path="/post/:id" element={<Single />} />
              <Route path="/user/:id" element={<User />} />
            </Routes>
          </div>
          {/* <Footer /> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
