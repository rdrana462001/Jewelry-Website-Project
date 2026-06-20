
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />

      {/* <ToastContainer
    position="bottom-right"
    autoClose={3000}
  /> */}

{/* <ToastContainer
  position="bottom-right"
  autoClose={3000}
  toastStyle={{
    width: "420px",
    fontSize: "18px",
  }}
/> */}
  <ToastContainer
  position="bottom-right"
  autoClose={3000}
  theme="colored"
  toastStyle={{
    width: "90vw",
    maxWidth: "380px",
    fontSize: "16px",
    borderRadius: "16px",
  }}
/>
    {/* <Home></Home> */}
  </React.StrictMode>
);