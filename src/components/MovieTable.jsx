// function MovieTable({ movies, onEdit, onDelete }) {
//   return (
//     <div className="overflow-x-auto bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl shadow-2xl">
//       <table className="min-w-full border-collapse text-gray-200">
//         <thead className="bg-gradient-to-r from-indigo-900 to-blue-900">
//           <tr>
//             {["Poster", "Title", "Type", "Director", "Budget", "Location", "Duration", "Year", "Actions"].map(h => (
//               <th key={h} className="p-3 border-b border-gray-700 font-semibold text-left">{h}</th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {movies.map((movie) => (
//             <tr
//               key={movie.id}
//               className="hover:bg-blue-900 transition-colors"
//             >
//               <td className="p-3 align-middle">
//                 <img
//                   src={movie.poster_url}
//                   alt={movie.title}
//                   className="w-16 h-20 object-cover rounded-md border-2 border-gray-700 shadow-lg"
//                   onError={e => { e.target.src = "/uploads/default-placeholder.jpg"; }}
//                 />
//               </td>
//               <td className="p-3">{movie.title}</td>
//               <td className="p-3">{movie.type}</td>
//               <td className="p-3">{movie.director}</td>
//               <td className="p-3">{movie.budget}</td>
//               <td className="p-3">{movie.location}</td>
//               <td className="p-3">{movie.duration}</td>
//               <td className="p-3">{movie.year}</td>
//               <td className="p-3">
//                 <button
//                   onClick={() => onEdit(movie.id)}
//                   className="bg-emerald-500 hover:bg-emerald-600 px-3 py-1 rounded shadow font-bold text-gray-900 mr-2 transition"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => onDelete(movie.id)}
//                   className="bg-rose-700 hover:bg-rose-800 px-3 py-1 rounded shadow font-bold text-white transition"
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }
// export default MovieTable;


function MovieTable({ movies, onEdit, onDelete }) {
  return (
    <div className="overflow-x-auto bg-white p-6 rounded-xl shadow-lg border border-gray-300">
      <table className="min-w-full border-collapse text-gray-700">
        <thead className="bg-gray-100 border-b border-gray-300">
          <tr>
            {["Poster", "Title", "Type", "Director", "Budget", "Location", "Duration", "Year", "Actions"].map(h => (
              <th key={h} className="p-3 font-semibold text-left uppercase text-gray-600 tracking-wider">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr
              key={movie.id}
              className="hover:bg-gray-50 transition-colors duration-150"
            >
              <td className="p-3 align-middle">
                <img
                  src={movie.poster_url}
                  alt={movie.title}
                  className="w-16 h-20 object-cover rounded-md border border-gray-300 shadow-sm"
                  onError={e => { e.target.src = "/uploads/default-placeholder.jpg"; }}
                />
              </td>
              <td className="p-3">{movie.title}</td>
              <td className="p-3">{movie.type}</td>
              <td className="p-3">{movie.director}</td>
              <td className="p-3">{movie.budget}</td>
              <td className="p-3">{movie.location}</td>
              <td className="p-3">{movie.duration}</td>
              <td className="p-3">{movie.year}</td>
              <td className="p-3 flex gap-2">
                <button
                  onClick={() => onEdit(movie.id)}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded font-bold transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(movie.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded font-bold transition"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default MovieTable;


