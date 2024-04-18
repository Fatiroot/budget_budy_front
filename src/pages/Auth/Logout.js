import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from 'react-router-dom';


const Logout = () => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    authContext.setUser(null);
    authContext.setToken(null);
    navigate("/");
  }

  return (
    <button
      className="inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
      onClick={handleLogout}
    > Log Out </button>
  );
}

export default Logout;