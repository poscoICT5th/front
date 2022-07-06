import React from "react";
import Highcharts from "highcharts";
import wordCloud from "highcharts/modules/wordcloud.js";
import HighchartsReact from "highcharts-react-official";

function WordCloud() {
    wordCloud(Highcharts);

    Highcharts.seriesTypes.wordcloud.prototype.deriveFontSize = function (
        relativeWeight
    ) {
        var maxFontSize = 25;
        // Will return a fontSize between 0px and 25px.
        return Math.floor(maxFontSize * relativeWeight);
    };
    const options = {
        tooltip: {
            headerFormat: '<b>{series.name}</b><br>',
        },
        chart: {
            backgroundColor: {},
            color: {},
        },
        series: [
            {
                type: "wordcloud",
                data: [
                    ['POSCO', 5],
                    ['POSCO건설', 3],
                    ['POSCO ICT', 4],
                    ['POSCO인터네셔널', 3],
                    ['POSCO스틸리온', 3],
                    ['POSCO A&C', 3],
                    ['POSCO인재창조원', 3],
                    ['POSCO엠텍', 3],
                    ['POSCO에너지', 3],
                    ['POSCO케미칼', 3],
                    ['포항에스알디씨', 1],
                    ['포스코알텍', 1],
                    ['포항에스알디씨', 1],
                    ['에스피에이치', 1],
                    ['피엠씨텍', 1],
                    ['포스코터미날', 1],
                    ['포스코휴먼스', 1],
                    ['부산이앤이', 1],
                    ['한국퓨얼셀', 1],
                    ['우이신설경전철', 1],
                    ['탄천이앤이', 1],
                    ['삼척블루파워', 1],
                    ['포항특수용접봉', 1],
                    ['게일인터내셔널코리아', 1],
                    ['송도개발피엠씨', 1],
                    ['피앤오케미칼', 1],
                    ['송도캐발피엠씨', 1],
                  
                ],

                cursor: 'pointer',
                events: {
                    click: function (event) {
                        //console.log(event);
                        console.log(event.point.name);
                        if (event.point.name === "POSCO인터네셔널") {
                            window.open("https://www.poscointl.com/kor/index.do", '_blank')
                        } else if (event.point.name === "POSCO건설") {
                            window.open("https://www.poscoenc.com:446/ko/index.aspx", '_blank')
                        } else if (event.point.name === "POSCO ICT") {
                            window.open("https://www.poscoict.com/servlet/Main?lang=kr", '_blank')
                        } else if (event.point.name === "POSCO") {
                            window.open("https://www.posco.co.kr/homepage/docs/kor6/jsp/s91a0000001i.jsp", '_blank')
                        } else if (event.point.name === "POSCO스틸리온") {
                            window.open("https://www.poscosteeleon.com/kr/main.do", '_blank')
                        } else if (event.point.name === "POSCO A&C") {
                            window.open("https://www.poscoanc.com/kr/main/index.do", '_blank')
                        } else if (event.point.name === "POSCO인재창조원") {
                            window.open("https://lp.posco.co.kr/s22d/web/kor/html/index.html", '_blank')
                        } else if (event.point.name === "POSCO엠텍") {
                            window.open("https://www.poscomtech.com/", '_blank')
                        } else if (event.point.name === "POSCO에너지") {
                            window.open("https://www.poscoenergy.com/_service/main.asp", '_blank')
                        } else if (event.point.name === "POSCO케미칼") {
                            window.open("https://www.poscochemical.com/", '_blank')
                        }
                    }
                }
            },
        ],
        title: {
            text: "",
        },
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