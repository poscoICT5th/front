import Aos from 'aos';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import SearchInventory from "../Search/SearchInventory";
import TableInventory from "../Table/TableInventory";

function Inventory() {
  let url = useSelector((state) => state.logisticsImportURL)
  axios.defaults.baseURL = url

  //useEffect
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  //
  const [click, setClick] = useState(false)
  useEffect(() => {
    axios
      .get("/")
      .then((res) => {
        setInventoryList(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [click]);
    //usestate
    const [inventoryList, setInventoryList] = useState([]);
    const [datas, setDatas] = useState({
      industry_family:"",
      target :"",
      stock_type :"",
      stock_quality_status :"",
      status_cause :"",
      stock_place :"",
      product_family :"",
      warehouse_code :"",
      lot_no : "",
      item_num :"",
      item_desc :"",
      item_name :"",
      amount : "",
      weight : "",
      unit :"",
      customer :"",
      fixed_month : "",
      width : "",
      thickness : "",
      height : "",
      inventory_date :"",
      warehouse_date :"",
      warehouse_aging :"",
    });
  //통신오는 순서로 맞춰주기
  const th = [
    "industry_family",
    "target" ,
    "stock_type" ,
    "stock_quality_status" ,
    " status_cause" ,
    "stock_place" ,
    "product_family" ,
    "warehouse_code" ,
    "lot_no" ,
    "item_num" ,
    "item_desc" ,
    "item_name" ,
    "amount" ,
    "weight ",
    "unit" ,
    "customer ",
    "fixed_month" ,
    "width" ,
    "thickness ",
    "height" ,
    "inventory_date" ,
    "warehouse_date" ,
    "warehouse_aging ",
  ];
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
    // .then((res) => { console.log(res) })
    // .catch((err) => { console.log(err) })
  }, [])
  function search() {
    console.log(url);
  }
  return (
    <div data-aos="fade-up" className="">
      <div className="w-full mx-auto my-10">
        <div className="font-bold text-2xl text-center my-10">창고 조회</div>
        {/* Search */}
        <div className="mt-5 md:mt-0 md:col-span-2">
          <SearchInventory
            setDatas={setDatas}
            datas={datas}
            search={search}
          />
        </div>
        {/* table */}
        <div className="mx-1 mt-2 text-center w-full">
<<<<<<< HEAD
          <TableInventory inventoryList={inventoryList} datas={datas} th={th} deleteInventory={deleteInventory} click={click} setClick={setClick}/>
=======
          {/* <TableInventory warehouseList={warehouseList} datas={datas} th={th} deleteInventory={deleteInventory} click={click} setClick={setClick}/> */}
>>>>>>> cho
        </div>
      </div>
    </div>
  );
}

export default Inventory