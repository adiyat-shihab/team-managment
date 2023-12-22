import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App.jsx";
import { Register } from "../component/Register.jsx";
import { ErrorElement } from "../component/ErrorElement.jsx";
import { Landing } from "../page/landing/Landing.jsx";
import { Login } from "../component/Login.jsx";
import { TaskManage } from "../component/TaskManage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/task",
        element: <TaskManage />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
    errorElement: <ErrorElement />,
  },
]);
export const Routes = () => {
  return <RouterProvider router={router} />;
};
