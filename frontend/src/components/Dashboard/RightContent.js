import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import axios from "axios"
import moment from 'moment';
function RightContent() {
    // 입고현황
    let logisticsImportURL = useSelector((state) => state.logisticsImportURL)
    const [importTodayAll, setImportTodayAll] = useState(0)
    const [sucImportToday, setSucImportToday] = useState(0)
    const [datas1, setDatas1] = useState({
        instruction_no: "전체보기",
        status: "전체보기",
        lot_no: "전체보기",
        item_code: "전체보기",
        item_name: "전체보기",
        min_order_amount: -1,
        max_order_amount: 10000000,
        min_im_amount: -1,
        max_im_amount: 10000000,
        unit: "전체보기",
        min_weight: -1,
        max_weight: 10000000,
        min_thickness: -1,
        max_thickness: 10000000,
        min_height: -1,
        max_height: 10000000,
        min_width: -1,
        max_width: 10000000,
        industry_family: "전체보기",
        product_family: "전체보기",
        location: "전체보기",
        to_warehouse: "전체보기",
        customer: "전체보기",
        order_date: "전체보기",
        inst_reg_date: "전체보기",
        inst_deadline: moment().format("YY-MM-DD"),
        done_date: "전체보기",
    })
    useEffect(() => {
        axios.defaults.baseURL = logisticsImportURL
        axios.get('/search', {
            params: datas1
        })
            .then((res) => {
                setImportTodayAll(res.data.length)
                setSucImportToday(res.data.filter(e => e.status.includes("완료")).length)
            })
            .catch((err) => { console.log(err) })
    }, [])

    // 출고
    let logisticsExportURL = useSelector((state) => state.logisticsExportURL)
    const [exportTodayAll, setExportTodayAll] = useState(0)
    const [sucExportToday, setSucExportToday] = useState(0)
    const [datas2, setDatas2] = useState({
        instruction_no: "전체보기",
        status: "전체보기",
        lot_no: "전체보기",
        item_code: "전체보기",
        item_name: "전체보기",
        min_order_amount: 0,
        max_order_amount: 10000000,
        min_ex_amount: 0,
        max_ex_amount: 10000000,
        ex_remain: "전체보기",
        unit: "전체보기",
        min_width: 0,
        max_width: 10000000,
        min_weight: 0,
        max_weight: 10000000,
        min_thickness: 0,
        max_thickness: 10000000,
        min_height: 0,
        max_height: 10000000,
        product_family: "전체보기",
        location: "전체보기",
        from_warehouse: "전체보기",
        customer: "전체보기",
        order_date: "전체보기",
        inst_reg_date: "전체보기",
        inst_deadline: moment().format("YY-MM-DD"),
        done_date: "전체보기",
    })
    useEffect(() => {
        axios.defaults.baseURL = logisticsExportURL
        axios.get('/search', {
            params: datas2
        })
            .then((res) => {
                setExportTodayAll(res.data.length)
                setSucExportToday(res.data.filter(e => e.status.includes("완료")).length)
            })
            .catch((err) => { })
    }, [])

    // 창고이동
    let logisticsMoveURL = useSelector((state) => state.logisticsMoveURL)
    const [moveTodayAll, setmoveTodayAll] = useState(0)
    const [sucMoveToday, setSucMoveToday] = useState(0)
    const [datas3, setDatas3] = useState({
        instruction_no: "전체보기",
        status: "전체보기",
        lot_no: "전체보기",
        item_code: "전체보기",
        item_name: "전체보기",
        min_move_amount: 0,
        max_move_amount: 10000000,
        unit: "전체보기",
        min_weight: 0,
        max_weight: 10000000,
        min_width: 0,
        max_width: 10000000,
        min_thickness: 0,
        max_thickness: 10000000,
        min_height: 0,
        max_height: 10000000,
        location: "전체보기",
        from_warehouse: "전체보기",
        to_warehouse: "전체보기",
        inst_reg_date: "전체보기",
        inst_deadline: moment().format("YY-MM-DD"),
        done_date: "전체보기",
    })
    useEffect(() => {
        axios.defaults.baseURL = logisticsMoveURL
        axios.get('/search', {
            params: datas3
        })
            .then((res) => {
                setmoveTodayAll(res.data.length)
                setSucMoveToday(res.data.filter(e => e.status.includes("완료")).length)

            })
    }, [])
    return (
        <div className="grid grid-cols-1 gap-4 h-full">
            <div className='bg-cyan-100 rounded-lg'>
                <div className='text-xl font-bold mt-3'>입고현황</div>
                <div className="">
                    <div className='mx-auto mt-10'>
                        {
                            importTodayAll !== 0
                                ? <div>{sucImportToday / importTodayAll}%
                                    <div>{sucImportToday} / {importTodayAll}</div>
                                </div>

                                : "금일 처리해야할 업무가 없습니다."
                        }
                    </div>
                </div>
            </div>
            <div className='bg-cyan-100 rounded-lg'>
                <div className='text-xl font-bold mt-3'>출고현황</div>
                <div className="">
                    <div className='mx-auto mt-10'>
                        {
                            exportTodayAll !== 0
                                ? <div className='text-5xl'>{sucExportToday / exportTodayAll}%
                                    <div className='text-xl mt-2'>({sucExportToday} / {exportTodayAll})</div>
                                </div>

                                : "금일 처리해야할 업무가 없습니다."
                        }
                    </div>
                </div>
            </div>
            <div className='bg-cyan-100 rounded-lg'>
                <div className='text-xl font-bold mt-3'>창고이동현황</div>
                <div className="">
                    <div className='mx-auto mt-10'>
                        {
                            moveTodayAll !== 0
                                ? <div>{sucMoveToday / moveTodayAll}%
                                    <div>{sucMoveToday} / {moveTodayAll}</div>
                                </div>

                                : "금일 처리해야할 업무가 없습니다."
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightContent