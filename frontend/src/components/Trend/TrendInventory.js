import React from "react";
import ChartLine from "../Map/ChartLine";
import ChartLine1 from "../Map/ChartLine1";
import ChartLine2 from "../Map/ChartLine2";

function TrendInventory() {
    //판매량을 보여주고
    // 재고 회전율은 완제품만 하는걸로 
  //제품군으로 하고
  // 완제품만 하고 
  //제품군만 10개 
  //
  return (
    <div>
      <div className="font-bold text-2xl text-center my-3">Inventory Trend</div>
      <div className="font-bold text-2xl text-center my-3 bg-stone-100 rounded-lg">
        Inventory Data Analysis - Inventory turnover
      </div>
      <div className="grid grid-cols-4 grid-rows-3 gap-5 bg-stone-100 rounded-lg mb-10">
        <div className="mx-auto">비고</div>
        <div className="mx-auto">반제품-재고회전율</div>
              <div className="mx-auto">완제품-재고회전율</div>
              
        <div className="mx-auto">불량품-재고회전율</div>
        <div className="mx-auto">월간</div>
        <div className="mx-auto">77%</div>
        <div className="mx-auto">82%</div>
        <div className="mx-auto">90%</div>
        <div className="mx-auto">주간</div>
        <div className="mx-auto">88%</div>
        <div className="mx-auto">94%</div>
        <div className="mx-auto">60%</div>
      </div>

      <div className="grid grid-cols-1 grid-rows-3 gap-3 bg-stone-100 rounded-lg">
        <div><ChartLine /></div>
        <div><ChartLine1 /></div>
        <div><ChartLine2 /></div>
      </div>
    </div>
  );
}

export default TrendInventory;
