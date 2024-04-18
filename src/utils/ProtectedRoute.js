import { useContext, useEffect } from "react";
import  AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({children}) => {
    const navigate = useNavigate();
    const { isAuthenticated } = useContext(AuthContext);
    console.log(isAuthenticated);
    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/login");
        }
    }, [isAuthenticated, navigate]);
  return children;
}

export default ProtectedRoute
