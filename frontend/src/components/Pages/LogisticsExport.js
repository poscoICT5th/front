import axios from 'axios';
import Aos from 'aos';
import React, { useEffect, useState } from 'react'
import CancelRequest from '../Functions/CancelRequest';
import SearchLogisticsExport from '../Search/SearchLogisticsExport';
import TableLogisticsExport from '../Table/TableLogisticsExport';
import { useSelector } from 'react-redux';

function LogisticsExport() {
  let url = useSelector((state) => state.logisticsExportURL)
  axios.defaults.baseURL = url
  // useEffect
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const [click, setClick] = useState(false)
  useEffect(() => {
    axios.get("/export", {})
      .then((res) => { setLogisticsExportList(res.data) })
  }, [])

  // usestate
  const [logisticsExportList, setLogisticsExportList] = useState([])

  const [datas, setDatas] = useState({
    status: "",
    location: "",
    product_family: "",
    lot_no: "",
    item_no: "",
    item_name: "",
    from_warehouse: "",
    unit: "",
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
    target: "",
    order_date: "",
    inst_reg_date: "",
    inst_deadline: "",
    done_date: "",
  })

  const th = [
    "status",
    "location",
    "instruction_no",
    "target",
    "lot_no",
    "item_no",
    "item_name",
    "width",
    "weight",
    "thickness",
    "height",
    "order_amount",
    "ex_amount",
    "ex_remain",
    "order_date",
    "inst_reg_date",
    "inst_deadline",
    "done_date",
  ]

  // function
  // 출고 조건검색
  function search(params) {
    axios.get('/search', {
      params: datas
    })
      .then((res) => { setLogisticsExportList(res.data); })
      .catch((err) => { })
  }
  function deleteRequests(ins_no) {
    axios.delete(`/export/${ins_no}`)
      .then((res) => { alert(res.status) })
  }
  return (
    <div data-aos="fade-up" className="">
      <div className="w-full mx-auto my-10">
        <div className="font-bold text-2xl text-center my-10">출고 조회</div>
        {/* Search */}
        <div className="mt-5 md:mt-0 md:col-span-2">
          <SearchLogisticsExport datas={datas} setDatas={setDatas} search={search} />
        </div>
        {/* table */}
        <div className="mx-1 mt-2 text-center w-full">
          <TableLogisticsExport logisticsExportList={logisticsExportList} datas={datas} th={th} setClick={setClick} click={click} deleteRequests={deleteRequests} />
        </div>
      </div>
    </div>
  )
}

export default LogisticsExport