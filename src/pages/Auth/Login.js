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
            <div className="relative flex items-center">
              <span className="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </span>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Email address"
              ></input>
            </div>
            {errors.email && (
              <div className="text-red-500 text-sm m-2">{errors.email[0]}</div>
            )}

            <div className="relative flex items-center mt-4">
              <span className="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </span>

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Password"
              ></input>
            </div>
            {errors.password && (
              <div className="text-red-500 text-sm m-2">
                {errors.password[0]}
              </div>
            )}
            <div className="mt-8 md:flex md:items-center">
              <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg md:w-1/2 hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
