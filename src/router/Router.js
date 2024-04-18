import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Expenses from "../pages/Expense/Expenses";
import Logout from "../pages/Auth/Logout";
import Root from "../pages/Root";
import ProtectedRoute from "../utils/ProtectedRoute";
import Create from "../pages/Expense/Create";
import Edit from "../pages/Expense/Edit";


const RouterConfig = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        index : true,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/expenses",
        element: <ProtectedRoute><Expenses /></ProtectedRoute>,
      },
      {
        path: "/create",
        element: <ProtectedRoute><Create /></ProtectedRoute>,
      },
      {
        path: "/expenses/:expenseId/edit",
        element: <ProtectedRoute><Edit /></ProtectedRoute>,
      },
      {
        path: "/logout",
        element: <Logout />,
      },
    ],
  },
]);

export default RouterConfig;
