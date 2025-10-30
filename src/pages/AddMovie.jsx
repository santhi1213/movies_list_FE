// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// function AddMovie() {
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

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleImageChange = (e) => {
//     setForm({ ...form, poster: e.target.files[0] });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const data = new FormData();
//     Object.keys(form).forEach((key) => {
//       if (form[key] !== null) data.append(key, form[key]);
//     });
//     await axios.post("https://movies-list-be-1.onrender.com/api/movies", data, {
//       headers: { "Content-Type": "multipart/form-data" },
//     });
//     navigate("/");
//   };

//   return (
//     <div className="max-w-xl mx-auto bg-gray-800 rounded-xl p-10 shadow-xl">
//       <h1 className="text-3xl font-bold text-center text-cyan-400 mb-6">
//         Add Movie / TV Show
//       </h1>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="text"
//           name="title"
//           placeholder="Title"
//           value={form.title}
//           onChange={handleChange}
//           className="w-full p-3 rounded bg-gray-900 text-white border border-cyan-700"
//           required
//         />
//         <select
//           name="type"
//           value={form.type}
//           onChange={handleChange}
//           className="w-full p-3 rounded bg-gray-900 text-white border border-cyan-700"
//         >
//           <option value="Movie">Movie</option>
//           <option value="TV Show">TV Show</option>
//         </select>
//         <input
//           type="text"
//           name="director"
//           placeholder="Director"
//           value={form.director}
//           onChange={handleChange}
//           className="w-full p-3 rounded bg-gray-900 text-white border border-cyan-700"
//         />
//         <input
//           type="text"
//           name="budget"
//           placeholder="Budget"
//           value={form.budget}
//           onChange={handleChange}
//           className="w-full p-3 rounded bg-gray-900 text-white border border-cyan-700"
//         />
//         <input
//           type="text"
//           name="location"
//           placeholder="Location"
//           value={form.location}
//           onChange={handleChange}
//           className="w-full p-3 rounded bg-gray-900 text-white border border-cyan-700"
//         />
//         <input
//           type="text"
//           name="duration"
//           placeholder="Duration"
//           value={form.duration}
//           onChange={handleChange}
//           className="w-full p-3 rounded bg-gray-900 text-white border border-cyan-700"
//         />
//         <input
//           type="text"
//           name="year"
//           placeholder="Year"
//           value={form.year}
//           onChange={handleChange}
//           className="w-full p-3 rounded bg-gray-900 text-white border border-cyan-700"
//         />
//         <input
//           type="file"
//           name="poster"
//           accept="image/*"
//           onChange={handleImageChange}
//           className="w-full text-gray-200"
//         />
//         <button
//           type="submit"
//           className="w-full bg-cyan-600 hover:bg-cyan-700 p-3 rounded font-bold shadow"
//         >
//           Add Movie
//         </button>
//       </form>
//     </div>
//   );
// }

// export default AddMovie;

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddMovie() {
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

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setForm({ ...form, poster: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(form).forEach((key) => {
      if (form[key] !== null) data.append(key, form[key]);
    });
    await axios.post("https://movies-list-be-1.onrender.com/api/movies", data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    navigate("/");
  };

  return (
    <div className="max-w-xl mx-auto bg-white rounded-2xl p-10 shadow-lg border border-gray-300">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        🎥 Add Movie / TV Show
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          className="w-full p-3 rounded bg-gray-50 text-gray-800 border border-gray-300 focus:ring-2 focus:ring-gray-400"
          required
        />
        <select
          name="type"
          value={form.type}
          onChange={handleChange}
          className="w-full p-3 rounded bg-gray-50 text-gray-800 border border-gray-300"
        >
          <option value="Movie">Movie</option>
          <option value="TV Show">TV Show</option>
        </select>
        {["director", "budget", "location", "duration", "year"].map((f) => (
          <input
            key={f}
            type="text"
            name={f}
            placeholder={f[0].toUpperCase() + f.slice(1)}
            value={form[f]}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-50 text-gray-800 border border-gray-300"
          />
        ))}
        <input
          type="file"
          name="poster"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full text-gray-700"
        />
        <button
          type="submit"
          className="w-full bg-gray-800 hover:bg-gray-700 text-white p-3 rounded font-semibold shadow transition"
        >
          Add Movie
        </button>
      </form>
    </div>
  );
}

export default AddMovie;


