import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const DonutChart = ({ data ,showLegend}) => {
  

  const emissions2023 = data
    .filter((e) => e.Year === 2023)
    .map((e) => e.Emissions);

  const emissions2022 = data
    .filter((e) => e.Year === 2022)
    .map((e) => e.Emissions);

  const re2023 = data
    .filter((e) => e.Year === 2023)
    .map((e) => e.R_E);

  const re2022 = data
    .filter((e) => e.Year === 2022)
    .map((e) => e.R_E);

  const chartData = {
    series: [44, 55, 41, 17, 15],
    options: {
      chart: {
        type: 'donut',
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'top'
          }
        }
      }],
      legend: {
        position: 'bottom', // Set legend position to 'bottom'
        show: showLegend, // Control legend visibility based on the state
      },
    },
  };

  return (
    <div>
      
      <ReactApexChart options={chartData.options} series={chartData.series} type="donut" height={350} />
    </div>
  );
};

export default DonutChart;