import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Tree } from 'react-tree-graph';
import { AnimatedTree } from 'react-tree-graph';
import './Tracking.css';
import { useSelector } from 'react-redux'
import { location } from '../Common/Conditions/SelectOptionsCreate'
import SearchSelect from '../Common/Conditions/SearchSelect';


function Tracking() {
    let warehouseURL = useSelector((state) => state.warehouseURL)
    let inventoryURL = useSelector((state) => state.inventoryURL)
    let traceBack = useSelector((state) => state.traceBack)

    const [warehouse_codes, setWarehouse_codes] = useState([])
    const [lot_nos, setLot_nos] = useState([])
    const [lot_no_data, setLot_no_data] = useState({})
    const [data, setData] = useState(
        {
            "id": "62bff2ba4a38fd1d61bdc54a",
            "lot_no": "testlot123123",
            "name": "testitem",
            "item_code": "testitemcode",
            "amount": 321,
            "stock_quality_status": "불합격",
            "stock_cause": "스크래치",
            "children": [
                {
                    "id": "62bd0ad39c099c6840fc3731",
                    "lot_no": "RT2206221609319319",
                    "name": "test중임",
                    "item_code": "asdfokok",
                    "amount": 4,
                    "stock_quality_status": "",
                    "stock_cause": "",
                    "children": [
                        {
                            "id": "62bcfd01c8f1da081697ce16",
                            "lot_no": "RT2206300100180180",
                            "name": "코일123",
                            "item_code": "ASDFDFS1231",
                            "amount": 500,
                            "stock_quality_status": null,
                            "stock_cause": null,
                            "children": [

                            ]
                        },
                        {
                            "id": "62bcfc3bc8f1da081697ce15",
                            "lot_no": "RT2206300100180184",
                            "name": "코오232",
                            "item_code": "ASDFDFS1235",
                            "amount": 500,
                            "stock_quality_status": null,
                            "stock_cause": null,
                            "children": [

                            ]
                        }
                    ]
                },
                {
                    "id": "62bd552f9c099c6840fc3733",
                    "lot_no": "RT22063007165316531",
                    "name": "더미천4892",
                    "item_code": "RTASC4892",
                    "amount": 5,
                    "stock_quality_status": null,
                    "stock_cause": null,
                    "children": [

                    ]
                }
            ]
        }
    )
    const [traceBack_datas, setTraceBack_datas] = useState({
        lot_no: "",
        location: "",
        warehouse_code: "",
    })
    // 지역정보 보내면 창고목록 가져오기
    useEffect(() => {
        axios.defaults.baseURL = warehouseURL
        axios.get(`warehouse/${traceBack_datas.location}`)
            .then((res) => {
                setWarehouse_codes([])
                for (let index = 0; index < res.data.length; index++) {
                    setWarehouse_codes(warehouse_codes => [...warehouse_codes, res.data[index].warehouse_code])
                }
            })
            .catch((err) => { })
    }, [traceBack_datas.location])

    // 지역, 창고값을 보내면 lot번호 불러오기
    useEffect(() => {
        axios.defaults.baseURL = inventoryURL
        axios.get(`/location/${traceBack_datas.location}/warehouse/${traceBack_datas.warehouse_code}`)
            .then((res) => {
                setLot_nos([])
                for (let index = 0; index < res.data.length; index++) {
                    setLot_nos(lot_nos => ([...lot_nos, res.data[index].lot_no]))
                    setLot_no_data(lot_no_data => ({ ...lot_no_data, [res.data[index].lot_no]: res.data[index] }))
                }
            })
            .catch((err) => { console.log(err) })
    }, [traceBack_datas.warehouse_code])

    const export_selectDatas = [
        { name: "location", selectOption: location, grid: 1, "purpose": "create", "ko": "지역", "cn": "地域", "jp": "地域", "vn": "khu vực" },
        {
            name: "warehouse_code",
            selectOption: warehouse_codes,
            grid: 1,
            purpose: "search",
            ko: "창고코드",
            cn: "仓库代码",
            jp: "倉庫コード",
            vn: "mãkho",
        }, { name: "lot_no", selectOption: lot_nos, grid: 1, purpose: "create", "ko": "롯트번호", "cn": "LOT", "jp": "LOT", "vn": "LOT" },
    ]

    function getLotData(item) {
        console.log(item);
        if (!Array.isArray(item.consumed)) return { name: item.lot_no, children: [] }
        else {
            item.consumed.map(x => { return { name: item.lot_no, children: [getLotData(x.consumed)] } }
            )
        }
    }

    useEffect(() => {
        axios.defaults.baseURL = traceBack
        // axios.get(`/lotno/${traceBack_datas.lot_no}`)
        axios.get(`/lotno/testlot123123`)
            .then((res) => { console.log(getLotData(res.data)) })
            .catch((err) => { console.log(err) })
    }, [traceBack_datas.lot_no])

    return (
        <div className='h-full text-center' id='tracking' data-aos="fade-up">
            <div className='text-center grid grid-cols-3 gap-5 w-1/2 mx-auto'>
                {export_selectDatas.map((selectData) => {
                    return (
                        <SearchSelect
                            setDatas={setTraceBack_datas}
                            datas={traceBack_datas}
                            name={selectData.name}
                            selectData={selectData.selectOption}
                            grid={selectData.grid}
                            ko={selectData.ko}
                            cn={selectData.cn}
                            jp={selectData.jp}
                            vn={selectData.vn}
                        />
                    );
                })}
            </div>
            {
                traceBack_datas.lot_no
                    ? <AnimatedTree
                        data={data}
                        height={700}
                        width={700}
                        duration={800}
                        nodeShape="circle"
                    />
                    : <div className='font-bold text-4xl mt-48'>LOT번호를 선택해주세요</div>
            }
        </div>
    )
}

export default Tracking