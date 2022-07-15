import React, { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import InputText from '../Common/Conditions/InputText'

function CreateExportMulti(props) {
    const [exportMulti, setExportMulti] = useState({
        order_date: "",
        inst_deadline: ""
    })
    const exportMultiInput = [
        { name: "order_date", type: "date", purpose: "search", "ko": "주문일", "en": "order_date", "cn": "订货日", "jp": "注文日", "vn": "ngày đặt hàng", },
        { name: "inst_deadline", type: "date", purpose: "search", "ko": "지시마감일", "en": "inst_deadline", "cn": "截止日期", "jp": "指示締切日", "vn": "ngày hết hạn chỉ thị", },
    ]
    const cancelButtonRef = useRef(null)
    return (
        <Transition.Root show={props.createExportModal} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef}
                onClose={() => { props.setCreateExportModal(false) }}>
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
                                                출고등록
                                            </Dialog.Title>
                                            <div className="">
                                                {exportMultiInput.map((inputData) => {
                                                    return (<div className='my-2'>
                                                        <InputText
                                                            setDatas={setExportMulti}
                                                            datas={exportMulti}
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
                                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-teal-500 text-base font-medium text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 sm:ml-3 sm:w-auto sm:text-sm"
                                        onClick={() => { props.exportMultiAxios(exportMulti.order_date, exportMulti.inst_deadline) }}
                                    >
                                        출고요청등록
                                    </button>
                                    <button
                                        type="button"
                                        className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                        onClick={() => { props.setCreateExportModal(false) }}
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

export default CreateExportMulti