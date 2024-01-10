import React from "react";

import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";





// const EditRoleForm = ({ onCompleted, onCancel, value, ...rest }: EditRoleFormProps) => {

const DonutChart = ({data}) => {
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
      },
    },
  
  
  
  
  
  };


  return <ReactApexChart options={chartData.options} series={chartData.series}  type="donut" height={350} />;
};

export default DonutChart;