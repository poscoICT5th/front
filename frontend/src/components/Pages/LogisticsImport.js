import Aos from 'aos';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import SearchLogisticsImport from '../Search/SearchLogisticsImport';
import TableLogisticsImport from '../Table/TableLogisticsImport';

function LogisticsImport() {
  let url = useSelector((state) => state.logisticsImportURL)
  axios.defaults.baseURL = url
  // useEffect
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  useEffect(() => {
    searchAll()
  }, [])

  // usestate
  const [logisticsImportList, setLogisticsImportList] = useState([])
  const [datas, setDatas] = useState({
    status: "",
    location: "",
    product_family: "",
    lot_no: "",
    item_no: "",
    item_name: "",
    to_warehouse: "",
    unit: "",
    min_weight: 0,
    max_weight: 10000000,
    min_thickness: 0,
    max_thickness: 10000000,
    min_height: 0,
    max_height: 10000000,
    min_order_amount: 0,
    max_order_amount: 10000000,
    min_im_amount: 0,
    max_im_amount: 10000000,
    min_width: 0,
    max_width: 10000000,
    target: "",
    order_date: "",
    inst_reg_date_Date: "",
    inst_deadline: "",
    done_date: "",
  })
  const th = [
    "status",
    "location",
    "instruction_no",
    "product_family",
    "lot_no",
    "item_no",
    "item_name",
    "amount",
    "weight",
    "unit",
    "target",
    "width",
    "thickness",
    "height",
    "order_amount",
    "im_amount",
    "to_warehouse",
    "order_date",
    "inst_reg_date",
    "inst_deadline",
    "done_date",
  ]
  // function
  // 입고 조건검색
  function search() {
    axios.get('/search', {
      params: datas
    })
      .then((res) => { setLogisticsImportList(res.data); console.log(res) })
      .catch((err) => { console.log(datas, url) })
  }
  // 입고 전체조회
  function searchAll() {
    axios.get('/import')
      .then((res) => { setLogisticsImportList(res.data) })
    // .catch((err) => { alert(datas) })
  }
  return (
    <div data-aos="fade-up" className="">
      <div className="w-full mx-auto my-10">
        <div className="font-bold text-2xl text-center my-10">입고 조회</div>
        {/* Search */}
        <div className="mt-5 md:mt-0 md:col-span-2">
          <SearchLogisticsImport setDatas={setDatas} datas={datas} search={search} searchAll={searchAll} />
        </div>
        {/* table */}
        <div className="mx-1 mt-2 text-center w-full">
          <TableLogisticsImport logisticsImportList={logisticsImportList} datas={datas} th={th} />
        </div>
      </div>
    </div>
  )
}

export default LogisticsImport