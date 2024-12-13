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
import PrivateRoute from "./Components/PrivateRoute.js";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<PrivateRoute component={Home} />} />
        <Route path="/temperatura" element={<PrivateRoute component={Temp} />}/>
        <Route path="/login/up" element={<LoginUp/>} />
        <Route path="/contador" element={<PrivateRoute component = {Cont} />} />
        <Route path="/umidade" element={<PrivateRoute component = {Umi} />} />
        <Route path="/luminosidade" element={<PrivateRoute component = {Lumi} />} />
        <Route path="/temperatura/graficotemp" element={<PrivateRoute component = {Graficos_Temp}/>} />
        <Route path="/luminosidade/graficolumi" element={<PrivateRoute component = {Graficos_Lumi} />} />
        <Route path="/umidade/graficoumi" element={<PrivateRoute component = {Graficos_Umi} />} />
        <Route path="/contador/graficocont" element={<PrivateRoute component = {Graficos_Cont} />} />
        
      </Routes>
    </Router>
  );
};

export default App;
