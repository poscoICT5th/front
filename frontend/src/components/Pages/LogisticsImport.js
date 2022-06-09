import Aos from 'aos';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import SearchLogisticsImport from '../Search/SearchLogisticsImport';
import TableList from '../Table/TableList';
import TableLogisticsImport from '../Table/TableLogisticsImport';


function LogisticsImport() {
  let logisticsImportURL = useSelector((state) => state.logisticsImportURL)
  // useEffect
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  useEffect(() => {
    axios.defaults.baseURL = logisticsImportURL
    axios.get('/import')
      .then((res) => { setLogisticsImportList(res.data); console.log(res) })
  }, [])

  const [click, setClick] = useState(false)
  const [logisticsImportList, setLogisticsImportList] = useState([])
  const [datas, setDatas] = useState({
    status: "전체보기",
    location: "전체보기",
    product_family: "전체보기",
    lot_no: "전체보기",
    item_no: "전체보기",
    item_name: "전체보기",
    to_warehouse: "전체보기",
    unit: "전체보기",
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
    customer: "전체보기",
    industry_family: "전체보기",
    order_date: "전체보기",
    inst_reg_date: "전체보기",
    inst_deadline: "전체보기",
    done_date: "전체보기",
  })
  const th = [
    { "status": 100 },
    { "industry_family": 180 },
    { "location": 100 },
    { "instruction_no": 180 },
    { "product_family": 150 },
    { "lot_no": 180 },
    { "item_no": 100 },
    { "item_name": 300 },
    { "amount": 100 },
    { "weight": 100 },
    { "unit": 100 },
    { "customer": 100 },
    { "width": 100 },
    { "thickness": 100 },
    { "height": 100 },
    { "order_amount": 150 },
    { "im_amount": 120 },
    { "to_warehouse": 125 },
    { "order_date": 200 },
    { "inst_reg_date": 200 },
    { "inst_deadline": 200 },
    { "done_date": 200 },
  ]
  const [deleteDatas, setdeleteDatas] = useState("")
  // function
  // 입고 조건검색
  function search() {
    axios.get('/search', {
      params: datas
    })
      .then((res) => { setLogisticsImportList(res.data); console.log(datas) })
      .catch((err) => { console.log(datas) })
  }
  // 입고 전체조회
  function searchAll() {
    axios.get('/import')
      .then((res) => { setLogisticsImportList(res.data) })
    // .catch((err) => { alert(datas) })
  }
  // 입고요청 삭제
  function deleteRequests(ins_no) {
    axios.delete(`/import/${ins_no}`)
      .then((res) => { alert(res.status) })
  }

  return (
    <div data-aos="fade-up" className="">
      <div className="w-full mx-auto mb-10">
        <div className="font-bold text-2xl text-center my-3">입고 조회</div>
        {/* Search */}
        <div className="mt-5 md:mt-0 md:col-span-2">
          <SearchLogisticsImport setDatas={setDatas} datas={datas} search={search} searchAll={searchAll} />
        </div>

        {/* table */}
        <div className="mx-1 mt-2 text-center w-full">
          {/* <TableLogisticsImport logisticsImportList={logisticsImportList} datas={datas} setdeleteDatas={setdeleteDatas} deleteRequests={deleteRequests} click={click} setClick={setClick} /> */}
          <TableList dataList={logisticsImportList} datas={datas} setdeleteDatas={setdeleteDatas} deleteRequests={deleteRequests} th={th} />
        </div>
      </div>
    </div>
  )
}

export default LogisticsImport