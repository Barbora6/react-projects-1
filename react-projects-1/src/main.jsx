import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import { TabTest } from "./components/clicking-tabs/TabTest.jsx";
import { ModalTest } from "./components/modal-navigation/ModalTest.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/custom-tabs", element: <TabTest /> },
  {
    path: "/modal-navigation",
    element: <ModalTest />
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
