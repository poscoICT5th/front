import React, { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import SidebarContent from "./SidebarContent";
import './Sidebar.css'
import { useDispatch } from "react-redux";
import { handleLanguage } from '../../store'

function Sidebar(props) {
  const dispatch = useDispatch();
  return (
    <Transition.Root show={props.sidebarOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => { props.setSidebarOpen(false); }}>
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full pr-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-sm">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-8 flex pt-4 sm:-mr-10 sm:pl-4">
                      <button
                        type="button"
                        className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={() => { props.setSidebarOpen(false); }}
                      >
                        <span className="sr-only">Close panel</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex h-full flex-col overflow-y-scroll py-6 shadow-xl opacity-100">
                    <div className="px-4 sm:px-6">
                      <Dialog.Title className="text-lg font-medium mt-10">
                        <div className="sidebar-header flex items-center justify-center">
                          <div className="inline-flex">
                            {/* <svg
                              className="w-10 h-10 text-red-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M11.757 2.034a1 1 0 01.638.519c.483.967.844 1.554 1.207 2.03.368.482.756.876 1.348 1.467A6.985 6.985 0 0117 11a7.002 7.002 0 01-14 0c0-1.79.684-3.583 2.05-4.95a1 1 0 011.707.707c0 1.12.07 1.973.398 2.654.18.374.461.74.945 1.067.116-1.061.328-2.354.614-3.58.225-.966.505-1.93.839-2.734.167-.403.356-.785.57-1.116.208-.322.476-.649.822-.88a1 1 0 01.812-.134zm.364 13.087A2.998 2.998 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879.586.585.879 1.353.879 2.121s-.293 1.536-.879 2.121z"
                                clip-rule="evenodd"
                              />
                            </svg> */}
                            <div className="w-14">
                              <img src="../images/Logo.png" alt="" />
                            </div>
                            <div className="leading-10 text-2xl font-bold ml-1 uppercase">
                              POSCO ICT_5
                            </div>
                          </div>
                        </div>
                      </Dialog.Title>
                      <div className="text-center grid grid-cols-5 gap-1 w-68 mx-auto hidden">
                        <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/322/flag-south-korea_1f1f0-1f1f7.png" alt="" srcset="" onClick={() => { dispatch(handleLanguage("kr")) }} />
                        <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/322/flag-united-states_1f1fa-1f1f8.png" alt="" srcset="" onClick={() => { dispatch(handleLanguage("en")) }} />
                        <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/322/flag-china_1f1e8-1f1f3.png" alt="" srcset="" onClick={() => { dispatch(handleLanguage("cn")) }} />
                        <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/322/flag-japan_1f1ef-1f1f5.png" alt="" srcset="" onClick={() => { dispatch(handleLanguage("jp")) }} />
                        <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/322/flag-vietnam_1f1fb-1f1f3.png" alt="" srcset="" onClick={() => { dispatch(handleLanguage("vn")) }} />
                      </div>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      <SidebarContent
                        setSidebarOpen={props.setSidebarOpen}
                      />
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default Sidebar;
