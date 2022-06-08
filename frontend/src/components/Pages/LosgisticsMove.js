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
    Aos.init({ duration: 1000 });
  }, []);
  const [click, setClick] = useState(false)
  useEffect(() => {
    axios.get('/move')
      .then((res) => { setLogisticsMoveList(res.data) })
      .catch((err) => { console.log(err) })
  }, [click])

  // usestate
  const [logisticsMoveList, setLogisticsMoveList] = useState([])
  const [datas, setDatas] = useState({
    status: "전체보기",
    location: "전체보기",
    instruction_no: "전체보기",
    lot_no: "전체보기",
    item_no: "전체보기",
    item_name: "전체보기",
    to_warehouse: "전체보기",
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
    inst_reg_date_Date: "전체보기",
    inst_deadline: "전체보기",
    done_date: "전체보기",
    unit: "전체보기",
  })
  // const th = [
  //   "status",
  //   "location",
  //   "instruction_no",
  //   "lot_no",
  //   "item_no",
  //   "item_name",
  //   "width",
  //   "weight",
  //   "thickness",
  //   "height",
  //   "move_amount",
  //   "from_warehouse",
  //   "to_warehouse",
  //   "inst_reg_date",
  //   "inst_deadline",
  //   "done_date",
  // ]
  //function
  function search(params) {
    axios.get('/search', { params: datas })
      .then((res) => { setLogisticsMoveList(res.data) })
      .catch((err) => { console.log(datas) })
  }
  function deleteRequest(ins_no) {
    axios.delete(`/move/${ins_no}`)
      .then((res) => { alert(res.status) })
  }
  return (
    <div data-aos="fade-up" className="">
      <div className="w-full mx-auto my-10">
        <div className="font-bold text-2xl text-center my-3">창고이동 조회</div>
        < div className="mt-5 md:mt-0 md:col-span-2" >
          <SearchLogisticsMove datas={datas} setDatas={setDatas} search={search} />
        </div >
        {/* table */}
        <div className="mx-1 mt-2 text-center w-full">
          <TableLogisticsMove logisticsMoveList={logisticsMoveList} datas={datas} deleteRequest={deleteRequest} click={click} setClick={setClick} />
        </div>
      </div>
    </div>
  );
}

export default LosgisticsMove;
