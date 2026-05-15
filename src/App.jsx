import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "./Components/Footer/Footer";
import GameDetailsPage from "./Components/GameDetailsPage/GameDetailsPage";

function App() {
  return (
    <div>
      <nav>
        <Navbar></Navbar>
      </nav>
      <main>
        <Outlet></Outlet>
      </main>
      {/* <GameDetailsPage></GameDetailsPage> */}
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;
