import { createContext, useState, useEffect } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const storedUser = localStorage.getItem("user");
  const storedToken = localStorage.getItem("token");

  let initialUser = {};
  if (storedUser) {
    try {
      initialUser = JSON.parse(storedUser);
    } catch (error) {
      console.error("Error parsing user data:", error);
    }
  }

  let initialToken = "";
  if (storedToken) {
    initialToken = storedToken;
  }

  const [user, setUser] = useState(initialUser);
  const [token, setToken] = useState(initialToken);
  const [isAuthenticated, setIsAuthenticated] = useState(!!initialToken);

  useEffect(() => {
    setIsAuthenticated(!!token);
  }, [token]);

  return (
    <AuthContext.Provider value={{ user, setUser, isAuthenticated, setIsAuthenticated, token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
