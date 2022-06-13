import React, { useEffect, useState } from "react";
import Aos from "aos";
import moment from "moment";
import ChartGauge from "../Map/ChartGauge";
import DatePicker from "sassy-datepicker";
import ChartPie from "../Map/ChartPie";
import DashboardHeader from '../Dashboard/DashboardHeader';
import ChartBar1 from "../Map/ChartBar1";
import ChartBar2 from "../Map/ChartBar2";
import ChartLine from "../Map/ChartLine";
import ChartColumn from "../Map/ChartColumn";
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

  return (
    <section data-aos="fade-up" className="">
      <div className="grid grid-cols-4 gap-4">  {/*먼저 세로 4칸 만들어주고 */}
        <div className="col-span-3 grid grid-cols-3 grid-rows-4 gap-10 drop-shadow-xl"> {/*세로 3줄 가로 4줄로 만듬*/}

          <div className="grid grid-cols-2 drop-shadow-md">
            <div>

            </div>
            <div>

            </div>
          </div>
          <div className="col-span-2 drop-shadow-xl">
            <ChartPie />
          </div>
          {/*   <div className="mx-auto drop-shadow-xl ">
            <DatePicker className="" onChange={selectDate} />
          </div> */}



          {/*2번째 줄*/}
          <div className="col-span-2 drop-shadow-md rounded ">   {/*가로 2칸 차지하기*/}
            <ChartBar1 />
          </div>
          <div> </div>
          {/*3번째 줄*/}
          <div> <ChartBar2 /></div>
          <div className="col-span-2"> <ChartLine /></div>
          {/*4번째 줄*/}
          <div>
            <ChartColumn />
          </div>

        </div>







        <div className="grid grid-rows-4 gap-10 ">
          {/*옆에 카드 3개, 가로 3줄*/}
          <div><DashboardHeader />
          </div>
          <div><DashboardHeader /></div>
          <div><DashboardHeader /></div>
        </div>




      </div>
    </section>
  );
}

export default Dashboard