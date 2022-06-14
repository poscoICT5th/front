import axios from 'axios';
import Aos from 'aos';
import React, { useEffect, useState } from 'react'
import SearchLogisticsExport from '../Search/SearchLogisticsExport';
import { useSelector } from 'react-redux';
import TableList from '../Table/TableList';

function LogisticsExport() {
  let logisticsExportURL = useSelector((state) => state.logisticsExportURL)
  let createExportSuc = useSelector((state) => state.createExportSuc)
  axios.defaults.baseURL = logisticsExportURL
  // useEffect
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  // 전체조회
  useEffect(() => {
    axios.get("/export", {})
      .then((res) => { setLogisticsExportList(res.data) })
  }, [])

  // 출고조건검색
  const [clickSearch, setClickSearch] = useState(false)
  useEffect(() => {
    if (clickSearch || createExportSuc) {
      console.log(datas)
      axios.get('/search', {
        params: datas
      })
        .then((res) => { setLogisticsExportList(res.data); setClickSearch(false) })
        .catch((err) => { console.log(datas); setClickSearch(false) })
    }
  }, [clickSearch, createExportSuc])


  // usestate
  const [logisticsExportList, setLogisticsExportList] = useState([])
  const [clickDelete, setClickDelete] = useState(false)
  const [datas, setDatas] = useState({
    status: "전체보기",
    location: "전체보기",
    product_family: "전체보기",
    lot_no: "전체보기",
    item_no: "전체보기",
    item_name: "전체보기",
    from_warehouse: "전체보기",
    unit: "전체보기",
    min_weight: 0,
    max_weight: 10000000,
    min_thickness: 0,
    max_thickness: 10000000,
    min_height: 0,
    max_height: 10000000,
    min_order_amount: 0,
    max_order_amount: 10000000,
    min_ex_amount: 0,
    max_ex_amount: 10000000,
    min_width: 0,
    max_width: 10000000,
    target: "전체보기",
    order_date: "전체보기",
    inst_reg_date: "전체보기",
    inst_deadline: "전체보기",
    done_date: "전체보기",
  })

  const th = [
    { "status": 100 },
    { "location": 100 },
    { "instruction_no": 180 },
    { "customer": 150 },
    { "lot_no": 180 },
    { "item_no": 100 },
    { "item_name": 100 },
    { "width": 100 },
    { "weight": 100 },
    { "thickness": 100 },
    { "height": 100 },
    { "order_amount": 150 },
    { "ex_amount": 120 },
    { "ex_remain": 120 },
    { "order_date": 150 },
    { "inst_reg_date": 150 },
    { "inst_deadline": 150 },
    { "done_date": 200 },
  ]

  return (
    <div data-aos="fade-up" className="">
      <div className="w-full mx-auto my-10">
        <div className="font-bold text-2xl text-center my-3">출고 조회</div>
        {/* Search */}
        <div className="mt-5 md:mt-0 md:col-span-2">
          <SearchLogisticsExport
            datas={datas}
            setDatas={setDatas}
            setClickSearch={setClickSearch}
            clickSearch={clickSearch}
            setClickDelete={setClickDelete}
            clickDelete={clickDelete}
          />
        </div>
        {/* table */}
        <div className="mx-1 mt-2 text-center w-full">
          <TableList
            title={"logistics"}
            part="export"
            axiosURL={logisticsExportURL}
            th={th}
            dataList={logisticsExportList}
            datas={datas}
            clickDelete={clickDelete}
            deleteBodyName="logiExportDeleteList"
            setClickDelete={setClickDelete}
          />
        </div>
      </div>
    </div>
  )
}

export default LogisticsExport