import React, { useEffect, useState } from "react";
import {
  location,
  stock_type,
  status_cause,
  stock_quality_status,
  product_family,
  industry_family,
} from "../Common/Conditions/SelectOptions";
import SearchSelect from "../Common/Conditions/SearchSelect";
import InputText from "../Common/Conditions/InputText";
import { useSelector } from "react-redux";
import axios from "axios";
import { Collapse } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";

function SearchWarehouse(props) {
  // useEffect
  // 지역에 따라서 창고목록변경
  let WarehouseUrl = useSelector((state) => state.warehouseURL);
  let inventoryURL = useSelector((state) => state.inventoryURL);
  const [warehouse_codes, setWarehouse_codes] = useState(["전체보기"]);
  const [item_names, setItem_names] = useState(["전체보기"]);
  const [customers, setCustomers] = useState(["전체보기"]);
  useEffect(() => {
    axios.defaults.baseURL = WarehouseUrl;
    axios
      .get(`warehouse/${props.datas.location}`)
      .then((res) => {
        setWarehouse_codes(["전체보기"]);
        for (let index = 0; index < res.data.length; index++) {
          setWarehouse_codes((warehouse_codes) => [
            ...warehouse_codes,
            res.data[index].warehouse_code,
          ]);
        }
      })
      .catch((err) => {});
  }, [props.datas.location]);
  // 지역에따라서 고객처변경
  useEffect(() => {
    axios.defaults.baseURL = inventoryURL;
    axios
      .get(`inventory/customer/${props.datas.location}`)
      .then((res) => {
        setCustomers(["전체보기"]);

        for (let index = 0; index < res.data.length; index++) {
          setCustomers((customers) => [...customers, res.data[index].customer]);
        }
      })
      .catch((err) => {});
  }, [props.datas.location]);
  // 지역에따라서 아이템명변경
  useEffect(() => {
    axios.defaults.baseURL = inventoryURL;
    axios
      .get(`inventory/${props.datas.location}`)
      .then((res) => {
        setItem_names(["전체보기"]);

        for (let index = 0; index < res.data.length; index++) {
          setItem_names((item_names) => [
            ...item_names,
            res.data[index].item_name,
          ]);
        }
      })
      .catch((err) => {});
  }, [props.datas.location]);
  const selectDatas = [
    {
      name: "location",
      selectOption: location,
      grid: 1,
      purpose: "search",
      ko: "지역",
      cn: "地域",
      jp: "地域",
      vn: "khuvực",
    },
    {
      name: "warehouse_code",
      selectOption: warehouse_codes,
      grid: 1,
      purpose: "search",
      ko: "창고코드",
      cn: "仓库代码",
      jp: "倉庫コード",
      vn: "mãkho",
    },
    {
      name: "item_name",
      selectOption: item_names,
      grid: 1,
      purpose: "search",
      ko: "제품명",
      cn: "产品名称",
      jp: "製品名",
      vn: "Tênsảnphẩmlà",
    },
    {
      name: "industry_family",
      selectOption: industry_family,
      grid: 1,
      purpose: "search",
      ko: "산업군",
      cn: "产业群",
      jp: "産業群",
      vn: "lựclượngcôngnghiệp",
    },
    {
      name: "stock_type",
      selectOption: stock_type,
      grid: 1,
      purpose: "search",
      ko: "제품구분",
      cn: "产品分类",
      jp: "製品区分",
      vn: "phânloạisảnphẩm",
    },
    {
      name: "stock_quality_status",
      selectOption: stock_quality_status,
      grid: 1,
      purpose: "search",
      ko: "품질상태",
      cn: "质量状态",
      jp: "品質状態",
      vn: "tìnhtrạngchấtlượng",
    },
    {
      name: "status_cause",
      selectOption: status_cause,
      grid: 1,
      purpose: "search",
      ko: "상태사유",
      cn: "状态事由",
      jp: "状態事由",
      vn: "lýdotrạngthái",
    },
    {
      name: "product_family",
      selectOption: product_family,
      grid: 1,
      purpose: "search",
      ko: "제품군",
      cn: "产品群",
      jp: "製品群",
      vn: "dòngsảnphẩm",
    },
  ];
  const inputDatas = [
    {
      name: "lot_no",
      type: "text",
      purpose: "search",
      ko: "lot번호",
      cn: "lot编号",
      jp: "lot番号",
      vn: "số lot",
    },
    // { name: "min_width", type: "number", "purpose": "search", "ko": "최소넓이", "cn": "最小宽度", "jp": "最小広さ", "vn": "bề rộng tối thiểu" },
    // { name: "max_width", type: "number", "purpose": "search", "ko": "최대넓이", "cn": "最大宽度", "jp": "最大広さ", "vn": "bề rộng tối đa" },
    // { name: "min_thickness", type: "number", "purpose": "search", "ko": "최소두께", "cn": "最小厚度", "jp": "最小厚さ", "vn": "độ dày tối thiểu" },
    // { name: "max_thickness", type: "number", "purpose": "search", "ko": "최대두께", "cn": "最大厚度", "jp": "最大厚さ", "vn": "độ dày tối đa" },
    // { name: "min_height", type: "number", "purpose": "search", "ko": "최소높이", "cn": "最小高度", "jp": "最小高さ", "vn": "độ cao tối thiểu" },
    // { name: "max_height", type: "number", "purpose": "search", "ko": "최대높이", "cn": "最大高度", "jp": "最大高さ", "vn": "chiều cao tối đa" },
    // { name: "min_weight", type: "number", "purpose": "search", "ko": "최소무게", "cn": "最小重量", "jp": "最小重量", "vn": "Trọng lượng tối thiểu" },
    // { name: "max_weight", type: "number", "purpose": "search", "ko": "최대무게", "cn": "最大重量", "jp": "最大重量", "vn": "trọng lượng tối đa" },
    // { name: "min_amount", type: "number", "purpose": "search", "ko": "최소수량", "cn": "催收货量", "jp": "最収量", "vn": "lượng lớn nhất" },
    // { name: "max_amount", type: "number", "purpose": "search", "ko": "최대수량", "cn": "最大数量", "jp": "最大数量", "vn": "số lượng tối đa" },
    {
      name: "customer",
      type: "text",
      purpose: "search",
      ko: "고객사",
      cn: "客户公司",
      jp: "顧客会社",
      vn: "công ty khách hàng",
    },
    {
      name: "inventory_date",
      type: "date",
      purpose: "search",
      ko: "재고등록일",
      cn: "库存登记日",
      jp: "在庫登録日",
      vn: "ngày đăng ký tồn kho",
    },
    {
      name: "warehouse_date",
      type: "date",
      purpose: "search",
      ko: "창고입고일",
      cn: "仓库入库日",
      jp: "倉庫入庫日",
      vn: "công việc nhận kho",
    },
  ];
  const { Panel } = Collapse;
  return (
    <div className="overflow-hidden sm:rounded-md">
      <div className="py-5 rounded-lg">
        {/* select */}
        <div className="grid grid-cols-12 gap-4 text-center">
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
            return (
              <InputText
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
            );
          })}
        </div>
        <div className="text-right mt-3">
          <button
            className="w-20 mr-2 inline-flex justify-center py-1 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
            onClick={() => {
              props.setClickDelete(true);
            }}
          >
            삭제
          </button>
          <button
            className="w-20 inline-flex justify-center py-1 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-sky-500 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
            onClick={() => {
              props.setClickSearch(true);
            }}
          >
            조회
          </button>
        </div>
        {/* <Collapse
          bordered={false}
          defaultActiveKey={[]}
          expandIcon={({ isActive }) => (
            <CaretRightOutlined rotate={isActive ? 90 : 0} />
          )}
          className="site-collapse-custom-collapse"
        >
          <Panel
            header="상세검색"
            key="1"
            className="site-collapse-custom-panel"
          >
            <div className="grid grid-cols-6 gap-4 text-center">
              {inputDatas.map((inputData) => {
                return (
                  <InputText
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
                );
              })}
            </div>
          </Panel>
        </Collapse> */}
      </div>
    </div>
  );
}

export default SearchWarehouse;
