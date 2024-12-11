import React, { useEffect } from "react";
import axios from "axios";
import ApexCharts from "apexcharts";
import "./styles.css";
import { Link } from "react-router-dom";


const ChartComponent1 = () => {
  useEffect(() => {
    const handleSubmit = async () => {
      const response = await axios.get("http://127.0.0.1:8000/api/temperatura/");
      const idCount = response.data.length;

      const options = {
        series: [{
          name: "Valor",
          data: [],
        }],
        chart: {
          height: 350,
          type: 'line',
          zoom: { enabled: false },
        },
        dataLabels: { enabled: false },
        stroke: { curve: 'straight' },
        title: { text: '', align: 'left' },
        grid: {
          row: { colors: ['#f3f3f3', 'transparent'], opacity: 0.5 },
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Out'],
        },
      };

      for (let i = 0; i < idCount; i++) {
        options.series[0].data.push(response.data[i]["valor"]);
      }

      const chart = new ApexCharts(document.querySelector("#chart1"), options);
      chart.render();

      return () => chart.destroy();
    };

    handleSubmit();
  }, []);

  return (
    <div
      id="chart1"
      
    ></div>
  );
};



const MainComponent = () => {
  return (
    <div className="chart-container">
      <Link to="/temperatura" className="botao-graficos-2">
          <p>Voltar</p>
        </Link>
      <h2>Temperaturas</h2>
      <ChartComponent1 />
      
    </div>
  );
};

export default MainComponent;
