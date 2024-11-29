import React, { useEffect, useState } from "react";
import axios from "axios";
import "./umi.css";

const UmidadeDisplay = () => {
  const [umidade, setUmidade] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUmidade = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/umidade/");
        setUmidade(response.data);
        console.log(response.data);
      } catch (err) {
        setError("Erro ao carregar os dados de umidade.");
      }
    };

    fetchUmidade();
  }, []);

  return (
    <div>
      <h1>Umidades Registradas</h1>
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
            {umidade.map((umi_sensor) => (
              <tr key={umi_sensor.id}>
                <td>{umi_sensor.id}</td>
                <td>{umi_sensor.tipo}</td>
                <td>{umi_sensor.valor.toFixed(2)}</td>
                <td>{new Date(umi_sensor.timestamp).toLocaleString()}</td>
                <td>{umi_sensor.unidade_medida}</td>
                <td>{umi_sensor.latitude}</td>
                <td>{umi_sensor.longitude}</td>
                <td>{umi_sensor.localizacao}</td>
                <td>{umi_sensor.responsavel}</td>
                <td>{umi_sensor.observacao}</td>
                <td>{umi_sensor.status_operacional ? "Ativo" : "Inativo"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UmidadeDisplay;
