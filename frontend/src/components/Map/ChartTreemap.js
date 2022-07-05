import React, { useEffect } from "react";
import { useState } from "react";
import EChartsReact from "echarts-for-react";
import "echarts-gl";
import "./styles.css";
import { useSelector } from "react-redux";
import axios from "axios";
import { data } from "jquery";
import { Radio, Table } from "antd";

function Echarts1(props) {
  //axios
  let inventoryURL = useSelector((state) => state.inventoryURL);
  const [lineData, setLineData] = useState([]);
  const [selectedInven, setSelectedInven] = useState([]);
  const pointX = {
    A: 0,
    B: 1, // 어 ? 2가 없네
    C: 2,
    D: 3,
    E: 4,
    F: 5,
    G: 6,
    H: 7,
  };
  const pointY = {
    "01": 0,
    "02": 1,
    "03": 2,
    "04": 3,
    "05": 4,
    "06": 5,
    "07": 6,
    "08": 7,
  };
  //decode x
  const pointdeX = {
    0: "A",
    1: "B",
    2: "C",
    3: "D",
    4: "E",
    5: "F",
    6: "G",
    7: "H",
  };
  const pointdeY = {
    0: "01",
    1: "02",
    2: "03",
    3: "04",
    4: "05",
    5: "06",
    6: "07",
    7: "08",
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

  const triggerOnClick = (param1) => {
    const [x, y, ...elInfo] = param1.value;
    //console.log(param1.value, "값 값가빗 "); // [5, 3, 5651]
    const locationCode =
      param1.seriesName == "광양"
        ? "G"
        : param1.seriesName == "포항"
        ? "P"
        : "C";
    const [deX, deY] = [pointdeX[x], pointdeY[y]];
    const selectedWarehouse = locationCode + deX + deY;
  //  console.log("클릭하신 창고코드는 ", selectedWarehouse);
    // 여기부터 코드 작성하면됨 ㅇㅇ
    props.getInvenByWare(selectedWarehouse);
  };

  // 창고 코드를 보내면 재고 목록가져오기
  //'inventory'/warehouse/창고코드

  const onClickBar = {
    click: triggerOnClick,
  };

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
          getPointX(params.value[0]) +
          getPointY(params.value[1])
        );
      },
    },

    // legend: {
    //data: ["천안"],
    //   },
    visualMap: {
      text: ["High", "Low"],
      min: 0,
      max: maxupdate(),
      orient: 'horizontal',
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
      left: "0%",
      bottom: "0%",
    },
    xAxis3D: {
      name: " X좌표",
      type: "category",
      data: hours,
    },
    yAxis3D: {
      name: " Y좌표",
      type: "category",
      data: days,
    },
    zAxis3D: {
      name: " 재고량",
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
            //  shadowBlur: 100,
          },
        },
      },
    ],
  };

  const opts = { renderer: "canvas", height: "600px" };
  //여기부터 테이블

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
      <EChartsReact option={options} opts={opts} onEvents={onClickBar} />
    </div>
  );
}

export default Echarts1;
