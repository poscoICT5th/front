import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationIcon } from '@heroicons/react/outline'
import SearchSelect from '../Common/Conditions/SearchSelect'
import InputText from '../Common/Conditions/InputText'
import FixedInput from '../Common/Conditions/FixedInput'

function CreateRequest(props) {
    const cancelButtonRef = useRef(null)
    const [fixed_Datas, setFixed_Datas] = useState([
        { name: "item_no", type: "text", purpose: "fixed", value: props.datas.item_no },
        { name: "weight", type: "number", purpose: "fixed", value: props.datas.weight },
        { name: "thickness", type: "number", purpose: "fixed", value: props.datas.thickness },
        { name: "height", type: "number", purpose: "fixed", value: props.datas.height },
    ])

    return (
        <div>
            <Transition.Root show={props.open} as={Fragment}>
                <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={(props.setOpen)}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 transition-opacity bg-opacity-75" />
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
                                <Dialog.Panel className="bg-white dark:bg-gray-700 relative rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 w-lg">
                                    <div className='mx-auto'>
                                        <div className="font-bold text-2xl text-center my-5">{props.title}</div>
                                        <div className="gap-6">
                                            <div className="mt-5 md:mt-0 md:col-span-2">
                                                <div className="shadow overflow-hidden sm:rounded-md">
                                                    <div className="px-4 py-5 sm:p-6">
                                                        <div className="mt-5 md:mt-0 md:col-span-2">
                                                            <div className="overflow-hidden sm:rounded-md">
                                                                <div className="px-4 py-5 sm:p-6 rounded-lg">
                                                                    {/* select */}
                                                                    <div className="grid grid-cols-4 gap-4 text-center mb-5">
                                                                        {props.selectDatas.map((selectData) => {
                                                                            return <SearchSelect setDatas={props.setDatas} datas={props.datas} name={selectData.name} selectData={selectData.selectOption} grid={selectData.grid} />
                                                                        })}
                                                                        {props.inputDatas.map((inputData) => {
                                                                            return <InputText setDatas={props.setDatas} datas={props.datas} name={inputData.name} type={inputData.type} purpose={inputData.purpose} />
                                                                        })}
                                                                    </div>
                                                                    {
                                                                        props.title === "출고요청등록" || props.title === "창고이동등록"
                                                                            ? <div className='grid grid-cols-6 gap-4'>
                                                                                <FixedInput value={props.datas.height} label="height" />
                                                                                <FixedInput value={props.datas.weight} label="weight" />
                                                                                <FixedInput value={props.datas.thickness} label="thickness" />
                                                                                <FixedInput value={props.datas.width} label="width" />
                                                                                <FixedInput value={props.datas.item_no} label="item_no" />
                                                                                <FixedInput value={props.datas.item_name} label="item_name" />
                                                                            </div>
                                                                            : null
                                                                    }
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-4 py-3 sm:px-6 text-right">
                                        <button
                                            type="button"
                                            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-300 text-base font-medium text-white hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 sm:ml-3 sm:w-auto sm:text-sm"
                                            onClick={() => props.setOpen(false)}
                                            ref={cancelButtonRef}
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="button"
                                            htmlType="submit"
                                            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-sky-300 text-base font-medium text-white hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-900 sm:ml-3 sm:w-auto sm:text-sm"
                                            onClick={() => { props.request() }}
                                        >
                                            Request
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </div>
    )
}

export default CreateRequest