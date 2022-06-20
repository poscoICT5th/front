import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { location, product_family, unit } from '../Common/Conditions/SelectOptionsCreate'
import CreateRequest from './CreateRequest'
import { handleExportReload } from '../../store'

function CreateExport(props) {
  const dispatch = useDispatch();
  let warehouseURL = useSelector((state) => state.warehouseURL)
  let inventoryURL = useSelector((state) => state.inventoryURL)
  let logisticsExportURL = useSelector((state) => state.logisticsExportURL)
  // let exportReload = useSelector((state) => state.exportReload)

  const [warehouse_codes, setWarehouse_codes] = useState([])
  const [item_names, setItem_names] = useState([])
  const [customers, setCustomers] = useState([])
  const [lot_nos, setLot_nos] = useState([])
  const [lot_no_data, setLot_no_data] = useState({})
  // 출고
  const [exportDatas, setExportDatas] = useState({
    lot_no: "",
    item_code: "",
    item_name: "",
    order_amount: 0,
    ex_amount: 0,
    ex_remain: 0,
    unit: "",
    weight: 0,
    width: 0,
    thickness: 0,
    height: 0,
    product_family: "",
    location: "",
    from_warehouse: "",
    customer: "",
    order_date: "",
    inst_deadline: "",

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
      setExportDatas(exportDatas =>
      ({
        ...exportDatas,
        "height": lot_no_data[exportDatas.lot_no].height,
        "thickness": lot_no_data[exportDatas.lot_no].thickness,
        "weight": lot_no_data[exportDatas.lot_no].weight,
        "width": lot_no_data[exportDatas.lot_no].width,
        "item_code": lot_no_data[exportDatas.lot_no].item_code,
        "item_name": lot_no_data[exportDatas.lot_no].item_name
      }))
    } else {

    }
  }, [exportDatas.lot_no])

  const export_selectDatas = [
    { name: "location", selectOption: location, grid: 1, "purpose": "create", "ko": "지역", "cn": "地域", "jp": "地域", "vn": "khu vực" },
    { name: "from_warehouse", selectOption: warehouse_codes, grid: 1, purpose: "create", "ko": "출발창고", "cn": "出发仓库", "jp": "出発倉庫", "vn": "kho xuất phát" },
    { name: "lot_no", selectOption: lot_nos, grid: 1, purpose: "create", "ko": "롯트번호", "cn": "LOT", "jp": "LOT", "vn": "LOT" },
    { name: "unit", selectOption: unit, grid: 1, purpose: "create", "ko": "단위", "cn": "单位", "jp": "単位", "vn": "đơn vị" },
    { name: "customer", selectOption: customers, grid: 1, purpose: "create", "ko": "고객사", "cn": "客户公司", "jp": "顧客会社", "vn": "công ty khách hàng" },
    { name: "product_family", selectOption: product_family, grid: 1, purpose: "create", "ko": "제품군", "cn": "产品群", "jp": "製品群", "vn": "dòng sản phẩm" },
  ]
  const export_inputDatas = [
    { name: "order_amount", type: "number", purpose: "create", "ko": "주문량", "cn": "订货量", "jp": "注文量", "vn": "lượng đặt hàng", },
    { name: "ex_amount", type: "number", purpose: "create", "ko": "출고량", "cn": "出库量", "jp": "出庫量", "vn": "lượng xuất kho", },
    { name: "ex_remain", type: "number", purpose: "create", "ko": "출고잔량", "cn": "出库余量", "jp": "出庫残量", "vn": "số dư xuất kho", },
    { name: "order_date", type: "date", purpose: "create", "ko": "주문일", "cn": "订货日", "jp": "注文日", "vn": "ngày đặt hàng", },
    { name: "inst_deadline", type: "date", purpose: "create", "ko": "지시마감일", "cn": "截止日期", "jp": "指示締切日", "vn": "ngày hết hạn chỉ thị", },
  ]
  // function
  function request() {
    console.log(exportDatas)
    axios.defaults.baseURL = logisticsExportURL;
    axios.post('/export', exportDatas)
      .then((res) => {
        alert("출고요청이 등록되었습니다")
        dispatch(handleExportReload(true));
        props.setOpenCreate(false)
        dispatch(handleExportReload(false));
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