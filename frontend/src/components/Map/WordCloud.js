import React from "react";
import Highcharts from "highcharts";
import wordCloud from "highcharts/modules/wordcloud.js";
import HighchartsReact from "highcharts-react-official";

function WordCloud() {
    wordCloud(Highcharts);

    Highcharts.seriesTypes.wordcloud.prototype.deriveFontSize = function(
      relativeWeight
    ) {
      var maxFontSize = 25;
      // Will return a fontSize between 0px and 25px.
      return Math.floor(maxFontSize * relativeWeight);
    };

    // data: [{
    //     name: "Lorem",
    //     weight: 4
    // }, {
    //     name: "Ipsum",
    //     weight: 1
    // }]

    const options = {
        tooltip: {
            headerFormat: '<b>{series.name}</b><br>',
        },
        series: [
            {
              type: "wordcloud",
              data: [
                ['POSCO', 3],
                  ['POSCO건설', 1],
                  ['POSCO ICT', 4],
                  ['POSCO인터네셔널', 1],
                  ['POSCO스틸리온', 2],
                  ['POSCO A&C', 1],
                  ['POSCO인재창조원', 2],
                  ['POSCO엠텍', 2],
                  ['POSCO에너지', 1],
                  ['POSCO케미칼', 2],
            ],
            
            cursor: 'pointer',
            events: {
                click: function (event) {
                    //console.log(event);
                    console.log(event.point.name);
                  
                    if (event.point.name==="POSCO인터네셔널") {
                        window.open("https://www.poscointl.com/kor/index.do", '_blank')
                    } else if (event.point.name==="POSCO건설") {
                        window.open("https://www.poscoenc.com:446/ko/index.aspx", '_blank')
                    }  else if (event.point.name==="POSCO ICT") {
                        window.open("https://www.poscoict.com/servlet/Main?lang=kr", '_blank')
                    } else if (event.point.name==="POSCO") {
                        window.open("https://www.posco.co.kr/homepage/docs/kor6/jsp/s91a0000001i.jsp", '_blank')
                    } else if (event.point.name==="POSCO스틸리온") {
                        window.open("https://www.poscosteeleon.com/kr/main.do", '_blank')
                    } else if (event.point.name==="POSCO A&C") {
                        window.open("https://www.poscoanc.com/kr/main/index.do", '_blank')
                    } else if (event.point.name==="POSCO인재창조원") {
                        window.open("https://lp.posco.co.kr/s22d/web/kor/html/index.html", '_blank')
                    }else if (event.point.name==="POSCO엠텍") {
                        window.open("https://www.poscomtech.com/", '_blank')
                    }else if (event.point.name==="POSCO에너지") {
                        window.open("https://www.poscoenergy.com/_service/main.asp", '_blank')
                    }else if (event.point.name==="POSCO케미칼") {
                        window.open("https://www.poscochemical.com/", '_blank')
                    }
                }
            }
        },
          ],
          credits: {
            enabled: false
          }
}

  return (
      <div>
          <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}

export default WordCloud