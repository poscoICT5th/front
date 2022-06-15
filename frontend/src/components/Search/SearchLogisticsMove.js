import React, { useEffect, useState } from 'react'
import SearchSelect from '../Common/Conditions/SearchSelect'
import InputText from '../Common/Conditions/InputText'
import { unit, statusMove, location, product_family } from '../Common/Conditions/SelectOptions';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Collapse } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';

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
        { name: "location", selectOption: location, grid: 1, "ko": "지역", "cn": "", "jp": "", "vn": "" },
        { name: "from_warehouse", selectOption: warehouse_codes, grid: 1, "ko": "출발창고", "cn": "", "jp": "", "vn": "" },
        { name: "to_warehouse", selectOption: warehouse_codes, grid: 1, "ko": "도착창고", "cn": "", "jp": "", "vn": "" },
        { name: "status", selectOption: statusMove, grid: 1, "ko": "상태", "cn": "", "jp": "", "vn": "" },
        { name: "unit", selectOption: unit, grid: 1, "ko": "단위", "cn": "", "jp": "", "vn": "" },
        { name: "item_name", selectOption: item_names, grid: 1, "ko": "제품명", "cn": "", "jp": "", "vn": "" },
    ]
    // const inputRangeDatas = [
    //     { name: "width", inputMin: "min_width", inputMax: "max_width" },
    //     { name: "thickness", inputMin: "min_thickness", inputMax: "max_thickness" },
    //     { name: "height", inputMin: "min_height", inputMax: "max_height" },
    //     { name: "weight", inputMin: "min_weight", inputMax: "max_weight" },
    //     { name: "move_amount", inputMin: "min_move_amount", inputMax: "max_move_amount" },
    // ]
    const inputDatas = [
        { name: "min_width", type: "number", purpose: "search", "ko": "최소너비", "cn": "", "jp": "", "vn": "" },
        { name: "max_width", type: "number", purpose: "search", "ko": "최대너비", "cn": "", "jp": "", "vn": "" },
        { name: "min_thickness", type: "number", purpose: "search", "ko": "최소두께", "cn": "", "jp": "", "vn": "" },
        { name: "max_thickness", type: "number", purpose: "search", "ko": "최대두께", "cn": "", "jp": "", "vn": "" },
        { name: "min_height", type: "number", purpose: "search", "ko": "최소높이", "cn": "", "jp": "", "vn": "" },
        { name: "max_height", type: "number", purpose: "search", "ko": "최대높이", "cn": "", "jp": "", "vn": "" },
        { name: "min_weight", type: "number", purpose: "search", "ko": "최소무게", "cn": "", "jp": "", "vn": "" },
        { name: "max_weight", type: "number", purpose: "search", "ko": "최대무게", "cn": "", "jp": "", "vn": "" },
        { name: "min_move_amount", type: "text", purpose: "search", "ko": "최소이동량", "cn": "", "jp": "", "vn": "" },
        { name: "max_move_amount", type: "text", purpose: "search", "ko": "최대이동량", "cn": "", "jp": "", "vn": "" },
        { name: "lot_no", type: "text", purpose: "search", "ko": "롯트번호", "cn": "", "jp": "", "vn": "" },
        { name: "item_code", type: "text", purpose: "search", "ko": "제품코드", "cn": "", "jp": "", "vn": "" },
        { name: "inst_reg_date", type: "date", purpose: "search", "ko": "지시등록일", "cn": "", "jp": "", "vn": "" },
        { name: "inst_deadline", type: "date", purpose: "search", "ko": "지시마감일", "cn": "", "jp": "", "vn": "" },
        { name: "done_date", type: "date", purpose: "search", "ko": "완료일", "cn": "", "jp": "", "vn": "" },
    ]
    const { Panel } = Collapse;
    return (
        <div className="overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 sm:p-6 rounded-lg">
                <div className="grid grid-cols-9 gap-4 text-center">
                    {selectDatas.map((selectData) => {
                        return <SearchSelect setDatas={props.setDatas} datas={props.datas} name={selectData.name} selectData={selectData.selectOption} grid={selectData.grid} />
                    })}
                    <button
                        className="mt-5 inline-flex justify-center py-1 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                        onClick={() => { props.setClickDelete(true) }}>
                        삭제
                    </button>
                    <button
                        className="mt-5 inline-flex justify-center py-1 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-sky-500 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                        onClick={() => { props.setClickSearch(true) }}>
                        조건조회
                    </button>
                </div>
                <Collapse
                    bordered={false}
                    defaultActiveKey={[]}
                    expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                    className="site-collapse-custom-collapse"
                >
                    <Panel header="상세검색" key="1" className="site-collapse-custom-panel">
                        {/* inputRange */}
                        <div className="grid grid-cols-6 gap-4 text-center">
                            {/* {inputRangeDatas.map((inputRangeData) => {
                            return <InputRange setDatas={props.setDatas} datas={props.datas} name={inputRangeData.name} min={inputRangeData.inputMin} max={inputRangeData.inputMax} />
                        })} */}
                            {inputDatas.map((inputData) => {
                                return <InputText
                                    setDatas={props.setDatas}
                                    datas={props.datas}
                                    name={inputData.name}
                                    type={inputData.type}
                                    ko={inputData.ko}
                                    cn={inputData.cn}
                                    vn={inputData.cn}
                                    jp={inputData.jp}
                                />
                            })}
                        </div>
                    </Panel>
                </Collapse>
            </div>
        </div>
    )
}

export default SearchLogisticsMove