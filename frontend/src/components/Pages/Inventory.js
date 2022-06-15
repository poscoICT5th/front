import Aos from "aos";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SearchInventory from "../Search/SearchInventory";
import TableList from "../Table/TableList";

function Inventory() {
  let inventoryURL = useSelector((state) => state.inventoryURL);
  let createInventorySuc = useSelector((state) => state.createWarehouseSuc);
  //useEffect
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  //재고전체조회(처음에)
  useEffect(() => {
    axios.defaults.baseURL = inventoryURL;
    axios
      .get("/")
      .then((res) => {
        setInventoryList(res.data);
      })
      .catch((err) => {});
  }, []);
  
  //재고 조건검색
  const [clickSearch, setClickSearch] = useState(false);
  useEffect(() => {
    axios.defaults.baseURL = inventoryURL;
    if (clickSearch) {
      axios.get("/search", { params: datas }).then((res) => {
        setInventoryList(res.data);
        setClickSearch(false);
        console.log(res.data);
      });
    }
  }, [clickSearch, createInventorySuc]);

  //usestate
  const [clickDelete, setClickDelete] = useState(false);
  const [inventoryList, setInventoryList] = useState([]);
  const [datas, setDatas] = useState({
    industry_family: "전체보기",
    customer: "전체보기",
    stock_type: "전체보기",
    stock_quality_status: "전체보기",
    status_cause: "전체보기",
    stock_place: "전체보기",
    product_family: "전체보기",
    warehouse_code: "전체보기",
    lot_no: "전체보기",
    item_num: "전체보기",
    item_name: "전체보기",
    unit: "전체보기",
    inventory_date: "전체보기",
    warehouse_date: "전체보기",
    min_weight: 0,
    max_weight: 10000000,
    min_thickness: 0,
    max_thickness: 10000000,
    min_height: 0,
    max_height: 10000000,
    min_amount: 0,
    max_amount: 10000000,
    min_width: 0,
    max_width: 10000000,
  });

  const th = [
    { industry_family: 120 },
    { stock_type: 100 },
    { stock_quality_status: 180 },
    { status_cause: 180 },
    { location: 100 },
    { product_family: 120 },
    { warehouse_code: 130 },
    { lot_no: 160 },
    { item_no: 100 },
    { item_desc: 500 },
    { item_name: 430 },
    { amount: 100 },
    { unit: 100 },
    { customer: 130 },
    { fixed_month: 100 },
    { width: 100 },
    { thickness: 100 },
    { height: 100 },
    { inventory_date: 200 },
    { warehouse_date: 200 },
    { warehouse_aging: 160 },
  ];

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
            title={"inventory"}
            part=""
            axiosURL={inventoryURL}
            th={th}
            dataList={inventoryList}
            datas={datas}
            clickDelete={clickDelete}
            deleteBodyName="inventoryDeleteList"
            setClickDelete={setClickDelete}
          />
        </div>
      </div>
    </div>
  );
}

export default Inventory;
