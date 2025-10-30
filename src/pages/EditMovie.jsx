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
//       .get(`https://movies-list-be-1.onrender.com/api/movies/${id}`)
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
//     await axios.put(`https://movies-list-be-1.onrender.com/api/movies/${id}`, data, {
//       headers: { "Content-Type": "multipart/form-data" },
//     });
//     navigate("/");
//   };

//   return (
//     <div className="max-w-xl mx-auto bg-white rounded-2xl p-10 shadow-lg border border-gray-300">
//       <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
//         ✏️ Edit Movie / TV Show
//       </h1>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         {preview && (
//           <img
//             src={preview}
//             alt="Poster Preview"
//             className="w-32 h-40 mx-auto rounded-lg shadow-md mb-3 object-cover border border-gray-300"
//           />
//         )}
//         <input
//           type="text"
//           name="title"
//           placeholder="Title"
//           value={form.title}
//           onChange={handleChange}
//           className="w-full p-3 rounded bg-gray-50 text-gray-800 border border-gray-300 focus:ring-2 focus:ring-gray-400"
//           required
//         />
//         <select
//           name="type"
//           value={form.type}
//           onChange={handleChange}
//           className="w-full p-3 rounded bg-gray-50 text-gray-800 border border-gray-300"
//         >
//           <option value="Movie">Movie</option>
//           <option value="TV Show">TV Show</option>
//         </select>
//         {["director", "budget", "location", "duration", "year"].map((f) => (
//           <input
//             key={f}
//             type="text"
//             name={f}
//             placeholder={f[0].toUpperCase() + f.slice(1)}
//             value={form[f]}
//             onChange={handleChange}
//             className="w-full p-3 rounded bg-gray-50 text-gray-800 border border-gray-300"
//           />
//         ))}
//         <input
//           type="file"
//           name="poster"
//           accept="image/*"
//           onChange={handleImageChange}
//           className="w-full text-gray-700"
//         />
//         <button
//           type="submit"
//           className="w-full bg-gray-800 hover:bg-gray-700 text-white p-3 rounded font-semibold shadow transition"
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
    const data = new FormData();
    Object.keys(form).forEach((key) => form[key] && data.append(key, form[key]));

    await axios.put(`https://movies-list-be-1.onrender.com/api/movies/${id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    navigate("/");
  };

  return (
    <div className="max-w-xl mx-auto bg-white rounded-2xl p-10 shadow-lg border border-gray-300">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">✏️ Edit Movie / TV Show</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {preview && <img src={preview} alt="Poster" className="w-32 h-40 mx-auto rounded-lg shadow-md mb-3 object-cover border" />}
        <input type="text" name="title" placeholder="Title" value={form.title} onChange={handleChange} className="w-full p-3 rounded bg-gray-50 border border-gray-300" required />
        <select name="type" value={form.type} onChange={handleChange} className="w-full p-3 rounded bg-gray-50 border border-gray-300">
          <option value="Movie">Movie</option>
          <option value="TV Show">TV Show</option>
        </select>
        {["director", "budget", "location", "duration", "year"].map((f) => (
          <input key={f} type="text" name={f} placeholder={f[0].toUpperCase() + f.slice(1)} value={form[f]} onChange={handleChange} className="w-full p-3 rounded bg-gray-50 border border-gray-300" />
        ))}
        <input type="file" name="poster" accept="image/*" onChange={handleImageChange} className="w-full text-gray-700" />
        <button type="submit" className="w-full bg-gray-800 hover:bg-gray-700 text-white p-3 rounded font-semibold transition">Update Movie</button>
      </form>
    </div>
  );
}

export default EditMovie;
