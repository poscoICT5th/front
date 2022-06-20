import React, { useEffect, useRef } from "react";
import Highcharts from "highcharts";
import "./styles.css";
//6월 13일 line chart 구현 
export default function ChartLine() {
  const refContainer = useRef(null);
  useEffect(() => {
    Highcharts.chart(refContainer.current, {
      chart: {
        type: "line"
      },
      credits: {
        enabled: false
      },
      title: {
        text: "반제품 재고 추이"
      },
      subtitle: {
        text: ""
      },
      xAxis: {
        categories: [
          "1/1/2022",
          "1/2/2022",
          "1/3/2022",
          "1/4/2022",
          "1/5/2022",
          "1/6/2022"
        ], // the categories of the X Axis
        crosshair: true
      },
      yAxis: {
        min: 2000, // minimum value of the Y Axis
        title: {
          text: "Number of Covid cases"
        } // the title of the Y Axis
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat:
          '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y}</b></td></tr>'
      }, // tooltip appears when hovering over a point
      series: [
        {
          name: "반제품",
          data: [4706, 4702, 3979, 2547, 3999,5555]
        },
        {
          name: "완제품",
          data: [5555, 8000, 3000, 4000, 7000,5555]
        },
        {
          name: "불량품",
          data: [5555, 5000, 7000, 3000, 7000, 5555]
        },
      ]
    });
  }, []);

  return (
    <div className="App">
      <div ref={refContainer} />
    </div>
  );
}
