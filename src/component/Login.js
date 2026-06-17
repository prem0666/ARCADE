import { Link } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-5">
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h1 className="text-3xl font-bold text-white text-center mb-6">
          Welcome Back
        </h1>

        <div className="mb-4">
          <label className="text-white text-sm block mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-white/20 text-white outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-4">
          <label className="text-white text-sm block mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-white/20 text-white outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Enter your password"
          />
        </div>

        <Link to="/">
        <button className="w-full bg-purple-600 hover:bg-purple-700 transition py-3 rounded-md text-white font-semibold mt-2">
          Login
        </button>
        </Link>

        <p className="text-white/70 text-center mt-4">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-purple-400 underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
