import React, { useEffect, useState } from "react";
import axios from "axios";
import './cont.css';
import ApexCharts from 'apexcharts';
import { Link } from "react-router-dom";


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
    <body className="cont">
    <div> <div className="cabecalho">
        <Link to="graficocont" className="botao-graficos">
          <p>Ver Gráficos</p>
        </Link>
        <h1>Contadores Registradas</h1>
        </div>
  {error && <p className="error">{error}</p>} {/* Exibe erro caso ocorra */}
  <div className="table-container">
    <table className="table">
      <thead>
        <tr>
          <th>ID do Sensor</th>
          <th>Tipo</th>
          <th>Valor</th>
          <th>Data</th>
          <th>Unid</th>
          <th>Latitude</th>
          <th>Longitude</th>
          <th>Localização</th>
          <th>Responsável</th>
          <th>Obs</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {counters.map((counter) => (
          <tr key={counter.id}>
            <td>{counter.id}</td>
            <td>{counter.tipo}</td>
            <td>{counter.valor.toFixed(2)}</td>
            <td>{new Date(counter.timestamp).toLocaleString()}</td>
            <td>{counter.unidade_medida}</td>
            <td>{counter.latitude}</td>
            <td>{counter.longitude}</td>
            <td>{counter.localizacao}</td>
            <td>{counter.responsavel}</td>
            <td>{counter.observacao}</td>
            <td>{counter.status_operacional ? "Ativo" : "Inativo"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
</body>
  );
};

export default CounterDisplay;
