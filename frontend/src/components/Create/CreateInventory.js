import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  location,
  product_family,
  unit,
  industry_family,
  stock_type,
} from "../Common/Conditions/SelectOptionsCreate";
import CreateRequest from "./CreateRequest";
import { handleInventoryReload } from "../../store";

function CreateInventory(props) {
  const dispatch = useDispatch();
  let warehouseURL = useSelector((state) => state.warehouseURL);
  let inventoryURL = useSelector((state) => state.inventoryURL);

  // let exportReload = useSelector((state) => state.exportReload)

  const [warehouse_codes, setWarehouse_codes] = useState([]);
  const [item_names, setItem_names] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [lot_nos, setLot_nos] = useState([]);
  const [lot_no_data, setLot_no_data] = useState({});
  // 출고
  const [inventoryDatas, setinventoryDatas] = useState({
    industry_family: "",
    stock_type: "",
    product_family: "",
    location: "",
    unit: "",
    item_name: "",
    width: 0,
    height: 0,
    thickness: 0,
    weight: 0,
    customer: "",
    warehouse_code: "",
    item_code: "",
    amount: "",
  });
  // 지역정보 보내면 창고목록 가져오기
  useEffect(() => {
    axios.defaults.baseURL = warehouseURL;
    axios
      .get(`warehouse/${inventoryDatas.location}`)
      .then((res) => {
        setWarehouse_codes([]);
        for (let index = 0; index < res.data.length; index++) {
          setWarehouse_codes((warehouse_codes) => [
            ...warehouse_codes,
            res.data[index].warehouse_code,
          ]);
        }
      })
      .catch((err) => {});
  }, [inventoryDatas.location]);

  const inventory_selectDatas = [
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
      name: "product_family",
      selectOption: product_family,
      grid: 1,
      purpose: "search",
      ko: "제품군",
      cn: "产品群",
      jp: "製品群",
      vn: "dòngsảnphẩm",
    },
    {
      name: "location",
      selectOption: location,
      grid: 1,
      purpose: "create",
      ko: "지역",
      cn: "地域",
      jp: "地域",
      vn: "khu vực",
    },
    {
      name: "unit",
      selectOption: unit,
      grid: 1,
      purpose: "create",
      ko: "단위",
      cn: "单位",
      jp: "単位",
      vn: "đơn vị",
    },
  ];
  const inventory_inputDatas = [
    { name: "amount", type: "number", purpose: "create", "ko": "주문량", "cn": "订货量", "jp": "注文量", "vn": "lượng đặt hàng", },
    {
      name: "item_name",
      type: "text",
      purpose: "fixed",
      ko: "제품명",
      cn: "产品名称",
      jp: "製品名",
      vn: "Tênsảnphẩmlà",
    },
    {
      name: "width",
      type: "number",
      purpose: "create",
      ko: "넓이",
      cn: "广度",
      jp: "広さ",
      vn: "bề rộng",
    },
    {
      name: "thickness",
      type: "number",
      purpose: "create",
      ko: "두께",
      cn: "厚度",
      jp: "厚さ",
      vn: "độ dày",
    },
    {
      name: "height",
      type: "number",
      purpose: "create",
      ko: "높이",
      cn: "高度",
      jp: "高さ",
      vn: "chiều cao",
    },
    {
      name: "customer",
      type: "text",
      purpose: "create",
      ko: "고객사",
      cn: "客户公司",
      jp: "顧客会社",
      vn: "công ty khách hàng",
    },
    {
      name: "weight",
      type: "number",
      purpose: "create",
      ko: "무게",
      cn: "份量",
      jp: "重さ",
      vn: "trọng lượng",
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
      name: "item_code",
      type: "number",
      purpose: "fixed",
      ko: "제품코드",
      cn: "产品代码",
      jp: "製品コード",
      vn: "mã sản phẩm",
    },
  ];

  // function
  function request() {
    console.log(inventoryDatas); //입력한 데이터 잘 들어옴.
    axios.defaults.baseURL = inventoryURL;
    axios
      .post("/", inventoryDatas)
      .then((res) => {
        alert("출고요청이 등록되었습니다");
        dispatch(handleInventoryReload(true));
        props.setOpenCreate(false);
        dispatch(handleInventoryReload(false));
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div>
      <CreateRequest
        open={props.modalOpen}
        setOpen={props.setModalOpen}
        title="제품등록"
        selectDatas={inventory_selectDatas}
        inputDatas={inventory_inputDatas}
        datas={inventoryDatas}
        setDatas={setinventoryDatas}
        request={request}
      />
    </div>
  );
}

export default CreateInventory;
