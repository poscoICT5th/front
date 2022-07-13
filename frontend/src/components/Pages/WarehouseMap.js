import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ChartTreemap from "../Map/ChartTreemap";
import WarehouseMapTable from "../Map/WarehouseMapTable";
function WarehouseMap() {
  let inventoryURL = useSelector((state) => state.inventoryURL);
  const [selectedInven, setSelectedInven] = useState([]);
  const [clickLocation, setClickLocation] = useState("광양")
  
  const getInvenByWare = (warehouseCode) => {
    axios.defaults.baseURL = inventoryURL;
    axios
      .get(`/warehouse/${warehouseCode}`)
      .then((res) => {
        setSelectedInven([...res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    setSelectedInven([])
  }, [clickLocation])
  
  //테이블 가져오기
  const th = [
    { ko: "lot번호", en: "lot_no", cn: "lot编号", jp: "lot番号", vn: "sốlot", type: "string" },
    { ko: "산업군", en: "industry_family", cn: "产业群", jp: "産業群", vn: "lựclượngcôngnghiệp", type: "string" },
    { ko: "제품구분", en: "stock_type", cn: "产品分类", jp: "製品区分", vn: "phânloạisảnphẩm", type: "string" },
    { ko: "제품군", en: "product_family", cn: "产品群", jp: "製品群", vn: "dòngsảnphẩm", type: "string" },
    { ko: "지역", en: "location", cn: "地域", jp: "地域", vn: "khuvực", type: "string" },
    { ko: "창고코드", en: "warehouse_code", cn: "仓库代码", jp: "倉庫コード", vn: "mãkho", type: "string" },
    { ko: "제품코드", en: "item_code", cn: "产品代码", jp: "製品コード", vn: "mãsảnphẩm", type: "string" },
    { ko: "제품명", en: "item_name", cn: "产品名称", jp: "製品名", vn: "Tênsảnphẩmlà", type: "string" },
    { ko: "수량", en: "amount", cn: "数量", jp: "数量", vn: "sốlượng", type: "number" },
    { ko: "단위", en: "unit", cn: "单位", jp: "単位", vn: "đơnvị", type: "number" },
    { ko: "무게", en: "weight", cn: "份量", jp: "重さ", vn: "trọnglượng", type: "number" },
    { ko: "넓이", en: "width", cn: "广度", jp: "広さ", vn: "bềrộng", type: "number" },
    { ko: "두께", en: "thickness", cn: "厚度", jp: "厚さ", vn: "độdày", type: "number" },
    { ko: "높이", en: "height", cn: "高高地", jp: "高さ", vn: "chiềucao", type: "number" },
    { ko: "고객사", en: "customer", cn: "客户公司", jp: "顧客会社", vn: "côngtykháchhàng", type: "string" },
    { ko: "품질상태", en: "stock_quality_status", cn: "质量状态", jp: "品質状態", vn: "tìnhtrạngchấtlượng", type: "string" },
    { ko: "상태사유", en: "status_cause", cn: "状态事由", jp: "状態事由", vn: "lýdotrạngthái", type: "string" },
    { ko: "지시상태", en: "state", cn: "指示状态", jp: "指示状態", vn: "tìnhtrạngchỉthị", type: "string" },
    { ko: "재고등록일", en: "inventory_date", cn: "库存登记日", jp: "在庫登録日", vn: "ngàyđăngkýtồnkho", type: "date" },
    { ko: "창고입고일", en: "warehouse_date", cn: "仓库入库日", jp: "倉庫入庫日", vn: "côngviệcnhậnkho", type: "date" },
  ];

  return (
    <div data-aos="fade-up" className="grid grid-cols-2">
      <div className="h-3/4 w-3/4 mx-auto">
        <ChartTreemap getInvenByWare={getInvenByWare}
          setClickLocation={setClickLocation}
          clickLocation={clickLocation}
        />
      </div>
      <div className="mx-10">
        <WarehouseMapTable selectedInven={selectedInven}
          th={th}
        />
      </div>
    </div>
  );
}

export default WarehouseMap;
