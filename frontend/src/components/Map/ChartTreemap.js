import React, { Component, useEffect, useState } from "react";
import Highcharts from "highcharts";
import addHeatmapModule from "highcharts/modules/heatmap";
import addTreemapModule from "highcharts/modules/treemap";
import {
  HighchartsChart,
  HighchartsProvider,
  Title,
  Subtitle,
  XAxis,
  YAxis,
  TreemapSeries,
  Tooltip,
} from "react-jsx-highcharts";
import axios from "axios";
import { useSelector } from "react-redux";
addHeatmapModule(Highcharts);
addTreemapModule(Highcharts);

function ChartTreemap() {
  const [treeData, settreeData] = useState(null);
  const formatData = (data) => {
    const colours = Highcharts.getOptions().colors;
    const formattedData = [];
    Object.keys(data).forEach((locationName, rIndex) => {
      // if (locationName === "천안") {
      //   return;
      // }
      //locationName  나중에 데이터맞게 다 바꾸기
      console.log(123);
      console.log(locationName);
      const location = {
        id: `id_${rIndex}`, // id_1, id_2
        name: locationName, // Africa, Americas, Europe
        color: colours[rIndex],
      };
      let locationSum = 0;

      const countries = Object.keys(data[locationName]);
      countries.forEach((warehouseName, cIndex) => {
        console.log(warehouseName);
        const warehouse = {
          id: `${location.id}_${cIndex}`,
          name: warehouseName,
          parent: location.id,
        };
        formattedData.push(warehouse);

        Object.keys(data[locationName][warehouseName]).forEach(
          (lot_no, index) => {
            const item = {
              id: `${warehouse.id}_${index}`,
              name: lot_no,
              parent: warehouse.id,
              value: Math.round(
                parseFloat(data[locationName][warehouseName][lot_no]["재고량"])
              ),
              item: data[locationName][warehouseName][lot_no]["제품명"],
            };
            formattedData.push(item);
            locationSum += item.value;
          }
        );
      });

      location.value = Math.round(locationSum); // 대륙 총 인구수
      formattedData.push(location);
    });

    return formattedData;
  };
  let url = useSelector((state) => state.inventoryURL);
  axios.defaults.baseURL = url;

  useEffect(() => {
    axios
      .get("/map")
      .then((res) => {
        settreeData(formatData(res.data)); //창고 테이블
        console.log(res, "treepmap 들어와라");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  //usestate
  const [warehouseList, setWarehouseList] = useState([]);

  //url
  // let url = useSelector((state) => state.warehouseURL);
  // axios.defaults.baseURL = url;

  // useEffect(() => {
  //     axios
  //       .get("/")
  //       .then((res) => {
  //         settreeData(formatData(res.data)); //창고 테이블
  //         console.log(res, "ㅇㅇㅇㅇㅇㅇㅇㅇ");
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }, []);

  //axios.get(`/ware`)

  if (!treeData) return null;

  const levels = [
    {
      level: 1,
      dataLabels: {
        enabled: true,
      },
      borderWidth: 3,
    },
  ];
  const tooltipFormatter = function () {
    console.log(this.point.name);
    return `${this.point.name}: ${this.point.value}`;
  };

  return (
    <div className="app">
      <HighchartsProvider Highcharts={Highcharts}>
        <HighchartsChart>
          <Title>Global Mortality Rate 2012, per 100,000 population</Title>
          <Subtitle>Click points to drill down. Source: WHO.</Subtitle>
          <XAxis />
          <YAxis>
            <TreemapSeries
              data={treeData}
              allowDrillToNode
              layoutAlgorithm="squarified"
              animationLimit={1000}
              dataLabels={{ enabled: false }}
              levelIsConstant={false}
              levels={levels}
              onClick={(e) => {
                console.log(e.target.value);
              }}
            />
          </YAxis>
          <Tooltip formatter={tooltipFormatter} />
        </HighchartsChart>
      </HighchartsProvider>
    </div>
  );
}

export default ChartTreemap;
