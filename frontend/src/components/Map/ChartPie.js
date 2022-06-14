import React from 'react';
import PieChart, {
  Legend,
  Series,
  Label,
  Font,
  Connector,
} from 'devextreme-react/pie-chart';
import { dataSource } from './Piedata.js';

function customizeText(arg) {
  return `${arg.valueText} (${arg.percentText})`;
}

function ChartPie() {
  return (
    <div>
      <PieChart id="pie"
        palette="Bright"
        dataSource={dataSource}
        title="Warehouse Chart"
      >
        <Legend
          orientation="horizontal"
          itemTextPosition="right"
          horizontalAlignment="center"
          verticalAlignment="bottom"
          columnCount={4} />
        <Series argumentField="country" valueField="medals">
          <Label
            visible={true}
            position="columns"
            customizeText={customizeText}>
            <Font size={16} />
            <Connector visible={true} width={0.5} />
          </Label>
        </Series>
      </PieChart>



    </div>
  )
}

export default ChartPie