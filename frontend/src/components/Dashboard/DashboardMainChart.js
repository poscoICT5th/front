import React from 'react'
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
function DashboardMainChart() {

    const options = {
        chart: {
            type: 'pie'
        },
        title: {
            text: 'Main Chart'
        },
        series: [
            {
                data: [["입고", 23], ["출고", 21], ["찰고이동", 18]]
            }
        ]
    };

    return (
        <div>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </div>
    )
}

export default DashboardMainChart