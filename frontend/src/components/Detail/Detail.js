import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import axios from "axios";
function Detail(props) {
  const [openUpdate, setOpenUpdate] = useState(false);
  const cancelButtonRef = useRef(null);
  const [updateList, setUpdateList] = useState([]);
  //axios put 어떻게 보내는지
  //datas  onchange 어떻게 하는지

  //값 새로 넣을때 onchange
  const handleChange = (e) => {
    setDatas({
      text: e.target.value,
    });
    console.log(e.target.value);
  };
  function save(params) {
    console.log(datas, " 고치는 값이 datas 에 들어와야하고 ,, ");
    axios
      .put(`/${props.detailData.warehouse_code}`, datas) //보내기만 하면됨 수정이기 때문에
      .then((res) => {
        if (res.data) {
          alert("수정 성공");
          props.setOpenDetail(false);
          setOpenUpdate(false);
        }
      })
      .catch((err) => {
        alert("수정 실패 ㅠㅠㅠ");
        props.setOpenDetail(false);
        setOpenUpdate(false);
      });
  }
  const [datas, setDatas] = useState({
    //순서 상관없음
    location: "",
    warehouse_code: "",
    purpose: "",
    warehouse_code_desc: "",
    use: "",
    maximum_weight: 0,
    maximum_count: 0,
    inventory_using: "",
  });
  useEffect(() => {
    setDatas({ ...props.detailData });
  }, [props.detailData.warehouse_code]);

  console.log(datas.location, " 지역이다... ");
  console.log(datas.warehouse_code, "warehouse 코드이다... ");

  return (
    <Transition.Root show={props.openDetail} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={() => {
          setOpenUpdate(false);
          props.setOpenDetail(false);
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
                        <div className="grid grid-cols-5">
                          {openUpdate
                            ? Object.entries(props.detailData).map(
                              ([key, value], index) => {
                                return (
                                  <div className="col-span-1">
                                    <div className="mt-1 text-sm p-3 text-white-900">
                                      <label className="block text-sm font-medium text-gray-300">
                                        {key}
                                      </label>
                                      <div className="block text-lg font-medium">
                                        <input
                                          name="value"
                                          type="text"
                                          autoComplete="email"
                                          required
                                          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-sky-500 focus:border-sky-500 focus:z-10 sm:text-sm"
                                          placeholder={value}
                                          disabled={
                                            //조건 넣어주기  && ||
                                            [
                                              "inventory_using",
                                              "purpose",
                                              "use",
                                            ].includes(key)
                                              ? false
                                              : true
                                          }
                                          onChange={(e) => {
                                            setDatas(
                                              // 여기서 setdatas 에 바꾼 값 넣어주기 .
                                              {
                                                ...datas,
                                                [key]: e.target.value,
                                              }
                                            );
                                          }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                );
                              }
                            )
                            : Object.entries(props.detailData).map(
                              ([key, value], index) => {
                                return (
                                  <div className="col-span-1">
                                    <div className="mt-1 text-sm p-3 text-white-900">
                                      <label className="block text-sm font-medium text-gray-300">
                                        {key}
                                      </label>
                                      <div className="block text-lg font-medium">
                                        {value}
                                      </div>
                                    </div>
                                  </div>
                                );
                              }
                            )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 dark:bg-gray-700 text-base font-medium dark:text-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => props.setOpenDetail(false)}
                    ref={cancelButtonRef}
                  >
                    닫기
                  </button>

                  {openUpdate ? (
                    <button
                      type="button"
                      className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 dark:bg-gray-700 text-base font-medium dark:text-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => save()}
                      ref={cancelButtonRef}
                    >
                      저장
                    </button>
                  ) : null
                  }
                  {
                    !openUpdate && props.title === "warehouse"
                      ? <button
                        type="button"
                        className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 dark:bg-gray-700 text-base font-medium dark:text-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={() => setOpenUpdate(true)}
                        ref={cancelButtonRef}
                      >
                        수정
                      </button>
                      : null
                  }
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default Detail;
