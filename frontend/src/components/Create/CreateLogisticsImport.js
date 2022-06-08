import React, { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import axios from "axios";
import {
  unit,
  location,
  product_family,
  statusImport,
} from "../Common/Conditions/SelectOptions";
import { useSelector } from "react-redux";
import SearchSelect from "../Common/Conditions/SearchSelect";
import InputText from "../Common/Conditions/InputText";
function CreateLogisticsImport(props) {
  // axios.defaults.baseURL = url;
  // useState
  const [datas, setDatas] = useState({
    location: "",
    product_family: "",
    item_no: "",
    item_name: "",
    to_warehouse: "",
    unit: "",
    weight: 0,
    thickness: 0,
    height: 0,
    order_amount: 0,
    im_amount: 0,
    amount: 0,
    width: 0,
    customer: "",
    industry_family: "",
    order_date: "",
    inst_deadline: "",
  });
  // useEffect
  // 지역에 따라서 창고목록변경
  let LogisticsImportURL = useSelector((state) => state.logisticsImportURL)
  let WarehouseUrl = useSelector((state) => state.warehouseURL)
  let InventoryURL = useSelector((state) => state.inventoryURL)
  const [warehouse_codes, setWarehouse_codes] = useState(["전체보기"])
  useEffect(() => {
    axios.defaults.baseURL = WarehouseUrl
    axios.get(`warehouse/${datas.location}`)
      .then((res) => {
        setWarehouse_codes(["전체보기"])
        for (let index = 0; index < res.data.length; index++) {
          setWarehouse_codes(warehouse_codes => [...warehouse_codes, res.data[index].warehouse_code])
        }
        // console.log(warehouse_codes)
      })
      .catch((err) => { console.log(err) })
  }, [datas.location])
  // input 데이터들
  const selectDatas = [
    { name: "location", selectOption: location, grid: 1 },
    { name: "product_family", selectOption: product_family, grid: 1 },
    { name: "unit", selectOption: unit, grid: 1 },
    { name: "to_warehouse", selectOption: warehouse_codes, grid: 1 },
  ];
  const inputDatas = [
    { name: "customer", type: "text" },
    { name: "industry_family", type: "text" },
    { name: "item_no", type: "number" },
    { name: "item_name", type: "text" },
    { name: "weight", type: "number" },
    { name: "thickness", type: "number" },
    { name: "height", type: "number" },
    { name: "order_amount", type: "number" },
    { name: "im_amount", type: "number" },
    { name: "amount", type: "number" },
    { name: "order_date", type: "date" },
    { name: "inst_deadline", type: "date" },
  ];
  const dateDatas = [
  ];
  // function
  function request() {
    axios.defaults.baseURL = LogisticsImportURL
    axios
      .post("/import", datas)
      .then((res) => {
      })
      .catch((err) => {
        alert(err);
      });
  }
  const cancelButtonRef = useRef(null);
  return (
    <div>
      <Transition.Root show={props.createLogisticsImportOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={() =>
            props.setOpens({
              ...props.opens,
              [props.openData]: false,
            })
          }
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
                <Dialog.Panel className="relative w-1/2 bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8">
                  <div className="mx-auto">
                    <div className="font-bold text-2xl text-center my-5">
                      입고 요청
                    </div>
                    <div className="gap-6">
                      <div className="mt-5 md:mt-0 md:col-span-2">
                        <div className="shadow overflow-hidden sm:rounded-md">
                          <div className="px-4 py-5 bg-white sm:p-6">
                            <div className="mt-5 md:mt-0 md:col-span-2">
                              <div className="overflow-hidden sm:rounded-md">
                                <div className="px-4 py-5 bg-white sm:p-6 rounded-lg">
                                  {/* select */}
                                  <div className="grid grid-cols-4 gap-4 text-center mb-5">
                                    {selectDatas.map((selectData) => {
                                      return (
                                        <SearchSelect
                                          setDatas={setDatas}
                                          datas={datas}
                                          name={selectData.name}
                                          selectData={selectData.selectOption}
                                          grid={selectData.grid}
                                        />
                                      );
                                    })}
                                  </div>
                                  {/* inputs */}
                                  <div className="grid grid-cols-4 gap-4 text-center mt-5">
                                    {inputDatas.map((inputData) => {
                                      return (
                                        <InputText
                                          setDatas={setDatas}
                                          datas={datas}
                                          name={inputData.name}
                                          type={inputData.type}
                                        />
                                      );
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
                      className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => props.setOpens({
                        ...props.opens,
                        [props.openData]: false,
                      })}
                      ref={cancelButtonRef}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 bg-sky-300 hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => request()}
                    >
                      insert
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

export default CreateLogisticsImport;
