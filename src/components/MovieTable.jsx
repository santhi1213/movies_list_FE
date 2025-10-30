import { Edit2, Trash2 } from "lucide-react";

function MovieTable({ movies, onEdit, onDelete }) {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gradient-to-r from-indigo-600 to-purple-600">
            <tr>
              {["Poster", "Title", "Type", "Director", "Budget", "Location", "Duration", "Year", "Actions"].map(h => (
                <th key={h} className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {movies.map((movie) => (
              <tr
                key={movie.id}
                className="hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transition-all duration-200"
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <img
                    src={movie.poster_url}
                    alt={movie.title}
                    className="w-16 h-24 object-cover rounded-lg shadow-md border-2 border-gray-200 hover:scale-105 transition-transform duration-200"
                    onError={e => { e.target.src = "/uploads/default-placeholder.jpg"; }}
                  />
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm font-semibold text-gray-900">{movie.title}</div>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    movie.type === 'Movie' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                  }`}>
                    {movie.type}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">{movie.director}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{movie.budget}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{movie.location}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{movie.duration}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{movie.year}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <div className="flex gap-2">
                    <button
                      onClick={() => onEdit(movie.id)}
                      className="inline-flex items-center gap-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                    >
                      <Edit2 size={16} />
                      Edit
                    </button>
                    <button
                      onClick={() => onDelete(movie.id)}
                      className="inline-flex items-center gap-1 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                    >
                      <Trash2 size={16} />
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MovieTable;