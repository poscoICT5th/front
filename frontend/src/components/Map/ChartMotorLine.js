import React, { useEffect, useState } from "react";
import ReactHighcharts from "react-highcharts/ReactHighstock.src";
import moment from "moment";
import { useSelector } from "react-redux";
import axios from "axios";
import "./styles.css";

function ChartMotorLine() {
  var previousPoint = null;
  const [lineData, setLineData] = useState([]);
  //axios
  let inventoryURL = useSelector((state) => state.inventoryURL);
  function setLineDataAxios(date, value) {
    return [parseInt(date), value];
  }
  useEffect(() => {
    axios.defaults.baseURL = inventoryURL;
    axios
      .get("/trend")
      .then((res) => {
        res.data.forEach((element) => {
          setLineData((lineData) => [
            ...lineData, //[,] 형태로 만들어주기위해 넣는다.
            setLineDataAxios(element.date, element.inven_motor),
          ]);
        });
        console.log(lineData, "라인데이터 ");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const options = { style: "currency", currency: "USD" };
  const numberFormat = new Intl.NumberFormat("en-US", options);

  const configPrice = {
    yAxis: [
      {
        offset: 20,
        labels: {
          formatter: function () {
            return this.value; //jason 두번째 값을 엑시오스에서 받아서 여기서 뿌려주면된다. [날짜, 재고량]
            // y 축 완성
          },
          x: -15,
          style: {
            position: "absolute",
          },
          align: "left",
        },
      },
    ],

    tooltip: {
      shared: true,
      formatter: function () {
        return (
          this.y + "개</b><br/>" + moment(this.x).format("MMMM Do YYYY, h:mm")
        );
      },
    },
    plotOptions: {
      series: {
        showInNavigator: true,
        gapSize: 6,

        point: {
          events: {
            click: function (event) {
              if (previousPoint) {
                previousPoint.update({ color: "#fe5800" });
              }
              previousPoint = this;
              this.update({ color: "#fe5800" });
            },
          },
        },
      },
    },
    rangeSelector: {
      selected: 1,
    },
    title: {
      text: `Motor 재고 추이`,
      style: {
        
        fontWeight: "bold",
      }
    },
    chart: {
      backgroundColor: {},
      color: {},
      height: 600,
    },

    credits: {
      enabled: false,
    },

    legend: {
      enabled: true,
    },
    xAxis: {
      type: "date",
    },
    //위에 버튼
    rangeSelector: {
      buttonTheme: {
        // styles for the buttons
        fill: "none",
        stroke: "none",
        "stroke-width": 0,
        r: 8,
        style: {
          color: "#8db4d6",
          fontWeight: "bold",
        },
        states: {
          hover: {},
          select: {
            fill: "#039",
            style: {
              color: "white",
            },
          },
        },
      },
      inputBoxBorderColor: "gray",
      inputBoxWidth: 120,
      inputBoxHeight: 18,
      inputStyle: {
        fontWeight: "bold",
      },
      labelStyle: {
        color: "silver",
        fontWeight: "bold",
      },

      buttons: [
        {
          type: "day",
          count: 7,
          text: "7d",
        },
        {
          type: "month",
          count: 1,
          text: "1m",
        },
        {
          type: "month",
          count: 3,
          text: "3m",
        },
        {
          type: "all",
          text: "All",
        },
      ],
      selected: 2,
    },

    //밑에 범위 박스
    series: [
      {
        name: "재고량",
        type: "spline",
        data: lineData,
        tooltip: {
          valueDecimals: 2,
        },
      },
    ],
  };

  return (
    <div>
      <ReactHighcharts config={configPrice}></ReactHighcharts>
    </div>
  );
}

export default ChartMotorLine;
