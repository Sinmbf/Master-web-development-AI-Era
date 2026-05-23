import ListPage from "./routes/listPage/ListPage";
import HomePage from "./routes/homePage/HomePage";
import SinglePage from "./routes/singlePage/SinglePage";
import Layout from "./routes/layout/Layout";

import { createBrowserRouter, RouterProvider } from "react-router";
import ProfilePage from "./routes/profilePage/ProfilePage";
import LoginPage from "./routes/loginPage/LoginPage";
import SignUpPage from "./routes/signupPage/SignUpPage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <ListPage />,
        },
        {
          path: "/:id",
          element: <SinglePage />,
        },
        {
          path: "/profile",
          element: <ProfilePage />,
        },
        {
          path: "/signin",
          element: <LoginPage />,
        },
        {
          path: "/signup",
          element: <SignUpPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
