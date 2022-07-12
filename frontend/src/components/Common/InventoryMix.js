import React, { Fragment, useRef, useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Dialog, Transition } from "@headlessui/react";
import CreateInventory from "../Create/CreateInventory";
import { handleInventoryReload } from '../../store'

function InventoryMix(props) {
  let dispatch = useDispatch();
  let inventoryURL = useSelector((state) => state.inventoryURL);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const cancelButtonRef = useRef(null);
  const [consumedProductsList, setConsumedProductsList] = useState([]);
  const [consumedList, setConsumedList] = useState([]);
  const [inventoryDatas, setinventoryDatas] = useState({
    industry_family: "",
    stock_type: "",
    product_family: "",
    location: "",
    unit: "",
    item_name: "",
    width: 0,
    height: 0,
    thickness: 0,
    weight: 0,
    customer: "",
    warehouse_code: "",
    item_code: "",
    amount: "",
  });

  const showModal = () => {
    if (props.selectedRowKeys.length > 5 || props.selectedRowKeys.length < 1) {
      props.setAlertMessage("제품 가공 원료를 1~5개 사이로 다시 선택해주세요!");
      props.setAlertFailedOpen(true);
    } else {
      setIsModalVisible(true);
    }
  };
  let data = {
    consumedProducts: consumedProductsList,
    newProduct: inventoryDatas, // 새로운 재고로 증가시키는 배열
  };
  async function mixregist() {
    let mixPos = true;

    await props.selectedRows.forEach((element) => {
      if (1 > element.amount) {
        mixPos = false;
        props.setAlertMessage(
          element.lot_no + " 제품의 재고가 존재하지 않습니다."
        );
        props.setAlertFailedOpen(true);

        setIsModalVisible(false);
      } else if (element.state === "이동중" || element.state === "출고대기") {
        mixPos = false;
        props.setAlertMessage(
          element.lot_no +
          " 제품은 " +
          element.state +
          "이므로 사용할 수 없습니다."
        );
        props.setAlertFailedOpen(true);
      }
    });
    if (mixPos) {
      setIsModalVisible(false);
      setModalOpen(true);
    }
  }

  function createAxios() {
    axios.defaults.baseURL = inventoryURL;
    axios
      .post("/produce", data)
      .then((res) => {
        props.setAlertMessage("제품이 가공을 성공했습니다.");
        dispatch(handleInventoryReload(true));
        dispatch(handleInventoryReload(false));
        props.setAlertSucOpen(true);
        setModalOpen(false);
      })
      .catch((err) => {
        props.setAlertMessage("가공을 실패했습니다.");
        dispatch(handleInventoryReload(true));
        dispatch(handleInventoryReload(false));
        props.setAlertFailedOpen(true);
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
  useEffect(() => {
    if (props.clickMix) {
      showModal();
      props.setClickMix(false);
    }
  }, [props.clickMix]);

  return (
    <div>
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
                <Dialog.Panel className="w-1/2 relative bg-white dark:bg-neutral-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8">
                  <div className="px-4 pt-4 pb-4 sm:p-6 sm:pb-4">
                    <div className="w-auto">
                      <div className="shadow overflow-hidden sm:rounded-lg">
                        <div className="text-center">
                          <div className="grid grid-rows-12 m-4">
                            {props.selectedRows.length < 6
                              ? props.selectedRows.map((value) => {
                                return (
                                  <div className="span-row-1 mt-3 grid grid-cols-2 gap-3">
                                    <div className="font-bold text-md text-lg text-gray-700 grid-cols-8 py-2.5">
                                      {value.lot_no}
                                    </div>
                                    <input
                                      type="number"
                                      name="first-name"
                                      id="first-name"
                                      max={value.amount}
                                      min={1}
                                      autoComplete="given-name"
                                      className=" text-lg grid-cols-4 block w-full rounded-md py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
                                      placeholder={
                                        "현재보유량 : " + value.amount
                                      }
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
          shadow-sm px-4 py-2 bg-orange-300 text-white font-medium dark:text-white hover:bg-gray-50 
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                      // onClick={mixregist}
                      onClick={() => {
                        mixregist();
                      }}
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
        inventoryDatas={inventoryDatas}
        setinventoryDatas={setinventoryDatas}
        createAxios={createAxios}
      />
    </div>
  );
}

export default InventoryMix;
