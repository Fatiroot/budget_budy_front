import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import Logout from "../pages/Auth/Logout";

const NavBar = () => {
  const authContext = useContext(AuthContext);

  return (
    <header className="p-4 dark:bg-gray-100 dark:text-gray-800">
      <div className="container flex justify-between h-16 mx-auto">
        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <Link
              to="/"
              className="flex items-center px-4 -mb-1 border-b-2 dark:border-violet-600 dark:text-violet-600"
              rel="noopener noreferrer"
            >
              Home
            </Link>
          </li>
          <li className="flex">
            <Link
              to="/expenses"
              className="flex items-center px-4 -mb-1 border-b-2 dark:border-violet-600 dark:text-violet-600"
              rel="noopener noreferrer"
            >
              Expenses
            </Link>
          </li>
        </ul>
        <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
          {authContext.isAuthenticated ? (
            <Logout />
          ) : (
            <>
              <Link
                to="/login"
                className="inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
              >
                Sign In
              </Link>
              <Link
                to="/register"
                className="inline-block rounded border border-green-600 bg-green-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-green-600 focus:outline-none focus:ring active:text-green-500"
              >
                Sign up
              </Link>
            </>
          )}
        </div>
      
      </div>
    </header>
  );
};

export default NavBar;
