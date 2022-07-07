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
            text: "재고량 순위",
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
            categories: amountItemName,
        },
        yAxis: {
            title: {
                text: "재고량",
            },
        },
        series: [
            {
                name: "재고량 내림차순",
                data: amount,
                color: "#088A68",
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

    useEffect(() => {
        axios.defaults.baseURL = inventoryURL;
        axios.get("/amount").then((res) => {
            setAmountItemName(res.data.map(item => item.item_name))
            setAmount(res.data.map(item => item.amount))
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

export default DashboardAmountChart;
