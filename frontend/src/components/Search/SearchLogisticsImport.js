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
        { name: "location", selectOption: location, grid: 1, purpose: "search", "ko": "지역", "cn": "地域", "jp": "地域", "vn": "khu vực" },
        { name: "status", selectOption: statusImport, grid: 1, purpose: "search", "ko": "상태", "cn": "状态", "jp": "状態", "vn": "trạng thái" },
        { name: "product_family", selectOption: product_family, grid: 1, purpose: "search", "ko": "제품군", "cn": "产品群", "jp": "製品群", "vn": "dòng sản phẩm" },
        // { name: "unit", selectOption: unit, grid: 1, purpose: "search", "ko": "단위", "cn": "单位", "jp": "単位", "vn": "đơn vị" },
        { name: "item_name", selectOption: item_names, grid: 1, purpose: "search", "ko": "제품명", "cn": "产品名称", "jp": "製品名", "vn": "Tên sản phẩm là" },
        { name: "warehouse_code", selectOption: warehouse_codes, grid: 1, purpose: "search", "ko": "창고코드", "cn": "仓库代码", "jp": "倉庫コード", "vn": "mã kho" },
        { name: "customer", selectOption: customers, grid: 1, purpose: "search", "ko": "고객사", "cn": "客户公司", "jp": "顧客会社", "vn": "công ty khách hàng" },
    ]
    const inputDatas = [
        // { name: "min_width", type: "number", purpose: "search", "ko": "최소너비", "cn": "最小宽度", "jp": "最小幅", "vn": "bề rộng tối thiểu" },
        // { name: "max_width", type: "number", purpose: "search", "ko": "최대너비", "cn": "最大宽度", "jp": "最大幅", "vn": "chiều rộng tối đa" },
        // { name: "min_thickness", type: "number", purpose: "search", "ko": "최소두께", "cn": "最小厚度", "jp": "最小厚さ", "vn": "độ dày tối thiểu" },
        // { name: "max_thickness", type: "number", purpose: "search", "ko": "최대두께", "cn": "最大厚度", "jp": "最大厚さ", "vn": "độ dày tối đa" },
        // { name: "min_height", type: "number", purpose: "search", "ko": "최소높이", "cn": "最小高度", "jp": "最小高さ", "vn": "độ cao tối thiểu" },
        // { name: "max_height", type: "number", purpose: "search", "ko": "최대높이", "cn": "最大高度", "jp": "最大高さ", "vn": "chiều cao tối đa" },
        // { name: "min_weight", type: "number", purpose: "search", "ko": "최소무게", "cn": "最小重量", "jp": "最小重量", "vn": "Trọng lượng tối thiểu" },
        // { name: "max_weight", type: "number", purpose: "search", "ko": "최대무게", "cn": "最大重量", "jp": "最大重量", "vn": "trọng lượng tối đa" },
        // { name: "min_order_amount", type: "number", purpose: "search", "ko": "최소주문량", "cn": "最低订货量", "jp": "最小注文量", "vn": "lượng đặt hàng tối thiểu" },
        // { name: "max_order_amount", type: "number", purpose: "search", "ko": "최대주문량", "cn": "最大订货量", "jp": "最大注文量", "vn": "lượng đặt hàng tối đa" },
        // { name: "min_im_amount", type: "number", purpose: "search", "ko": "최소입고수량", "cn": "最低入库数量", "jp": "最小入庫数量", "vn": "số lượng nhận được tối thiểu" },
        // { name: "max_im_amount", type: "number", purpose: "search", "ko": "최대입고수량", "cn": "最大入库数量", "jp": "最大入庫数量", "vn": "số lượng nhận được tối đa" },
        { name: "lot_no", type: "text", purpose: "search", "ko": "롯트번호", "cn": "LOT", "jp": "LOT", "vn": "LOT" },
        { name: "item_code", type: "text", purpose: "search", "ko": "제품코드", "cn": "产品代码", "jp": "製品コード", "vn": "mã sản phẩm" },
        { name: "industry_family", type: "text", purpose: "search", "ko": "산업군", "cn": "产业群", "jp": "産業群", "vn": "lực lượng công nghiệp" },
        { name: "order_date", type: "date", purpose: "search", "ko": "주문일", "cn": "订货日", "jp": "注文日", "vn": "ngày đặt hàng" },
        { name: "inst_reg_date", type: "date", purpose: "search", "ko": "지시등록일", "cn": "指示登记日", "jp": "指示登録日", "vn": "ngày đăng ký chỉ thị" },
        { name: "inst_deadline", type: "date", purpose: "search", "ko": "지시마감일", "cn": "截止日期", "jp": "指示締切日", "vn": "ngày hết hạn chỉ thị" },
        { name: "done_date", type: "date", purpose: "search", "ko": "완료일", "cn": "完成日期", "jp": "完了日", "vn": "ngày hoàn thành" },
    ]
    const { Panel } = Collapse;
    return (
        <div className="overflow-hidden sm:rounded-md">
            <div className="py-5 rounded-lg">
                {/* select */}
                <div className="grid grid-cols-7 gap-4 text-center">
                    {selectDatas.map((selectData) => {
                        return <SearchSelect
                            setDatas={props.setDatas}
                            datas={props.datas}
                            name={selectData.name}
                            purpose={selectData.purpose}
                            selectData={selectData.selectOption}
                            grid={selectData.grid}
                            ko={selectData.ko}
                            cn={selectData.cn}
                            jp={selectData.jp}
                            vn={selectData.vn}
                        />
                    })}
                    {inputDatas.map((inputData) => {
                        return <InputText
                            setDatas={props.setDatas}
                            datas={props.datas}
                            name={inputData.name}
                            type={inputData.type}
                            purpose={inputData.purpose}
                            ko={inputData.ko}
                            cn={inputData.cn}
                            jp={inputData.jp}
                            vn={inputData.vn}
                        />
                    })}
                </div>
                {/* <div className="col-span-1"> */}
                <div className='text-right mt-5'>
                    <button
                        className="mt-2 mr-2 w-20 inline-flex justify-center py-1 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                        onClick={() => { props.setClickRollback(true) }}
                    >
                        되돌리기
                    </button>
                    <button
                        className="mt-2 mr-2 w-20 inline-flex justify-center py-1 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                        onClick={() => { props.setClickDelete(true) }}
                    >
                        요청취소
                    </button>
                    <button
                        className="mt-2 w-20 inline-flex justify-center py-1 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-sky-500 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                        onClick={() => { props.setClickSearch(true) }}
                    >
                        조회
                    </button>
                </div>
                {/* </div> */}
                {/* <Collapse
                    bordered={false}
                    defaultActiveKey={[]}
                    expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                    className="site-collapse-custom-collapse"
                >
                    <Panel header="상세검색" key="1" className="site-collapse-custom-panel">
                        <div className="grid grid-cols-7 gap-4 text-center">
                            {inputDatas.map((inputData) => {
                                return <InputText
                                    setDatas={props.setDatas}
                                    datas={props.datas}
                                    name={inputData.name}
                                    type={inputData.type}
                                    purpose={inputData.purpose}
                                    ko={inputData.ko}
                                    cn={inputData.cn}
                                    jp={inputData.jp}
                                    vn={inputData.vn}
                                />
                            })}
                        </div>
                    </Panel>
                </Collapse> */}
            </div>

        </div>
    )
}

export default SearchLogisticsImport