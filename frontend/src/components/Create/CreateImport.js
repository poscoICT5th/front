import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { location, product_family, unit } from '../Common/Conditions/SelectOptionsCreate'
import CreateRequest from './CreateRequest'
import { handleImportReload } from '../../store'
import CreateImportUpload from './CreateImportUpload'


function CreateImport(props) {
    const dispatch = useDispatch();
    let warehouseURL = useSelector((state) => state.warehouseURL)
    let inventoryURL = useSelector((state) => state.inventoryURL)

    const [warehouse_codes, setWarehouse_codes] = useState([])

    // 입고
    const [importDatas, setImportDatas] = useState({
        item_code: "",
        item_name: "",
        order_amount: 0,
        im_amount: 0,
        unit: "",
        weight: 0,
        width: 0,
        thickness: 0,
        height: 0,
        industry_family: "",
        product_family: "",
        location: "",
        to_warehouse: "",
        customer: "",
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
        { name: "location", selectOption: location, grid: 1, purpose: "create", "ko": "지역", "cn": "地域", "jp": "地域", "vn": "khu vực" },
        { name: "product_family", selectOption: product_family, grid: 1, purpose: "create", "ko": "제품군", "cn": "产品群", "jp": "製品群", "vn": "dòng sản phẩm" },
        { name: "unit", selectOption: unit, grid: 1, purpose: "create", "ko": "단위", "cn": "单位", "jp": "単位", "vn": "đơn vị" },
        { name: "to_warehouse", selectOption: warehouse_codes, grid: 1, purpose: "create", "ko": "창고코드", "cn": "仓库代码", "jp": "倉庫コード", "vn": "mã kho" },

    ];
    const import_inputDatas = [
        { name: "customer", type: "text", purpose: "create", "ko": "고객사", "cn": "客户公司", "jp": "顧客会社", "vn": "công ty khách hàng", },
        { name: "industry_family", type: "text", purpose: "create", "ko": "산업군", "cn": "产业群", "jp": "産業群", "vn": "lực lượng công nghiệp" },
        { name: "item_code", type: "text", purpose: "create", "ko": "제품코드", "cn": "产品代码", "jp": "製品コード", "vn": "mã sản phẩm" },
        { name: "item_name", type: "text", purpose: "create", "ko": "제품명", "cn": "产品名称", "jp": "製品名", "vn": "Tên sản phẩm là" },
        { name: "weight", type: "number", purpose: "create", "ko": "무게", "cn": "份量", "jp": "重さ", "vn": "trọng lượng", },
        { name: "thickness", type: "number", purpose: "create", "ko": "두께", "cn": "厚度", "jp": "厚さ", "vn": "độ dày" },
        { name: "height", type: "number", purpose: "create", "ko": "높이", "cn": "高度", "jp": "高さ", "vn": "chiều cao", },
        { name: "width", type: "number", purpose: "create", "ko": "넓이", "cn": "广度", "jp": "広さ", "vn": "bề rộng", },
        { name: "order_amount", type: "number", purpose: "create", "ko": "주문량", "cn": "订货量", "jp": "注文量", "vn": "lượng đặt hàng", },
        { name: "im_amount", type: "number", purpose: "create", "ko": "입고수량", "cn": "入库数量", "jp": "入庫数量", "vn": "số lượng nhập kho", },
        { name: "order_date", type: "date", purpose: "create", "ko": "주문일", "cn": "订货日", "jp": "注文日", "vn": "ngày đặt hàng", },
        { name: "inst_deadline", type: "date", purpose: "create", "ko": "지시마감일", "cn": "截止日期", "jp": "指示締切日", "vn": "ngày hết hạn chỉ thị" },
    ];




    return (
        <div>
            {/* <CreateRequest
                open={props.openCreate}
                setOpen={props.setOpenCreate}
                title="입고등록"
                selectDatas={import_selectDatas}
                inputDatas={import_inputDatas}
                datas={importDatas}
                setDatas={setImportDatas}
                request={request}
            /> */}
            <CreateImportUpload
                open={props.openCreate}
                setOpen={props.setOpenCreate}
            />
        </div>
    )
}

export default CreateImport