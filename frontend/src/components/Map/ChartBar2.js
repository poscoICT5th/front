import React, { useEffect, useRef, useState } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
//이게 최종, 가로 bar 차트 
export default function ChartBar2() {
  const dataSource = [
    {
      name: "Morocco",
      data: [1, 2, 3]
    },
  ];
  const chartOptions = {
    chart: {
      type: "bar"
    }, // type of the chart
    title: {
      text: "Bar Chart"
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
    series: dataSource // set of the data
  }
  return (
    <div className="App">
      <HighchartsReact
        style={{ height: "100%" }}
        highcharts={Highcharts}
        options={chartOptions}
      />
    </div>
  );
}
