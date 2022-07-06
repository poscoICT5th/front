import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { AnimatedTree } from 'react-tree-graph';
import './Tracking.css';
import { useSelector } from 'react-redux'
import { location } from '../Common/Conditions/SelectOptionsCreate'
import SearchSelect from '../Common/Conditions/SearchSelect';
import Detail from '../Detail/Detail';
import { Input } from 'antd';


function Tracking() {
    let warehouseURL = useSelector((state) => state.warehouseURL)
    let inventoryURL = useSelector((state) => state.inventoryURL)
    let traceBack = useSelector((state) => state.traceBack)
    const { Search } = Input;
    const [warehouse_codes, setWarehouse_codes] = useState([])
    const [lot_nos, setLot_nos] = useState([])
    const [lot_no_data, setLot_no_data] = useState({})
    const [openDetail, setOpenDetail] = useState(false);
    const [data, setData] = useState({})
    const [clicklotData, setClicklotData] = useState({})
    const [clickNodeLot, setClickNodeLot] = useState("")
    const [traceBack_datas, setTraceBack_datas] = useState({
        lot_no: "",
        location: "",
        warehouse_code: "",
    })
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

    function getLotData(item) {
        if (!Array.isArray(item.consumed) || item.consumed.length === 0) {
            return { name: item.lot_no, children: [] }
        }
        else if (Array.isArray(item.consumed) && item.consumed.length !== 0) {
            return {
                name: item.lot_no, children: item.consumed.map(x => {
                    return getLotData(x)
                })
            }
        } else {
            return { name: item.lot_no, children: [] }
        }
    }

    useEffect(() => {
        setClicklotData({})
        axios.defaults.baseURL = traceBack
        axios.get(`/lotno/${traceBack_datas.lot_no}`)
            // axios.get(`/lotno/testlot123123`)
            .then((res) => { setData(getLotData(res.data)) })
            .catch((err) => { console.log(err) })
    }, [traceBack_datas.lot_no])

    function clickLot(params) {
        console.log(params)
        setClicklotData(lot_no_data.RT220630071653165323)
        setOpenDetail(true)
    }

    function onSearch(value) {
        setTraceBack_datas({ ...traceBack_datas, lot_no: value })
    }

    return (
        <div className='' id='tracking' data-aos="fade-up">
            <div className={' h-full text-center'} >
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
                <div className='w-1/2 mx-auto mt-2'>
                    <Search
                        placeholder="LOT번호를 입력해주세요"
                        allowClear
                        onSearch={onSearch}
                    />
                </div>
                {
                    traceBack_datas.lot_no
                        ? <AnimatedTree
                            data={data}
                            height={700}
                            width={700}
                            duration={800}
                            nodeShape="circle"
                            svgProps={{
                                className: 'custom'
                            }}
                            gProps={{
                                onClick: function noRefCheck(e) { clickLot(e.target.textContent); setClickNodeLot(e.target.textContent) },
                                onContextMenu: function noRefCheck(e) { console.log(1) }
                            }}
                        />
                        : <div className='font-bold text-4xl mt-48'>LOT번호를 선택해주세요</div>
                }
            </div>
            <Detail
                openDetail={openDetail}
                setOpenDetail={setOpenDetail}
                detailData={clicklotData}
                title={clickNodeLot}
            />
        </div>
    )
}

export default Tracking