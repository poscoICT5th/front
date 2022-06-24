import React, { Component, useEffect, useState } from "react";
import ReactHighcharts from "react-highcharts/ReactHighstock.src";
import priceData from "./btcdata.json";
import moment from "moment";
import { useSelector } from "react-redux";
import axios from "axios";
//파악 완료

function ChartLine() {
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
            ...lineData,
            setLineDataAxios(element.date, element.inven_motor),
          ]);
        });
        console.log(lineData);
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
            // const a = [1000,2000,3000,40000];
            //return numberFormat.format(123456)
            return this.value; //jason 두번째 값을 엑시오스에서 받아서 여기서 뿌려주면된다.
            // y 축 완성
          },
          x: -15,
          style: {
            color: "#000",
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
          numberFormat.format(this.y, 0) +
          "</b><br/>" +
          moment(this.x).format("MMMM Do YYYY, h:mm")
        );
        // return 1000;
      },
    },
    plotOptions: {
      series: {
        showInNavigator: true,
        gapSize: 6,
      },
    },
    rangeSelector: {
      selected: 1,
    },
    title: {
      text: `Motor 재고 추이`,
    },
    chart: {
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
      // categories: [
      //   "1/7/2019"
      // ]
    },
    //위에 버튼
    rangeSelector: {
      buttons: [
        {
          type: "day",
          count: 1,
          text: "1d",
        },
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
      selected: 4,
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

export default ChartLine;
