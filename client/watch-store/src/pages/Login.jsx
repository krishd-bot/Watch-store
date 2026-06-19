import React, { useState } from "react";
import { loginAPI } from "../api/Authapi";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const data = await loginAPI(formData);

      console.log(data);

      // JWT token save
      localStorage.setItem("token", data.token);

      alert("Login Successful");

      navigate("/");
    } catch (err) {
      console.log(err);
      alert("Invalid Email or Password");
    } finally {
      setLoading(false);
    }
  };

 return (
  <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black flex items-center justify-center px-4">
    <div className="w-full max-w-md bg-slate-900 border border-slate-700 rounded-2xl p-8 shadow-2xl">

      <h1 className="text-4xl font-bold text-white text-center mb-2">
        Welcome Back
      </h1>

      <p className="text-slate-400 text-center mb-8">
        Login to your Watch Store account
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-slate-800 text-white border border-slate-700 rounded-lg outline-none focus:border-amber-500"
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-slate-800 text-white border border-slate-700 rounded-lg outline-none focus:border-amber-500"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-amber-500 hover:bg-amber-600 text-black font-semibold py-3 rounded-lg transition"
        >
          {loading ? "Logging In..." : "Login"}
        </button>

      </form>

      <p className="text-center text-slate-400 mt-6">
        Don't have an account?{" "}
        <span
          onClick={() => navigate("/register")}
          className="text-amber-400 cursor-pointer hover:text-amber-300"
        >
          Sign Up
        </span>
      </p>

    </div>
  </div>
);
};

export default Login;