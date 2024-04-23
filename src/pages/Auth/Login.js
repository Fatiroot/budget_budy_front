import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import ConstumAxios from "../../api/ConstumAxios";
import AuthContext from "../../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [serverError, setServerError] = useState(null);
  const { setUser, setIsAuthenticated, setToken } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await ConstumAxios.post("/Login", { email, password });

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      setUser(response.data.user);
      setToken(response.data.token);
      setIsAuthenticated(!!response.data.token);

      setEmail("");
      setPassword("");
      navigate("/expenses");

      console.log("Logined");
    } catch (error) {
      if (error.response) {
        if (error.response.status === 422) {
          console.log(error.response.data.errors);
          setErrors(error.response.data.errors);
        } else {
          console.error("Server error:", error.response.data.message);
          setServerError(error.response.data.message);
        }
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Request error:", error.message);
      }
    }
  };

  return (
    <section className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-24 mx-auto lg:py-32">
      <div className="mt-8 lg:w-1/2 lg:mt-0 mx-auto">
        <form className="w-full lg:max-w-xl" onSubmit={handleLogin}>
          {serverError && (
            <div className="text-red-500 text-sm m-2">{serverError}</div>
          )}
  
          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 dark:text-gray-300">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-4 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Email address"
            />
            {errors.email && (
              <div className="text-red-500 text-sm mt-1">{errors.email[0]}</div>
            )}
          </div>
  
          {/* Password Field */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 dark:text-gray-300">
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-4 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Password"
            />
            {errors.password && (
              <div className="text-red-500 text-sm mt-1">{errors.password[0]}</div>
            )}
          </div>
  
          {/* Submit Button */}
          <div className="mt-8">
            <button
              type="submit"
              className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
  
  );
};

export default Login;
