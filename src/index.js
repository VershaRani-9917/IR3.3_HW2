import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import About from "./pages/About";
import Stays from "./pages/Stays";
import StayDetails from "./pages/StayDetails";


const Root = () => (
  <BrowserRouter>
   
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/stays" element={<Stays />} />
      <Route path="/stays/:stayId" element={<StayDetails />} /> 
    </Routes>
  </BrowserRouter>
);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
