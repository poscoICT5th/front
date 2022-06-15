import React, { useEffect, useState } from "react";
import {
  location,
  purpose,
  use,
  inventory_using,
} from "../Common/Conditions/SelectOptions";
import SearchSelect from "../Common/Conditions/SearchSelect";
import InputText from "../Common/Conditions/InputText";
import { useSelector } from "react-redux";
import axios from "axios";
import { Collapse } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';

function SearchWarehouse(props) {
  // 지역에 따라서 창고목록변경
  let WarehouseUrl = useSelector((state) => state.warehouseURL);
  const [warehouse_codes, setWarehouse_codes] = useState(["전체보기"])
  useEffect(() => {
    axios.defaults.baseURL = WarehouseUrl;
    axios.get(`warehouse/${props.datas.location}`)
      .then((res) => {
        setWarehouse_codes(["전체보기"])
        for (let index = 0; index < res.data.length; index++) {
          setWarehouse_codes(warehouse_codes => [
            ...warehouse_codes,
            res.data[index].warehouse_code
          ]);
        }
       })
      .catch((err) => { })
  }, [props.datas.location])

  const selectDatas = [
    { name: "location", selectOption: location, grid: 1 },
    { name: "purpose", selectOption: purpose, grid: 1 },
    { name: "use", selectOption: use, grid: 1 },
    { name: "inventory_using", selectOption: inventory_using, grid: 1 },
    { name: "warehouse_code", selectOption: warehouse_codes, grid: 1 },
  ];
  const inputDatas = [ //창고에서만 맥시멈을 쓴다. 
    { name: "warehouse_code_desc", type: "text", purpose: "search" },
    { name: "min_maximum_weight", type: "text", purpose: "search" },
    { name: "maximum_weight", type: "number", purpose: "search" },
    { name: "min_maximum_count", type: "number", purpose: "search" },
    { name: "maximum_count", type: "number", purpose: "search" },
  ];
  const { Panel } = Collapse;
  return (
    <div className="overflow-hidden sm:rounded-md">
      <div className="px-4 py-5 sm:p-6 rounded-lg">
        {/* select */}
        <div className="grid grid-cols-7 gap-4 text-center">
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
          })} {/*
          {inputDatas.map((inputData) => {
            return (
              <InputText
                setDatas={props.setDatas}
                datas={props.datas}
                name={inputData.name}
                type={inputData.type}
              />
            );
          })} */}
          <button
            className="mt-5 inline-flex justify-center py-1 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
            onClick={() => { props.setClickDelete(true) }}
          >
            삭제
          </button>
          <button
            className="mt-5 inline-flex justify-center py-1 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-sky-500 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
            onClick={() => {
              props.setClickSearch(true)
            }}
          >
            조건조회
          </button>
        </div>
        <Collapse
                    bordered={false}
                    defaultActiveKey={[]}
                    expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                    className="site-collapse-custom-collapse"
                >
                    <Panel header="상세검색" key="1" className="site-collapse-custom-panel bg-white">
                        {/* inputRange */}
                        {/* <div className="grid grid-cols-6 gap-4 text-center">
                            {inputRangeDatas.map((inputRangeData) => {
                                return <InputRange setDatas={props.setDatas} datas={props.datas} name={inputRangeData.name} min={inputRangeData.inputMin} max={inputRangeData.inputMax} />
                            })}
                        </div> */}
                        {/* inputText */}
                        <div className="grid grid-cols-5 gap-4 text-center">
                            {inputDatas.map((inputData) => {
                                return <InputText setDatas={props.setDatas} datas={props.datas} name={inputData.name} type={inputData.type} />
                            })}
                        </div>
                    </Panel>
                </Collapse>







      </div>
    </div>
  );
}

export default SearchWarehouse;
