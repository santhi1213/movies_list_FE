// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams, useNavigate } from "react-router-dom";

// function EditMovie() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [preview, setPreview] = useState(null);
//   const [form, setForm] = useState({
//     title: "",
//     type: "Movie",
//     director: "",
//     budget: "",
//     location: "",
//     duration: "",
//     year: "",
//     poster: null,
//   });

//   useEffect(() => {
//     if (!localStorage.getItem("token")) navigate("/login");
//   }, [navigate]);

//   useEffect(() => {
//     axios.get(`https://movies-list-be-1.onrender.com/api/movies/${id}`)
//       .then((res) => {
//         setForm({ ...res.data, poster: null });
//         setPreview(res.data.poster_url);
//       })
//       .catch(console.error);
//   }, [id]);

//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setPreview(URL.createObjectURL(file));
//       setForm({ ...form, poster: file });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const data = new FormData();
//     Object.keys(form).forEach((key) => form[key] && data.append(key, form[key]));

//     await axios.put(`https://movies-list-be-1.onrender.com/api/movies/${id}`, data, {
//       headers: {
//         "Content-Type": "multipart/form-data",
//         Authorization: `Bearer ${localStorage.getItem("token")}`,
//       },
//     });
//     navigate("/");
//   };

//   return (
//     <div className="max-w-xl mx-auto bg-white rounded-2xl p-10 shadow-lg border border-gray-300">
//       <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">✏️ Edit Movie / TV Show</h1>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         {preview && <img src={preview} alt="Poster" className="w-32 h-40 mx-auto rounded-lg shadow-md mb-3 object-cover border" />}
//         <input type="text" name="title" placeholder="Title" value={form.title} onChange={handleChange} className="w-full p-3 rounded bg-gray-50 border border-gray-300" required />
//         <select name="type" value={form.type} onChange={handleChange} className="w-full p-3 rounded bg-gray-50 border border-gray-300">
//           <option value="Movie">Movie</option>
//           <option value="TV Show">TV Show</option>
//         </select>
//         {["director", "budget", "location", "duration", "year"].map((f) => (
//           <input key={f} type="text" name={f} placeholder={f[0].toUpperCase() + f.slice(1)} value={form[f]} onChange={handleChange} className="w-full p-3 rounded bg-gray-50 border border-gray-300" />
//         ))}
//         <input type="file" name="poster" accept="image/*" onChange={handleImageChange} className="w-full text-gray-700" />
//         <button type="submit" className="w-full bg-gray-800 hover:bg-gray-700 text-white p-3 rounded font-semibold transition">Update Movie</button>
//       </form>
//     </div>
//   );
// }

// export default EditMovie;

import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Edit2, User, DollarSign, MapPin, Clock, Calendar } from "lucide-react";

function EditMovie() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    title: "",
    type: "Movie",
    director: "",
    budget: "",
    location: "",
    duration: "",
    year: "",
    poster: null,
  });

  useEffect(() => {
    if (!localStorage.getItem("token")) navigate("/login");
  }, [navigate]);

  useEffect(() => {
    axios.get(`https://movies-list-be-1.onrender.com/api/movies/${id}`)
      .then((res) => {
        setForm({ ...res.data, poster: null });
        setPreview(res.data.poster_url);
      })
      .catch(console.error);
  }, [id]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      setForm({ ...form, poster: file });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData();
    Object.keys(form).forEach((key) => form[key] && data.append(key, form[key]));

    try {
      await axios.put(`https://movies-list-be-1.onrender.com/api/movies/${id}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      navigate("/");
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mb-4">
            <Edit2 className="text-white" size={32} />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Edit Movie / TV Show</h1>
          <p className="text-gray-600 mt-2">Update the details below</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          {preview && (
            <div className="flex justify-center mb-6">
              <img
                src={preview}
                alt="Poster"
                className="w-40 h-56 object-cover rounded-xl shadow-lg border-4 border-indigo-100"
              />
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Title *</label>
              <input
                type="text"
                name="title"
                placeholder="Enter title"
                value={form.title}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Type *</label>
              <select
                name="type"
                value={form.type}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              >
                <option value="Movie">Movie</option>
                <option value="TV Show">TV Show</option>
              </select>
            </div>
            
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                <User size={16} />
                Director
              </label>
              <input
                type="text"
                name="director"
                placeholder="Director name"
                value={form.director}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              />
            </div>
            
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                <DollarSign size={16} />
                Budget
              </label>
              <input
                type="text"
                name="budget"
                placeholder="e.g., $50M"
                value={form.budget}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              />
            </div>
            
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                <MapPin size={16} />
                Location
              </label>
              <input
                type="text"
                name="location"
                placeholder="Filming location"
                value={form.location}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              />
            </div>
            
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                <Clock size={16} />
                Duration
              </label>
              <input
                type="text"
                name="duration"
                placeholder="e.g., 120 min"
                value={form.duration}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              />
            </div>
            
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                <Calendar size={16} />
                Year
              </label>
              <input
                type="text"
                name="year"
                placeholder="Release year"
                value={form.year}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              />
            </div>
            
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Update Poster Image</label>
              <input
                type="file"
                name="poster"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
              />
            </div>
          </div>
          
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50"
          >
            {loading ? "Updating..." : "Update Movie"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditMovie;
