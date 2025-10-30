import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Film, Plus, Home as HomeIcon, LogIn, UserPlus, LogOut } from "lucide-react";
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

interface NavbarProps {
  isLoggedIn: boolean;
  onLogout: () => void;
}

function Navbar({ isLoggedIn, onLogout }: NavbarProps) {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-lg rounded-2xl px-6 py-4 mb-8 border border-gray-100">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2 text-xl font-bold text-gray-900">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-2 rounded-lg">
              <Film className="text-white" size={24} />
            </div>
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              MovieManager
            </span>
          </Link>
          
          <div className="flex gap-2">
            <Link
              to="/"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                isActive('/') 
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <HomeIcon size={18} />
              Home
            </Link>
            
            {isLoggedIn && (
              <Link
                to="/add"
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  isActive('/add') 
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Plus size={18} />
                Add Movie
              </Link>
            )}
          </div>
        </div>
        
        <div className="flex gap-3">
          {isLoggedIn ? (
            <button
              onClick={onLogout}
              className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-5 py-2 rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <LogOut size={18} />
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className={`flex items-center gap-2 px-5 py-2 rounded-lg font-medium transition-all duration-200 ${
                  isActive('/login') 
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md' 
                    : 'text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                <LogIn size={18} />
                Login
              </Link>
              <Link
                to="/register"
                className={`flex items-center gap-2 px-5 py-2 rounded-lg font-medium transition-all duration-200 ${
                  isActive('/register') 
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md' 
                    : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 shadow-md hover:shadow-lg'
                }`}
              >
                <UserPlus size={18} />
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("token"));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    window.location.href = "/login";
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddMovie />} />
            <Route path="/edit/:id" element={<EditMovie />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;