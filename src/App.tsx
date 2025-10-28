import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// @ts-ignore
import Home from "./pages/Home";
// @ts-ignore
import AddMovie from "./pages/AddMovie";
// @ts-ignore
import EditMovie from "./pages/EditMovie";

function App() {
  return (
    <Router>
      <div className="p-6 bg-gradient-to-br from-gray-100 via-white to-gray-200 text-gray-800 min-h-screen">
        <nav className="flex gap-8 mb-10 border-b border-gray-300 pb-4 text-lg font-semibold">
          <Link
            to="/"
            className="hover:text-blue-600 transition-colors duration-200"
          >
            🏠 Home
          </Link>
          <Link
            to="/add"
            className="hover:text-blue-600 transition-colors duration-200"
          >
            ➕ Add Movie
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddMovie />} />
          <Route path="/edit/:id" element={<EditMovie />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
