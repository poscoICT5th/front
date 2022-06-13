import React, { useEffect, useState } from "react";
import _ from "lodash";
import Highcharts from "highcharts";
import HighchartsHeatmap from "highcharts/modules/heatmap";
import HighchartsReact from "highcharts-react-official";
import rawData from "./data";
import { severityHexColors, getColor, rgbObjectToHex } from "./heatmapUtils";
import "./styles.css";
import CreateWarehouse from "../Create/CreateWarehouse";
import TableWarehouse from "../Table/TableWarehouse";
import axios from "axios";
import { useSelector } from "react-redux";
//눌렀을 때 값을 받아오게
// 칸을 눌렀을때 말풍선 안에 값을 받아오게 콘솔에 찍히게
//

function Map() {
  let url = useSelector((state) => state.inventoryURL);
  axios.defaults.baseURL = url;

  // 맨처음에 전체리스트 불러오기
  const [click, setClick] = useState(false);
  // usestate
  const [datas, setDatas] = useState({
    location: "",
    warehouse_code: "",
    purpose: "",
    warehouse_code_desc: "",
    use: "",
    maximum_weight: 0,
    maximum_count: 0,
    inventory_using: "",
    remarks: "",
  });
  //통신오는 순서로 맞춰주기
  const th = [
    "location",
    "warehouse_code",
    "purpose",
    "warehouse_code_desc",
    "use",
    "maximum_weight",
    "maximum_count",
    "inventory_using",
    "remarks",
  ];

  const x = [rawData.E, rawData.D, rawData.C, rawData.B, rawData.A].reverse();
  const [opens, setOpens] = useState({
    createWarehouseOpen: false,
  });
  const [select_warehouse, setSelect_warehouse] = useState("");
  const [warehouseList, setWarehouseList] = useState([]);

  useEffect(() => {
    axios
      .get("/")
      .then((res) => {
        setWarehouseList(res.data);
        ;
      })
      .catch((err) => {
        ;
      });
  }, [click]);
  //여기부터 클릭했을 때 해당하는 로우만 불러오기
  useEffect(() => {
    axios
      .get(`${select_warehouse}`) //클릭했을 때 받아옴
      .then((res) => {
        setWarehouseList(res.data);
      })
      .catch((err) => {
        ;
      });
  }, [select_warehouse]);

  HighchartsHeatmap(Highcharts);
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
            : rgbObjectToHex(getColor(j + 1, i, 10, 5)),
      }))
    )
    .flat();
  // console.log(JSON.stringify(data));
  const chartOptions = {
    chart: {
      type: "heatmap",
      marginTop: 20,
      marginBottom: 80,
      plotBorderWidth: 0,
      borderWidth: 0,
    },
    credits: {
      enabled: false,
    },
    title: {
      text: undefined,
    },

    xAxis: {
      categories: _.fill(Array(10), 1).map((e, i) => (i + 1) * 10),
    },

    yAxis: {
      categories: ["A", "B", "C", "D", "E"],
      title: null,
    },

    colorAxis: {
      min: 0,
      max: 100,
      stops: severityHexColors.map((hex, i, arr) => [i / arr.length, hex]),
      reversed: false,
    },

    legend: {
      align: "right",
      layout: "vertical",
      margin: 0,
      verticalAlign: "top",
      y: 25,
      symbolHeight: 280,
    },

    plotOptions: {
      series: {
        cursor: "pointer",
        point: {
          events: {
            //모달창
            click: function () {
              // alert("Category: " + 123132 + ", value: " + this.y);
              if (this.value === 0) {
                setOpens({
                  ...opens,
                  createWarehouseOpen: true,
                });

                // console.log(this.x, this.value)
              } else {
                alert("이미 사용중인 창고입니다.");
                setSelect_warehouse(this.value);
              }
            },
          },
        },
      },
    },
    tooltip: {
      //말풍선 내용
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
    },
    series: [
      {
        name: "Sales per employee",
        borderWidth: 1,
        data,
        dataLabels: {
          enabled: true,
          color: "#000000",
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-2xl mx-auto">
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      <div>
        <CreateWarehouse
          createWarehouseOpen={opens.createWarehouseOpen}
          setOpens={setOpens}
          opens={opens}
          openData={"createWarehouseOpen"}
        />

        {/* table */}
        <div className="mx-1 mt-2 text-center w-full">
          <TableWarehouse
            warehouseList={warehouseList}
            datas={datas}
            th={th}
            click={click}
            setClick={setClick}
          />
        </div>
      </div>
    </div>
  );
}

export default Map;
