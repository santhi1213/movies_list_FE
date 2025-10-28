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
//     axios
//       .get(`http://localhost:5000/api/movies/${id}`)
//       .then((res) => {
//         setForm({
//           ...res.data,
//           poster: null,
//         });
//         setPreview(res.data.poster_url);
//       })
//       .catch(console.error);
//   }, [id]);

//   const handleChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

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
//     Object.keys(form).forEach((key) => {
//       if (form[key] !== null && form[key] !== undefined) {
//         data.append(key, form[key]);
//       }
//     });
//     await axios.put(`http://localhost:5000/api/movies/${id}`, data, {
//       headers: { "Content-Type": "multipart/form-data" },
//     });
//     navigate("/");
//   };

//   return (
//     <div className="max-w-xl mx-auto bg-gray-800 rounded-xl p-10 shadow-xl">
//       <h1 className="text-3xl font-bold text-center text-yellow-400 mb-6">
//         Edit Movie / TV Show
//       </h1>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         {preview && (
//           <img
//             src={preview}
//             alt="Poster Preview"
//             className="w-32 h-40 mx-auto rounded shadow mb-2 object-cover"
//           />
//         )}
//         <input
//           type="text"
//           name="title"
//           placeholder="Title"
//           value={form.title}
//           onChange={handleChange}
//           className="w-full p-3 rounded bg-gray-900 text-white border border-yellow-700"
//           required
//         />
//         <select
//           name="type"
//           value={form.type}
//           onChange={handleChange}
//           className="w-full p-3 rounded bg-gray-900 text-white border border-yellow-700"
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
//           className="w-full p-3 rounded bg-gray-900 text-white border border-yellow-700"
//         />
//         <input
//           type="text"
//           name="budget"
//           placeholder="Budget"
//           value={form.budget}
//           onChange={handleChange}
//           className="w-full p-3 rounded bg-gray-900 text-white border border-yellow-700"
//         />
//         <input
//           type="text"
//           name="location"
//           placeholder="Location"
//           value={form.location}
//           onChange={handleChange}
//           className="w-full p-3 rounded bg-gray-900 text-white border border-yellow-700"
//         />
//         <input
//           type="text"
//           name="duration"
//           placeholder="Duration"
//           value={form.duration}
//           onChange={handleChange}
//           className="w-full p-3 rounded bg-gray-900 text-white border border-yellow-700"
//         />
//         <input
//           type="text"
//           name="year"
//           placeholder="Year"
//           value={form.year}
//           onChange={handleChange}
//           className="w-full p-3 rounded bg-gray-900 text-white border border-yellow-700"
//         />
//         <input
//           type="file"
//           name="poster"
//           accept="image/*"
//           onChange={handleImageChange}
//           className="w-full"
//         />
//         <button
//           type="submit"
//           className="w-full bg-yellow-500 hover:bg-yellow-600 p-3 rounded font-bold shadow text-black"
//         >
//           Update Movie
//         </button>
//       </form>
//     </div>
//   );
// }

// export default EditMovie;


import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function EditMovie() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [preview, setPreview] = useState(null);
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
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then((res) => {
        setForm({
          ...res.data,
          poster: null,
        });
        setPreview(res.data.poster_url);
      })
      .catch(console.error);
  }, [id]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      setForm({ ...form, poster: file });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(form).forEach((key) => {
      if (form[key] !== null && form[key] !== undefined) {
        data.append(key, form[key]);
      }
    });
    await axios.put(`http://localhost:5000/api/movies/${id}`, data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    navigate("/");
  };

  return (
    <div className="max-w-xl mx-auto bg-white rounded-2xl p-10 shadow-lg border border-gray-300">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        ✏️ Edit Movie / TV Show
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {preview && (
          <img
            src={preview}
            alt="Poster Preview"
            className="w-32 h-40 mx-auto rounded-lg shadow-md mb-3 object-cover border border-gray-300"
          />
        )}
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
          Update Movie
        </button>
      </form>
    </div>
  );
}

export default EditMovie;

