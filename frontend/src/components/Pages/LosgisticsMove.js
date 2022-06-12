import axios from "axios";
import Aos from "aos";
import React, { useEffect, useState } from "react";
import SearchLogisticsMove from "../Search/SearchLogisticsMove";
import { useSelector } from "react-redux";
import TableList from "../Table/TableList";

function LosgisticsMove() {
  // axios url
  let logisticsMoveURL = useSelector((state) => state.logisticsMoveURL)
  axios.defaults.baseURL = logisticsMoveURL
  let createMoveSuc = useSelector((state) => state.createMoveSuc)

  // useEffect
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  // 창고이동 전체조회
  const [click, setClick] = useState(false)
  useEffect(() => {
    axios.get('/move')
      .then((res) => { setLogisticsMoveList(res.data); console.log(res.data) })
      .catch((err) => { })
  }, [])

  // 창고조건조회
  const [clickSearch, setClickSearch] = useState(false)
  useEffect(() => {
    if (clickSearch) {
      axios.get('/search', {
        params: datas
      })
        .then((res) => { setLogisticsMoveList(res.data); setClickSearch(false) })
        .catch((err) => { console.log(datas) })
    }
  }, [clickSearch, createMoveSuc])

  // usestate
  const [logisticsMoveList, setLogisticsMoveList] = useState([])
  const [clickDelete, setClickDelete] = useState(false)
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
  const th = [
    { "status": 100 },
    { "location": 100 },
    { "instruction_no": 180 },
    { "lot_no": 180 },
    { "item_no": 100 },
    { "item_name": 100 },
    { "width": 100 },
    { "weight": 100 },
    { "thickness": 100 },
    { "height": 100 },
    { "move_amount": 150 },
    { "from_warehouse": 125 },
    { "to_warehouse": 110 },
    { "inst_reg_date": 150 },
    { "inst_deadline": 150 },
    { "done_date": 200 },
  ]
  // function deleteRequest(ins_no) {
  //   axios.delete(`/move/${ins_no}`)
  //     .then((res) => { alert(res.status) })
  // }
  return (
    <div data-aos="fade-up" className="">
      <div className="w-full mx-auto my-10">
        <div className="font-bold text-2xl text-center my-3">창고이동 조회</div>
        < div className="mt-5 md:mt-0 md:col-span-2" >
          <SearchLogisticsMove
            setDatas={setDatas}
            datas={datas}
            setClickSearch={setClickSearch}
            clickSearch={clickSearch}
            setClickDelete={setClickDelete}
            clickDelete={clickDelete} />
        </div >
        {/* table */}
        <div className="mx-1 mt-2 text-center w-full">
          <TableList
            title={"logistics"}
            part="move"
            axiosURL={logisticsMoveURL}
            th={th}
            dataList={logisticsMoveList}
            datas={datas}
            clickDelete={clickDelete}
            deleteBodyName="logiMoveDeleteList"
          />
        </div>
      </div>
    </div>
  );
}

export default LosgisticsMove;
