import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css"; // Importar o estilo da página 'home'

const Home = () => {
  const navigate = useNavigate();

  const sensors = [
    { name: "Sensor de Luminosidade", id: 1 },
    { name: "Sensor de Temperatura", id: 2 },
    { name: "Sensor de Umidade", id: 3 },
    { name: "Sensor", id: 4 },
    { name: "Contador", id: 5 },
  ];

  const handleViewTable = (sensorId) => {
    navigate(`/sensor/${sensorId}`); // Redireciona para a página do sensor
  };

  return (
    <div className="home-container">
      <h1>Bem-vindo à Home!</h1>
      <p>Você fez login com sucesso.</p>
      <div className="sensors-list">
        {sensors.map((sensor) => (
          <div className="sensor-item" key={sensor.id}>
            <h2>{sensor.name}</h2>
            <button onClick={() => handleViewTable(sensor.id)}>Ver Tabela</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
