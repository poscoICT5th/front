import React, { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import SearchSelect from "./Conditions/SearchSelect";
import { inventory_status_cause, inventory_stock_quality_status } from "./Conditions/SelectOptions";

function Invenupdate(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [change, setChange] = useState("");
  const cancelButtonRef = useRef(null);

  //클릭하면 모달창 띄우기
  const showModal = () => {
    setIsModalVisible(true);
  };
  //셀렉트 데이터 가져오기
  const [selectData, setselectData] = useState({
    name: "inventory_stock_quality_status",
    selectOption: inventory_stock_quality_status,
    grid: 1,
    purpose: "inventory",
    ko: "품질상태",
    cn: "质量状态",
    jp: "品質状態",
    vn: "tìnhtrạngchấtlượng",
  },
  {
    name: "status_cause",
    selectOption: inventory_status_cause,
    grid: 1,
    purpose: "search",
    ko: "상태사유",
    cn: "状态事由",
    jp: "状態事由",
    vn: "lýdotrạngthái",
  });
  return (
    <div>
      <button
        onClick={showModal}
        className="mb-2 w-20 inline-flex justify-center py-1 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-emerald-700 hover:bg-emerald-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
      >
        품질 상태 수정
      </button>
      {/* 첫번째 모달 */}
      <Transition.Root show={isModalVisible} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={() => {
            setIsModalVisible(false);
            //props.setOpenDetail(false);
          }}
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
                <Dialog.Panel className="relative bg-white dark:bg-gray-700 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 w-auto max-w-3/5">
                  <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="shadow overflow-hidden sm:rounded-lg">
                        <div className="text-center">
                          <div className="grid grid-rows-12 m-4">
                            {/* input 창 만들기 */}
                            {props.selectedRows.map((value) => {
                              return (
                                <div className="span-row-1 mt-3 grid grid-cols-2 gap-3">
                                  <div className="text-md font-medium text-gray-700 grid-cols-8 py-2.5">
                                    {/* {value.lot_no} */}  
                                  </div>
                                </div>
                              );
                            })}
                          
                            <SearchSelect
                              name={selectData.name}
                              selectData={selectData.selectOption}
                              grid={selectData.grid}
                              purpose={selectData.purpose}
                              ko={selectData.ko}
                              cn={selectData.cn}
                              jp={selectData.jp}
                              vn={selectData.vn}
                            />

                            {/*이전코드 복붙*/}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button
                      type="button"
                      className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 dark:bg-gray-700 text-base font-medium dark:text-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => setIsModalVisible(false)}
                      ref={cancelButtonRef}
                    >
                      닫기
                    </button>
                    {/* <button
                      className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300
          shadow-sm px-4 py-2 bg-green-500 text-base font-medium dark:text-white hover:bg-gray-50 
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={mixregist}
                    >
                      제품 가공
                    </button> */}
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

export default Invenupdate;
