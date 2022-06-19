import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CreateRequest from './CreateRequest'
import { location, unit } from '../Common/Conditions/SelectOptionsCreate'
import { handleMoveReload } from '../../store'

function CreateMove(props) {
    const dispatch = useDispatch();

    let logisticsMoveURL = useSelector((state) => state.logisticsMoveURL)
    let warehouseUrl = useSelector((state) => state.warehouseURL)
    let inventoryURL = useSelector((state) => state.inventoryURL)
    axios.defaults.baseURL = logisticsMoveURL
    const [warehouse_codes, setWarehouse_codes] = useState([])
    const [item_names, setItem_names] = useState([])
    const [lot_nos, setLot_nos] = useState([])
    const [lot_no_data, setLot_no_data] = useState({})
    const [moveDatas, setMoveDatas] = useState({
        lot_no: "",
        item_code: "",
        item_name: "",
        move_amount: 0,
        unit: "",
        weight: 0,
        width: 0,
        thickness: 0,
        height: 0,
        location: "",
        from_warehouse: "",
        to_warehouse: "",
        inst_deadline: "",
    })
    // useEffect
    // 지역에 따라서 창고목록변경
    useEffect(() => {
        axios.defaults.baseURL = warehouseUrl
        axios.get(`warehouse/${moveDatas.location}`)
            .then((res) => {
                setWarehouse_codes([])
                for (let index = 0; index < res.data.length; index++) {
                    setWarehouse_codes(warehouse_codes => [...warehouse_codes, res.data[index].warehouse_code])
                }
                // console.log(warehouse_codes)
            })
            .catch((err) => { })
    }, [moveDatas.location])

    // 지역에따라서 아이템명변경
    useEffect(() => {
        axios.defaults.baseURL = inventoryURL
        axios.get(`inventory/${moveDatas.location}`)
            .then((res) => {
                setItem_names([])
                for (let index = 0; index < res.data.length; index++) {
                    setItem_names(warehouse_codes => [...warehouse_codes, res.data[index].item_name])
                }
                // console.log(warehouse_codes)
            })
            .catch((err) => { })
    }, [moveDatas.location])

    // 지역, 창고값을 보내면 lot번호 불러오기
    useEffect(() => {
        axios.defaults.baseURL = inventoryURL
        axios.get(`/location/${moveDatas.location}/warehouse/${moveDatas.from_warehouse}`)
            .then((res) => {
                setLot_nos([])
                for (let index = 0; index < res.data.length; index++) {
                    setLot_nos(lot_nos => ([...lot_nos, res.data[index].lot_no]))
                    setLot_no_data(lot_no_data => ({ ...lot_no_data, [res.data[index].lot_no]: res.data[index] }))
                }
            })
            .catch((err) => { })
    }, [moveDatas.from_warehouse])

    useEffect(() => {
        if (moveDatas.lot_no) {
            setMoveDatas(moveDatas =>
            ({
                ...moveDatas,
                "height": lot_no_data[moveDatas.lot_no].height,
                "thickness": lot_no_data[moveDatas.lot_no].thickness,
                "weight": lot_no_data[moveDatas.lot_no].weight,
                "width": lot_no_data[moveDatas.lot_no].width,
                "item_code": lot_no_data[moveDatas.lot_no].item_code,
                "item_name": lot_no_data[moveDatas.lot_no].item_name
            }))
        } else {
            console.log("lot_no 값없음")
        }
    }, [moveDatas.lot_no])

    const move_selectDatas = [
        { name: "location", selectOption: location, grid: 1, purpose: "create", "ko": "롯트번호", "cn": "LOT", "jp": "LOT", "vn": "LOT" },
        { name: "from_warehouse", selectOption: warehouse_codes, grid: 1, purpose: "create", "ko": "출발창고", "cn": "出发仓库", "jp": "出発倉庫", "vn": "kho xuất phát" },
        { name: "to_warehouse", selectOption: warehouse_codes, grid: 1, purpose: "create", "ko": "출발창고", "cn": "出发仓库", "jp": "出発倉庫", "vn": "kho xuất phát" },
        { name: "lot_no", selectOption: lot_nos, grid: 1, purpose: "create", "ko": "롯트번호", "cn": "LOT", "jp": "LOT", "vn": "LOT" },
        { name: "unit", selectOption: unit, grid: 1, purpose: "create", "ko": "단위", "cn": "单位", "jp": "単位", "vn": "đơn vị" },

    ]
    const move_inputDatas = [
        { name: "move_amount", type: "number", purpose: "create", "ko": "이동량", "cn": "移动量", "jp": "移動量", "vn": "lượng di chuyển", },
        { name: "inst_deadline", type: "date", purpose: "create", "ko": "지시마감일", "cn": "截止日期", "jp": "指示締切日", "vn": "ngày hết hạn chỉ thị", },
    ]

    // function
    function request(params) {
        console.log(moveDatas)
        axios.post('/move',
            moveDatas)
            .then((res) => {
                alert("창고이동요청이 등록되었습니다")
                dispatch(handleMoveReload(true));
                props.setOpenCreate(false)
                dispatch(handleMoveReload(false));
            })
            .catch((err) => { alert(err) })
    }
    return (
        <div>
            <CreateRequest
                open={props.openCreate}
                setOpen={props.setOpenCreate}
                title="창고이동등록"
                selectDatas={move_selectDatas}
                inputDatas={move_inputDatas}
                datas={moveDatas}
                setDatas={setMoveDatas}
                request={request}
            />
        </div>
    )
}

export default CreateMove