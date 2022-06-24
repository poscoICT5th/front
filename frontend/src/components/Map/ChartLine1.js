import React, { Component } from 'react'
import ReactHighcharts from 'react-highcharts/ReactHighstock.src'
import priceData from './btcdata.json'
import moment from 'moment'

export default class App extends Component {
  render() {
    const options = {style: 'number', currency: 'USD'};
    const numberFormat = new Intl.DateTimeFormat('en-US', options);
    // const date = '20220101'
    // const options = {
    //   weekday: 'long',
    //   year: 'numeric',
    //   month: 'long',
    //   day: 'numeric',
    // }
    //MM/DD/YYYY
    
    function name(params) {
      
    }

    console.log(numberFormat , " 이게 도대체 뭘까");
    const configPrice = {
      
      yAxis: [{
        offset: 20,

        labels: {
          formatter: function () {
            console.log(this);
            return numberFormat.format(this.value)  //.format(여기에 json 두번째 데이터들어감)

          }
          ,
          x: -15,
          style: {
            "color": "#000", "position": "absolute"

          },
          align: 'left'
        },
      },
        
      ],
      tooltip: {
        shared: true,
        formatter: function () {
          return numberFormat.format(this.y, 0) +  '</b><br/>' + moment(this.x).format('MMMM Do YYYY, h:mm')
        }
      },
      plotOptions: {
        series: {
          showInNavigator: true,
          gapSize: 6,

        }
      },
      rangeSelector: {
        selected: 1
      },
      title: {
        text: `Bitcoin stock price`
      },
      chart: {
        height: 600,
      },
  
      credits: {
        enabled: false
      },
  
      legend: {
        enabled: true
      },
      xAxis: {
        type: 'date',
      },
      rangeSelector: {
        buttons: [{
          type: 'day',
          count: 1,
          text: '1d',
        }, {
          type: 'day',
          count: 7,
          text: '7d'
        }, {
          type: 'month',
          count: 1,
          text: '1m'
        }, {
          type: 'month',
          count: 3,
          text: '3m'
        },
          {
          type: 'all',
          text: 'All'
        }],
        selected: 4
      },
      series: [{
        name: 'Price',
        type: 'spline',
  
        data: priceData,
        tooltip: {
          valueDecimals: 2
        },
  
      }
      ]
    };
    return (
      <div>
         <ReactHighcharts config = {configPrice}></ReactHighcharts>
      </div>
    )
  }
}
