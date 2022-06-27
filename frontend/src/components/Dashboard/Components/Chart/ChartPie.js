import React from 'react';
import PieChart, {
  Legend,
  Series,
  Label,
  Font,
  Connector,
} from 'devextreme-react/pie-chart';

function customizeText(arg) {
  return `${arg.valueText} (${arg.percentText})`;
}

function ChartPie() {

  const dataSource = [{
    country: 'USA',
    medals: 110,
  }, {
    country: 'China',
    medals: 100,
  }, {
    country: 'Russia',
    medals: 72,
  }, {
    country: 'Britain',
    medals: 47,
  }, {
    country: 'Australia',
    medals: 46,
  }, {
    country: 'Germany',
    medals: 41,
  }, {
    country: 'France',
    medals: 40,
  }, {
    country: 'South Korea',
    medals: 31,
  }];

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