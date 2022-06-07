import React, { useState } from 'react'
import ReactApexChart from "react-apexcharts";

function GraphDonut() {
    const [inputData, setinputData] = useState([])
    const [labelData, setlabelData] = useState([])
    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 23 },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 52 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    ];
    const donutData = {
        series: [50, 92, 87],
        options: {
            chart: {
                type: 'donut',
                width:'130%'
            },
            legend: {
                position: 'bottom'
            },
            responsive: [{
                breakpoint: 480,
            }],
            plotOptions: {
                pie: {
                    donut: {
                        // hollow: {
                        // margin: 15,
                        // size: '70%',
                        // image: '../../css/images/a-icon.jpg',
                        // imageWidth: 64,
                        // imageHeight: 64,
                        // imageClipped: false
                        // },
                        labels: {
                            show: true,
                            total: {
                                showAlways: true,
                                show: true,
                                label: 'GraphDonut',
                                fontSize: '15px',
                                color: 'black'
                            },
                            value: {
                                fontSize: '22px',
                                show: true,
                                color: 'blue',
                            },
                        },
                    }
                }
            },
            labels: ["입고", "출고", "이동"],
            title: {
                text: 'Test',
                align: 'center'
            },
        },
    }
    return (
        <div>
            <div id="chart">
                <ReactApexChart
                    options={donutData.options}
                    series={donutData.series}
                    type="donut"
                    width="100%"
                    align="center"
                />
            </div>
        </div>
    )
}

export default GraphDonut