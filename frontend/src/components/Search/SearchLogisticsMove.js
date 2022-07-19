import React, { useEffect, useState } from 'react'
import SearchSelect from '../Common/Conditions/SearchSelect'
import InputText from '../Common/Conditions/InputText'
import { statusMove, location } from '../Common/Conditions/SelectOptions';
import { useSelector } from 'react-redux';
import axios from 'axios';
import jwtDecode from "jwt-decode";

function SearchLogisticsMove(props) {
    // useEffect
    // 지역에 따라서 창고목록변경
    let WarehouseUrl = useSelector((state) => state.warehouseURL)
    let InventoryURL = useSelector((state) => state.inventoryURL)
    const [warehouse_codes, setWarehouse_codes] = useState(["전체보기"])
    const [item_names, setItem_names] = useState(["전체보기"])
    useEffect(() => {
        axios.defaults.baseURL = WarehouseUrl
        axios.get(`warehouse/${props.datas.location}`)
            .then((res) => {
                setWarehouse_codes(["전체보기"])
                for (let index = 0; index < res.data.length; index++) {
                    setWarehouse_codes(warehouse_codes => [...warehouse_codes, res.data[index].warehouse_code])
                }
            })
            .catch((err) => { })
    }, [props.datas.location])
    // 지역에따라서 아이템명변경
    useEffect(() => {
        axios.defaults.baseURL = InventoryURL
        axios.get(`inventory/${props.datas.location}`)
            .then((res) => {
                setItem_names(["전체보기"])

                for (let index = 0; index < res.data.length; index++) {
                    setItem_names(item_names => [...item_names, res.data[index].item_name])
                }
            })
            .catch((err) => { })
    }, [props.datas.location])

    const selectDatas = [
        { name: "location", selectOption: location, grid: 1, purpose: "search", "ko": "지역", "cn": "地域", "jp": "地域", "vn": "khu vực" },
        { name: "status", selectOption: statusMove, grid: 1, purpose: "search", "ko": "상태", "cn": "状态", "jp": "状態", "vn": "trạng thái" },
        { name: "from_warehouse", selectOption: warehouse_codes, purpose: "search", grid: 1, "ko": "출발창고", "cn": "出发仓库", "jp": "出発倉庫", "vn": "kho xuất phát" },
        { name: "to_warehouse", selectOption: warehouse_codes, purpose: "search", grid: 1, "ko": "도착창고", "cn": "到货仓库", "jp": "到着倉庫", "vn": "kho đến nơi" },
        { name: "item_name", selectOption: item_names, grid: 1, purpose: "search", "ko": "제품명", "cn": "产品名称", "jp": "製品名", "vn": "Tên sản phẩm là" },
    ]
    const inputDatas = [
        { name: "lot_no", type: "text", purpose: "search", "ko": "롯트번호", "cn": "LOT", "jp": "LOT", "vn": "LOT" },
        { name: "item_code", type: "text", purpose: "search", "ko": "제품코드", "cn": "产品代码", "jp": "製品コード", "vn": "mã sản phẩm" },
        { name: "inst_reg_date", type: "date", purpose: "search", "ko": "지시등록일", "cn": "指示登记日", "jp": "指示登録日", "vn": "ngày đăng ký chỉ thị" },
        { name: "inst_deadline", type: "date", purpose: "search", "ko": "지시마감일", "cn": "截止日期", "jp": "指示締切日", "vn": "ngày hết hạn chỉ thị" },
        { name: "done_date", type: "date", purpose: "search", "ko": "완료일", "cn": "完成日期", "jp": "完了日", "vn": "ngày hoàn thành" },
    ]
    const [auth, setAuth] = useState("1")
    useEffect(() => {
        setAuth(jwtDecode(sessionStorage.getItem("token")).info.auth)
    }, [])
    return (
        <div className="overflow-hidden sm:rounded-md">
            <div className="py-5 rounded-lg">
                <div className="grid grid-cols-10 gap-4 text-center">
                    {selectDatas.map((selectData) => {
                        return <SearchSelect
                            setDatas={props.setDatas}
                            datas={props.datas}
                            name={selectData.name}
                            selectData={selectData.selectOption}
                            purpose={selectData.purpose}
                            grid={selectData.grid}
                            ko={selectData.ko}
                            cn={selectData.cn}
                            vn={selectData.cn}
                            jp={selectData.jp}
                        />
                    })}
                    {inputDatas.map((inputData) => {
                        return <InputText
                            setDatas={props.setDatas}
                            datas={props.datas}
                            name={inputData.name}
                            type={inputData.type}
                            purpose={inputData.purpose}
                            ko={inputData.ko}
                            cn={inputData.cn}
                            vn={inputData.cn}
                            jp={inputData.jp}
                        />
                    })}

                </div>
                <div className='text-right mt-5'>
                    {
                        auth === '1'
                            ? <>
                                <button
                                    className="mt-2 mr-2 w-20 inline-flex justify-center py-1 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-teal-500 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                                    onClick={() => {
                                        if (props.selectedList.length > 0) { props.setAlertVerifyOpen(true); props.setClickButton("rollback") }
                                        else { props.setAlertMessage("항목을 선택해주세요"); props.setAlertFailedOpen(true) }
                                    }}
                                >
                                    되돌리기
                                </button>
                                <button
                                    className="mt-2 mr-2 justify-center py-1 border border-transparent shadow-sm text-sm font-medium rounded-md w-20 text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                    onClick={() => {
                                        if (props.selectedList.length > 0) { props.setAlertVerifyOpen(true); props.setClickButton("delete") }
                                        else { props.setAlertMessage("항목을 선택해주세요"); props.setAlertFailedOpen(true) }
                                    }}>
                                    요청취소
                                </button>
                            </>
                            : null
                    }
                    <button
                        className="mt-2 mr-2 justify-center py-1 border border-transparent shadow-sm text-sm font-medium rounded-md w-20 text-white bg-teal-500 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                        onClick={() => { props.setClickSearch(true) }}>
                        조회
                    </button>
                    <button
                        className="mr-1 mt-2 w-24 inline-flex justify-center py-1 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-teal-500 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                        onClick={() => { props.setClickBarcodePrint(true) }}
                    >
                        바코드출력
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SearchLogisticsMove