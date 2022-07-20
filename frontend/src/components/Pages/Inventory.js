import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SearchInventory from "../Search/SearchInventory";
import TableList from "../Table/TableList";

function Inventory(props) {
  let inventoryURL = useSelector((state) => state.inventoryURL);
  let inventoryReload = useSelector((state) => state.inventoryReload);
  let createInventorySuc = useSelector((state) => state.warehouseReload);

  //usestate
  const [clickDelete, setClickDelete] = useState(false);
  const [clickSearch, setClickSearch] = useState(false);
  const [clickButton, setClickButton] = useState("");
  const [inventoryList, setInventoryList] = useState([]);
  const [selectedList, setSelectedList] = useState([]);
  const [alertVerifyOpen, setAlertVerifyOpen] = useState(false);
  const [selectedRowsList, setSelectedRowsList] = useState([]);
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
    { ko: "지시상태", en: "state", cn: "指示状态", jp: "指示状態", vn: "tìnhtrạngchỉthị", type: "center", size: 99, fixed: "left" },
    { ko: "lot번호", en: "lot_no", cn: "lot编号", jp: "lot番号", vn: "sốlot", type: "left", size: 180, fixed: "left" },
    { ko: "산업군", en: "industry_family", cn: "产业群", jp: "産業群", vn: "lựclượngcôngnghiệp", type: "left", size: 80, fixed: "" },
    { ko: "제품구분", en: "stock_type", cn: "产品分类", jp: "製品区分", vn: "phânloạisảnphẩm", type: "left", size: 100, fixed: "" },
    { ko: "제품군", en: "product_family", cn: "产品群", jp: "製品群", vn: "dòngsảnphẩm", type: "left", size: 100, fixed: "" },
    { ko: "지역", en: "location", cn: "地域", jp: "地域", vn: "khuvực", type: "left", size: 80, fixed: "" },
    { ko: "창고코드", en: "warehouse_code", cn: "仓库代码", jp: "倉庫コード", vn: "mãkho", type: "left", size: 90, fixed: "" },
    { ko: "제품코드", en: "item_code", cn: "产品代码", jp: "製品コード", vn: "mãsảnphẩm", type: "left", size: 120, fixed: "" },
    { ko: "제품명", en: "item_name", cn: "产品名称", jp: "製品名", vn: "Tênsảnphẩmlà", type: "left", size: 200, fixed: "" },
    { ko: "수량", en: "amount", cn: "数量", jp: "数量", vn: "sốlượng", type: "right", size: 80, fixed: "" },
    { ko: "단위", en: "unit", cn: "单位", jp: "単位", vn: "đơnvị", type: "right", size: 80, fixed: "" },
    { ko: "무게", en: "weight", cn: "份量", jp: "重さ", vn: "trọnglượng", type: "right", size: 80, fixed: "" },
    { ko: "넓이", en: "width", cn: "广度", jp: "広さ", vn: "bềrộng", type: "right", size: 80, fixed: "" },
    { ko: "두께", en: "thickness", cn: "厚度", jp: "厚さ", vn: "độdày", type: "right", size: 80, fixed: "" },
    { ko: "높이", en: "height", cn: "高高地", jp: "高さ", vn: "chiềucao", type: "right", size: 80, fixed: "" },
    { ko: "고객사", en: "customer", cn: "客户公司", jp: "顧客会社", vn: "côngtykháchhàng", type: "left", size: 140, fixed: "" },
    { ko: "품질상태", en: "stock_quality_status", cn: "质量状态", jp: "品質状態", vn: "tìnhtrạngchấtlượng", type: "left", size: 100, fixed: "" },
    { ko: "상태사유", en: "status_cause", cn: "状态事由", jp: "状態事由", vn: "lýdotrạngthái", type: "left", size: 100, fixed: "" },
    { ko: "재고등록일", en: "inventory_date", cn: "库存登记日", jp: "在庫登録日", vn: "ngàyđăngkýtồnkho", type: "right", size: 130, fixed: "right" },
    { ko: "창고입고일", en: "warehouse_date", cn: "仓库入库日", jp: "倉庫入庫日", vn: "côngviệcnhậnkho", type: "right", size: 110, fixed: "right" },
  ];
  //재고전체조회(처음에)
  useEffect(() => {
    axios.defaults.baseURL = inventoryURL;
    axios
      .get("/")
      .then((res) => {
        setInventoryList(res.data);
      })
      .catch((err) => { });
  }, []);

  //재고 조건검색
  useEffect(() => {
    axios.defaults.baseURL = inventoryURL;
    axios.get("/search", { params: datas }).then((res) => {
      setInventoryList(res.data);
      setClickSearch(false);
    });
  }, [clickSearch, createInventorySuc, datas, inventoryReload]);

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
            selectedList={selectedList}
            setClickDelete={setClickDelete}
            clickDelete={clickDelete}
            setClickButton={setClickButton}
            selectedRows={selectedRowsList}
            alertSucOpen={props.alertSucOpen}
            alertFailedOpen={props.alertFailedOpen}
            setAlertSucOpen={props.setAlertSucOpen}
            setAlertFailedOpen={props.setAlertFailedOpen}
            setAlertMessage={props.setAlertMessage}
            setAlertVerifyOpen={setAlertVerifyOpen}
          />
        </div>
        {/* table */}
        <div className="mx-1 mt-2 text-center w-full">
          <TableList
            title={"inventory"}
            part="inventory"
            axiosURL={inventoryURL}
            th={th}
            dataList={inventoryList}
            datas={datas}
            clickDelete={clickDelete}
            deleteBodyName="inventoryDeleteList"
            setClickDelete={setClickDelete}
            setSelectedList={setSelectedList}
            alertVerifyOpen={alertVerifyOpen}
            setAlertVerifyOpen={setAlertVerifyOpen}
            alertSucOpen={props.alertSucOpen}
            alertFailedOpen={props.alertFailedOpen}
            setAlertSucOpen={props.setAlertSucOpen}
            setAlertFailedOpen={props.setAlertFailedOpen}
            setAlertMessage={props.setAlertMessage}
            clickButton={clickButton}
            setSelectedRowsList={setSelectedRowsList}
          />
        </div>
      </div>
    </div>
  );
}

export default Inventory;
