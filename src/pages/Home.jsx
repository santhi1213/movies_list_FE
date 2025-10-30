import { useEffect, useState } from "react";
import axios from "axios";
import MovieTable from "../components/MovieTable";
import { useNavigate } from "react-router-dom";
import { Film, Plus } from "lucide-react";

function Home() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const loadMovies = async () => {
    if (loading) return;
    setLoading(true);
    try {
      const res = await axios.get(`https://movies-list-be-1.onrender.com/api/movies?page=${page}&limit=5`);
      const data = res.data.data || res.data;
      if (data.length === 0) setHasMore(false);
      setMovies((prev) => (page === 1 ? data : [...prev, ...data]));
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadMovies();
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
        if (hasMore && !loading) setPage((prev) => prev + 1);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasMore, loading]);

  const handleDelete = async (id) => {
    if (!localStorage.getItem("token")) {
      alert("Please login to delete movies!");
      navigate("/login");
      return;
    }

    if (window.confirm("Are you sure you want to delete this movie?")) {
      try {
        await axios.delete(`https://movies-list-be-1.onrender.com/api/movies/${id}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        setMovies((prev) => prev.filter((m) => m.id !== id));
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 shadow-xl text-white">
        <div className="flex items-center gap-4">
          <div className="bg-white/20 p-4 rounded-xl backdrop-blur-sm">
            <Film size={40} />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-2">My Movie Collection</h1>
            <p className="text-indigo-100">Manage your favorite movies and TV shows</p>
          </div>
        </div>
      </div>
      
      {movies.length === 0 && !loading ? (
        <div className="bg-white rounded-2xl shadow-xl p-12 text-center border border-gray-100">
          <Film size={64} className="mx-auto text-gray-400 mb-4" />
          <h3 className="text-2xl font-bold text-gray-800 mb-2">No Movies Yet</h3>
          <p className="text-gray-600 mb-6">Start building your collection by adding your first movie!</p>
          <button
            onClick={() => navigate("/add")}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <Plus size={20} />
            Add Your First Movie
          </button>
        </div>
      ) : (
        <>
          <MovieTable movies={movies} onEdit={(id) => navigate(`/edit/${id}`)} onDelete={handleDelete} />
          {loading && (
            <div className="text-center py-8">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-indigo-600 border-t-transparent"></div>
              <p className="mt-4 text-gray-600 font-medium">Loading more movies...</p>
            </div>
          )}
          {!hasMore && movies.length > 0 && (
            <div className="text-center py-8">
              <p className="text-gray-600 font-medium">You've reached the end of your collection 🎬</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Home;