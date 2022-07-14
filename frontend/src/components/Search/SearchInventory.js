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
import InventoryMix from "../Common/InventoryMix";
import Invenupdate from "../Common/Invenupdate";

function SearchWarehouse(props) {
  // useEffect
  // 지역에 따라서 창고목록변경
  let WarehouseUrl = useSelector((state) => state.warehouseURL);
  let inventoryURL = useSelector((state) => state.inventoryURL);
  const [warehouse_codes, setWarehouse_codes] = useState(["전체보기"]);
  const [item_names, setItem_names] = useState(["전체보기"]);
  const [customers, setCustomers] = useState(["전체보기"]);
  const [clickMix, setClickMix] = useState(false)
  const [clickUpdate, setClickUpdate] = useState(false)

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
      .catch((err) => { });
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
      .catch((err) => { });
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
      .catch((err) => { });
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
        <div className="mt-3 text-right">
          <button
            className="w-20 mr-2 justify-center py-1 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
            onClick={() => {
              if (props.selectedList.length > 0) {
                props.setAlertVerifyOpen(true);
                props.setClickButton("delete");
              } else {
                props.setAlertMessage("항목을 선택해주세요");
                props.setAlertFailedOpen(true);
              }
            }}
            disabled
          >
            삭제
          </button>
          <button
            className="mr-2 w-20 justify-center py-1 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-teal-500 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500"
            onClick={() => {
              props.setClickSearch(true);
            }}
          >
            조회
          </button>
          <button
            className="mr-2 w-20 justify-center py-1 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-teal-500 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
            onClick={() => {
              if (props.selectedList.length > 0) {
                props.setAlertVerifyOpen(true);
                props.setClickButton("export");
              } else {
                props.setAlertMessage("항목을 선택해주세요");
                props.setAlertFailedOpen(true);
              }
            }}
          >
            출고등록
          </button>
          <button
            className="mr-2 w-32 justify-center py-1 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-teal-500 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
            onClick={() => {
              if (props.selectedList.length > 0) {
                props.setAlertVerifyOpen(true);
                props.setClickButton("move");
              } else {
                props.setAlertMessage("항목을 선택해주세요");
                props.setAlertFailedOpen(true);
              }
            }}
          >
            창고이동등록
          </button>
          <button
            className="text-gray-50 mr-2 w-20 justify-center py-1 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-teal-500 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            onClick={() => {
              setClickMix(true);
            }}
          >
            제품가공
          </button>
          <button
            className="w-32 justify-center py-1 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-teal-500 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
            onClick={() => {
              setClickUpdate(true);
            }}
          >
            품질 상태 수정
          </button>
          <InventoryMix
            selectedRowKeys={props.selectedList}
            selectedRows={props.selectedRows}
            // alertFailedOpen={props.alertFailedOpen}
            setClickMix={setClickMix}
            clickMix={clickMix}
            setAlertFailedOpen={props.setAlertFailedOpen}
            setAlertMessage={props.setAlertMessage}
            setAlertSucOpen={props.setAlertSucOpen}
          />
          <Invenupdate
            setClickUpdate={setClickUpdate}
            clickUpdate={clickUpdate}
            selectedRowKeys={props.selectedList}
            selectedRows={props.selectedRows}
            setAlertFailedOpen={props.setAlertFailedOpen}
            setAlertMessage={props.setAlertMessage}
            setAlertSucOpen={props.setAlertSucOpen}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchWarehouse;
