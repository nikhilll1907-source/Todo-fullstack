import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Singin({ login,logdin }) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [shake, setShake] = useState(false);
  const [toast, setToast] = useState(null); // success or error
  const navigate = useNavigate();

  async function onSubmit(e) {
    e.preventDefault();

    let newErrors = {};

    if (!username.trim()) newErrors.username = "Username is required";
    if (!password.trim()) newErrors.password = "Password is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setShake(true);
      setTimeout(() => setShake(false), 400);
      return;
    }

try {
  setLoading(true);

  await login(username, password);

  await login(username, password);

// small delay to let state update
setTimeout(() => {
  navigate("/");
}, 500);
useEffect(() => {
  if (logdin) {
    navigate("/");
  }
}, [logdin]);
  setToast("success");

  setUsername('');
  setPassword('');
  setErrors({});

 
} catch (err) {
  setToast(err);
}
     finally {
      setLoading(false);
      setTimeout(() => setToast(null), 2000);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 relative">

      {/* Toast */}
      {toast && (
        <div className={`fixed top-5 right-5 px-5 py-4 rounded-xl shadow-lg flex items-center gap-3 animate-slideIn
          ${toast === "success"
            ? "bg-white border border-green-200"
            : "bg-white border border-red-200"
          }`}>

          <div className={`p-2 rounded-full 
            ${toast === "success"
              ? "bg-green-100 text-green-600"
              : "bg-red-100 text-red-600"
            }`}>
            {toast === "success" ? "✓" : "!"}
          </div>

          <div>
            <p className="font-semibold text-gray-800">
              {toast === "success" ? "Success" : "Error"}
            </p>
            <p className="text-sm text-gray-500">
              {toast === "success"
                ? "Logged in successfully 🎉"
                : toast}
            </p>
          </div>
        </div>
      )}

      {/* Form */}
      <form
        onSubmit={onSubmit}
        className={`w-full max-w-md bg-white p-6 rounded-2xl shadow-md space-y-5 
        ${shake ? "animate-shake" : ""}`}
      >

        <h1 className="text-2xl font-bold text-gray-800 text-center">
          Login to your account
        </h1>

        {/* Username */}
        <div>
          <label className="text-sm text-gray-600">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={`w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2
            ${errors.username ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-blue-400"}`}
          />
          {errors.username && (
            <p className="text-red-500 text-sm mt-1">{errors.username}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="text-sm text-gray-600">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2
            ${errors.password ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-blue-400"}`}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-500 text-white py-3 rounded-lg 
          hover:bg-blue-600 active:scale-95 transition flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              Logging in...
            </>
          ) : (
            "Login 🚀"
          )}
        </button>

        {/* Link */}
        <Link to="/signup" className="block text-center text-blue-500 hover:underline">
          Create new account
        </Link>

      </form>
    </div>
  );
}

export default Singin;