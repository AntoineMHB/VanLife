import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Link } from "react-router-dom";
import BodySection from "./components/BodySection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <BodySection />
    </>
  );
}

export default App;
