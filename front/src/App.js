import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home"; 
import Login from "./pages/login/in/index.jsx";
import LoginUp from "./pages/login/up"
import Temp from "./pages/temp"
import Cont from "./pages/cont"
import Umi from "./pages/umi"
import Lumi from "./pages/lumi"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/temperatura" element={<Temp />} />
        <Route path="/login/up" element={<LoginUp />} />
        <Route path="/contador" element={<Cont />} />
        <Route path="/umidade" element={<Umi />} />
        <Route path="/luminosidade" element={<Lumi />} />
        
      </Routes>
    </Router>
  );
};

export default App;
