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
    { name: "location", selectOption: location, grid: 1, "purpose": "search", "ko": "지역", "cn": "地域", "jp": "地域", "vn": "khu vực" },
    { name: "purpose", selectOption: purpose, grid: 1, "purpose": "search", "ko": "목적", "cn": "目的", "jp": "目的", "vn": "mục đích" },
    { name: "use", selectOption: use, grid: 1, "purpose": "search", "ko": "사용여부", "cn": "使用与否", "jp": "使用の有無", "vn": "sự sử dụng hay không" },
    { name: "inventory_using", selectOption: inventory_using, grid: 1, "purpose": "search", "ko": "실사용여부", "cn": "实际使用与否", "jp": "実使用の有無", "vn": "có sử dụng thực tế hay không" },
    { name: "warehouse_code", selectOption: warehouse_codes, grid: 1, "purpose": "search", "ko": "창고코드", "cn": "仓库代码", "jp": "倉庫コード", "vn": "mã kho" },
  ];
  const inputDatas = [ //창고에서만 맥시멈을 쓴다. 
    { name: "warehouse_desc", type: "text", "purpose": "search", "ko": "세부설명", "cn": "详细说明", "jp": "細部説明", "vn": "giải thích chi tiết" },
    { name: "min_maximum_weight", type: "text", "purpose": "search", "ko": "최소적재무게", "cn": "最小装载重量", "jp": "最小積載重量", "vn": "trọng lượng tối thiểu" },
    { name: "max_maximum_weight", type: "number", "purpose": "search", "ko": "최대적재무게", "cn": "最大装载重量", "jp": "最大積載重量", "vn": "trọng lượng tải tối đa" },
    { name: "min_maximum_count", type: "number", "purpose": "search", "ko": "최소적재수량", "cn": "最小装载数量", "jp": "最小積載数量", "vn": "lượng tải tối thiểu" },
    { name: "max_maximum_count", type: "number", "purpose": "search", "ko": "최대적재수량", "cn": "最大装载数量", "jp": "最大積載数量", "vn": "lượng tải tối đa" },
  ];
  const { Panel } = Collapse;
  return (
    <div className="overflow-hidden sm:rounded-md">
      <div className="py-5 rounded-lg">
        {/* select */}
        <div className="grid grid-cols-10 gap-4 text-center">
          {selectDatas.map((selectData) => {
            return (
              <SearchSelect
                setDatas={props.setDatas}
                datas={props.datas}
                name={selectData.name}
                selectData={selectData.selectOption}
                grid={selectData.grid}
                purpose={selectData.purpose}
                ko={selectData.ko}
                cn={selectData.cn}
                jp={selectData.jp}
                vn={selectData.vn}
              />
            );
          })}
          {inputDatas.map((inputData) => {
            return <InputText
              setDatas={props.setDatas}
              datas={props.datas}
              name={inputData.name}
              type={inputData.type}
              purpose={inputData.purpose}
              ko={inputData.ko}
              cn={inputData.cn}
              jp={inputData.jp}
              vn={inputData.vn}
            />
          })}

        </div>
        <div className="text-right">
          <button
            className="mt-2 w-20 mr-2 inline-flex justify-center py-1 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
            onClick={() => {
              if (props.selectedList.length > 0) { props.setAlertVerifyOpen(true); props.setClickButton("delete") }
              else { props.setAlertMessage("항목을 선택해주세요"); props.setAlertFailedOpen(true) }
            }}
          >
            삭제
          </button>
          <button
            className="mt-2 w-20 inline-flex justify-center py-1 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-sky-500 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
            onClick={() => {
              props.setClickSearch(true)
            }}
          >
            조회
          </button>
        </div>
        {/* <Collapse
          bordered={false}
          defaultActiveKey={[]}
          expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
          className="site-collapse-custom-collapse"
        >
          <Panel header="상세검색" key="1" className="site-collapse-custom-panel">
            <div className="grid grid-cols-5 gap-4 text-center">
              {inputDatas.map((inputData) => {
                return <InputText
                  setDatas={props.setDatas}
                  datas={props.datas}
                  name={inputData.name}
                  type={inputData.type}
                  purpose={inputData.purpose}
                  ko={inputData.ko}
                  cn={inputData.cn}
                  jp={inputData.jp}
                  vn={inputData.vn}
                />
              })}
            </div>
          </Panel>
        </Collapse> */}
      </div>
    </div>
  );
}

export default SearchWarehouse;
