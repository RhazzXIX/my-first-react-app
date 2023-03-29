import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Counter from "./components/Lifecycle";
import Profile from "./components/Profile";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
