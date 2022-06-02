import React, { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import axios from 'axios';
import { useSelector } from 'react-redux';
import { item_name, location, statusImport, target, unit } from '../Common/Conditions/SelectOptions';
import SearchSelect from '../Common/Conditions/SearchSelect'
import InputText from '../Common/Conditions/InputText'
function CreateLogisticsExport(props) {
  let url = useSelector((state) => state.logisticsExportURL)
  axios.defaults.baseURL = url
  // useEffect

  // usestate
  const [datas, setDatas] = useState({
    location: "",
    target: "",
    lot_no: "",
    item_no: "",
    item_name: "",
    width: 0,
    weight: 0,
    thickness: 0,
    height: 0,
    order_amount: 0,
    ex_amount: 0,
    ex_remain: 0,
    order_date: "",
    inst_deadline: "",
    done_date: "",
    unit: "",
  })
  const selectDatas = [
    { name: "location", selectOption: location, grid: 1 },
    { name: "StatusImport", selectOption: statusImport, grid: 1 },
    { name: "unit", selectOption: unit, grid: 1 },
    { name: "item_name", selectOption: item_name, grid: 2 },
    { name: "target", selectOption: target, grid: 1 },
  ]
  const inputDatas = [
    { name: "lot_no", type: "number" },
    { name: "item_no", type: "number" },
    { name: "weight", type: "number" },
    { name: "thickness", type: "number" },
    { name: "height", type: "number" },
    { name: "order_amount", type: "number" },
    { name: "ex_amount", type: "number" },
    { name: "ex_remain", type: "number" },
    { name: "amount", type: "number" },
  ]
  const dateDatas = [
    { name: "order_date", type: "text" },
    { name: "inst_deadline", type: "text" },
  ]
  // function
  function request() {
    axios.post('/export', datas)
      .then((res) => { props.setCreateLogisticsExportOpen(false); })
      .catch((err) => { alert(err) })
  }
  const cancelButtonRef = useRef(null)
  return (
    <div>
      <span className="ml-3 text-sm font-medium">출고예정등록</span>
      <Transition.Root show={props.createLogisticsExportOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={props.setCreateLogisticsExportOpen}>
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
          <div className="fixed z-10 inset-0 overflow-y-auto ">
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
                <Dialog.Panel className="relative min-w-md bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8">
                  <div className='mx-auto'>
                    <div className="font-bold text-2xl text-center my-5">출고 요청</div>
                    <div className="gap-6">
                      <div className="mt-5 md:mt-0 md:col-span-2">
                        <div className="shadow overflow-hidden sm:rounded-md">
                          <div className="px-4 py-5 bg-white sm:p-6">
                            <div className="mt-5 md:mt-0 md:col-span-2">
                              <div className="overflow-hidden sm:rounded-md">
                                <div className="px-4 py-5 bg-white sm:p-6 rounded-lg">
                                  {/* select */}
                                  <div className="grid grid-cols-3 gap-4 text-center mb-5">
                                    {selectDatas.map((selectData) => {
                                      return <SearchSelect setDatas={setDatas} datas={datas} name={selectData.name} selectData={selectData.selectOption} grid={selectData.grid} />
                                    })}
                                  </div>
                                  {/* inputs */}
                                  <div className="grid grid-cols-3 gap-4 text-center mt-5">
                                    {inputDatas.map((inputData) => {
                                      return <InputText setDatas={setDatas} datas={datas} name={inputData.name} type={inputData.type} />
                                    })}
                                  </div>
                                  {/* calenders */}
                                  <div className="grid grid-cols-2 gap-4 text-center mt-5">
                                    {dateDatas.map((dateData) => {
                                      return <InputText setDatas={setDatas} datas={datas} name={dateData.name} />
                                    })}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:px-6 text-right">
                    <button
                      type="button"
                      className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => props.setCreateLogisticsExportOpen(false)}
                      ref={cancelButtonRef}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-sky-300 text-base font-medium text-white hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => { request() }}
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

export default CreateLogisticsExport