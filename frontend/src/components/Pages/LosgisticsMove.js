import axios from "axios";
import Aos from "aos";
import React, { useEffect, useState } from "react";

import SearchLogisticsMove from "../Search/SearchLogisticsMove";
import TableLogisticsMove from "../Table/TableLogisticsMove";
import { useSelector } from "react-redux";

function LosgisticsMove() {
  // axios url
  let url = useSelector((state) => state.logisticsMoveURL)
  axios.defaults.baseURL = url

  // useEffect
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    axios.get('/move')
      .then((res) => { setLogisticsMoveList(res.data) })
      .catch((err) => { alert(err) })
  }, [])

  // usestate
  const [logisticsMoveList, setLogisticsMoveList] = useState([])
  const [datas, setDatas] = useState({
    status: "",
    location: "",
    instruction_no: "",
    lot_no: "",
    item_no: "",
    item_name: "",
    to_warehouse: "",
    min_weight: 0,
    max_weight: 10000000,
    min_thickness: 0,
    max_thickness: 10000000,
    min_height: 0,
    max_height: 10000000,
    min_move_amount: 0,
    max_move_amount: 10000000,
    min_width: 0,
    max_width: 10000000,
    inst_reg_date_Date: "",
    inst_deadline: "",
    done_date: "",
    unit: "",
  })
  const th = [
    "status",
    "location",
    "instruction_no",
    "lot_no",
    "item_no",
    "item_name",
    "width",
    "weight",
    "thickness",
    "height",
    "move_amount",
    "from_warehouse",
    "to_warehouse",
    "inst_reg_date",
    "inst_deadline",
    "done_date",
  ]
  //function
  function search(params) {
    axios.get('/search')
      .then((res) => { setLogisticsMoveList(res.data) })
  }
  return (
    <div data-aos="fade-up" className="">
      <div className="w-full mx-auto my-10">
        <div className="font-bold text-2xl text-center my-10">창고이동 조회</div>
        < div className="mt-5 md:mt-0 md:col-span-2" >
          <SearchLogisticsMove datas={datas} setDatas={setDatas} search={search} />
        </div >
        {/* table */}
        <div className="mx-1 mt-2 text-center w-full">
          <TableLogisticsMove logisticsMoveList={logisticsMoveList} datas={datas} th={th} />
        </div>
      </div>
    </div>
  );
}

export default LosgisticsMove;
