import React, { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationIcon } from "@heroicons/react/outline";
import Select from "react-select";
import { status, location, item_name ,warehouse_code} from "./SelectOptions";

function CreateLogisticsMove(props) {
  const [status_Data, setStatus_Data] = useState("");
  const [location_Data, setLocation_Data] = useState("");
  const [Instruction_Data, setInstruction_Data] = useState("");
  const [Lot_no_Data, setLot_no_Data] = useState("");
  const [Item_no_Data, setItem_no_Data] = useState("");
  const [Item_name_Data, setItem_name_Data] = useState("");
  const [Width_Data, setWidth_Data] = useState(0);

  const [Thickness_Data, setThickness_Data] = useState(0);
  const [Height_Data, setHeight_Data] = useState(0);
  const [Amount_Data, setAmount_Data] = useState(0);
  const [From_warehouse_Data, setFrom_warehouse_Data] = useState("");
  const [To_warehouse_Data, setTo_warehouse_Data] = useState("");
  


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
                <Dialog.Panel className="relative min-w-md bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 w-1/2">
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
                                  <div className="grid grid-cols-3 gap-4 text-center">
                                    {/* 첫째줄 */}
                                    <div className="col-span-1">
                                      <label
                                        htmlFor="dropdown"
                                        className="block text-sm font-medium text-gray-700"
                                      >
                                        작업상태
                                      </label>
                                      <Select
                                        
                                        // isMulti
                                        name="colors"
                                        options={status}
                                        className="basic-multi-select"
                                        classNamePrefix="select"
                                        onChange={(e) => {
                                          setStatus_Data(e.target.value);
                                        }}
                                      />
                                    </div>

                                    <div className="col-span-1">
                                      <label
                                        htmlFor="dropdown"
                                        className="block text-sm font-medium text-gray-700"
                                      >
                                        사업장
                                      </label>
                                      <Select
                                        name="colors"
                                        options={location}
                                        className="basic-multi-select"
                                        classNamePrefix="select"
                                        onChange={(e) => {
                                          setLocation_Data(e.target.value);
                                        }}
                                      />
                                    </div>

                                    <div className="col-span-1">
                                      <label
                                        htmlFor="dropdown"
                                        className="block text-sm font-medium text-gray-700"
                                      >
                                        lot_no
                                      </label>
                                      <Select
                                        
                                        // isMulti
                                        name="colors"
                                        options={location}
                                        className="basic-multi-select"
                                        classNamePrefix="select"
                                        onChange={(e) => {
                                          setLocation_Data(e.target.value);
                                        }}
                                      />
                                    </div>
                                    <div className="col-span-1">
                                      <label
                                        htmlFor="dropdown"
                                        className="block text-sm font-medium text-gray-700"
                                      >
                                        품번
                                      </label>
                                      <Select
                                       
                                        // isMulti
                                        name="colors"
                                        options={item_name}
                                        className="basic-multi-select"
                                        classNamePrefix="select"
                                        onChange={(e) => {
                                          Item_no_Data(e.target.value);
                                        }}
                                      />
                                    </div>
                                    <div className="col-span-2">
                                      <label
                                        htmlFor="dropdown"
                                        className="block text-sm font-medium text-gray-700"
                                      >
                                        제품명
                                      </label>
                                      <Select
                                       
                                        // isMulti
                                        name="colors"
                                        options={item_name}
                                        className="basic-multi-select"
                                        classNamePrefix="select"
                                        onChange={(e) => {
                                          setItem_name_Data(e.target.value);
                                        }}
                                      />
                                    </div>
                                  </div>

                                  <div className="grid grid-cols-4 gap-4 text-center">
                                    {/* 둘재줄 */}
                                    <div className="col-span-1 grid grid-cols-4 text-center">
                                      <div className="col-span-1">폭</div>
                                      <div className="col-span-3">
                                        <input
                                          type="text"
                                          name="text"
                                          id="text"
                                          autoComplete="address-level2"
                                          className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                          onChange={(e) => {
                                            setWidth_Data(e.target.value);
                                          }}
                                        />
                                      </div>
                                    </div>
                                    <div className="col-span-1 grid grid-cols-4 text-center">
                                      <div className="">두께</div>

                                      <div>
                                        <input
                                          type="text"
                                          name="text"
                                          id="text"
                                          autoComplete="address-level2"
                                          className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                          onChange={(e) => {
                                            setThickness_Data(e.target.value);
                                          }}
                                        />
                                      </div>
                                    </div>
                                    <div className="col-span-1 grid grid-cols-4 text-center">
                                      <div className="">높이</div>
                                      <div className="col-span-3">
                                        <input
                                          type="text"
                                          name="text"
                                          id="text"
                                          autoComplete="address-level2"
                                          className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                          onChange={(e) => {
                                            setHeight_Data(e.target.value);
                                          }}
                                        />
                                      </div>
                                    </div>
                                    {/* 수량 */}
                                    <div className="col-span-1">
                                      <div className="grid grid-cols-3">

                                        <div className="col-span-1">이동수량</div>

                                        <div className="col-span-2">
                                          <input
                                            type="text"
                                            name="text"
                                            id="text"
                                            autoComplete="address-level2"
                                            className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            onChange={(e) => {
                                              setAmount_Data(e.target.value);
                                            }}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    {/*  */}
                                    {/* from창고 */}
                                    <div className="col-span-1">
                                      <div className="grid grid-cols-3">
                                        <div>from창고</div>
                                        <div className="col-span-2">
                                        <Select
                                        name="colors"
                                        options={warehouse_code}
                                        className="basic-multi-select"
                                        classNamePrefix="select"
                                        onChange={(e) => {
                                          Item_no_Data(e.target.value);
                                        }}
                                      />



                                        </div>
                                      </div>
                                    </div>
                                    {/*  */}

                                    {/* to창고 */}
                                    <div className="col-span-1">
                                      <div className="grid grid-cols-3">
                                        <div>to창고</div>
                                        <div className="col-span-2">
                                        <Select
                                        name="colors"
                                        options={warehouse_code}
                                        className="basic-multi-select"
                                        classNamePrefix="select"
                                        onChange={(e) => {
                                          Item_no_Data(e.target.value);
                                        }}
                                      />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-span-2">
                                      <div className="grid grid-cols-3">
                                        <label
                                          htmlFor="dropdown"
                                          className="block text-sm font-medium text-gray-700"
                                        >
                                          이동지시번호
                                        </label>
                                        <div className="col-span-2">
                                          <input
                                            type="text"
                                            name="text"
                                            id="text"
                                            autoComplete="address-level2"
                                            className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            onChange={(e) => {
                                              setInstruction_Data(
                                                e.target.value
                                              );
                                            }}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    {/* 셋째줄 */}
                                    {/* 고객사 */}

                                    {/* 단위 */}
                                    <div className="col-span-1">
                                      <label
                                        htmlFor="dropdown"
                                        className="block text-sm font-medium text-gray-700"
                                      >
                                        지시마감기한
                                      </label>
                                      <div className="col-span-2">
                                        <div className="">달력</div>
                                      </div>
                                    </div>

                                    <div className="col-span-1">
                                      <label
                                        htmlFor="dropdown"
                                        className="block text-sm font-medium text-gray-700"
                                      >
                                        작업완료일
                                      </label>
                                      <div className="">달력</div>
                                    </div>

                                    <div className="col-span-1">
                                      <label
                                        htmlFor="dropdown"
                                        className="block text-sm font-medium text-gray-700"
                                      >
                                        지시등록일
                                      </label>
                                      <div className="">달력</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button
                      type="button"
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => props.setCreateLogisticsMoveOpen(false)}
                    >
                      Deactivate
                    </button>
                    <button
                      type="button"
                      className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => props.setCreateLogisticsMoveOpen(false)}
                      ref={cancelButtonRef}
                    >
                      Cancel
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
