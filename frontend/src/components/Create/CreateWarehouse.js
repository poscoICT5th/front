import React, { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import axios from "axios";
import Select from "react-select";
import {
  location,
  purpose,
  inventory_using,
  use,
} from "../Common/Conditions/SelectOptions";

function CreateWarehouse(props) {
  axios.defaults.baseURL = "http://192.168.0.20:8081";
  // data
  const [location_Data, setLocation_Data] = useState();
  const [purpose_Data, setPurpose_Data] = useState();
  const [use_Data, setUse_Data] = useState();
  const [inventory_using_Data, setInventory_using_Data] = useState(0);
  const [maximum_weight_Data, setMaximum_weight_Data] = useState(0);
  const [maximum_count_Data, setMaximum_count_Data] = useState(0);
  const [warehouse_code_desc_Data, setWarehouse_code_desc_Data] = useState(0);

  // function
  function request() {
    axios
      .post("/", {
        "location": location_Data,
        "purpose": purpose_Data,
        "use": use_Data,
        "inventory_using": inventory_using_Data,
        "maximum_count": maximum_count_Data,
        "maximum_weight": maximum_weight_Data,
        "warehouse_code_desc": warehouse_code_desc_Data,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        alert(err);
      });
  }
  const cancelButtonRef = useRef(null);
  return (
    <div>
      <span className="ml-3 text-sm font-medium">창고등록</span>
      <Transition.Root show={props.createWarehouseOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={props.setCreateWarehouseOpen}
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
                <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all w-1/2">
                  <div className="mx-auto">
                    <div className="font-bold text-2xl text-center my-5">
                      창고 등록
                    </div>
                    <div className="gap-6">
                      <div className="mt-5 md:mt-0 md:col-span-2">
                        <div className="shadow overflow-hidden sm:rounded-md">
                          <div className="px-4 py-5 bg-white sm:p-6">
                            {/* Search */}
                            <div className="mt-5 md:mt-0 md:col-span-2">
                              <div className="overflow-hidden sm:rounded-md">
                                <div className="px-4 py-5 bg-white sm:p-6 bg-gray-100 rounded-lg">
                                  <div className="grid grid-cols-4 gap-4 text-center">
                                    {/* 첫째줄 */}
                                    <div className="col-span-1">
                                      <label
                                        htmlFor="dropdown"
                                        className="block text-sm font-medium text-gray-700"
                                      >
                                        사업장
                                      </label>
                                      <Select
                                        defaultValue={[]}
                                        // isMulti
                                        name="colors"
                                        options={location}
                                        className="basic-multi-select"
                                        classNamePrefix="select"
                                        onChange={(e) => {
                                          setLocation_Data(e.value);
                                        }}
                                      />
                                    </div>

                                    <div className="col-span-1">
                                      <label
                                        htmlFor="dropdown"
                                        className="block text-sm font-medium text-gray-700"
                                      >
                                        용도명
                                      </label>
                                      <Select
                                        defaultValue={[]}
                                        // isMulti
                                        name="colors"
                                        options={purpose}
                                        className="basic-multi-select"
                                        classNamePrefix="select"
                                        onChange={(e) => {
                                          setPurpose_Data(e.value);
                                        }}
                                      />
                                    </div>

                                    <div className="col-span-1">
                                      <label
                                        htmlFor="dropdown"
                                        className="block text-sm font-medium text-gray-700"
                                      >
                                        사용여부
                                      </label>
                                      <Select
                                        defaultValue={[]}
                                        // isMulti
                                        name="colors"
                                        options={use}
                                        className="basic-multi-select"
                                        classNamePrefix="select"
                                        onChange={(e) => {
                                          setUse_Data(e.value);
                                        }}
                                      />
                                    </div>
                                    <div className="col-span-1">
                                      <label
                                        htmlFor="dropdown"
                                        className="block text-sm font-medium text-gray-700"
                                      >
                                        재고실사
                                      </label>
                                      <Select
                                        defaultValue={[]}
                                        // isMulti
                                        name="colors"
                                        options={inventory_using}
                                        className="basic-multi-select"
                                        classNamePrefix="select"
                                        onChange={(e) => {
                                          setInventory_using_Data(
                                            e.value
                                          );
                                        }}
                                      />
                                    </div>
                                  </div>
                                  <div className="grid grid-cols-2 gap-4 text-center mt-5">
                                    {/* 둘재줄 */}
                                    <div className="col-span-1 grid grid-cols-5 text-center">
                                      <div className="col-span-2">
                                        최대적치중량
                                      </div>
                                      <div className="col-span-3">
                                        <input
                                          type="number"
                                          min={0}
                                          name="text"
                                          id="text"
                                          autoComplete="address-level2"
                                          className="block w-full rounded-md py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
                                          onChange={(e) => {
                                            setMaximum_weight_Data(
                                              e.target.value
                                            );
                                          }}
                                        />
                                      </div>
                                    </div>

                                    <div className="col-span-1 grid grid-cols-5 text-center">
                                      <div className="col-span-2">
                                        최대적치매수
                                      </div>
                                      <div className="col-span-3">
                                        <input
                                          type="number"
                                          min={0}
                                          name="text"
                                          id="text"
                                          autoComplete="address-level2"
                                          className="block w-full rounded-md py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
                                          onChange={(e) => {
                                            setMaximum_count_Data(
                                              e.target.value
                                            );
                                          }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="grid grid-cols-2 gap-4 text-center mt-5">
                                    <div className="grid grid-cols-5">
                                      <div className="col-span-2">창고코드</div>
                                      <div className="col-span-3">
                                        <input
                                          type="number"
                                          min={0}
                                          name="text"
                                          id="text"
                                          autoComplete="address-level2"
                                          className="block w-full rounded-md py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
                                          onChange={(e) => {
                                            setWarehouse_code_desc_Data(
                                              e.target.value
                                            );
                                          }}
                                        />
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-5">
                                      <div className="col-span-2">
                                        저장위치전체명
                                      </div>
                                      <div className="col-span-3">
                                        <input
                                          type="number"
                                          min={0}
                                          name="text"
                                          id="text"
                                          autoComplete="address-level2"
                                          className="block w-full rounded-md py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
                                          onChange={(e) => {
                                            setWarehouse_code_desc_Data(
                                              e.target.value
                                            );
                                          }}
                                        />
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
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button
                      type="button"
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => props.setCreateWarehouseOpen(false)}
                    >
                      Deactivate
                    </button>
                    <button
                      type="button"
                      className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => request()}
                    >
                      insert
                    </button>
                    <button
                      type="button"
                      className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => props.setCreateWarehouseOpen(false)}
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

export default CreateWarehouse;
