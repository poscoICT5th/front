import { Fragment, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationIcon } from '@heroicons/react/outline'
import SearchSelect from '../Common/Conditions/SearchSelect'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { location } from '../Common/Conditions/SelectOptionsCreate'
import InputText from '../Common/Conditions/InputText'

function CreateMoveToWarehouse(props) {
    let warehouseURL = useSelector((state) => state.warehouseURL)
    const [warehouse_codes, setWarehouse_codes] = useState([])

    // 지역정보 보내면 창고목록 가져오기
    const [moveDatas, setMoveDatas] = useState({
        location: "",
        warehouse_code: "",
        inst_deadline: ""
    })
    useEffect(() => {
        axios.defaults.baseURL = warehouseURL
        axios.get(`warehouse/${moveDatas.location}`)
            .then((res) => {
                setWarehouse_codes([])
                for (let index = 0; index < res.data.length; index++) {
                    setWarehouse_codes(warehouse_codes => [...warehouse_codes, res.data[index].warehouse_code])
                }
            })
            .catch((err) => { })
    }, [moveDatas.location])

    const moveDatasSelect = [
        { name: "location", selectOption: location, grid: 1, "purpose": "create", "ko": "지역", "en": "location", "cn": "地域", "jp": "地域", "vn": "khu vực" },
        { name: "warehouse_code", selectOption: warehouse_codes, grid: 1, purpose: "create", "ko": "출발창고", "en": "warehouse_code", "cn": "出发仓库", "jp": "出発倉庫", "vn": "kho xuất phát" },
    ]
    const moveDatasInput = [
        { name: "inst_deadline", type: "date", purpose: "search", "ko": "지시마감일", "en": "inst_deadline", "cn": "截止日期", "jp": "指示締切日", "vn": "ngày hết hạn chỉ thị", },
    ]
    const cancelButtonRef = useRef(null)
    return (
        <Transition.Root show={props.toWarehouseModal} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef}
                onClose={() => { props.setToWarehouseModal(false) }}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
                                <div className="bg-white dark:bg-neutral-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <div className="">
                                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                            <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                                                창고이동지정
                                            </Dialog.Title>
                                            <div className="">
                                                {moveDatasSelect.map((selectData) => {
                                                    return (<div className='my-2'>
                                                        <SearchSelect
                                                            setDatas={setMoveDatas}
                                                            datas={moveDatas}
                                                            name={selectData.name}
                                                            selectData={selectData.selectOption}
                                                            grid={selectData.grid}
                                                            ko={selectData.ko}
                                                            cn={selectData.cn}
                                                            jp={selectData.jp}
                                                            vn={selectData.vn}
                                                        />
                                                    </div>
                                                    );
                                                })}
                                            </div>
                                            <div className="">
                                                {moveDatasInput.map((inputData) => {
                                                    return (<div className='my-2'>
                                                        <InputText
                                                            setDatas={setMoveDatas}
                                                            datas={moveDatas}
                                                            name={inputData.name}
                                                            type={inputData.type}
                                                            purpose={inputData.purpose}
                                                            ko={inputData.ko}
                                                            cn={inputData.cn}
                                                            jp={inputData.jp}
                                                            vn={inputData.vn}
                                                        />
                                                    </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 dark:bg-neutral-800 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                    <button
                                        type="button"
                                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-sky-600 text-base font-medium text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                                        onClick={() => { props.moveMultiAxios(moveDatas.warehouse_code, moveDatas.inst_deadline) }}
                                    >
                                        이동
                                    </button>
                                    <button
                                        type="button"
                                        className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                        onClick={() => { props.setToWarehouseModal(false) }}
                                        ref={cancelButtonRef}
                                    >
                                        취소
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

export default CreateMoveToWarehouse