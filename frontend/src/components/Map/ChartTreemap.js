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
<<<<<<< HEAD
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
=======
    Object.keys(data).forEach((regionName, rIndex) => {
      // if (regionName === "천안") {
      //   return;
      // }
      //regionName  나중에 데이터맞게 다 바꾸기 
      console.log(123)
      console.log(regionName)
      const region = {
        id: `id_${rIndex}`, // id_1, id_2
        name: regionName,   // Africa, Americas, Europe
        color: colours[rIndex],
      };
      let regionSum = 0;

      const countries = Object.keys(data[regionName]);
      countries.forEach((countryName, cIndex) => {
        console.log(countryName)
        const country = {
          id: `${region.id}_${cIndex}`,
          name: countryName,
          parent: region.id,
        };
        formattedData.push(country);

        Object.keys(data[regionName][countryName]).forEach(
          (causeName, index) => {
            const cause = {
              id: `${country.id}_${index}`,
              name: causeName,
              parent: country.id,
              value: Math.round(
                parseFloat(data[regionName][countryName][causeName]["재고량"])
              ),
              item: data[regionName][countryName][causeName]["제품명"]
            };
            formattedData.push(cause);
            regionSum += cause.value;
>>>>>>> cho
          }
        );
      });

<<<<<<< HEAD
      location.value = Math.round(locationSum); // 대륙 총 인구수
      formattedData.push(location);
=======
      region.value = Math.round(regionSum); // 대륙 총 인구수 
      formattedData.push(region);
>>>>>>> cho
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
<<<<<<< HEAD
        console.log(err);
=======
        ;
>>>>>>> cho
      });
  }, []);
  //usestate
  const [warehouseList, setWarehouseList] = useState([]);
<<<<<<< HEAD
=======


>>>>>>> cho

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
  //         ;
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
<<<<<<< HEAD
    console.log(this.point.name);
    return `${this.point.name}: ${this.point.value}`;
=======
    return `${this.point.item}: ${this.point.value}`;
>>>>>>> cho
  };

  return (
    <div className="app">
      <HighchartsProvider Highcharts={Highcharts}>
        <HighchartsChart>
          <Title>창고맵 + 재고현황</Title>
          <Subtitle>서브제목인데 뭔가를 적어주면 좋지않을까?</Subtitle>
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
