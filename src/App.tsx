import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
// @ts-ignore
import Home from "./pages/Home";
// @ts-ignore
import AddMovie from "./pages/AddMovie";
// @ts-ignore
import EditMovie from "./pages/EditMovie";
// @ts-ignore
import Register from "./pages/auth/Register";
// @ts-ignore
import Login from "./pages/auth/Login";

function Navbar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("token"));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className="flex gap-8 mb-10 border-b border-gray-300 pb-4 text-lg font-semibold">
      <Link to="/" className="hover:text-blue-600 transition-colors duration-200">
        🏠 Home
      </Link>
      {isLoggedIn && (
        <Link to="/add" className="hover:text-blue-600 transition-colors duration-200">
          ➕ Add Movie
        </Link>
      )}
      <div className="ml-auto flex gap-6">
        {isLoggedIn ? (
          <button onClick={handleLogout} className="text-red-600 hover:text-red-700 transition">
            🚪 Logout
          </button>
        ) : (
          <>
            <Link to="/login" className="hover:text-blue-600 transition">Login</Link>
            <Link to="/register" className="hover:text-blue-600 transition">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div className="p-6 bg-gradient-to-br from-gray-100 via-white to-gray-200 text-gray-800 min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddMovie />} />
          <Route path="/edit/:id" element={<EditMovie />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
