import React from "react";
import { ResponsivePie } from "@nivo/pie";
import "./styles.css";
import ReactDOM from "react-dom";



function NivoPie() {
    
const dataExample = [
    {
      id: "php",
      label: "php",
      value: 287,
      color: "hsl(297, 70%, 50%)"
    },
    {
      id: "haskell",
      label: "haskell",
      value: 336,
      color: "hsl(65, 70%, 50%)"
    },
    {
      id: "lisp",
      label: "lisp",
      value: 182,
      color: "hsl(135, 70%, 50%)"
    },
    {
      id: "sass",
      label: "sass",
      value: 50,
      color: "hsl(43, 70%, 50%)"
    },
    {
      id: "go",
      label: "go",
      value: 247,
      color: "hsl(199, 70%, 50%)"
    }
  ];
  
  const NivoPie = ({ data /* see data tab */ }) => (
    <ResponsivePie
      data={dataExample}
      margin={{
        top: 40,
        right: 80,
        bottom: 80,
        left: 80
      }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      colors={{
        scheme: "nivo"
      }}
      borderWidth={1}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]]
      }}
      radialLabelsSkipAngle={10}
      radialLabelsTextXOffset={6}
      radialLabelsTextColor="#333333"
      radialLabelsLinkOffset={0}
      radialLabelsLinkDiagonalLength={16}
      radialLabelsLinkHorizontalLength={24}
      radialLabelsLinkStrokeWidth={1}
      radialLabelsLinkColor={{
        from: "color"
      }}
      slicesLabelsSkipAngle={10}
      slicesLabelsTextColor="#333333"
      animate={true}
      motionStiffness={90}
      motionDamping={15}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          size: 4,
          padding: 1,
          stagger: true
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          rotation: -45,
          lineWidth: 6,
          spacing: 10
        }
      ]}
      fill={[
        {
          match: {
            id: "ruby"
          },
          id: "dots"
        },
        {
          match: {
            id: "c"
          },
          id: "dots"
        },
        {
          match: {
            id: "go"
          },
          id: "dots"
        },
        {
          match: {
            id: "python"
          },
          id: "dots"
        },
        {
          match: {
            id: "scala"
          },
          id: "lines"
        },
        {
          match: {
            id: "lisp"
          },
          id: "lines"
        },
        {
          match: {
            id: "elixir"
          },
          id: "lines"
        },
        {
          match: {
            id: "javascript"
          },
          id: "lines"
        }
      ]}
      legends={[
        {
          anchor: "bottom",
          direction: "row",
          translateY: 56,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: "#999",
          symbolSize: 18,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000"
              }
            }
          ]
        }
      ]}
    />
  );
  return (
      <div>
          
          <div style={{ height: 500 }}>
          <ResponsivePie />
      </div>


    </div>
  )
}

export default NivoPie