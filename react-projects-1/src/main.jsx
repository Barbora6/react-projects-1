import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import { TabTest } from "./components/clicking-tabs/TabTest.jsx";
import { ModalTest } from "./components/modal-navigation/ModalTest.jsx";
import { GithubProfileFinder } from "./components/github-profil/GithubProfileFinder.jsx";
import { SearchUser } from "./components/search-autocomplete/SearchUser.jsx";
import { Piskvorky } from "./components/piskvorky/Piskvorky.jsx";
import { WeatherApp } from "./components/weather-app/WeatherApp.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/custom-tabs", element: <TabTest /> },
  {
    path: "/modal-navigation",
    element: <ModalTest />
  },
  {
    path: "/github-profil-finder",
    element: <GithubProfileFinder />
  },
  {
    path: "/search-users",
    element: <SearchUser />
  },
  { path: "/piskvorky", element: <Piskvorky /> },
  {
    path: "/weather",
    element: <WeatherApp />
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
