import axios from "axios";
import Aos from "aos";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SearchWarehouse from "../Search/SearchWarehouse";
import TableWarehouse from "../Table/TableWarehouse";

function Warehouse(props) {
  let url = useSelector((state) => state.warehouseURL);
  axios.defaults.baseURL = url;

  // useEffect
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  // 맨처음에 전체리스트 불러오기
  useEffect(() => {
    axios
      .get("/")
      .then((res) => {
        setWarehouseList(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //usestate
  const [warehouseList, setWarehouseList] = useState([]);
  const [datas, setDatas] = useState({
    location: "",
    warehouse_code: "",
    purpose: "",
    warehouse_code_desc: "",
    use: "",
    maximum_weight: 0,
    maximum_count: 0,
    inventory_using: "",
    remarks: "",

  });
  //통신오는 순서로 맞춰주기
  const th = [
    "location",
    "warehouse_code",
    "purpose",
    "warehouse_code_desc",
    "use",
    "maximum_weight",
    "maximum_count",
    "inventory_using",
    "remarks",
  ];

  // function
  function search() {
    console.log(url);
  }
  return (
    <div data-aos="fade-up" className="">
      <div className="w-full mx-auto my-10">
        <div className="font-bold text-2xl text-center my-10">창고 조회</div>
        {/* Search */}
        <div className="mt-5 md:mt-0 md:col-span-2">
          <SearchWarehouse
            setDatas={setDatas}
            datas={datas}
            search={search}
          />
        </div>
        {/* table */}
        <div className="mx-1 mt-2 text-center w-full">
          <TableWarehouse warehouseList={warehouseList} datas={datas} th={th} />
        </div>
      </div>
    </div>
  );
}

export default Warehouse;
