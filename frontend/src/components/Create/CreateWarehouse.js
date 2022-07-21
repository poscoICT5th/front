import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  inventory_using,
  location,
  purpose,
  use,
  warehouse_x,
  warehouse_y,
} from "../Common/Conditions/SelectOptionsCreate";
import CreateRequest from "./CreateRequest";
import { handleWarehouseReload } from "../../store";
import { isEmptyObject } from "jquery";
import moment from "moment";

function CreateWarehouse(props) {
  const dispatch = useDispatch();
  let warehouseURL = useSelector((state) => state.warehouseURL);
  const [warehouse_codes, setWarehouse_codes] = useState([]);
  // const [now_warehouseCode, setNow_warehouseCode] = useState(
  //   moment().format("hh:mm:ss").replace(/\:/g, "")
  // );

  // useEffect(() => {
  //   setNow_warehouseCode(moment().format("hh:mm:ss").replace(/\:/g, ""));
  //   console.log(moment().format("hh:mm:ss").replace(/\:/g, ""));
  // }, [now_warehouseCode]);

  // usestate

  const [warehouseDatas, setWarehouseDatas] = useState({
    location_init:"",
    location: "",
    purpose: "",
    use: "",
    inventory_using: "",
    warehouse_desc: "",
    maximum_weight: "",
    maximum_count: "",
    warehouse_code: "",
    remarks: "",
    warehouse_x: "",
    warehouse_y: "",
  });

  useEffect(() => {
    if (warehouseDatas.location==="포항") {
      setWarehouseDatas({
        ...warehouseDatas, location_init:"P"
      })
    } else if (warehouseDatas.location==="광양") {
      setWarehouseDatas({
        ...warehouseDatas, location_init:"G"
      })
    } else {
      setWarehouseDatas({
        ...warehouseDatas, location_init:"C"
      })
    }
  }, [warehouseDatas.location])
  
  const warehouse_selectDatas = [
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
      name: "purpose",
      selectOption: purpose,
      grid: 1,
      purpose: "create",
      ko: "목적",
      cn: "目的",
      jp: "目的",
      vn: "mục đích",
    },
    {
      name: "use",
      selectOption: use,
      grid: 1,
      purpose: "create",
      ko: "사용여부",
      cn: "使用与否",
      jp: "使用の有無",
      vn: "sự sử dụng hay không",
    },
    {
      name: "inventory_using",
      selectOption: inventory_using,
      grid: 1,
      purpose: "create",
      ko: "실사용여부",
      cn: "实际使用与否",
      jp: "実使用の有無",
      vn: "có sử dụng thực tế hay không",
    },
    {
      name: "warehouse_x",
      selectOption: warehouse_x,
      grid: 1,
      purpose: "search",
      ko: "창고코드_X",
      cn: "仓库代码_X",
      jp: "倉庫コード_X",
      vn: "mãkho_X",
    },
    {
      name: "warehouse_y",
      selectOption: warehouse_y,
      grid: 1,
      purpose: "search",
      ko: "창고코드_Y",
      cn: "仓库代码_Y",
      jp: "倉庫コード_Y",
      vn: "mãkho_Y",
    },
  ];
  const warehouse_inputDatas = [
    {
      name: "warehouse_desc",
      type: "text",
      purpose: "create",
      ko: "세부설명",
      cn: "详细说明",
      jp: "細部説明",
      vn: "giải thích chi tiết",
    },
    {
      name: "maximum_weight",
      type: "number",
      purpose: "create",
      ko: "최대적재무게",
      cn: "最大装载重量",
      jp: "最大積載重量",
      vn: "trọng lượng tải tối đa",
    },
    {
      name: "maximum_count",
      type: "number",
      purpose: "create",
      ko: "최대적재수량",
      cn: "最大装载数量",
      jp: "最大積載数量",
      vn: "lượng tải tối đa",
    },
    {
      name: "remarks",
      type: "text",
      purpose: "create",
      ko: "비고",
      cn: "비고",
      jp: "비고",
      vn: "비고",
    },
  ];

  function regist() {
    if (
      !warehouseDatas.inventory_using.trim() ||
      !warehouseDatas.location.trim() ||
      !warehouseDatas.maximum_count ||
      !warehouseDatas.maximum_weight ||
      !warehouseDatas.purpose ||
      !warehouseDatas.remarks ||
      !warehouseDatas.use ||
      !warehouseDatas.warehouse_desc
    ) {
      props.setAlertMessage("값을 다 입력해주세요!");
      props.setAlertFailedOpen(true);
    } else {
      createAxios();
    }
  }

  // function
  function createAxios(params) {
    console.log(warehouseDatas);
    axios.defaults.baseURL = warehouseURL;
    axios
      .post("/", warehouseDatas)
      .then((res) => {
        props.setAlertSucOpen(true);
        props.setAlertMessage("창고가 등록되었습니다.");
        dispatch(handleWarehouseReload(true));
        props.setOpenCreate(false);
        dispatch(handleWarehouseReload(false));
      })
      .catch((err) => {
        alert(err);
        props.setAlertFailedOpen(true);
        props.setAlertMessage("등록에 실패하였습니다, 다시 시도해주세요.");
      });
  }
  //
  const [createPos, setCreatePos] = useState(false);
  //유효성
  function checkCreateWarehousePos() {
    let check = true;
    warehouse_codes.map((element) => {
      console.log(element);
      if (
        element.warehouse_code?.includes(
          warehouseDatas.warehouse_x + warehouseDatas.warehouse_y
        )
      ) {
        check = false;
        return check;
      }
    });
    return check;
  }
  useEffect(() => {
    console.log(1, warehouseDatas);
    if (
      warehouseDatas.warehouse_x !== "" &&
      warehouseDatas.warehouse_y !== ""
    ) {
      if (!checkCreateWarehousePos()) {
        alert("생성불가");
        setCreatePos(false);
        //불가면 비워버리기 
        // setWarehouseDatas({
        //   ...warehouseDatas,
        //   warehouse_x: "",
        //   warehouse_y: "",
        // })
      } else if (checkCreateWarehousePos && warehouseDatas.warehouse_x && warehouseDatas.warehouse_y) {
        setWarehouseDatas({...warehouseDatas, warehouse_code: warehouseDatas.location_init+warehouseDatas.warehouse_x+warehouseDatas.warehouse_y})
        alert("생성가능");
        setCreatePos(true);
      }
    }
  }, [warehouseDatas.warehouse_x, warehouseDatas.warehouse_y]);

  useEffect(() => {
    axios.defaults.baseURL = warehouseURL;
    console.log(warehouseDatas.location);
    axios
      .get(`warehouse/${warehouseDatas.location}`)
      .then((res) => {
        console.log(res.data);
        setWarehouse_codes(res.data);
      })
      .catch((err) => {});
  }, [warehouseDatas.location]);
  return (
    <div>
      <CreateRequest
        open={props.openCreate}
        setOpen={props.setOpenCreate}
        title="창고등록"
        selectDatas={warehouse_selectDatas}
        inputDatas={warehouse_inputDatas}
        datas={warehouseDatas}
        setDatas={setWarehouseDatas}
        request={regist}
        alertSucOpen={props.alertSucOpen}
        setAlertSucOpen={props.setAlertSucOpen}
        alertFailedOpen={props.alertFailedOpen}
        setAlertFailedOpen={props.setAlertFailedOpen}
        setAlertMessage={props.setAlertMessage}
        createPos={createPos}
      />
    </div>
  );
}

export default CreateWarehouse;
