import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@fontsource/mulish"; // Defaults to weight 400

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </Router>,
)

/* const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={<BigSpinner />} />
  </React.StrictMode>
); */