import React, { useEffect, useState } from 'react'
import { unit, location, product_family, statusImport } from '../Common/Conditions/SelectOptions';
import SearchSelect from '../Common/Conditions/SearchSelect'
import InputText from '../Common/Conditions/InputText'
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Collapse } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';

function SearchLogisticsImport(props) {
    // useEffect
    // 지역에 따라서 창고목록변경
    let WarehouseUrl = useSelector((state) => state.warehouseURL)
    let InventoryURL = useSelector((state) => state.inventoryURL)
    const [warehouse_codes, setWarehouse_codes] = useState(["전체보기"])
    const [item_names, setItem_names] = useState(["전체보기"])
    const [customers, setCustomers] = useState(["전체보기"])
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
    // 지역에따라서 고객처변경
    useEffect(() => {
        axios.defaults.baseURL = InventoryURL
        axios.get(`inventory/customer/${props.datas.location}`)
            .then((res) => {
                setCustomers(["전체보기"])

                for (let index = 0; index < res.data.length; index++) {
                    setCustomers(customers => [...customers, res.data[index].customer])
                }
            })
            .catch((err) => { })
    }, [props.datas.location])

    const selectDatas = [
        { name: "location", selectOption: location, grid: 1, purpose: "search" },
        { name: "status", selectOption: statusImport, grid: 1, purpose: "search" },
        { name: "product_family", selectOption: product_family, grid: 1, purpose: "search" },
        { name: "unit", selectOption: unit, grid: 1, purpose: "search" },
        { name: "item_name", selectOption: item_names, grid: 1, purpose: "search" },
        { name: "warehouse_code", selectOption: warehouse_codes, grid: 1, purpose: "search" },
        { name: "customer", selectOption: customers, grid: 1, purpose: "search" },
    ]
    const inputRangeDatas = [
        // { name: "width", inputMin: "min_width", inputMax: "max_width", purpose: "search" },
        // { name: "thickness", inputMin: "min_thickness", inputMax: "max_thickness", purpose: "search" },
        // { name: "height", inputMin: "min_height", inputMax: "max_height", purpose: "search" },
        // { name: "weight", inputMin: "min_weight", inputMax: "max_weight", purpose: "search" },
        // { name: "order_amount", inputMin: "min_order_amount", inputMax: "max_order_amount", purpose: "search" },
        // { name: "im_amount", inputMin: "min_im_amount", inputMax: "max_im_amount", purpose: "search" },
    ]
    const inputDatas = [
        { name: "min_width", type: "number", purpose: "search" },
        { name: "max_width", type: "number", purpose: "search" },
        { name: "min_thickness", type: "number", purpose: "search" },
        { name: "max_thickness", type: "number", purpose: "search" },
        { name: "min_height", type: "number", purpose: "search" },
        { name: "max_height", type: "number", purpose: "search" },
        { name: "min_weight", type: "number", purpose: "search" },
        { name: "max_weight", type: "number", purpose: "search" },
        { name: "min_order_amount", type: "number", purpose: "search" },
        { name: "max_order_amount", type: "number", purpose: "search" },
        { name: "min_im_amount", type: "number", purpose: "search" },
        { name: "max_im_amount", type: "number", purpose: "search" },
        { name: "lot_no", type: "text", purpose: "search" },
        { name: "item_no", type: "text", purpose: "search" },
        { name: "industry_family", type: "text", purpose: "search" },
        { name: "order_date", type: "date", purpose: "search" },
        { name: "inst_deadline", type: "date", purpose: "search" },
    ]
    const { Panel } = Collapse;
    return (
        <div className="overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 sm:p-6 rounded-lg">
                {/* select */}
                <div className="grid grid-cols-9 gap-4 text-center">
                    {selectDatas.map((selectData) => {
                        return <SearchSelect setDatas={props.setDatas} datas={props.datas} name={selectData.name} selectData={selectData.selectOption} grid={selectData.grid} />
                    })}
                    {/* <div className="col-span-1"> */}
                    <button
                        className="mt-5 col-span-1 inline-flex justify-center py-1 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                        onClick={() => { props.setClickDelete(true) }}
                    >
                        삭제
                    </button>
                    <button
                        className="mt-5 col-span-1 inline-flex justify-center py-1 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-sky-500 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                        onClick={() => { props.setClickSearch(true) }}
                    >
                        조회
                    </button>
                    {/* </div> */}
                </div>

                <Collapse
                    bordered={false}
                    defaultActiveKey={[]}
                    expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                    className="site-collapse-custom-collapse"
                >
                    <Panel header="상세검색" key="1" className="site-collapse-custom-panel">
                        {/* inputRange */}
                        {/* <div className="grid grid-cols-6 gap-4 text-center">
                            {inputRangeDatas.map((inputRangeData) => {
                                return <InputRange setDatas={props.setDatas} datas={props.datas} name={inputRangeData.name} min={inputRangeData.inputMin} max={inputRangeData.inputMax} />
                            })}
                        </div> */}
                        {/* inputText */}
                        <div className="grid grid-cols-6 gap-4 text-center mt-5">
                            {inputDatas.map((inputData) => {
                                return <InputText setDatas={props.setDatas} datas={props.datas} name={inputData.name} type={inputData.type} />
                            })}
                        </div>
                    </Panel>
                </Collapse>
            </div>

        </div>
    )
}

export default SearchLogisticsImport