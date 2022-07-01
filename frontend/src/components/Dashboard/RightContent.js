import React, { useEffect, useState } from 'react'
import EChartsReact from "echarts-for-react";
import axios from 'axios';
import { useSelector } from 'react-redux';
import './RightContent.css'


function RightContent() {
    let inventoryURL = useSelector((state) => state.inventoryURL);

    var option = {
        dataset: {
            source: [
                // ['amount', 'product'],
                [60, 'Matcha Latte'],
                [50, 'Milk Tea'],
                [44, 'Cheese Cocoa'],
                [43, 'Cheese Brownie'],
                [42, 'Matcha Cocoa'],
                [31, 'Tea'],
                [25, 'Orange Juice'],
                [10, 'Lemon Juice'],
                [9, 'Walnut Brownie']
            ]
        },
        grid: { containLabel: true },
        xAxis: { name: 'amount' },
        yAxis: { type: 'category' },
        // visualMap: {
        //     orient: 'horizontal',
        //     left: 'center',
        //     min: 0,
        //     max: 100,
        //     text: ['High Score', 'Low Score'],
        //     // Map the score column to color
        //     dimension: 0,
        //     inRange: {
        //         color: ['#65B581', '#FFCE34', '#FD665F']
        //     }
        // },
        series: [
            {
                type: 'bar',
                encode: {
                    // Map the "amount" column to X axis.
                    x: 'amount',
                    // Map the "product" column to Y axis
                    y: 'product'
                }
            }
        ]
    };

    const [agingRankingList, setAgingRankingList] = useState([]);
    const [amountRankingList, setAmountRankingList] = useState([['amount', 'product']]);
    useEffect(() => {
        axios.defaults.baseURL = inventoryURL;
        axios.get("/aging").then((res) => {
            setAgingRankingList(res.data);
        });
        axios.get("/amount").then((res) => {
            console.log(res.data)
            // map함수 돌려주기
            setAmountRankingList(res.data);
        });
        // setTimeout(() => {
        //     setTenSeconds(!tenSeconds);
        // }, 11000);
    }, []);
    return (
        <div className="dashboardcharts">
            <div className="" id="echart" style={{ height: "100%", width: "100%", margin: "0", padding: "0" }}>
                <EChartsReact option={option} />
            </div>
            <div className="" id="echart" style={{ height: "100%", width: "100%", margin: "0", padding: "0" }}>
                <EChartsReact option={option} />
            </div>
        </div>
    )
}

export default RightContent