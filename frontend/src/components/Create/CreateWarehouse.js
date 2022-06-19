import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { inventory_using, location, purpose, use } from '../Common/Conditions/SelectOptionsCreate';
import CreateRequest from './CreateRequest'
import { handleWarehouseReload } from '../../store'

function CreateWarehouse(props) {
  const dispatch = useDispatch();

  let url = useSelector((state) => state.warehouseURL);
  axios.defaults.baseURL = url;

  // usestate
  const [warehouseDatas, setWarehouseDatas] = useState({
    location: "",
    purpose: "",
    use: "",
    inventory_using: "",
    warehouse_code_desc: "",
    maximum_weight: 0,
    maximum_count: 0,
    warehouse_code: "",
    remarks: "",
  });
  const warehouse_selectDatas = [
    { name: "location", selectOption: location, grid: 1, "purpose": "create", "ko": "지역", "cn": "地域", "jp": "地域", "vn": "khu vực" },
    { name: "purpose", selectOption: purpose, grid: 1, "purpose": "create", "ko": "목적", "cn": "目的", "jp": "目的", "vn": "mục đích" },
    { name: "use", selectOption: use, grid: 1, "purpose": "create", "ko": "사용여부", "cn": "使用与否", "jp": "使用の有無", "vn": "sự sử dụng hay không" },
    { name: "inventory_using", selectOption: inventory_using, grid: 1, "purpose": "create", "ko": "실사용여부", "cn": "实际使用与否", "jp": "実使用の有無", "vn": "có sử dụng thực tế hay không" },

  ];
  const warehouse_inputDatas = [
    { name: "warehouse_desc", type: "text", "purpose": "create", "ko": "세부설명", "cn": "详细说明", "jp": "細部説明", "vn": "giải thích chi tiết" },
    { name: "min_maximum_weight", type: "text", "purpose": "create", "ko": "최소적재무게", "cn": "最小装载重量", "jp": "最小積載重量", "vn": "trọng lượng tối thiểu" },
    { name: "max_maximum_weight", type: "number", "purpose": "create", "ko": "최대적재무게", "cn": "最大装载重量", "jp": "最大積載重量", "vn": "trọng lượng tải tối đa" },
    { name: "min_maximum_count", type: "number", "purpose": "create", "ko": "최소적재수량", "cn": "最小装载数量", "jp": "最小積載数量", "vn": "lượng tải tối thiểu" },
    { name: "max_maximum_count", type: "number", "purpose": "create", "ko": "최대적재수량", "cn": "最大装载数量", "jp": "最大積載数量", "vn": "lượng tải tối đa" },


  ];

  // function
  function regist(params) {
    axios
      .post("/", warehouseDatas)
      .then((res) => {
        alert("창고가 등록되었습니다.")
        dispatch(handleWarehouseReload(true))
        props.setOpenCreate(false)
        dispatch(handleWarehouseReload(false))
        console.log(warehouseDatas, "우리가보내는data");
        console.log(res, "받는 data");

      })
      .catch((err) => {
        alert(err);
      });
  }

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
      />
    </div>
  )
}

export default CreateWarehouse