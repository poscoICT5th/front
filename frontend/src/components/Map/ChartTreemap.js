import React, { useEffect, useState } from "react";
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
import "./styles.css";
addHeatmapModule(Highcharts);
addTreemapModule(Highcharts);

function ChartTreemap() {
  let inventoryURL = useSelector((state) => state.inventoryURL);
  const [treeData, settreeData] = useState(null);
  const formatData = (data) => {
    const colours = Highcharts.getOptions().colors;
    const formattedData = [];
    Object.keys(data).forEach((locationName, rIndex) => {
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

  useEffect(() => {
    axios.defaults.baseURL = inventoryURL;
    axios
      .get("/map")
      .then((res) => {
        settreeData(formatData(res.data)); //창고 테이블
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
    return `${this.point.name}: ${this.point.value}`;
  };

  return (
    <div className="App">
      <HighchartsProvider Highcharts={Highcharts}>
        <HighchartsChart>
          <Title>창고맵 + 재고현황</Title>
          <Subtitle></Subtitle>
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
