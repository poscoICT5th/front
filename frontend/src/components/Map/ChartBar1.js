import React, { useEffect } from "react";
// Import Highcharts
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import highcharts3d from "highcharts/highcharts-3d";

highcharts3d(Highcharts);
//3D 막대그래프

function ChartBar1(props) {
  const state = {
    chartOptions: {
      chart: {
        type: "column",
        options3d: {
          enabled: true,
          alpha: 2,
          beta: 12,
          depth: 70,
          viewDistance: 25,
        },
      },
      title: {
        text: "",
      },
      credits: {
        enabled: true
      },
      plotOptions: {
        series: {
          dataLabels: {
            enabled: true,
          },
          depth: 25,
        },
      },
      xAxis: {
        categories: ["Sem 27", "Sem 28", "Sem 29", "Sem 30", "Sem 31"],
      },
      yAxis: {
        title: {
          text: "Nombre de requêtes",
        },
      },
      series: [
        {
          name: "AISP",
          data: [81905, 86058, 63751, 63895, 66557],
          color: "#7CB5EC",
        },
        {
          name: "PISP",
          data: [708713, 544571, 4330, 4102, 3575],
          color: "#D87C8A",
        },
        {
          name: "CBPII",
          data: [0, 0, 0, 0, 0],
          color: "#81CE93",
        },
      ],
      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 2000,
            },
          },
        ],
      },
    },
  };

  return (
    <div className="App">
      <HighchartsReact
        style={{ height: "100%" }}
        highcharts={Highcharts}
        options={state.chartOptions}
      // callback={}
      />
    </div>
  );
}

export default ChartBar1;
