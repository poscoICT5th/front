import React, { useEffect, useState } from 'react'
import _ from "lodash";
import Highcharts from "highcharts";
import HighchartsHeatmap from "highcharts/modules/heatmap";
import HighchartsReact from "highcharts-react-official";
import rawData from "./data";
import { severityHexColors, getColor, rgbObjectToHex } from "./heatmapUtils";
import "./styles.css";
import MapList from './MapList';
//눌렀을 때 값을 받아오게
// 칸을 눌렀을때 말풍선 안에 값을 받아오게 콘솔에 찍히게
//

function Map4() {

  HighchartsHeatmap(Highcharts);
  const x = [
    rawData.E,
    rawData.cnc,
    rawData.installation,
    rawData.delivery,
    rawData.none
  ].reverse();

  const data = x
    .map((l, i) =>
      l.map((c, j) => ({
        x: j,
        y: i,
        value: c.count,
        name: c.count.toLocaleString(),
        color:
          c.count === 0
            ? "transparent"
            : rgbObjectToHex(getColor(j + 1, i, c.count, 5))
      }))
    )
    .flat();

  const chartOptions = {
    chart: {
      type: "heatmap",
      marginTop: 20,
      marginBottom: 80,
      plotBorderWidth: 0,
      borderWidth: 0
    },
    credits: {
      enabled: false
    },
    title: {
      text: undefined
    },

    xAxis: {
      categories: _.fill(Array(10), 1).map((e, i) => (i + 1) * 10)
    },

    yAxis: {
      categories: ["A", "B", "C", "D", "E"],
      title: null
    },

    colorAxis: {
      min: 0,
      max: 100,
      stops: severityHexColors.map((hex, i, arr) => [i / arr.length, hex]),
      reversed: false
    },

    legend: {
      align: "right",
      layout: "vertical",
      margin: 0,
      verticalAlign: "top",
      y: 25,
      symbolHeight: 280
    },

    plotOptions: {
      series: {
        cursor: 'pointer',
        point: {
          events: {
            click: function () {
              alert('Category: ' + this.category + ', value: ' + this.y);
              console.log("y값은?" + this.y + "x값은?" + this.x + "제발 나와제발" + this.value);
            }
          }
        }

      }
    },
    tooltip: { //말풍선 내용 
      formatter: function () {
        return (
          "<b>" +
          this.series.xAxis.categories[this.point.x] +
          "</b> 출고량 <br><b>" +
          this.point.value +
          "</b> 재고량 <br><b>" +
          this.series.yAxis.categories[this.point.y] +
          "창고위치</b>"
        );
      },

      events: {
        click: function (event) {
          console.log('클릭 이벤트');
        }
      }
    },

    series: [
      {
        name: "Sales per employee",
        borderWidth: 2,
        data,
        dataLabels: {
          enabled: true,
          color: "#000000"
        }
      }
    ]
  };
  const [warehouse, setWarehouse] = useState("")
  const [dataList, setDataList] = useState([])
  useEffect(() => {
    // axios
  }, [warehouse])

  return (
    <div className="max-w-screen-2xl mx-auto">
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      <div>
        <MapList dataList={dataList} />
      </div>
    </div>
  )
}

export default Map4