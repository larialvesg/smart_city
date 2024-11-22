import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import ChartComponent from "../../Components/ChartComponent";

const Home = () => {
  const [loggedInUser, setLoggedInUser] = useState("");

  useEffect(() => {
    const username = localStorage.getItem("username");
    if (username) {
      setLoggedInUser(username);
    }
  }, []);

  return (
    <div className="home-container">
      {/* Cabeçalho */}
      <header className="header">
        <div className="user-info">
          <p>Bem-vindo, {loggedInUser || "Convidado"}!</p>
          <Link to="/" className="login-button">Login</Link>
        </div>
        <h1>Monitoramento de Sensores</h1>
      </header>

      {/* Seção de Cartões */}
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

      {/* Gráfico */}
      <section className="chart-section">
        <h3>Estatísticas Recentes</h3>
        <ChartComponent />
      </section>
    </div>
  );
};

export default Home;
