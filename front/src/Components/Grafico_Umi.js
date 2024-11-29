// components/ChartComponent.js
import React, { useEffect } from "react";
import axios from "axios";
import ApexCharts from "apexcharts";

const ChartComponent = () => {
  useEffect(() => {

    const handleSubmit = async (e) => {
      const response = await axios.get("http://127.0.0.1:8000/api/umidade/")
      const idCount= response.data.length;

      const options = {
        
        series: [{
          name: "Valor",
          data: []
      }],
        chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      title: {
        text: '',
        align: 'left'
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        },
      },
      xaxis: {
        categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set'],
      }
      };
      for (let i = 0; i < idCount; i++){
        options.series[0].data.push(response.data[i]["valor"])

      }

      var chart = new ApexCharts(document.querySelector("#chart"), options);
      chart.render();
      return () => chart.destroy();
    }

    

    handleSubmit()
   
    
    
  }, []);

  return (
    <div
      id="chart"
      style={{
        width: "100%",  
        height: "300px", 
        margin: "0 auto",
      }}
    ></div>
  );
};


export default ChartComponent;
