import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import image from "../assets/home.jpg";

const Home = () => {
  const authContext = useContext(AuthContext);

  return (
    <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">
      {/* Text Column */}
      <div className="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
        {/* Text Wrapper */}
        <div className="flex flex-col p-12 md:px-16">
          <h2 className="text-2xl font-medium uppercase text-indigo-800 lg:text-4xl">"Budget Buddy"</h2>
          <p className="mt-4">
          "Budget Buddy" is a web-based application designed to help individuals or businesses manage their finances effectively. The core purpose of Budget Buddy is to provide users with tools and features that simplify budgeting, expense tracking, and financial planning. Here's a detailed description of what the Budget Buddy site offers          </p>
          {/* Button Container */}
          <div className="mt-8">
            {authContext.isAuthenticated ? (
              <Link to="/create" className="inline-block w-full text-center text-lg font-medium text-gray-100 bg-indigo-600 border-solid border-2 border-gray-600 py-4 px-10 hover:bg-indigo-800 hover:shadow-md md:w-48">Add expense</Link>
            ) : (
              <Link to="/login" className="inline-block w-full text-center text-lg font-medium text-gray-100 bg-indigo-600 border-solid border-2 border-gray-600 py-4 px-10 hover:bg-indigo-800 hover:shadow-md md:w-48">Get started</Link>
            )}
          </div>
        </div>
        {/* Close Text Wrapper */}
      </div>
      {/* Close Text Column */}

    </div>
  );
};

export default Home;
