import React, { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import SearchLocation from "../Search/SearchItems/SearchLocation";
import SearchUnit from "../Search/SearchItems/SearchUnit";
import SearchItemName from "../Search/SearchItems/SearchItemName";
import SearchWarehouse from "../Search/SearchItems/SearchWarehouse";
import axios from "axios";
import { useSelector } from "react-redux";

function CreateLogisticsMove(props) {
  let url = useSelector((state) => state.logisticsMoveURL)
  axios.defaults.baseURL = url
  // useEffect

  // usestate
  const [datas, setDatas] = useState({
    location: "",
    lot_no: "",
    item_no: "",
    item_name: "",
    width: 0,
    weight: 0,
    thickness: 0,
    height: 0,
    move_amount: 0,
    from_warehouse: "",
    to_warehouse: "",
    inst_deadline: "",
    unit: "",
  })
  const inputDatas = [
    "width",
    "weight",
    "thickness",
    "height",
    "order_amount",
    "item_no",
    "lot",
    "move_amount",
    "order_date",
    "inst_deadline",
  ]

  const cancelButtonRef = useRef(null);
  return (
    <div>
      <span className="ml-3 text-sm font-medium">창고이동등록</span>
      <Transition.Root show={props.createLogisticsMoveOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={props.setCreateLogisticsMoveOpen}
        >
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
                  <div className="w-full mx-auto">
                    <div className="font-bold text-2xl text-center my-5">
                      창고 이동 요청
                    </div>
                    <div className="gap-6">
                      <div className="mt-5 md:mt-0 md:col-span-2">
                        <div className="shadow overflow-hidden sm:rounded-md">
                          <div className="px-4 py-5 bg-white sm:p-6">
                            {/* Search */}
                            <div className="mt-5 md:mt-0 md:col-span-2">
                              <div className="overflow-hidden sm:rounded-md">
                                <div className="px-4 py-5 bg-white sm:p-6 bg-gray-100 rounded-lg">
                                  {/* selects */}
                                  <div className="grid grid-cols-3 gap-4 text-center">
                                    <div className="col-span-1">
                                      <SearchLocation setDatas={setDatas} datas={datas} />
                                    </div>
                                    <div className="col-span-1">
                                      <SearchUnit setDatas={setDatas} datas={datas} />
                                    </div>
                                    <div className="col-span-1">
                                      <SearchItemName setDatas={setDatas} datas={datas} />
                                    </div>
                                    <div className="col-span-1">
                                      <SearchWarehouse setDatas={setDatas} datas={datas} />
                                    </div>
                                    <div className="col-span-1">
                                      <SearchWarehouse setDatas={setDatas} datas={datas} />
                                    </div>
                                  </div>
                                  {/* 둘재줄 */}
                                  <div className="grid grid-cols-3 gap-4 text-center mt-5">
                                    {inputDatas.slice(0, -2).map((inputData) => {
                                      return <div className="col-span-1">
                                        <div className='grid grid-cols-3'>
                                          <div>{inputData}</div>
                                          <div className='col-span-2'><input
                                            type="text"
                                            name={inputData}
                                            id={inputData}
                                            autoComplete="address-level2"
                                            className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            onChange={(e) => { setDatas({ ...datas, [inputData]: e.target.value }) }}
                                          /></div>
                                        </div>
                                      </div>
                                    })}
                                  </div>
                                  {/* calenders */}
                                  <div className="grid grid-cols-2 gap-4 text-center mt-5">
                                    {inputDatas.slice(-2).map((inputData) => {
                                      return <div className="col-span-1">
                                        <div className=''>
                                          <div>{inputData}</div>
                                          <div>달력</div>
                                        </div>
                                      </div>
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
                      onClick={() => props.setCreateLogisticsMoveOpen(false)}
                      ref={cancelButtonRef}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-sky-300 text-base font-medium text-white  hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => props.setCreateLogisticsMoveOpen(false)}
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
  );
}

export default CreateLogisticsMove;
