import React, { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import axios from "axios";
import { useSelector } from "react-redux";
import {
  location,
  purpose,
  inventory_using,
  use,
  warehouse_code,
} from "../Common/Conditions/SelectOptions";
import SearchSelect from "../Common/Conditions/SearchSelect";
import InputText from "../Common/Conditions/InputText";

function MapDetail(props) {
  let url = useSelector((state) => state.warehouseURL);
  axios.defaults.baseURL = url;

  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);
  useEffect(() => {
    // axios.get(`/${props.warehouse_code}`).then((res) => {
    //   console.log(res.data);
    // });
  }, [open]);
  // usestate
  const [datas, setDatas] = useState({
    location: "",
    warehouse_code: "",
    purpose: "",
    warehouse_code_desc: "",
    use: "",
    maximum_weight: 0,
    maximum_count: 0,
    inventory_using: "",
    remarks: "",
  });

  const selectDatas = [
    { name: "사업장", selectOption: location, grid: 1 },
    { name: "용도명", selectOption: purpose, grid: 1 },
    { name: "사용여부", selectOption: use, grid: 1 },
    { name: "재고실사", selectOption: inventory_using, grid: 1 },
  ];
  const inputDatas = [
    { name: "저장위치전체명", type: "text" },
    { name: "최대적치중량", type: "number" },
    { name: "최대적치매수", type: "number" },
    { name: "창고코드", type: "text" },
  ];

  // function
  function RegisteWarehouse(params) {
    axios
      .post("/", datas)
      .then((res) => {
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div>
      <button
        className="ml-3 text-sm font-medium"
        onClick={() => {
          props.setOpen(true);
        }}
      >
        창고등록버튼
      </button>

      <Transition.Root show={props.open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={props.setOpen}
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
                      창고 등록
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
                      className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => props.setOpen(false)}
                      ref={cancelButtonRef}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-sky-300 text-base font-medium text-white  hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => RegisteWarehouse()}
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

export default MapDetail;
