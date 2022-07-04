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
        },
        title: {
            text: "입고기간순(오래된)",
        },
        credits: {
            enabled: true
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
        },
        yAxis: {
            title: {
                text: "기간(일)",
            },
        },
        series: [
            {
                name: "입고기간 내림차순",
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

    // 
    let nowDate = (moment().format("YYYY-MM-DD"))
    useEffect(() => {
        axios.defaults.baseURL = inventoryURL;
        axios.get("/aging").then((res) => {
            console.log(res.data);
            setAgingItemName(res.data.map(item => item.item_name))
            setDiffDays(res.data.map(item => (moment(nowDate).diff(moment(item.inventory_date.substr(0, 10)), 'days'))))
        });
        axios.get("/amount").then((res) => {
            console.log(res.data);
        });
    }, []);

    return (
        <div className="App">
            <HighchartsReact
                style={{ height: "100%" }}
                highcharts={Highcharts}
                options={chartOptions}
            />
        </div>
    );
}

export default DashboardAgingChart;
