import React, { useEffect, useState } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import highcharts3d from "highcharts/highcharts-3d";
import axios from "axios";
import { useSelector } from "react-redux";
import moment from "moment";

highcharts3d(Highcharts);

function DashboardAgingChart(props) {
    let inventoryURL = useSelector((state) => state.inventoryURL);
    const [agingItemName, setAgingItemName] = useState([])
    const [diffDays, setDiffDays] = useState([])
    const languageTitle = {
        "제목": {
            ko: "입고기간순(오래된)",
            en: "Receiving period order(old)",
            cn: "入库时间顺序(长期)",
            jp: "入庫期間順(古い)",
            vn: "Thời hạn nhận hàng(đã lâu)",
        },
        "기간": {
            ko: "기간(일)",
            en: "Duration (days)",
            cn: "持续时间(天)",
            jp: "期間（日）",
            vn: "Thời gian (ngày)"
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
            color:  sessionStorage.getItem("theme") === "light" ? "#000000" : "#ffffff",
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
            categories: agingItemName,
            labels: {
                style: {
                    color: sessionStorage.getItem("theme") === "light" ? "#000000" : "#ffffff",
                }
            }
        },
        yAxis: {
            title: {
                text: languageTitle.기간[sessionStorage.language],
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
                data: diffDays,
                color: "#8181F7",

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
    }

    let nowDate = (moment().format("YYYY-MM-DD"))
    useEffect(() => {
        axios.defaults.baseURL = inventoryURL;
        axios.get("/aging").then((res) => {
            setAgingItemName(res.data.map(item => item.item_name))
            setDiffDays(res.data.map(item => (moment(nowDate).diff(moment(item.inventory_date.substr(0, 10)), 'days'))))
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

export default DashboardAgingChart;
