import React from "react";
import Highcharts from "highcharts";
import "./Column.css";
import HighchartsReact from "highcharts-react-official";
import highcharts3d from "highcharts/highcharts-3d";


function column() {
 // Set up the chart
const chart = new Highcharts.Chart({
  chart: {
      renderTo: 'container',
      type: 'column',
      options3d: {
          enabled: true,
          alpha: 15,
          beta: 15,
          depth: 50,
          viewDistance: 25
      }
  },
  title: {
      text: 'Chart rotation demo'
  },
  subtitle: {
      text: 'Test options by dragging the sliders below'
  },
  plotOptions: {
      column: {
          depth: 25
      }
  },
  series: [{
      data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
  }]
});

function showValues() {
  document.getElementById('alpha-value').innerHTML = chart.options.chart.options3d.alpha;
  document.getElementById('beta-value').innerHTML = chart.options.chart.options3d.beta;
  document.getElementById('depth-value').innerHTML = chart.options.chart.options3d.depth;
}

// Activate the sliders
document.querySelectorAll('#sliders input').forEach(input => input.addEventListener('input', e => {
  chart.options.chart.options3d[e.target.id] = parseFloat(e.target.value);
  showValues();
  chart.redraw(false);
}));

showValues();

  return (
    <div>
<figure class="highcharts-figure">
  <div id="container"></div>
  <div id="sliders">
    <table>
      <tbody>
        <tr>
          <td><label for="alpha">Alpha Angle</label></td>
                <td><input id="alpha" type="range" min="0" max="45" value="15"> <span id="alpha-value" class="value"></span></input></td>
                
        </tr>
        <tr>
          <td><label for="beta">Beta Angle</label></td>
          <td><input id="beta" type="range" min="-45" max="45" value="15"> <span id="beta-value" class="value"></span></input></td>
        </tr>
        <tr>
          <td><label for="depth">Depth</label></td>
          <td><input id="depth" type="range" min="20" max="100" value="50"> <span id="depth-value" class="value"></span></input></td>
        </tr>
      </tbody>
    </table>
  </div>
</figure>

   </div>
  );
}

export default column;
