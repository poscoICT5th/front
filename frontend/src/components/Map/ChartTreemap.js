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

addHeatmapModule(Highcharts);
addTreemapModule(Highcharts);

function ChartTreemap() {
    const [treeData, settreeData] = useState(null);
    const formatData = (data) => {

      const colours = Highcharts.getOptions().colors; 
      const formattedData = [];
      Object.keys(data).forEach((regionName, rIndex) => {  //regionName  나중에 데이터맞게 다 바꾸기 
        const region = {
          id: `id_${rIndex}`, // id_1, id_2
          name: regionName,   // Africa, Americas, Europe
          color: colours[rIndex],
        };
        let regionSum = 0;
          
        const countries = Object.keys(data[regionName]);
        countries.forEach((countryName, cIndex) => {
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
                  parseFloat(data[regionName][countryName][causeName])
                ),
              };
              formattedData.push(cause);
              regionSum += cause.value;
            }
          );
        });
  
        region.value = Math.round(regionSum); // 대륙 총 인구수 
        formattedData.push(region);
      });
  
      return formattedData;
      };
    useEffect(() => {
        axios
          .get("https://gist.githubusercontent.com/whawker/809cae1781f25db5f3c2dd7cee93b017/raw/94ca755307ac5651686467b5fa1844659b5817a3/data.json")
          .then((res) => {
            settreeData(formatData(res.data)); //창고 테이블
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
    return `${this.key}: ${this.point.value}`;
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
            />
          </YAxis>
          <Tooltip formatter={tooltipFormatter} />
        </HighchartsChart>
      </HighchartsProvider>
    </div>
  );
}

export default ChartTreemap;
