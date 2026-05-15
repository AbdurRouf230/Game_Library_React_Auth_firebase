import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import "./index.css";
import App from "./App.jsx";
import Home from "./Components/Home/Home.jsx";
import Login from "./Components/Login/Login.jsx";
import Register from "./Components/Register/Register.jsx";
import AuthContextProvider from "./AuthContexts/AuthContextProvider.jsx";
import NotFoundPage from "./Components/NotFoundPage/NotFoundPage.jsx";
import PrivateRoute from "./Private Route/PrivateRoute.jsx";
import GameDetailsPage from "./Components/GameDetailsPage/GameDetailsPage.jsx";
import ForgotPassPage from "./Components/FogotPassPage/ForgotPassPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/forgotpassword",
        Component: ForgotPassPage,
      },
      {
        path: "/updateprofile",
        element: (
          <PrivateRoute>
            <h1>Update Profile</h1>
          </PrivateRoute>
        ),
      },
      {
        path: "/gamedetails/:id",
        element: (
          <PrivateRoute>
            <GameDetailsPage></GameDetailsPage>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    Component: NotFoundPage,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </StrictMode>,
);
