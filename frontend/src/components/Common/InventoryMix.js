import React, { Fragment, useRef, useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Dialog, Transition } from "@headlessui/react";
import CreateInventory from "../Create/CreateInventory";

function InventoryMix(props) {
  let inventoryURL = useSelector((state) => state.inventoryURL);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const cancelButtonRef = useRef(null);


  const showModal = () => {
    if (props.selectedRowKeys.length > 5 || props.selectedRowKeys.length < 1) {
      props.setAlertMessage("제품 가공 원료를 1~5개 사이로 다시 선택해주세요!");
      props.setAlertFailedOpen(true);
    } else {
      setIsModalVisible(true);
    }
  };

  //usestate
  const [consumedProductsList, setConsumedProductsList] = useState([]);
  const [consumedList, setConsumedList] = useState([]);
  const [newProductList, setNewProductList] = useState({
    industry_family: "",
    stock_type: "",
    product_family: "",
    state: "",
    location: "",
    warehouse_code: "",
    item_code: "",
    item_name: "",
    amount: "",
    unit: "",
    weight: "",
    width: "",
    thickness: "",
    height: "",
    customer: "",
    stock_quality_status: "",
    status_cause: "",

  });
  useEffect(() => {
    if (props.selectedRows.length > 0) {
      setNewProductList({
        ...newProductList,
        industry_family: props.selectedRows[0].industry_family,
        stock_type: props.selectedRows[0].stock_type,
        product_family: props.selectedRows[0].product_family,
        state: "",
        location: props.selectedRows[0].location,
        warehouse_code: props.warehouse_code,
        item_code: props.selectedRows[0].item_code,
        item_name: "",
        amount: 0,
        unit: props.selectedRows[0].unit,
        weight: props.selectedRows[0].weight,
        width: props.selectedRows[0].width,
        thickness: props.selectedRows[0].thickness,
        height: props.selectedRows[0].height,
        customer: "미정",
        stock_quality_status: props.selectedRows[0].stock_quality_status,
        status_cause: props.selectedRows[0].status_cause,
      });
    }
  }, [props.selectedRows]);

  let data = {
    consumedProducts: consumedProductsList,
    newProduct: newProductList,
  };
  async function mixregist() {
    let mixPos = true;
    await props.selectedRows.forEach((element) => {
      if (1 > element.amount) {
        console.log(element.amount, " 갯수가 도대체 몇개야 ");
        mixPos = false;
        props.setAlertMessage(
          element.lot_no + " 제품의 재고가 존재하지 않습니다."
        );
        props.setAlertFailedOpen(true);

        setIsModalVisible(false);
      } else if (element.state === "이동중" || element.state === "출고대기") {
        mixPos = false;
        props.setAlertMessage(element.lot_no + " 제품은 " + element.state + "이므로 사용할 수 없습니다.");
        props.setAlertFailedOpen(true);
      }
    });
    if (mixPos) {
      createAxios();
    }
  }
  function createAxios() {
    axios.defaults.baseURL = inventoryURL;
    axios
      .post("/produce", data)
      .then((res) => {
        props.setAlertMessage("제품이 가공되었습니다. 제품을 입력해주세요.");
        props.setAlertSucOpen(true);
        setIsModalVisible(false);
      })
      .catch((err) => {
        props.setAlertMessage("가공을 실패했습니다.");
        props.setAlertFailedOpen(true);
        setIsModalVisible(false);
      });
  }
  function createValue(lot_no, amount) {
    return { lot_no: lot_no, amount: amount };
  }

  async function setValue(lot_no, amount) {
    if (!consumedList.includes(lot_no)) {
      setConsumedList((consumedList) => [...consumedList, lot_no]);
      setConsumedProductsList((consumedProducts) => [
        ...consumedProducts,
        createValue(lot_no, amount),
      ]);
    } else {
      const res = await setConsumedList((consumedList) =>
        consumedList.filter((value, index) => value !== lot_no)
      );
      setConsumedProductsList((consumedProducts) =>
        consumedProducts.filter((value, index) => value.lot_no !== lot_no)
      );
      setConsumedList((consumedList) => [...consumedList, lot_no]);
      setConsumedProductsList((consumedProducts) => [
        ...consumedProducts,
        createValue(lot_no, amount),
      ]);
    }
  }

  useEffect(() => { }, [props.selectedRows]);

  return (
    <div>
      <div className="text-right">
        <button
          onClick={showModal}
          className="mr-2 w-20 inline-flex justify-center py-1 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-400 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
        >
          제품 가공
        </button>
      </div>
      {/* 첫번째 모달*/}
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
                <Dialog.Panel className="relative bg-white dark:bg-neutral-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 w-auto max-w-3/5">
                  <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="shadow overflow-hidden sm:rounded-lg">
                        <div className="text-center">
                          <div className="grid grid-rows-12 m-4">
                            {props.selectedRows.length < 6
                              ? props.selectedRows.map((value) => {
                                return (
                                  <div className="span-row-1 mt-3 grid grid-cols-2 gap-3">
                                    <div className="text-md font-medium text-gray-700 grid-cols-8 py-2.5">
                                      {value.lot_no}
                                    </div>
                                    <input
                                      type="text"
                                      name="first-name"
                                      id="first-name"
                                      autoComplete="given-name"
                                      className="grid-cols-4 block w-full rounded-md py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
                                      placeholder="갯수를 입력하세요."
                                      onChange={(e) => {
                                        setValue(
                                          value.lot_no,
                                          e.target.value
                                        );
                                      }}
                                    />
                                  </div>
                                );
                              })
                              : null}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button
                      type="button"
                      className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 dark:bg-neutral-800 text-base font-medium dark:text-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => setIsModalVisible(false)}
                      ref={cancelButtonRef}
                    >
                      닫기
                    </button>
                    <button
                      className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300
          shadow-sm px-4 py-2 bg-green-500 text-base font-medium dark:text-white hover:bg-gray-50 
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                      // onClick={mixregist}
                      onClick={() => {
                        mixregist();
                        setModalOpen(true);

                      }
                      }
                    >
                      제품 가공
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>


      {/* CreateInventory */}
      <CreateInventory
        setModalOpen={setModalOpen}
        modalOpen={modalOpen}
      />
    </div>
  );
}

export default InventoryMix;
