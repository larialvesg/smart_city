import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

const LuminosidadeDisplay = () => {
  const [luminosidades, setLuminosidades] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchLuminosidades = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/luminosidade/"
        );
        setLuminosidades(response.data);
        console.log(response.data);
      } catch (err) {
        setError("Erro ao carregar os dados de luminosidade.");
      }
    };

    fetchLuminosidades();
  }, []);

  return (
    <div>
      <h1>Luminosidades Registradas</h1>
      {error && <p className="error">{error}</p>}
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>ID do Sensor</th>
              <th>Valor (°C)</th>
              <th>Data de Registro</th>
              <th>Tipo</th>
              <th>Unid</th>
              <th>Latitude</th>
              <th>Longitude</th>
              <th>Localização</th>
              <th>Responsável</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {luminosidades.map((luminity) => (
              <tr key={luminity.id}>
                <td>{luminity.sensor.id}</td>
                <td>{luminity.valor.toFixed(2)}</td>
                <td>{new Date(luminity.timestamp).toLocaleString()}</td>
                <td>null</td>
                <td>null</td>
                <td>null</td>
                <td>null</td>
                <td>null</td>
                <td>null</td>
                <td>null</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LuminosidadeDisplay;
