import React from "react";
import Timeline from "../Mypage/Timeline";
import { Card } from "antd";
import MyDescription from "../Mypage/MyDescription";
const { Meta } = Card;

function Mypage() {
  return (
    <div className="w-2/3 mx-auto">
      <div className="grid grid-cols-4 gap-1 text-center">
        <div className="mx-auto">
          <img
            className="rounded-lg w-60 h-60"
            alt="example"
            src="./Images/mypage.png"
          />
        </div>
        <div className="col-span-3 mx-auto">
          <MyDescription />
        </div>
      </div>
    </div>
  );
}

export default Mypage;
