import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { location, unit } from '../Common/Conditions/SelectOptionsCreate'
import CreateRequest from './CreateRequest'
import { handleCreateExportSuc } from '../../store'

function CreateExport(props) {
  const dispatch = useDispatch();
  let warehouseURL = useSelector((state) => state.warehouseURL)
  let inventoryURL = useSelector((state) => state.inventoryURL)
  let logisticsExportURL = useSelector((state) => state.logisticsExportURL)
  let handleCreateExportSuc = useSelector((state) => state.handleCreateExportSuc)

  const [warehouse_codes, setWarehouse_codes] = useState([])
  const [item_names, setItem_names] = useState([])
  const [customers, setCustomers] = useState([])
  const [lot_nos, setLot_nos] = useState([])
  const [lot_no_data, setLot_no_data] = useState({})
  // 출고
  const [exportDatas, setExportDatas] = useState({
    location: "",
    target: "",
    lot_no: "",
    item_no: "",
    item_name: "",
    width: 0,
    weight: 0,
    thickness: 0,
    height: 0,
    order_amount: 0,
    from_warehouse: "",
    ex_amount: 0,
    ex_remain: 0,
    order_date: "",
    inst_deadline: "",
    done_date: "",
    unit: "",
  })
  // 지역정보 보내면 창고목록 가져오기
  useEffect(() => {
    axios.defaults.baseURL = warehouseURL
    axios.get(`warehouse/${exportDatas.location}`)
      .then((res) => {
        setWarehouse_codes([])
        for (let index = 0; index < res.data.length; index++) {
          setWarehouse_codes(warehouse_codes => [...warehouse_codes, res.data[index].warehouse_code])
        }
      })
      .catch((err) => { })
  }, [exportDatas.location])

  // 지역에따라서 아이템명변경
  useEffect(() => {
    axios.defaults.baseURL = inventoryURL
    axios.get(`inventory/${exportDatas.location}`)
      .then((res) => {
        setItem_names([])
        for (let index = 0; index < res.data.length; index++) {
          setItem_names(item_names => [...item_names, res.data[index].item_name])
        }
      })
      .catch((err) => { })
  }, [exportDatas.location])

  // 지역에따라서 고객처변경
  useEffect(() => {
    axios.defaults.baseURL = inventoryURL
    axios.get(`inventory/customer/${exportDatas.location}`)
      .then((res) => {
        setCustomers([])
        for (let index = 0; index < res.data.length; index++) {
          setCustomers(customers => [...customers, res.data[index].customer])
        }
      })
      .catch((err) => { })
  }, [exportDatas.location])

  // 지역, 창고값을 보내면 lot번호 불러오기
  useEffect(() => {
    axios.defaults.baseURL = inventoryURL
    axios.get(`/location/${exportDatas.location}/warehouse/${exportDatas.from_warehouse}`)
      .then((res) => {
        setLot_nos([])
        for (let index = 0; index < res.data.length; index++) {
          setLot_nos(lot_nos => ([...lot_nos, res.data[index].lot_no]))
          setLot_no_data(lot_no_data => ({ ...lot_no_data, [res.data[index].lot_no]: res.data[index] }))
        }
      })
      .catch((err) => { })
  }, [exportDatas.from_warehouse])

  useEffect(() => {
    if (exportDatas.lot_no) {
      console.log(exportDatas.lot_no)
      setExportDatas(exportDatas => ({ ...exportDatas, "height": lot_no_data[exportDatas.lot_no].height }))
      setExportDatas(exportDatas => ({ ...exportDatas, "thickness": lot_no_data[exportDatas.lot_no].thickness }))
      setExportDatas(exportDatas => ({ ...exportDatas, "weight": lot_no_data[exportDatas.lot_no].weight }))
      setExportDatas(exportDatas => ({ ...exportDatas, "item_no": lot_no_data[exportDatas.lot_no].item_no }))
      console.log(exportDatas)
    } else {
      console.log("lot_no 값없음")
    }
  }, [exportDatas.lot_no])


  const export_selectDatas = [
    { name: "location", selectOption: location, grid: 1 },
    { name: "from_warehouse", selectOption: warehouse_codes, grid: 1 },
    { name: "lot_no", selectOption: lot_nos, grid: 1 },
    { name: "unit", selectOption: unit, grid: 1 },
    { name: "item_name", selectOption: item_names, grid: 1 },
    { name: "customer", selectOption: customers, grid: 1 },
  ]
  const export_inputDatas = [
    // { name: "item_no", type: "text", value: exportDatas.item_no, purpose: "create" },
    // { name: "weight", type: "number", value: exportDatas.weight, purpose: "create" },
    // { name: "thickness", type: "number", value: exportDatas.thickness, purpose: "create" },
    // { name: "height", type: "number", value: exportDatas.height, purpose: "create" },
    { name: "order_amount", type: "number", value: exportDatas.order_amount, purpose: "create" },
    { name: "ex_amount", type: "number", value: exportDatas.ex_amount, purpose: "create" },
    { name: "ex_remain", type: "number", value: exportDatas.ex_remain, purpose: "create" },
    { name: "order_date", type: "date", value: exportDatas.order_date, purpose: "create" },
    { name: "inst_deadline", type: "date", value: exportDatas.inst_deadline, purpose: "create" },
  ]
  // const [export_inputDatas, setExport_inputDatas] = useState(
  //   [
  //     { name: "item_no", type: "text", value: exportDatas.item_no, purpose: "create" },
  //     { name: "weight", type: "number", value: exportDatas.weight, purpose: "create" },
  //     { name: "thickness", type: "number", value: exportDatas.thickness, purpose: "create" },
  //     { name: "height", type: "number", value: exportDatas.height, purpose: "create" },
  //     { name: "order_amount", type: "number", value: exportDatas.order_amount, purpose: "create" },
  //     { name: "ex_amount", type: "number", value: exportDatas.ex_amount, purpose: "create" },
  //     { name: "ex_remain", type: "number", value: exportDatas.ex_remain, purpose: "create" },
  //     { name: "order_date", type: "date", value: exportDatas.order_date, purpose: "create" },
  //     { name: "inst_deadline", type: "date", value: exportDatas.inst_deadline, purpose: "create" },
  //   ]
  // )

  // function
  function request() {
    console.log(exportDatas)
    axios.defaults.baseURL = logisticsExportURL;
    axios.post('/export', exportDatas)
      .then((res) => {
        alert("출고요청이 등록되었습니다")
        dispatch(handleCreateExportSuc());
        props.setOpenCreate(false)
      })
      .catch((err) => { alert(err) })
  }

  return (
    <div>
      <CreateRequest
        open={props.openCreate}
        setOpen={props.setOpenCreate}
        title="출고요청등록"
        selectDatas={export_selectDatas}
        inputDatas={export_inputDatas}
        datas={exportDatas}
        setDatas={setExportDatas}
        request={request}
      />
    </div>
  )
}

export default CreateExport