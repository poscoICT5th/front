import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { location, product_family, unit } from '../Common/Conditions/SelectOptionsCreate'
import CreateRequest from './CreateRequest'
import { handleCreateImportSuc } from '../../store'
function CreateImport(props) {
    const dispatch = useDispatch();
    let warehouseURL = useSelector((state) => state.warehouseURL)
    let inventoryURL = useSelector((state) => state.inventoryURL)
    let logisticsImportURL = useSelector((state) => state.logisticsImportURL)

    const [warehouse_codes, setWarehouse_codes] = useState([])

    // 입고
    const [importDatas, setImportDatas] = useState({
        location: "",
        product_family: "",
        item_code: "",
        item_name: "",
        to_warehouse: "",
        unit: "",
        weight: 0,
        thickness: 0,
        height: 0,
        order_amount: 0,
        im_amount: 0,
        amount: 0,
        width: 0,
        customer: "",
        industry_family: "",
        order_date: "",
        inst_deadline: "",
    })
    // 지역정보 보내면 창고목록 가져오기
    useEffect(() => {
        axios.defaults.baseURL = warehouseURL
        axios.get(`warehouse/${importDatas.location}`)
            .then((res) => {
                setWarehouse_codes([])
                for (let index = 0; index < res.data.length; index++) {
                    setWarehouse_codes(warehouse_codes => [...warehouse_codes, res.data[index].warehouse_code])
                }
            })
            .catch((err) => { })
    }, [importDatas.location])



    const import_selectDatas = [
        { name: "location", selectOption: location, grid: 1 },
        { name: "product_family", selectOption: product_family, grid: 1 },
        { name: "unit", selectOption: unit, grid: 1 },
        { name: "to_warehouse", selectOption: warehouse_codes, grid: 1 },
    ];
    const import_inputDatas = [
        { name: "customer", type: "text", purpose: "create" },
        { name: "industry_family", type: "text", purpose: "create" },
        { name: "item_code", type: "text", purpose: "create" },
        { name: "item_name", type: "text", purpose: "create" },
        { name: "weight", type: "number", purpose: "create" },
        { name: "thickness", type: "number", purpose: "create" },
        { name: "height", type: "number", purpose: "create" },
        { name: "order_amount", type: "number", purpose: "create" },
        { name: "im_amount", type: "number", purpose: "create" },
        { name: "amount", type: "number", purpose: "create" },
        { name: "order_date", type: "date", purpose: "create" },
        { name: "inst_deadline", type: "date", purpose: "create" },
    ];

    // function
    function request() {
        console.log(importDatas)
        axios.defaults.baseURL = logisticsImportURL
        axios
            .post("/import", importDatas)
            .then((res) => {
                alert("입고요청이 등록되었습니다.")
                dispatch(handleCreateImportSuc(true))
                props.setOpenCreate(false)
                dispatch(handleCreateImportSuc(false))
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
                title="입고등록"
                selectDatas={import_selectDatas}
                inputDatas={import_inputDatas}
                datas={importDatas}
                setDatas={setImportDatas}
                request={request}
            />
        </div>
    )
}

export default CreateImport