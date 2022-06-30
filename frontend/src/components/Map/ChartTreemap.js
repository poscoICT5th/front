import React, { useEffect } from "react";
import { useState } from "react";
import EChartsReact from "echarts-for-react";
import "echarts-gl";
import "./styles.css";
import { useSelector } from "react-redux";
import axios from "axios";

function Echarts1() {
  //axios
  let inventoryURL = useSelector((state) => state.inventoryURL);
  const [lineData, setLineData] = useState([]);

  const [pointX, setPointX] = useState({
    A: 0,
    B: 1,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
  });
  const [pointY, setPointY] = useState({
    "01": 0,
    "02": 1,
    "03": 3,
    "04": 4,
    "05": 5,
    "06": 6,
    "07": 7,
  });
  function setLineDataAxios(x, y, inven) {
    console.log([pointX[x], pointY[y], inven])
    return [pointX[x], pointY[y], inven];
  }
  const [location, setLocation] = useState("천안");
  useEffect(() => {
    axios.defaults.baseURL = inventoryURL;
    axios
      .get(`/map/${location}`)
      .then((res) => {
        res.data.forEach((element) => {
          console.log(res.data, " 데이터 들어온거 ");
          //  console.log(element, " 데이터 들어온거 ");
          setLineData(lineData => [
            ...lineData, //[,] 형태로 만들어주기위해 넣는다.
            setLineDataAxios(
              element.warehouse_code_string,
              element.warehouse_code_int,
              element.amount
            ),
          ]);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  var hours = ["A", "B", "C", "D", "E", "F", "G"];
  var days = ["1", "2", "3", "4", "5", "6", "7"];
  var data = [[1, 1, 700]];

  const [options, setOptions] = useState({
    title: {
      text: "Warehouse map",
    },
    tooltip: {
      // axisPointer: {
      //   type: 'shadow'
      // },
      formatter: function (params) {
        console.log(params, "툴팁이다. ");
        //  console.log(params.value[2], "params value 이다.  "); //700

        // return params.value[2].toString();

        return (
          params.seriesName +
          " <br/>재고량: " +
          params.value[2] +
          " <br/>x좌표: " +
          params.value[1]
        );
      },
    },

    legend: {
      data: ["천안"],
    },
    visualMap: {
      min: 500,
      max: 1000,
      inRange: {
        color: [
          "#313695",
          "#4575b4",
          "#74add1",
          "#abd9e9",
          "#e0f3f8",
          "#ffffbf",
          "#fee090",
          "#fdae61",
          "#f46d43",
          "#d73027",
          "#a50026",
        ],
      },
    },
    xAxis3D: {
      type: "category",
      data: hours,
    },
    yAxis3D: {
      type: "category",
      data: days,
    },
    zAxis3D: {
      type: "value",
    },
    grid3D: {
      boxWidth: 200,
      boxDepth: 80,
      viewControl: {
        // projection: 'orthographic'
      },
      light: {
        main: {
          intensity: 1.2,
          shadow: true,
        },
        ambient: {
          intensity: 0.3,
        },
      },
    },
    series: [
      {
        name: "천안",
        type: "bar3D",
        data: data.map(function (item) {
          console.log(item, "data map 돌리는거 ");
          return {
            value: [item[1], item[0], item[2]],
          };
        }),
        // tooltip: {
        //   formatter: function (param) {
        //     console.log(param.value[2], " param value"); //[1,1,700]
        //     console.log(param.data[0], " param data"); //undifiend

        //     param = param[1];
        //     return [
        //     //  "Date: " + param.name + '<hr size=1 style="margin: 3px 0">',
        //       "Open: " + param.value[2] + "<br/>",

        //     ].join("");
        //   },
        // },

        shading: "lambert",
        label: {
          fontSize: 16,
          borderWidth: 1,
        },
        emphasis: {
          label: {
            fontSize: 20,
            color: "#900",
          },
          itemStyle: {
            color: "#900",
          },
        },
      },
    ],
  });

  const opts = { renderer: "canvas", height: "600px" };
  return (
    <div className="" id="echart">
      <EChartsReact option={options} opts={opts} />
    </div>
  );
}

export default Echarts1;
