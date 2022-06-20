import React from "react";
import Timeline from "../Mypage/Timeline";
import { Card } from "antd";
import MyDescription from "../Mypage/MyDescription";
const { Meta } = Card;
function Mypage() {
  return (
    <div>
      <div className="grid grid-cols-4 gap-1 text-center ">
       
          {/* <img className="rounded-lg w-60 h-60"
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          /> */}
  
        <div className="col-span-3 mx-auto">
          <MyDescription />
        </div>
        {/* <div className="grid grid-cols-2 grid-rows-2 gap-4 text-center">
          <div className='col-span-3 mx-auto'><MyDescription /></div>
          <div className='col-span-2 mx-auto'>Your Dashboard</div>
     </div> */}
      </div>
    </div>
  );
}

export default Mypage;
