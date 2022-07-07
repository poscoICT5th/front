import axios from 'axios'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function DashboardTodoList(props) {
    let logisticsImportURL = useSelector((state) => state.logisticsImportURL)
    let logisticsExportURL = useSelector((state) => state.logisticsExportURL)
    let logisticsMoveURL = useSelector((state) => state.logisticsMoveURL)

    const [todoList, setTodoList] = useState([
        { title: '입고전체', table: "import", count: 0 },
        { title: '출고전체', table: "export", count: 0 },
        { title: '창고이동전체', table: "move", count: 0 },
        { title: '입고완료', table: "importSuc", count: 0 },
        { title: '출고완료', table: "exportSuc", count: 0 },
        { title: '창고이동완료', table: "moveSuc", count: 0 },
    ])
    // 입고정보
    const [importDatas, setImportDatas] = useState({
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
        // inst_deadline: "22-12-31",
        done_date: "전체보기",
    })
    useEffect(() => {
        axios.defaults.baseURL = logisticsImportURL
        axios.get('/search', {
            params: importDatas
        })
            .then((res) => {
                let newTodoList = [...todoList]
                newTodoList[0].count = res.data.length
                newTodoList[3].count = res.data.filter((value, index) => value.status.includes("완료")).length
                setTodoList(newTodoList);
            })
            .catch((err) => { console.log(err) })
    }, [])

    // 출고정보
    const [exportDatas, setExportDatas] = useState({
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
            params: exportDatas
        })
            .then((res) => {
                let newTodoList = [...todoList]
                newTodoList[1].count = res.data.length
                newTodoList[4].count = res.data.filter((value, index) => value.status.includes("완료")).length
                setTodoList(newTodoList);
            })
            .catch((err) => { })
    }, [])

    //창고이동정보

    const [moveDatas, setMoveDatas] = useState({
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
            params: moveDatas
        })
            .then((res) => {
                let newTodoList = [...todoList]
                newTodoList[2].count = res.data.length
                newTodoList[5].count = res.data.filter((value, index) => value.status.includes("완료")).length
                setTodoList(newTodoList);
            })
            .catch((err) => { })
    }, [])
    return (
        <div className=''>
            <div className="mt-5 grid gap-x-6 gap-y-5 grid-cols-3 text-center">
                {todoList.map((category) => (
                    <div key={category.title} className="border-t border-gray-200 pt-2 cursor-pointer" onClick={() => { props.setClickTable(category.table); }}>
                        <dt className="font-bold text-xs">{category.title}</dt>
                        <dd className="mt-2 text-5xl text-gray-500">{category.count}</dd>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DashboardTodoList