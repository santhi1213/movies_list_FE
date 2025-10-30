// import { useState, useEffect } from "react";
// import axios from "axios";
// import MovieTable from "../components/MovieTable";
// import { useNavigate } from "react-router-dom";

// function Home() {
//   const [movies, setMovies] = useState([]);
//   const [page, setPage] = useState(1);
//   const [hasMore, setHasMore] = useState(true);
//   const navigate = useNavigate();

//   const loadMovies = async () => {
//     try {
//       const res = await axios.get(`https://movies-list-be-1.onrender.com/api/movies?page=${page}&limit=5`);
//       const data = res.data.data || res.data;
//       if (data.length === 0) setHasMore(false);

//       setMovies((prev) => {
//         if (page === 1) return data;
//         return [...prev, ...data.filter(m => !prev.some(p => p.id === m.id))];
//       });
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   useEffect(() => {
//     loadMovies();
//   }, [page]);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
//         if (hasMore) setPage((prev) => prev + 1);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [hasMore]);

//   const handleDelete = async (id) => {
//     if (window.confirm("Are you sure you want to delete this movie?")) {
//       await axios.delete(`https://movies-list-be-1.onrender.com/api/movies/${id}`);
//       setMovies((prev) => prev.filter((m) => m.id !== id));
//     }
//   };

//   return (
//     <div>
//       <h1 className="text-2xl mb-4 font-bold text-cyan-400">Favorite Movies / Shows</h1>
//       <MovieTable movies={movies} onEdit={(id) => navigate(`/edit/${id}`)} onDelete={handleDelete} />
//     </div>
//   );
// }

// export default Home;

import { useState, useEffect } from "react";
import axios from "axios";
import MovieTable from "../components/MovieTable";
import { useNavigate } from "react-router-dom";

function Home() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const navigate = useNavigate();

  const loadMovies = async () => {
    try {
      const res = await axios.get(`https://movies-list-be-1.onrender.com/api/movies?page=${page}&limit=5`);
      const data = res.data.data || res.data;
      if (data.length === 0) setHasMore(false);

      setMovies((prev) => {
        if (page === 1) return data;
        return [...prev, ...data.filter(m => !prev.some(p => p.id === m.id))];
      });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadMovies();
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
        if (hasMore) setPage((prev) => prev + 1);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasMore]);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this movie?")) {
      await axios.delete(`https://movies-list-be-1.onrender.com/api/movies/${id}`);
      setMovies((prev) => prev.filter((m) => m.id !== id));
    }
  };

  return (
    <div>
      <h1 className="text-3xl mb-6 font-bold text-gray-800">🎬 Favorite Movies / Shows</h1>
      <MovieTable movies={movies} onEdit={(id) => navigate(`/edit/${id}`)} onDelete={handleDelete} />
    </div>
  );
}

export default Home;

