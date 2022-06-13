import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CreateRequest from './CreateRequest'
import { location, unit } from '../Common/Conditions/SelectOptionsCreate'
import { handleCreateMoveSuc } from '../../store'

function CreateMove(props) {
    const dispatch = useDispatch();

    let logisticsMoveURL = useSelector((state) => state.logisticsMoveURL)
    let warehouseUrl = useSelector((state) => state.warehouseURL)
    let inventoryURL = useSelector((state) => state.inventoryURL)
    axios.defaults.baseURL = logisticsMoveURL
    const [warehouse_codes, setWarehouse_codes] = useState([])
    const [item_names, setItem_names] = useState([])
    const [moveDatas, setMoveDatas] = useState({
        location: "",
        lot_no: "",
        item_no: "",
        item_name: "",
        width: 0,
        weight: 0,
        thickness: 0,
        height: 0,
        move_amount: 0,
        from_warehouse: "",
        to_warehouse: "",
        inst_deadline: "",
        unit: "",
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


    const move_selectDatas = [
        { name: "location", selectOption: location, grid: 1 },
        { name: "unit", selectOption: unit, grid: 1 },
        { name: "from_warehouse", selectOption: warehouse_codes, grid: 1 },
        { name: "to_warehouse", selectOption: warehouse_codes, grid: 1 },
        { name: "item_name", selectOption: item_names, grid: 1 },
    ]
    const move_inputDatas = [
        { name: "lot_no", type: "text", purpose: "create" },
        { name: "item_no", type: "text", purpose: "create" },
        { name: "width", type: "number", purpose: "create" },
        { name: "weight", type: "number", purpose: "create" },
        { name: "thickness", type: "number", purpose: "create" },
        { name: "height", type: "number", purpose: "create" },
        { name: "move_amount", type: "number", purpose: "create" },
        { name: "inst_deadline", type: "date", purpose: "create" },
    ]

    // function
    function request(params) {
        axios.post('/move',
            moveDatas)
            .then((res) => {
                alert("창고이동요청이 등록되었습니다")
                dispatch(handleCreateMoveSuc());
                props.setOpenCreate(false)
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