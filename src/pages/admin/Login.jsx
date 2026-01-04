import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Lock, Eye, EyeOff, Loader2 } from "lucide-react";

const Login = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const res = await axios.post("http://localhost:5000/api/login", {
        password,
      });
      if (res.data.success) {
        // save token to local storage
        localStorage.setItem("adminToken", res.data.token);
        navigate("/admin/dashboard");
      }
    } catch (err) {
      setError("Invalid Password. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center text-white px-4 relative overflow-hidden bg-[#050505]">
      {/* --- layer 1: custom background image (brighter) --- */}
      <div
        className="absolute inset-0 z-0 opacity-80"
        style={{
          // ensure 'background-login.svg' is inside your /public folder
          backgroundImage: `url("/background-login.svg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* --- layer 2: very light dark overlay just for text readability --- */}
      <div className="absolute inset-0 z-0 bg-black/30"></div>

      {/* --- login card --- */}
      <form
        onSubmit={handleLogin}
        // added shadow-[0_0_50px_rgba(74,222,128,0.2)] for light green glow
        className="bg-[#121212] p-6 md:p-10 rounded-xl shadow-[0_0_50px_rgba(74,222,128,0.2)] w-full max-w-sm md:max-w-md border border-[#333] relative z-10"
      >
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-[#282828] rounded-full shadow-inner border border-[#333]">
            <Lock size={36} className="text-[#1ed760]" />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-center mb-2 text-white">
          Admin Access
        </h2>
        <p className="text-gray-400 text-center text-sm mb-8">
          Enter your secure key to manage content.
        </p>

        {error && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center p-3 rounded mb-6">
            {error}
          </div>
        )}

        <div className="space-y-6">
          <div className="relative group">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[#181818] border border-[#333] hover:border-[#555] focus:border-[#1ed760] rounded-md p-4 pr-12 text-white focus:outline-none transition-colors placeholder-gray-600 font-medium"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition"
              tabIndex="-1"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#1ed760] hover:bg-[#1db954] text-black font-bold py-4 rounded-full transition-transform transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <Loader2 className="animate-spin" size={20} /> Verifying...
              </>
            ) : (
              "Unlock Dashboard"
            )}
          </button>
        </div>

        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="text-xs text-gray-500 hover:text-white transition uppercase font-bold tracking-widest"
          >
            Back to Portfolio
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
