import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styles.css";
import imagem from "../../Images/banner.png";

const Home = () => {
  const [loggedInUser, setLoggedInUser] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const username = localStorage.getItem("username");
    if (username) {
      setLoggedInUser(username);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("username"); 
  
    navigate("/");
  };

  return (
    <body className="home">
    <div className="home-container">
      <header className="header">
        <div className="user-info">
          <p>Bem-vindo, {loggedInUser || "Convidado"}!</p>
          <button onClick={handleLogout} className="logout-button">Sair</button>
        </div>
        <h1>Monitoramento de Sensores</h1>
      </header>

      <section className="cards-section">
        <Link to="/temperatura" className="card">
          <h4>Temperatura</h4>
          <p>Ver Dados</p>
        </Link>
        <Link to="/umidade" className="card">
          <h4>Umidade</h4>
          <p>Ver Dados</p>
        </Link>
        <Link to="/contador" className="card">
          <h4>Contador</h4>
          <p>Ver Dados</p>
        </Link>
        <Link to="/luminosidade" className="card">
          <h4>Luminosidade</h4>
          <p>Ver Dados</p>
        </Link>
      </section>

      <section className="imagem-banner">
        <img src={imagem} alt="banner" />
      </section>
    </div>
    </body>
  );
};

export default Home;
