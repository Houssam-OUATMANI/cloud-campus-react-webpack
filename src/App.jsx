import React from "react";
import Form from "./components/Form";
import Profile from "./components/Profile";
export default function App() {
  return (
    <div className="app">
      <Profile nom="Dupont" prenom="Jean" />
      <Form/>
    </div>
  );
}
