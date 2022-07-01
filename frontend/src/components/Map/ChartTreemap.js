import React, { useEffect } from "react";
import { useState } from "react";
import EChartsReact from "echarts-for-react";
import "echarts-gl";
import "./styles.css";
import { useSelector } from "react-redux";
import axios from "axios";
import { data } from "jquery";
import { Radio } from "antd";

function Echarts1() {
  //axios
  let inventoryURL = useSelector((state) => state.inventoryURL);
  const [lineData, setLineData] = useState([]);
  const pointX = {
    A: 0,
    B: 1,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8,
  };
  const pointY = {
    "01": 0,
    "02": 1,
    "03": 3,
    "04": 4,
    "05": 5,
    "06": 6,
    "07": 7,
    "08": 8,
  };
  //라디오 버튼

  function getPointX(params) {
    return Object.keys(pointX).find((key) => pointX[key] === params);
  }
  function getPointY(params) {
    return Object.keys(pointY).find((key) => pointY[key] === params);
  }
  const [location, setLocation] = useState("광양");

  function getLocation() {
    if (location === "광양") {
      return "G";
    } else if (location === "천안") {
      return "C";
    } else {
      return "P";
    }
  }
  //max 값 조정하기
  function maxupdate() {
    if (location === "광양") {
      return 6000;
    } else if (location === "천안") {
      return 28000;
    } else {
      return 46000;
    }
  }

  function setLineDataAxios(item) {
    return [
      pointX[item.warehouse_code_string],
      pointY[item.warehouse_code_int],
      item.amount,
    ];
  }

  //axios
  useEffect(() => {
    axios.defaults.baseURL = inventoryURL;
    axios
      .get(`/map/${location}`)
      .then((res) => {
        setLineData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [location]);

  var hours = ["A", "B", "C", "D", "E", "F", "G", "H"];
  var days = ["1", "2", "3", "4", "5", "6", "7", "8"];

  var options = {
    toolbox: {
      show: true,
      feature: {
        dataView: { readOnly: false },
        saveAsImage: {},
      },
    },
    // title: {
    //   text: "Warehouse map",
    // },
    tooltip: {
      formatter: function (params) {
        return (
          params.seriesName +
          " <br/>재고량: " +
          params.value[2] +
          " 개" +
          " <br/>창고 코드: " +
          getLocation() +
          getPointX(params.value[1]) +
          getPointY(params.value[0])
        );
      },
    },

    // legend: {
    //data: ["천안"],
    //   },
    visualMap: {
      min: 0,

      max: maxupdate(),
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
      viewControl: {},
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
        name: location,
        type: "bar3D",
        data: lineData.map(function (item) {
          return {
            value: setLineDataAxios(item),
          };
        }),
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
  };

  const opts = { renderer: "canvas", height: "600px" };
  return (
    <div className="text-center" id="echart">
      <div className="font-bold text-2xl text-center mb-3">Warehouse Map</div>
      <Radio.Group name="radiogroup" defaultValue={"광양"}>
        <Radio
          value={"광양"}
          onClick={(value) => {
            //console.log(value.target.value);
            setLocation(value.target.value);
          }}
        >
          광양
        </Radio>
        <Radio
          value={"포항"}
          onClick={(value) => {
            setLocation(value.target.value);
          }}
        >
          포항
        </Radio>
        <Radio
          value={"천안"}
          onClick={(value) => {
            setLocation(value.target.value);
          }}
        >
          천안
        </Radio>
      </Radio.Group>
      <EChartsReact option={options} opts={opts} />
    </div>
  );
}

export default Echarts1;
