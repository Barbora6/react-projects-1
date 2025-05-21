import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Tabs } from "./components/Tabs.jsx";
import App from "./App.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/custom-tabs", element: <Tabs /> }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
