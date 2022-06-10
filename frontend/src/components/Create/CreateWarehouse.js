import axios from 'axios';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { inventory_using, location, purpose, use } from '../Common/Conditions/SelectOptionsCreate';
import CreateRequest from './CreateRequest'

function CreateWarehouse(props) {
  let url = useSelector((state) => state.warehouseURL);
  axios.defaults.baseURL = url;

  // usestate
  const [warehouseDatas, setWarehouseDatas] = useState({
    location: "",
    warehouse_code: "",
    purpose: "",
    warehouse_code_desc: "",
    use: "",
    maximum_weight: 0,
    maximum_count: 0,
    inventory_using: "",
    remarks: "",
  });
  const warehouse_selectDatas = [
    { name: "location", selectOption: location, grid: 1 },
    { name: "purpose", selectOption: purpose, grid: 1 },
    { name: "use", selectOption: use, grid: 1 },
    { name: "inventory_using", selectOption: inventory_using, grid: 1 },
  ];
  const warehouse_inputDatas = [
    { name: "warehouse_code_desc", type: "text" },
    { name: "maximum_weight", type: "number" },
    { name: "maximum_count", type: "number" },
    { name: "warehouse_code", type: "text" },
    { name: "remarks", type: "text" },
  ];

  // function
  function regist(params) {
    axios
      .post("/", warehouseDatas)
      .then((res) => {
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