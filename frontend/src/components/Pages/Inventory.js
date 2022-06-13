import Aos from 'aos';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import SearchInventory from "../Search/SearchInventory";
import TableInventory from "../Table/TableInventory";
import TableList from '../Table/TableList';

function Inventory() {
  let url = useSelector((state) => state.inventoryURL)
  axios.defaults.baseURL = url
  let createInventorySuc = useSelector((state) => state.createWarehouseSuc);
  //useEffect
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  //재고전체조회(처음에)
  //const [click, setClick] = useState(false)
  useEffect(() => {
    axios
      .get("/")
      .then((res) => {
        setInventoryList(res.data);
      })
      .catch((err) => {
      });
  }, []);
//재고 조건검색
const [clickSearch, setClickSearch] = useState(false)
useEffect(() => {
  if (clickSearch) {
    axios.get("/search", { params: datas }).then((res) => {
      setInventoryList(res.data);
      setClickSearch(false);
    });
  }
}, [clickSearch, createInventorySuc])
  
  //usestate
  const [clickDelete, setClickDelete] = useState(false)
  const [inventoryList, setInventoryList] = useState([]);
  const [datas, setDatas] = useState({
    industry_family: "전체보기",
    target: "전체보기",
    stock_type: "전체보기",
    stock_quality_status: "전체보기",
    status_cause: "전체보기",
    stock_place: "전체보기",
    product_family: "전체보기",
    warehouse_code: "전체보기",
    lot_no: "전체보기",
    item_num: "전체보기",
    item_desc: "전체보기",
    item_name: "전체보기",
    amount: "전체보기",
    weight: "전체보기",
    unit: "전체보기",
    customer: "전체보기",
    width: "전체보기",
    thickness: "전체보기",
    height: "전체보기",
    inventory_date: "전체보기",
    warehouse_date: "전체보기",
    warehouse_aging: "전체보기",
  });

  const th = [
    { "industry_family": 120 },
    { "stock_type": 100 },
    { "stock_quality_status": 180 },
    { "status_cause": 180 },
    { "location": 100 },
    { "product_family": 120 },
    { "warehouse_code": 130 },
    { "lot_no": 160 },
    { "item_num": 100 },
    { "item_desc": 500 },
    { "item_name": 430 },
    { "amount": 100 },
    { "unit": 100 },
    { "customer": 130 },
    { "fixed_month": 100 },
    { "width": 100 },
    { "thickness": 100 },
    { "height": 100 },
    { "inventory_date": 200 },
    { "warehouse_date": 200 },
    { "warehouse_aging": 160 },
  ]
  // 입고요청 삭제(여러개)
  function deleteInventory(lot_no) {
    axios.delete(`/${lot_no}`)
      .then((res) => { alert(res.status) })
  }
  useEffect(() => {
    // 재고
    // axios.post('/import', {
    //   status: "value"
    // })
    // .then((res) => {  })
    // .catch((err) => {  })
  }, [])



  return (
    <div data-aos="fade-up" className="">
      <div className="w-full mx-auto my-10">
        <div className="font-bold text-2xl text-center my-3">재고 조회</div>
        {/* Search */}
        <div className="mt-5 md:mt-0 md:col-span-2">
          <SearchInventory
            setDatas={setDatas}
            datas={datas}
            setClickSearch={setClickSearch}
            clickSearch={clickSearch}
            setClickDelete={setClickDelete}
            clickDelete={clickDelete}
          />
        </div>
        {/* table */}
        <div className="mx-1 mt-2 text-center w-full">
          <TableList
             axiosURL={url}
            dataList={inventoryList}
            datas={datas}
            deleteInventory={deleteInventory}
            th={th}
            title={"inventory"}
          />
        </div>
      </div>
    </div>
  );
}

export default Inventory