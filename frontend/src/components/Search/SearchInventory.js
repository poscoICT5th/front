import React, { useEffect, useState } from 'react'
import { location, stock_type, status_cause, stock_quality_status, product_family, industry_family } from '../Common/Conditions/SelectOptions';
import SearchSelect from '../Common/Conditions/SearchSelect'
import InputText from '../Common/Conditions/InputText'
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Collapse } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';

function SearchWarehouse(props) {
    // useEffect
    // 지역에 따라서 창고목록변경
    let WarehouseUrl = useSelector((state) => state.warehouseURL)
    let InventoryURL = useSelector((state) => state.inventoryURL)
    const [warehouse_codes, setWarehouse_codes] = useState(["전체보기"])
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
        { name: "industry_family", selectOption: industry_family, grid: 1 },
        { name: "stock_type", selectOption: stock_type, grid: 1 },
        { name: "stock_quality_status", selectOption: stock_quality_status, grid: 1 },
        { name: "status_cause", selectOption: status_cause, grid: 1 },
        { name: "location", selectOption: location, grid: 1 },
        { name: "product_family", selectOption: product_family, grid: 1 },
        { name: "warehouse_codes", selectOption: warehouse_codes, grid: 1 },
        { name: "customer", selectOption: customers, grid: 1 },
    ]
    const inputDatas = [
        { name: "품번", type: "text" },
        { name: "재고생성일", type: "number" },
        { name: "최대적치매수", type: "number" },
        { name: "최대적치매수", type: "number" },
        { name: "창고입고일", type: "date" },
        { name: "창고경과일", type: "date" },
    ]
    const { Panel } = Collapse;
    return (
        <div className="overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 sm:p-6 rounded-lg">
                {/* select */}
                <div className="grid grid-cols-10 gap-4 text-center">
                    {selectDatas.map((selectData) => {
                        return <SearchSelect setDatas={props.setDatas} datas={props.datas} name={selectData.name} selectData={selectData.selectOption} grid={selectData.grid} />
                    })}
                    <button
                        className="mt-5 inline-flex justify-center py-1 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                        onClick={() => { props.setClickDelete(true) }}
                    >
                        삭제
                    </button>
                    <button
                        className="mt-5 inline-flex justify-center py-1 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-sky-500 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                        onClick={() => { props.setClickSearch(true) }}
                    >
                        조회
                    </button>
                </div>
                <Collapse
                    bordered={false}
                    defaultActiveKey={[]}
                    expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                    className="site-collapse-custom-collapse"
                >
                    <Panel header="상세검색" key="1" className="site-collapse-custom-panel">
                        <div className="grid grid-cols-6 gap-4 text-center">
                            {inputDatas.map((inputData) => {
                                return <InputText setDatas={props.setDatas} datas={props.datas} name={inputData.name} type={inputData.type} />
                            })}
                        </div>
                    </Panel>
                </Collapse>
            </div>
            <div className="px-4 py-3 text-right">
            </div>
        </div>
    )
}

export default SearchWarehouse