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
    // let exportReload = useSelector((state) => state.exportReload)

    const [warehouse_codes, setWarehouse_codes] = useState([])
    const [lot_nos, setLot_nos] = useState([])
    const [lot_no_data, setLot_no_data] = useState({})
    // 출고
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
                console.log(res)
                console.log(1)
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

    useEffect(() => {
        axios.defaults.baseURL = traceBack
        axios.get(`/traceback/lotno/${traceBack_datas.lot_no}`)
            .then((res) => { console.log(res) })
            .catch((err) => { console.log(err) })
    }, [traceBack_datas.lot_no])

    var data = (
        {
            name: 'Parent',
            children: [{
                name: 'Child One',
                children: [{
                    name: 'Child One'
                }, {
                    name: 'Child Two'
                }]
            }, {
                name: 'Child Two'
            }]
        }
    )
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