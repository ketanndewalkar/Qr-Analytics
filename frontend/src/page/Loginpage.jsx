import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Loginpage = () => {
  const [isLogin, setisLogin] = useState(true);
  const { login } = useContext(AuthContext);
  const [state, setstate] = useState(0);
  const navigate = useNavigate();
  const [msg, setmsg] = useState(null);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };
  const handleform = (e) => {
    e.preventDefault();
    console.log("hello");
    if (isLogin) {
      if (formData.email == "" || formData.password == "") {
        alert("All Field are required");
      } else {
        handlelogin(e);
      }
    } else {
      if (
        formData.email == "" ||
        formData.password == "" ||
        formData.username == ""
      ) {
        alert("All Field are required");
      } else {
        handleSubmit(e);
      }
    }
  };
  const handlelogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(JSON.stringify(formData));
    fetch(`${import.meta.env.VITE_BACKEND_URL}/login`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (res) => {
        if (res.status === 200) {
          const { token, user, message } = await res.json();
          login(token, user);
          setIsLoading(false);
          navigate("/dashboard");
          setstate(1);
        } else {
          alert("The Account don`t Exists!!");
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(JSON.stringify(formData));
    fetch(`${import.meta.env.VITE_BACKEND_URL}/signup`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (res) => {
        console.log(res.status);
        if (res.status === 201) {
          const e = await res.json();
          const { token, user, message } = e;
          console.log(e);
          login(token, user);
          setIsLoading(false);
          navigate("/dashboard");
          setstate(1);
        } else {
          alert("Invalid Credentials");
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };
  return (
    <div
      className={`h-dvh w-full bg-gradient-to-br from-red-50 via-red-100 to-red-200 flex items-center justify-center p-4 transition-all duration-300 ${
        isMounted ? "opacity-100" : "opacity-0"
      } overflow-hidden`}
    >
      <div
        className={`w-dvw max-w-md bg-white rounded-xl shadow-2xl overflow-hidden transition-all duration-500 ${
          isMounted ? "animate-fadeIn" : "opacity-0"
        }`}
      >
        {/* Header */}
        <div className="bg-red-500 p-6 text-center">
          <h1 className="text-3xl font-bold text-white">
            {isLogin ? "Welcome Back" : "Create Account"}
          </h1>
        </div>

        <div className="p-8">
          {/* Tabs */}

          {/* Forms */}
          <div className="relative overflow-hidden">
            <form
              onSubmit={handleform}
              className={`mb-4 transition-all duration-300 ${
                isLogin ? "opacity-100 block" : "opacity-0 hidden"
              }`}
            >
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg border focus:outline-none ${
                    errors.email
                      ? "border-red-500 bg-red-50"
                      : "border-gray-300"
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-red-500 text-sm">{errors.email}</p>
                )}
              </div>

              <div className="mb-6">
                <label htmlFor="password" className="block text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg border focus:outline-none  ${
                    errors.password
                      ? "border-red-500 bg-red-50"
                      : "border-gray-300"
                  }`}
                />
                {errors.password && (
                  <p className="mt-1 text-red-500 text-sm">{errors.password}</p>
                )}
              </div>

              <button
                type="submit"
                onSubmit={handleform}
                className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-4 rounded-lg shadow-md transition-all duration-300 transform focus:outline-none cursor-pointer disabled:opacity-70"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  "Login"
                )}
              </button>
            </form>

            <form
              onSubmit={handleSubmit}
              className={`transition-all duration-300 ${
                !isLogin ? "opacity-100 block" : "opacity-0 hidden"
              }`}
            >
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg border focus:outline-none  ${
                    errors.name ? "border-red-500 bg-red-50" : "border-gray-300"
                  }`}
                />
                {errors.name && (
                  <p className="mt-1 text-red-500 text-sm">{errors.name}</p>
                )}
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg border focus:outline-none  ${
                    errors.email
                      ? "border-red-500 bg-red-50"
                      : "border-gray-300"
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-red-500 text-sm">{errors.email}</p>
                )}
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg border focus:outline-none  ${
                    errors.password
                      ? "border-red-500 bg-red-50"
                      : "border-gray-300"
                  }`}
                />
                {errors.password && (
                  <p className="mt-1 text-red-500 text-sm">{errors.password}</p>
                )}
              </div>

              <div className="mb-6">
                <label
                  htmlFor="confirmPassword"
                  className="block text-gray-700 mb-2"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg border focus:outline-none  ${
                    errors.confirmPassword
                      ? "border-red-500 bg-red-50"
                      : "border-gray-300"
                  }`}
                />
                {errors.confirmPassword && (
                  <p className="mt-1 text-red-500 text-sm">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>

              <button
                type="submit"
                onSubmit={handleform}
                className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-4 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50 disabled:opacity-70"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  "Sign Up"
                )}
              </button>
            </form>
          </div>

          <div className="mt-6 text-center text-gray-600">
            <p>
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button
                onClick={() => setisLogin(!isLogin)}
                className="ml-1 text-red-500 hover:text-red-600 font-medium focus:outline-none focus:underline"
              >
                {isLogin ? "Sign Up" : "Login"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
