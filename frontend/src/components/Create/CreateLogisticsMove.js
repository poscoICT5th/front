import React, { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import axios from "axios";
import { useSelector } from "react-redux";
import { item_name, location, unit } from "../Common/Conditions/SelectOptions";
import SearchSelect from '../Common/Conditions/SearchSelect'
import InputText from '../Common/Conditions/InputText'

function CreateLogisticsMove(props) {
  let Moveurl = useSelector((state) => state.logisticsMoveURL)
  // axios.defaults.baseURL = Moveurl
  // useEffect
  // 지역에 따라서 창고목록변경
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
  // useEffect
  // 지역에 따라서 창고목록변경
  let WarehouseUrl = useSelector((state) => state.warehouseURL)
  let InventoryURL = useSelector((state) => state.inventoryURL)
  const [warehouse_codes, setWarehouse_codes] = useState(["전체보기"])
  const [item_names, setItem_names] = useState(["전체보기"])
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
  // 지역에따라서 아이템명변경
  useEffect(() => {
    axios.defaults.baseURL = InventoryURL
    axios.get(`inventory/${datas.location}`)
      .then((res) => {
        setItem_names(["전체보기"])
        console.log(res)
        for (let index = 0; index < res.data.length; index++) {
          setItem_names(warehouse_codes => [...warehouse_codes, res.data[index].item_name])
        }
        // console.log(warehouse_codes)
      })
      .catch((err) => { console.log(err) })
  }, [datas.location])



  const selectDatas = [
    { name: "location", selectOption: location, grid: 1 },
    { name: "unit", selectOption: unit, grid: 1 },
    { name: "from_warehouse", selectOption: warehouse_codes, grid: 1 },
    { name: "to_warehouse", selectOption: warehouse_codes, grid: 1 },
    { name: "item_name", selectOption: item_names, grid: 2 },
  ]
  const inputDatas = [
    { name: "lot_no", type: "number" },
    { name: "item_no", type: "number" },
    { name: "width", type: "number" },
    { name: "weight", type: "number" },
    { name: "thickness", type: "number" },
    { name: "height", type: "number" },
    { name: "order_amount", type: "number" },
    { name: "move_amount", type: "number" },
  ]
  const dateDatas = [
    { name: "inst_deadline", type: "text" },
  ]
  // function
  function test(params) {
  }
  const cancelButtonRef = useRef(null);
  return (
    <div>
      <span className="ml-3 text-sm font-medium">창고 이동 요청</span>
      <Transition.Root show={props.createLogisticsMoveOpen} as={Fragment}>
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
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-sky-300 text-base font-medium text-white  hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => test()}
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
