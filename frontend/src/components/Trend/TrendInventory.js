import React from "react";
import ChartLine from "../Map/ChartLine";
function TrendInventory() {
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

      <div className="grid grid-cols-3 grid-rows-1 gap-3 bg-stone-100 rounded-lg">
        <div><ChartLine /></div>
        <div><ChartLine /></div>
        <div><ChartLine /></div>
      </div>
    </div>
  );
}

export default TrendInventory;
