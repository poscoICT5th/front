import React from "react";
import { render } from "react-dom";
// Import Highcharts
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import highcharts3d from "highcharts/highcharts-3d";

highcharts3d(Highcharts);
//3D 막대그래프
class Demo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.afterChartCreated = this.afterChartCreated.bind(this);
    this.state = {
      chartOptions: {
        chart: {
          type: "column",
          options3d: {
            enabled: true,
            alpha: 2,
            beta: 12,
            depth: 70,
            viewDistance: 25
          }
        },
        title: {
          text: ""
        },
        plotOptions: {
          series: {
            dataLabels: {
              enabled: true
            },
            depth: 25
          }
        },
        xAxis: {
          categories: ["Sem 27", "Sem 28", "Sem 29", "Sem 30", "Sem 31"]
        },
        yAxis: {
          title: {
            text: "Nombre de requêtes"
          }
        },
        series: [
          {
            name: "AISP",
            data: [81905, 86058, 63751, 63895, 66557],
            color: "#7CB5EC"
          },
          {
            name: "PISP",
            data: [708713, 544571, 4330, 4102, 3575],
            color: "#D87C8A"
          },
          {
            name: "CBPII",
            data: [0, 0, 0, 0, 0],
            color: "#81CE93"
          }
        ],
        responsive: {
          rules: [
            {
              condition: {
                maxWidth: 2000
              }
            }
          ]
        }
      }
    };
  }

  afterChartCreated(chart) {
    this.internalChart = chart;
    this.forceUpdate();
  }

  componentDidUpdate() {
    //this.internalChart.getMargins(); // redraw
    this.internalChart.reflow();
  }

  render() {
    return (
      <HighchartsReact
        style={{ height: "100%" }}
        highcharts={Highcharts}
        options={this.state.chartOptions}
        callback={this.afterChartCreated}
        />
    );
  }
}

//render(<Demo />, document.getElementById("root"));
export default Demo