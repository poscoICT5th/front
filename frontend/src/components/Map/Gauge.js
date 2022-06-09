import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import addHighchartsMore from "highcharts/highcharts-more";
import addSolidGaugeModule from "highcharts/modules/solid-gauge";
import {
  HighchartsChart,
  HighchartsProvider,
  XAxis,
  YAxis,
  Pane,
  SolidGaugeSeries,
} from "react-jsx-highcharts";

// Apply addtional modules
addHighchartsMore(Highcharts);
addSolidGaugeModule(Highcharts);

function Gauge() {
  const plotOptions = {
    solidgauge: {
      dataLabels: {
        y: 5,
        borderWidth: 0,
        useHTML: true,
      },
    },
  };

  const dataLabels = {
    format:
      '<div style="text-align:center"><span style="font-size:25px;color:black">{y}</span><br/><span style="font-size:12px;color:silver">km/h</span></div>',
    y: -50,
  };

  const tooltip = {
    valueSuffix: " km/h",
  };
  const [kmph, setKmph] = useState(80);
  const [interval, setinterval] = useState(null);
  useEffect(() => {
    setinterval(window.setInterval(updateSpeed, 1000));
    window.clearInterval(interval);
  }, []);

  function updateSpeed() {
    const offset = getRandomSpeedOffset();
    const newKmph = Math.max(0, Math.min(200, kmph + offset));
    setKmph(newKmph);
  }

  function getRandomSpeedOffset(params) {
    return Math.floor(Math.random() * 40) - 20;
  }

  return (
    <div className="app">
      <HighchartsProvider Highcharts={Highcharts}>
        <HighchartsChart gauge plotOptions={plotOptions}>
          <Pane
            center={["50%", "85%"]}
            size="100%"
            startAngle={-90}
            endAngle={90}
            background={{
              backgroundColor: "#EEE",
              innerRadius: "60%",
              outerRadius: "100%",
              shape: "arc",
            }}
          />
          <XAxis />
          <YAxis
            stops={[
              [0.1, "#55BF3B"],
              [0.5, "#DDDF0D"],
              [0.9, "#DF5353"],
            ]}
            lineWidth={0}
            minorTickInterval={null}
            tickPixelInterval={400}
            tickWidth={0}
            labels={{
              y: 16,
              style: { display: "none" },
            }}
            min={0}
            max={200}
          >
            <YAxis.Title y={-110}>Speed</YAxis.Title>
            <SolidGaugeSeries
              name="Speed"
              data={[kmph]}
              dataLabels={dataLabels}
              tooltip={tooltip}
            />
          </YAxis>
        </HighchartsChart>
      </HighchartsProvider>
    </div>
  );
}

export default Gauge;
