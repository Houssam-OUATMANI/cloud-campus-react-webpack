import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import Navigation from "./components/Navigation";
import Profile from "./components/Profile";
export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Profile nom="Dupont" prenom="Jean" />} />
          <Route path="/contact" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
