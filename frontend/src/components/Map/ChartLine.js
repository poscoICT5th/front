import React, { useEffect, useRef, useState } from "react";
import Highcharts from "highcharts";
import "./styles.css";
import axios from "axios";
import { useSelector } from "react-redux";
//6월 13일 line chart 구현
export default function ChartLine() {
  const refContainer = useRef(null);
  let inventoryURL = useSelector((state) => state.inventoryURL);
  const [trendList, setTrendList] = useState([]);
  const [data1, setData1] = useState([]);
  const [chartdata, setChartdata] = useState([]);
  const [flag, setFlag] = useState(true);
  const getData = () => {
    axios.defaults.baseURL = inventoryURL;
    axios.get("/trend").then((res) => {
      console.log(res.data, "데이터 들어온다");
      // res.data.forEach((element, index) => {
      //   dataList.push(index * 2000);
      //   // console.log(dataList);
      // });
      let templist = res.data.reduce((acc, cur, index) => {
        acc.push(cur)
        return acc
      }, [])
      console.log(12333)
      console.log(templist)
      console.log(12333)
      console.log(flag)
      setChartdata(...chartdata, templist);
      setFlag(false)
      console.log(chartdata)
      console.log(flag)

    });
  }
  const doGetData = () => {
    getData()
  }

  //axios
  useEffect(() => {
    doGetData();
    // axios.defaults.baseURL = inventoryURL;
    // axios
    //   .get("/trend")
    //   .then((res) => {
    //     console.log(res.data, "데이터 들어온다");
    //     let sum = 0;
    //     res.data.forEach((element, index) => {
    //       setData1((data1) => [...data1, 3000]);
    //       console.log(data1);
    //     });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }, []);

  let dataList = [];

  

  //usestate
  const [datas, setDatas] = useState({});

  useEffect(() => {
    Highcharts.chart(refContainer.current, {
      chart: {
        type: "line",
      },
      credits: {
        enabled: false,
      },
      title: {
        text: "strip 추이",
      },
      subtitle: {
        text: "",
      },
      xAxis: {
        categories: [
          "1/1/2022",
          "1/2/2022",
          "1/3/2022",
          "1/4/2022",
          "1/5/2022",
          "1/6/2022",
        ], // the categories of the X Axis
        crosshair: true,
      },
      yAxis: {
        min: 100, // minimum value of the Y Axis
        max: 10000,
        title: {
          text: "Number of Covid cases",
        }, // the title of the Y Axis
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat:
          '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y}</b></td></tr>',
      }, // tooltip appears when hovering over a point
      series: [
        {
          name: "재고",
          data: flag? [] : chartdata,
        },
        {
          name: "출고",
          data: [5555, 8000, 3000, 4000, 7000, 5555],
        },
      ],
    });
  }, []);

  return (
    <div className="App">
      <div ref={refContainer} />
    </div>
  );
}
