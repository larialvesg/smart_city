import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home"; 
import Login from "./pages/login/in/index.jsx";
import LoginUp from "./pages/login/up"
import Temp from "./pages/temp"
import Cont from "./pages/cont"
import Umi from "./pages/umi"
import Lumi from "./pages/lumi"
import Graficos_Temp from "./pages/temp/graficos_temp.jsx"
import Graficos_Lumi from "./pages/lumi/graficos_lumi.jsx"
import Graficos_Umi from "./pages/umi/graficos_umi.jsx"
import Graficos_Cont from "./pages/cont/graficos_cont.jsx"

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
        <Route path="/grafico/temp" element={<Graficos_Temp />} />
        <Route path="/grafico/lumi" element={<Graficos_Lumi />} />
        <Route path="/grafico/umi" element={<Graficos_Umi />} />
        <Route path="/grafico/cont" element={<Graficos_Cont />} />
        
        
      </Routes>
    </Router>
  );
};

export default App;
