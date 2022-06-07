import React, { useEffect, useState } from "react";
import {
  location,
  purpose,
  use,
  inventory_using,
} from "../Common/Conditions/SelectOptions";
import SearchSelect from "../Common/Conditions/SearchSelect";
import InputText from "../Common/Conditions/InputText";
import WarehouseDetail from "../Detail/WarehouseDetail";
import { useSelector } from "react-redux";
import axios from "axios";


function SearchWarehouse(props) {
  // 지역에 따라서 창고목록변경
  let url = useSelector((state) => state.warehouseURL)
  const [warehouse_codes, setWarehouse_codes] = useState(["전체보기"])
  useEffect(() => {
    axios.defaults.baseURL = url
    axios.get(`warehouse/${props.datas.location}`)
      .then((res) => {
        setWarehouse_codes(["전체보기"])
        for (let index = 0; index < res.data.length; index++) {
          setWarehouse_codes(warehouse_codes => [...warehouse_codes, res.data[index].warehouse_code])
        }
        // console.log(warehouse_codes)
      })
      .catch((err) => { console.log(err) })
  }, [props.datas.location])

  const selectDatas = [
    { name: "location", selectOption: location, grid: 1 },
    { name: "purpose", selectOption: purpose, grid: 1 },
    { name: "use", selectOption: use, grid: 1 },
    { name: "inventory_using", selectOption: inventory_using, grid: 1 },
    { name: "warehouse_code", selectOption: warehouse_codes, grid: 1 },
  ];
  const inputDatas = [
    { name: "warehouse_code_desc", type: "text" },
    { name: "maximum_weight", type: "number" },
    { name: "maximum_count", type: "number" },
  ];

  return (
    <div className="overflow-hidden sm:rounded-md">
      <div className="px-4 py-5 bg-white sm:p-6 rounded-lg">
        {/* select */}
        <div className="grid grid-cols-5 gap-4 text-center mb-5">
          {selectDatas.map((selectData) => {
            return (
              <SearchSelect
                setDatas={props.setDatas}
                datas={props.datas}
                name={selectData.name}
                selectData={selectData.selectOption}
                grid={selectData.grid}
              />
            );
          })}
        </div>
        {/* inputRange / inputText */}
        <div className="grid grid-cols-3 gap-4 text-center">
          {inputDatas.map((inputData) => {
            return (
              <InputText
                setDatas={props.setDatas}
                datas={props.datas}
                name={inputData.name}
                type={inputData.type}
              />
            );
          })}
        </div>
      </div>
      <div className="px-4 py-3 text-right">
        <button
          className="mr-1 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
          onClick={() => { }}
        >
          삭제
        </button>
        <button
          className="mr-1 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
          onClick={() => {
            props.search();
            props.setClick(!props.click);
          }}
        >
          조건조회
        </button>
        <WarehouseDetail warehouse_code={"399"} />
      </div>
    </div>
  );
}

export default SearchWarehouse;
