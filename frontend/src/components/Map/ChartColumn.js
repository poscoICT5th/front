import React, { useEffect, useRef } from "react";
import Highcharts from "highcharts";
import "./styles.css";

export default function ChartColumn() {
  const refContainer = useRef(null);

  useEffect(() => {
    Highcharts.chart(refContainer.current, {
      chart: {
        type: "column"
      }, // type of the chart
      credits: {
        enabled: false
      },
      title: {
        text: "Column Chart"
      }, // title of the chart
      subtitle: {
        text: ""
      }, // subtitle of the chart
      xAxis: {
        categories: [
          "22/11/2020",
          "23/11/2020",
          "21/11/2020",
          "25/11/2020",
          "26/11/2020"
        ], // the categories of the X Axis
        crosshair: true
      },
      yAxis: {
        min: 0, // minimum value of the Y Axis
        title: {
          text: "Number of Covid cases"
        } // the title of the Y Axis
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat:
          '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y}</b></td></tr>',
        footerFormat: "</table>",
        shared: true,
        useHTML: true
      }, // tooltip appears when hovering over a point
      credits: {
        enabled: false
      },
      series: [
        {
          name: "Morocco",
          data: [4706, 4702, 3979, 2547, 3999]
        },
        {
          name: "Germany",
          data: [4000, 5000, 4800, 4000, 5100]
        },
        {
          name: "Canada",
          data: [6100, 5000, 6000, 4800, 4000]
        }
      ] // set of the data
    });
  });

  return (
    <div className="App">
      <div ref={refContainer} />
    </div>
  );
}
