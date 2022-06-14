import Aos from 'aos';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import SearchLogisticsImport from '../Search/SearchLogisticsImport';
import TableList from '../Table/TableList';


function LogisticsImport() {
  let logisticsImportURL = useSelector((state) => state.logisticsImportURL)
  let createImportSuc = useSelector((state) => state.createImportSuc)
  axios.defaults.baseURL = logisticsImportURL
  // useEffect
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  // 전체조회
  useEffect(() => {
    axios.get('/import')
      .then((res) => { setLogisticsImportList(res.data); })
  }, [])

  // 입고 조건검색
  const [clickSearch, setClickSearch] = useState(false)
  useEffect(() => {
    if (clickSearch || createImportSuc) {
      axios.get('/search', {
        params: datas
      })
        .then((res) => { setLogisticsImportList(res.data); setClickSearch(false) })
        .catch((err) => { console.log(datas) })
    }
  }, [clickSearch, createImportSuc])

  // useState
  const [logisticsImportList, setLogisticsImportList] = useState([])
  const [clickDelete, setClickDelete] = useState(false)
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


  return (
    <div data-aos="fade-up" className="">
      <div className="w-full mx-auto mb-10">
        <div className="font-bold text-2xl text-center my-3">입고 조회</div>
        {/* Search */}
        <div className="mt-5 md:mt-0 md:col-span-2">
          <SearchLogisticsImport
            setDatas={setDatas}
            datas={datas}
            setClickSearch={setClickSearch}
            clickSearch={clickSearch}
            setClickDelete={setClickDelete}
            clickDelete={clickDelete} />
        </div>

        {/* table */}
        <div className="mx-1 mt-2 text-center w-full">
          <TableList
            title={"logistics"}
            part="import"
            axiosURL={logisticsImportURL}
            th={th}
            dataList={logisticsImportList}
            datas={datas}
            clickDelete={clickDelete}
            deleteBodyName="logiImportDeleteList"
            setClickDelete={setClickDelete}
          />
        </div>
      </div>
    </div>
  )
}

export default LogisticsImport