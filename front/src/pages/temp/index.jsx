import React, { useEffect, useState } from "react";
import axios from "axios";
import "./temp.css";
import { Link } from "react-router-dom";


const TemperatureDisplay = () => {
  const [temperatures, setTemperatures] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTemperatures = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/temperatura/"
        );
        setTemperatures(response.data);
        console.log(response.data);
      } catch (err) {
        setError("Erro ao carregar os dados de temperatura.");
      }
    };

    fetchTemperatures();
  }, []);

  return (
    <body className="temp">
      <div>
        <div className="cabecalho">
        <Link to="graficotemp" className="botao-graficos">
          <p>Ver Gráficos</p>
        </Link>
        <h1>Temperaturas Registradas</h1>
        </div>
        {error && <p className="error">{error}</p>}
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
              {temperatures.map((data) => (
                <tr key={data.id}>
                  <td>{data.id}</td>
                  <td>{data.tipo}</td>
                  <td>{data.valor.toFixed(2)}</td>
                  <td>{new Date(data.timestamp).toLocaleString()}</td>
                  <td>{data.unidade_medida}</td>
                  <td>{data.latitude}</td>
                  <td>{data.longitude}</td>
                  <td>{data.localizacao}</td>
                  <td>{data.responsavel}</td>
                  <td>{data.observacao}</td>
                  <td>{data.status_operacional ? "Ativo" : "Inativo"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
      </div>
    </body>
  );
};

export default TemperatureDisplay;
