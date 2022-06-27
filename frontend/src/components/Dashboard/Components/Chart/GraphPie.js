import HighchartsReact from 'highcharts-react-official'
import Highcharts from "highcharts"
import React from 'react'

function GraphPie(props) {
    const options = {
        chart: {
            type: 'scatter'
        },
        title: {
            text: props.title
        },
        // subtitle: {
        //     text: "pie graph"
        // },
        floating: true,
        series: [
            {
                data: [
                    { name: "요청대기", y: 123 },
                    { name: "처리완료", y: 44 },
                ],
            }
        ],
        tooltip: {
            pointFormat: "<b>{point.y}</b>"
        },
        plotOptions: {
            pie: {
                showInLegend: true,
                innerSize: "50%",
                dataLabels: {
                    enabled: true,
                    distance: -80,
                    color: "white",
                    style: {
                        fontweight: "bold",
                        fontsize: 30
                    }
                }
            }
        }
    };
    return (
        <div className='h-48 w-48'>
            <HighchartsReact highcharts={Highcharts} options={options} containerProps={{ style: { height: "100%", width: "100%" } }} />
        </div>
    )
}

export default GraphPie