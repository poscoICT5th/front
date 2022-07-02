import React, { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationIcon } from "@heroicons/react/outline";
import jwtDecode from "jwt-decode";

function MypageModal(props) {
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);
  //여기부터 기존 마이페이지 불러오기
  const [userName, setUserName] = useState("");
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState("");
  const [team, setTeam] = useState("");
  const proverbs = [
    "Believe in yourself.",
    "Life is a journey",
    "Don't dream, Be it",
    "No sweat, No sweet",
    "No pain, No gain",
    "Be brave",
  ];
  //명언 랜덤
  const getRandom = function (length) {
    //console.log(parseInt(Math.random() * length));
    return proverbs[parseInt(Math.random() * length)];
  };

  useEffect(() => {
    if (true) {
      setUserName(jwtDecode(sessionStorage.getItem("token")).info.userName);
      setPhone(jwtDecode(sessionStorage.getItem("token")).info.phone);
      setEmail(jwtDecode(sessionStorage.getItem("token")).info.email);
      setTeam(jwtDecode(sessionStorage.getItem("token")).info.team);
    }
  }, [userName]);

  return (
    <div>
      <div
        onClick={() => {
          setOpen(true);
        }}
      >
        마이페이지
      </div>
      {/* */}

      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
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
                <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                        <ExclamationIcon
                          className="h-6 w-6 text-red-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="mt-3 text-center sm:mt-0 sm:ml-1 sm:text-left">
                        <Dialog.Title
                          as="h3"
                          className="text-lg leading-10 font-medium text-gray-900"
                        >
                          회원 정보
                        </Dialog.Title>

                        <div className="mt-5">
                          <div className="w-3/3 mx-auto" data-aos="fade-up">
                            <div className="grid grid-cols-1 gap-1 text-center">
                              <div className="col-span-3 mx-auto">
                                <div className="shadow overflow-hidden sm:rounded-lg">
                                  {/* 
                                    <div className="px-4 py-5 sm:px-6">
                                   <h3 className="text-lg leading-6 font-medium">
          회원 정보
        </h3>
                                    <p className="mt-1 max-w-2xl text-sm text-gray-500">오늘도 화이팅~</p>
                                     </div>
                                  */}
                                  <div className="border-t border-gray-200">
                                    <dl>
                                      <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">
                                          Name
                                        </dt>
                                        <dd className="mt-1 text-sm sm:mt-0 sm:col-span-2">
                                          {userName}
                                        </dd>
                                      </div>
                                      <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">
                                          Team
                                        </dt>
                                        <dd className="mt-1 text-sm sm:mt-0 sm:col-span-2">
                                          {team}
                                        </dd>
                                      </div>
                                      <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">
                                          Phone
                                        </dt>
                                        <dd className="mt-1 text-sm sm:mt-0 sm:col-span-2">
                                          {phone}
                                        </dd>
                                      </div>
                                      <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">
                                          Email Address
                                        </dt>
                                        <dd className="mt-1 text-sm sm:mt-0 sm:col-span-2">
                                          {email}
                                        </dd>
                                      </div>

                                      <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-1 sm:px-3">
                                        <dt className="text-sm font-medium text-gray-500">
                                          Thought Of The Day
                                        </dt>
                                        <dd className="mt-1 text-sm sm:mt-0 sm:col-span-2">
                                          {getRandom(proverbs.length)}
                                        </dd>
                                      </div>
                                    </dl>
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
                      className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => setOpen(false)}
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

export default MypageModal;
