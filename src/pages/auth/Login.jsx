import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://movies-list-be-1.onrender.com/api/auth/login", form);
      localStorage.setItem("token", res.data.token);
      setMessage("✅ Login successful! Redirecting...");
      setTimeout(() => navigate("/"), 2000);
    } catch (err) {
      setMessage("❌ Invalid credentials. Try again.");
      console.error(err);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 bg-white p-8 rounded-2xl shadow-lg border border-gray-300">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">🔐 Login</h1>
      {message && <p className="text-center mb-4 text-gray-600">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded bg-gray-50"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded bg-gray-50"
        />
        <button
          type="submit"
          className="w-full bg-gray-800 text-white py-2 rounded font-semibold hover:bg-gray-700 transition"
        >
          Login
        </button>
      </form>
      <p className="text-center mt-4 text-gray-600">
        Don’t have an account?{" "}
        <Link to="/register" className="text-blue-600 hover:underline">Register</Link>
      </p>
    </div>
  );
}

export default Login;
    