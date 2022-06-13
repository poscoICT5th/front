import React, { useEffect, useRef } from "react";
import Highcharts from "highcharts";
import "./styles1.css";
//6월 13일 line chart 구현 
export default function LineChart() {
  const refContainer = useRef(null);
  useEffect(() => {
    Highcharts.chart(refContainer.current, {
      chart: {
        type: "line"
      },
      title: {
        text: "Line Chart"
      },
      subtitle: {
        text: ""
      },
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
          name: "Morocco",
          data: [4706, 4702, 3979, 2547, 3999]
        }
      ]
    });
  }, []);

  return (
    <div className="App">
      <div ref={refContainer} />
    </div>
  );
}
