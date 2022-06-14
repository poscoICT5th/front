import axios from "axios";
import Aos from "aos";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SearchWarehouse from "../Search/SearchWarehouse";
import TableList from "../Table/TableList";

function Warehouse(props) {
  let warehouseURL = useSelector((state) => state.warehouseURL);
  axios.defaults.baseURL = warehouseURL;
  let createWarehouseSuc = useSelector((state) => state.createWarehouseSuc);

  // useEffect
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  // 창고전체조회(처음에)
  useEffect(() => {
    axios
      .get("/")
      .then((res) => {
        setWarehouseList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // 창고 조건검색
  const [clickSearch, setClickSearch] = useState(false)
  useEffect(() => {
    if (clickSearch || createWarehouseSuc) {
      axios.get("/search", { params: datas }).then((res) => {
        setWarehouseList(res.data);
        setClickSearch(false);
      });
    }
  }, [clickSearch, createWarehouseSuc])

  //usestate
  const [warehouseList, setWarehouseList] = useState([]);
  const [clickDelete, setClickDelete] = useState(false)
  const [datas, setDatas] = useState({
    location: "전체보기",
    warehouse_code: "전체보기",
    purpose: "전체보기",
    warehouse_code_desc: "전체보기",
    use: "전체보기",
    maximum_weight: 0,
    maximum_count: 0,
    inventory_using: "전체보기",
    remarks: "전체보기",
  });

  const th = [
    { "location": 100 },
    { "warehouse_code": 100 },
    { "purpose": 180 },
    { "warehouse_code_desc": 180 },
    { "use": 100 },
    { "maximum_weight": 100 },
    { "maximum_count": 100 },
    { "inventory_using": 100 },
    { "remarks": 100 },
  ]

  return (
    <div data-aos="fade-up" className="">
      <div className="w-full mx-auto my-10">
        <div className="font-bold text-2xl text-center my-3">창고 조회</div>
        {/* Search */}
        <div className="mt-5 md:mt-0 md:col-span-2">
          <SearchWarehouse
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
            title={"warehouse"}
            part=""
            axiosURL={warehouseURL}
            th={th}
            dataList={warehouseList}
            datas={datas}
            clickDelete={clickDelete}
            deleteBodyName="warehouseDeleteList"
            setClickDelete={setClickDelete}
          />
        </div>
      </div>
    </div>
  );
}

export default Warehouse;
