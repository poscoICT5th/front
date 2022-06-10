import React, { useEffect, useState } from "react";
import Aos from "aos";
import moment from "moment";
import ChartGauge from "../Map/ChartGauge";
import DatePicker from "sassy-datepicker";
import ChartPie from "../Map/ChartPie";

function Dashboard() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  useEffect(() => {
    var now = moment().format("YYYY-MM-DD");
  }, []);
  //달력
  function selectDate(value) {
    var selectDate = new Date(value);
  }
  //현황판 useState
  const [showDatas, setShowDatas] = useState({
    reqImport: 124,
    sucImport: 87,
    reqExport: 214,
    sucExport: 185,
    reqMove: 1452,
    sucMove: 1227,
  });
  //입고 재고 현황판
  const [cards, setCards] = useState([
    {
      subTitle1: "입고예정",
      subTitle2: "입고처리완료",
      req: showDatas.reqImport,
      suc: showDatas.sucImport,
      navigate: "LogisticsImport",
    },
    {
      subTitle1: "출고대기",
      subTitle2: "출고완료",
      req: showDatas.reqExport,
      suc: showDatas.sucExport,
      navigate: "LogisticsExport",
    },
    {
      subTitle1: "창고이동대기",
      subTitle2: "창고이동완료",
      req: showDatas.reqMove,
      suc: showDatas.sucMove,
      navigate: "LogisticsMove",
    },
  ]);
  {
    /*
     <div className="rows-span-2 mx-auto">
            <div> <ChartGauge /></div>
         <div>22222</div>
          </div>
*/
  }
  return (
    <section data-aos="fade-up" className="">
      <div className="grid grid-cols-4 gap-4">  {/*먼저 세로 4칸 만들어주고 */}
        <div className="col-span-3 grid grid-cols-3"> {/*세로 3줄*/}
          <div>
            <ChartPie />
          </div>
          <div className="grid grid-cols-2">
            <div>
            <ChartGauge />
            </div>
            <div>
            <ChartGauge />
            </div>
          </div>

          <div>
            <DatePicker className="" onChange={selectDate} />
          </div>
          
          <div>뭐넣지</div>
          <div>흠</div>
          <div>고민중...</div>

        </div>


        




        <div className="grid grid-rows-3">
          {/*가로 3줄*/}
          <div>카드
          </div>
          <div>카드</div>
          <div>카드</div>
        </div>




      </div>
    </section>
  );
}

export default Dashboard;
