import React, { useEffect, useState } from "react";
import axios from "axios";
import './styles.css';
import ApexCharts from 'apexcharts'

const CounterDisplay = () => {
  const [counters, setCounters] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCounters = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/contador/");
        setCounters(response.data);
        console.log(response.data);
      } catch (err) {
        setError("Erro ao carregar os dados do contador.");
      }
    };

    fetchCounters();
  }, []);

  return (
    <div>
      <h1>Contadores Registrados</h1>
      {error && <p className="error">{error}</p>} {/* Exibe erro caso ocorra */}
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
            <th>ID do Contador</th>
              <th>Data de Registro</th>
              <th>Tipo</th>
              <th>Unidade de Medida</th>
              <th>Latitude</th>
              <th>Longitude</th>
              <th>Localização</th>
              <th>Responsável</th>
            </tr>
          </thead>
          <tbody>
            {counters.map((counter) => (
              <tr key={counter.id}>
                <td>{counter.id}</td> 
                <td>{new Date(counter.timestamp).toLocaleString()}</td> 
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

export default CounterDisplay;
