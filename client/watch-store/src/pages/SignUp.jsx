import { registerAPI } from "../api/Authapi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
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

      const data = await registerAPI(formData);
      console.log(data);

      alert("User Registered Successfully...");

      navigate("/login");
    } catch (err) {
      console.log(`Error found: ${err}`);
      alert("Registration Failed");
    } finally {
      setLoading(false);
    }
  };

 return (
  <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black flex items-center justify-center px-4">
    <div className="w-full max-w-md bg-slate-900/80 backdrop-blur-lg border border-slate-700 rounded-2xl p-8 shadow-2xl">
      
      <h1 className="text-4xl font-bold text-white text-center mb-2">
        Create Account
      </h1>

      <p className="text-slate-400 text-center mb-8">
        Join our premium watch collection
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-slate-800 text-white border border-slate-700 rounded-lg outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/30 transition"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-slate-800 text-white border border-slate-700 rounded-lg outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/30 transition"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-slate-800 text-white border border-slate-700 rounded-lg outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/30 transition"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-amber-500 hover:bg-amber-600 text-black font-semibold py-3 rounded-lg transition duration-300 cursor-pointer"
        >
          {loading ? "Creating..." : "Sign Up"}
        </button>
      </form>

      <p className="text-center text-slate-400 mt-6">
        Already have an account?{" "}
        <span
          onClick={() => navigate("/login")}
          className="text-amber-400 hover:text-amber-300 cursor-pointer"
        >
          Login
        </span>
      </p>
    </div>
  </div>
);
};

export default SignUp;