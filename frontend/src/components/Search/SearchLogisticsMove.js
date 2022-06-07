import React, { useEffect, useState } from 'react'
import SearchSelect from '../Common/Conditions/SearchSelect'
import InputText from '../Common/Conditions/InputText'
import InputRange from '../Common/Conditions/InputRange'
import { unit, statusMove, item_name, location, product_family } from '../Common/Conditions/SelectOptions';
import { useSelector } from 'react-redux';
import axios from 'axios';

function SearchLogisticsMove(props) {
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
        { name: "from_warehouse", selectOption: warehouse_codes, grid: 1 },
        { name: "to_warehouse", selectOption: warehouse_codes, grid: 1 },
        { name: "location", selectOption: location, grid: 1 },
        { name: "status", selectOption: statusMove, grid: 1 },
        { name: "product_family", selectOption: product_family, grid: 1 },
        { name: "unit", selectOption: unit, grid: 1 },
        { name: "item_name", selectOption: item_name, grid: 2 },
    ]
    const inputRangeDatas = [
        { name: "width", inputMin: "min_width", inputMax: "max_width" },
        { name: "thickness", inputMin: "min_thickness", inputMax: "max_thickness" },
        { name: "height", inputMin: "min_height", inputMax: "max_height" },
        { name: "weight", inputMin: "min_weight", inputMax: "max_weight" },
        { name: "move_amount", inputMin: "min_move_amount", inputMax: "max_move_amount" },
    ]
    const inputDatas = [
        { name: "lot_no", type: "text" },
        { name: "item_no", type: "text" },
        { name: "order_date", type: "date" },
        { name: "inst_deadline", type: "date" },
    ]
    return (
        <div className="overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 bg-white sm:p-6 rounded-lg">
                <div className="grid grid-cols-4 gap-4 text-center mb-5">
                    {selectDatas.map((selectData) => {
                        return <SearchSelect setDatas={props.setDatas} datas={props.datas} name={selectData.name} selectData={selectData.selectOption} grid={selectData.grid} />
                    })}
                </div>
                {/* inputRange */}
                <div className="grid grid-cols-3 gap-4 text-center">
                    {inputRangeDatas.map((inputRangeData) => {
                        return <InputRange setDatas={props.setDatas} datas={props.datas} name={inputRangeData.name} min={inputRangeData.inputMin} max={inputRangeData.inputMax} />
                    })}
                    {/* inputText */}
                    {inputDatas.map((inputData) => {
                        return <InputText setDatas={props.setDatas} datas={props.datas} name={inputData.name} type={inputData.type} />
                    })}
                </div>
            </div>
            <div className="px-4 py-3 text-right">
                <button
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                    onClick={() => { props.search() }}>
                    Search
                </button>
            </div>
        </div>
    )
}

export default SearchLogisticsMove