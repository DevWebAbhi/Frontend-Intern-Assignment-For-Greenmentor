import React from "react";

import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";





// const EditRoleForm = ({ onCompleted, onCancel, value, ...rest }: EditRoleFormProps) => {

const ApexChartChild = ({data}) => {
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
          
    series: [{
      name: 'Emissions-2023',
      type: 'column',
      data: emissions2023
    }, {
      name: 'Emissions-2022',
      type: 'column',
      data: emissions2022
    }, {
      name: 'R/E-2023',
      type: 'line',
      data: re2023
    }, {
      name: 'R/E-2022',
      type: 'line',
      data: re2022
    }
  ],
    options: {
      chart: {
        height: 350,
        type: 'line',
        stacked: false
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: [1, 1, 4]
      },
      title: {
        text: 'Emissions',
        align: 'left',
        offsetX: 110
      },
      xaxis: {
        categories: ['Jan','Feb','Mar','Apr','May','June','Jly','Aug','Sept','Oct','Nov','Dec'],
      },
      yaxis: [
        {
          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: true,
            color: '#008FFB'
          },
          labels: {
            style: {
              colors: '#008FFB',
            }
          },
          title: {
            text: "Revenue",
            style: {
              color: '#008FFB',
            }
          },
          tooltip: {
            enabled: true
          }
        },
        {
          seriesName: 'Income',
          opposite: true,
          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: true,
            color: '#00E396'
          },
          labels: {
            style: {
              colors: '#00E396',
            }
          },
         
        },
        {
          seriesName: 'Revenue',
          opposite: true,
          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: true,
            color: '#FEB019'
          },
          labels: {
            style: {
              colors: '#FEB019',
            },
          },
        },
      ],
      tooltip: {
        fixed: {
          enabled: true,
          position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
          offsetY: 30,
          offsetX: 60
        },
      },
      legend: {
        horizontalAlign: 'left',
        offsetX: 40
      }
    },
  
  
  };


  return <ReactApexChart options={chartData.options} series={chartData.series}  type="line" height={400} />;
};

export default ApexChartChild;