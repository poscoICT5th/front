import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Detail from '../Detail/Detail';

function Detailupdate(props) {
  // const cancelButtonRef = useRef(null);

  return (
    // 버튼 false  바꾸고 오픈 으로
    // 하나 꺼주는 버 튼 만들기
    // 디테일 꺼주고 하나 만 살리기
    <div>
      <button
        onClick={() => {
          props.setOpenDetail(false); //false 기존창 닫아줘야함
          props.setOpenUpdate(true); //true 수정창 열어주기
        }}
        className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
      >
        수정zzzzz
      </button>
      <Transition.Root show={props.openUpdate} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          // initialFocus={cancelButtonRef}
          onClose={props.setOpenUpdate}
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
                   <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 w-auto max-w-3/5">
                  ㅋㅋㅋㅋㅋㅋㅋ
                  <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button
                      type="button"
                      className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => props.setOpenUpdate(true)}
                      // ref={cancelButtonRef}
                    >
                      닫기
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

export default Detailupdate;
