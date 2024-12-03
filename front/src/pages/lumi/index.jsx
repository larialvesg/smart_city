import React, { useEffect, useState } from "react";
import axios from "axios";
import "./lumi.css";
import { Link } from "react-router-dom";


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
    <body className="luminosidade">
    <div>
    <div className="cabecalho">
    <Link to="graficolumi" className="botao-graficos">
          <p>Ver Gráficos</p>
        </Link>
      <h1>Luminosidades Registradas</h1>
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
            {luminosidades.map((luminity) => (
              <tr key={luminity.id}>
                <td>{luminity.id}</td>
                <td>{luminity.tipo}</td>
                <td>{luminity.valor.toFixed(2)}</td>
                <td>{new Date(luminity.timestamp).toLocaleString()}</td>
                <td>{luminity.unidade_medida}</td>
                <td>{luminity.latitude}</td>
                <td>{luminity.longitude}</td>
                <td>{luminity.localizacao}</td>
                <td>{luminity.responsavel}</td>
                <td>{luminity.observacao}</td>
                <td>{luminity.status_operacional ? "Ativo" : "Inativo"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </body>
  );
};

export default LuminosidadeDisplay;
