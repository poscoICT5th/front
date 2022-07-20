import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SearchWarehouse from "../Search/SearchWarehouse";
import TableList from "../Table/TableList";

function Warehouse(props) {
  let warehouseURL = useSelector((state) => state.warehouseURL);
  let warehouseReload = useSelector((state) => state.warehouseReload);
  //usestate
  const [clickDelete, setClickDelete] = useState(false);
  const [warehouseList, setWarehouseList] = useState([]);
  const [selectedList, setSelectedList] = useState([])
  const [alertVerifyOpen, setAlertVerifyOpen] = useState(false)
  const [clickSearch, setClickSearch] = useState(false);
  const [datas, setDatas] = useState({
    warehouse_code: "전체보기",
    location: "전체보기",
    purpose: "전체보기",
    warehouse_desc: "전체보기",
    use: "전체보기",
    min_maximum_weight: 0,
    max_maximum_weight: 10000000,
    min_maximum_count: 0,
    max_maximum_count: 10000000,
    maximum_weight: "전체보기",
    maximum_count: "전체보기",
    inventory_using: "전체보기",
    remarks: "전체보기",
  });
  const th = [
    { "ko": "창고코드", "en": "warehouse_code", "cn": "仓库代码", "jp": "倉庫コード", "vn": "mã kho", type: "center", size:100 },
    { "ko": "지역", "en": "location", "cn": "地域", "jp": "地域", "vn": "khu vực", type: "center", size:100 },
    { "ko": "목적", "en": "purpose", "cn": "目的", "jp": "目的", "vn": "mục đích", type: "center", size:100 },
    { "ko": "세부설명", "en": "warehouse_desc", "cn": "详细说明", "jp": "細部説明", "vn": "giải thích chi tiết", type: "left", size:300 },
    { "ko": "사용여부", "en": "use", "cn": "使用与否", "jp": "使用の有無", "vn": "sự sử dụng hay không", type: "center", size:100 },
    { "ko": "최대적재무게", "en": "maximum_weight", "cn": "最大装载重量", "jp": "最大積載重量", "vn": "trọng lượng tải tối đa", type: "right", size:100 },
    { "ko": "최대적재수량", "en": "maximum_count", "cn": "最大装载数量", "jp": "最大積載数量", "vn": "lượng tải tối đa", type: "right", size:100 },
    { "ko": "실사용여부", "en": "inventory_using", "cn": "实际使用与否", "jp": "実使用の有無", "vn": "có sử dụng thực tế hay không", type: "center", size:100 },
    { "ko": "비고", "en": "remarks", "cn": "备注", "jp": "備考", "vn": "lời bình luận", type: "center", size:100 },
  ];

  // 창고전체조회(처음에)
  useEffect(() => {
    axios.defaults.baseURL = warehouseURL;
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
  useEffect(() => {
    axios.defaults.baseURL = warehouseURL;
    axios.get("/search", { params: datas }).then((res) => {
      setWarehouseList(res.data);
      setClickSearch(false);
    });
  }, [clickSearch, warehouseReload, datas]);

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
            selectedList={selectedList}
          />
        </div>
        {/* table */}
        <div className="mx-1 mt-2 text-center w-full">
          <TableList
            title={"warehouse"}
            part="warehouse"
            axiosURL={warehouseURL}
            th={th}
            dataList={warehouseList}
            datas={datas}
            clickDelete={clickDelete}
            deleteBodyName="warehouseList"
            setClickDelete={setClickDelete}
            setSelectedList={setSelectedList}
            alertVerifyOpen={alertVerifyOpen}
            setAlertVerifyOpen={setAlertVerifyOpen}
            alertSucOpen={props.alertSucOpen}
            alertFailedOpen={props.alertFailedOpen}
            setAlertSucOpen={props.setAlertSucOpen}
            setAlertFailedOpen={props.setAlertFailedOpen}
            setAlertMessage={props.setAlertMessage}
          />
        </div>
      </div>
    </div>
  );
}

export default Warehouse;
