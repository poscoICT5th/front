import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { inventory_using, location, purpose, use } from '../Common/Conditions/SelectOptionsCreate';
import CreateRequest from './CreateRequest'
import { handleCreateWarehouseSuc } from '../../store'

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
    { name: "location", selectOption: location, grid: 1 },
    { name: "purpose", selectOption: purpose, grid: 1 },
    { name: "use", selectOption: use, grid: 1 },
    { name: "inventory_using", selectOption: inventory_using, grid: 1 },
  ];
  const warehouse_inputDatas = [
    { name: "warehouse_code_desc", type: "text", purpose: "create" },
    { name: "maximum_weight", type: "number", purpose: "create" },
    { name: "maximum_count", type: "number", purpose: "create" },
    { name: "warehouse_code", type: "text", purpose: "create" },
    { name: "remarks", type: "text", purpose: "create" },
  ];

  // function
  function regist(params) {
    axios
      .post("/", warehouseDatas)
      .then((res) => {
        alert("창고가 등록되었습니다.")
        dispatch(handleCreateWarehouseSuc(true))
        props.setOpenCreate(false)
        dispatch(handleCreateWarehouseSuc(false))
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