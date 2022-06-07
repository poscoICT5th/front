import React, { useEffect, useState } from 'react'
import { location, warehouse_code, stock_type, status_cause, stock_quality_status, product_family, target, industry_family, customer } from '../Common/Conditions/SelectOptions';
import SearchSelect from '../Common/Conditions/SearchSelect'
import InputText from '../Common/Conditions/InputText'
import { useSelector } from 'react-redux';
import axios from 'axios';

function SearchWarehouse(props) {
    // 지역에 따라서 창고목록변경
    let url = useSelector((state) => state.warehouseURL)
    const [warehouse_codes, setWarehouse_codes] = useState(["전체보기"])
    useEffect(() => {
        axios.defaults.baseURL = url
        axios.get(`warehouse/${props.datas.location}`)
            .then((res) => {
                setWarehouse_codes(["전체보기"])
                for (let index = 0; index < res.data.length; index++) {
                    setWarehouse_codes(warehouse_codes => [...warehouse_codes, res.data[index].warehouse_code])
                }
                // console.log(warehouse_codes)
            })
            .catch((err) => { console.log(err) })
    }, [props.datas.location])
    const selectDatas = [
        { name: "industry_family", selectOption: industry_family, grid: 1 },
        { name: "customer", selectOption: customer, grid: 1 },
        { name: "stock_type", selectOption: stock_type, grid: 1 },
        { name: "stock_quality_status", selectOption: stock_quality_status, grid: 1 },
        { name: "status_cause", selectOption: status_cause, grid: 1 },
        { name: "location", selectOption: location, grid: 1 },
        { name: "product_family", selectOption: product_family, grid: 1 },
        { name: "warehouse_codes", selectOption: warehouse_codes, grid: 1 },
        { name: "target", selectOption: target, grid: 1 },
    ]
    const inputDatas = [
        { name: "품번", type: "text" },
        { name: "재고생성일", type: "number" },
        { name: "최대적치매수", type: "number" },
        { name: "최대적치매수", type: "number" },
    ]
    const dateDatas = [
        { name: "창고입고일", type: "text" },
        { name: "창고경과일", type: "text" },
    ]
    return (
        <div className="overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 bg-white sm:p-6 rounded-lg">
                {/* select */}
                <div className="grid grid-cols-5 gap-4 text-center mb-5">
                    {selectDatas.map((selectData) => {
                        return <SearchSelect setDatas={props.setDatas} datas={props.datas} name={selectData.name} selectData={selectData.selectOption} grid={selectData.grid} />
                    })}
                </div>
                {/* inputRange / inputText */}
                <div className="grid grid-cols-3 gap-4 text-center">
                    {inputDatas.map((inputData) => {
                        return <InputText setDatas={props.setDatas} datas={props.datas} name={inputData.name} type={inputData.type} />
                    })}
                </div>
            </div>
            <div className="px-4 py-3 text-right">
                <button
                    className="mr-1 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                    onClick={() => { props.search() }}
                >
                    삭제
                </button>
                <button
                    className="mr-1 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                    onClick={() => { props.search() }}
                >
                    조건조회
                </button>
                <button
                    className="mr-1  inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                    onClick={() => { props.searchAll() }}
                >
                    전체조회
                </button>
            </div>
        </div>
    )
}

export default SearchWarehouse