import React, { useEffect, useState } from "react";
// Import Highcharts
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import highcharts3d from "highcharts/highcharts-3d";
import axios from "axios";
import { useSelector } from "react-redux";

highcharts3d(Highcharts);
//3D 막대그래프

function DashboardAmountChart(props) {
    let inventoryURL = useSelector((state) => state.inventoryURL);
    const [amountItemName, setAmountItemName] = useState([])
    const [amount, setAmount] = useState([])
    const languageTitle = {
        "제목": {
            ko: "재고량(내림차순)",
            en: "Inventory ranking(descending order)",
            cn: "库存量排名(下降顺序)",
            jp: "在庫量順位(降車順)",
            vn: "Xếp hạng lượng tồn kho(theo thứ tự giảm dần)",
        },
        "재고량": {
            ko: "재고량",
            en: "the amount of inventory",
            cn: "库存量",
            jp: "在庫量",
            vn: "lượng tồn kho"
        },


    }
    const chartOptions = {
        chart: {
            type: "column",
            options3d: {
                enabled: true,
                alpha: 2,
                beta: 12,
                depth: 70,
                viewDistance: 25,
            },
            backgroundColor: {},
            color: {},
        },
        title: {
            text: "",
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                },
                depth: 25,
            },
        },
        xAxis: {
            categories: amountItemName,
            labels: {
                style: {
                    color: sessionStorage.getItem("theme") === "light" ? "#000000" : "#ffffff",
                }
            }
        },
        yAxis: {
            title: {
                text: languageTitle.재고량[sessionStorage.language],
            },
            labels: {
                style: {
                    color: sessionStorage.getItem("theme") === "light" ? "#000000" : "#ffffff",
                }
            }
        },
        series: [
            {
                name: languageTitle.제목[sessionStorage.language],
                data: amount,
                color: sessionStorage.getItem("theme") === "light" ? "#088A08" : "#A9F5A9",
            },
        ],
        responsive: {
            rules: [
                {
                    condition: {
                        maxWidth: 2000,
                    },
                },
            ],
        },
        legend: {
            itemStyle: {
                color: sessionStorage.getItem("theme") === "light" ? "#000000" : "#ffffff"
            }
        }
    }

    useEffect(() => {
        axios.defaults.baseURL = inventoryURL;
        axios.get("/amount").then((res) => {
            console.log(res.data)
            setAmountItemName(res.data.map(item => item.item_name))
            setAmount(res.data.map(item => item.sum))
        });
    }, []);
    return (
        <div className="App">
            <div className="text-md font-bold mb-1">{languageTitle.제목[sessionStorage.language]}</div>
            <HighchartsReact
                style={{ height: "100%" }}
                highcharts={Highcharts}
                options={chartOptions}
            />
        </div>
    );
}

export default DashboardAmountChart;
