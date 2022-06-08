import React from 'react';
import PieChart, {
  Legend,
  Export,
  Series,
  Label,
  Font,
  Connector,
} from 'devextreme-react/pie-chart';
import { dataSource } from './Piedata.js';

function customizeText(arg) {
    return `${arg.valueText} (${arg.percentText})`;
  }

function Pie() {
  return (
      <div>
           <PieChart id="pie"
        palette="Bright"
        dataSource={dataSource}
        title="Olympic Medals in 2008"
      >
        <Legend
          orientation="horizontal"
          itemTextPosition="right"
          horizontalAlignment="center"
          verticalAlignment="bottom"
          columnCount={4} />
        <Export enabled={true} />
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

export default Pie