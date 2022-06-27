import React, { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import SidebarContent from "./SidebarContent";
import './Sidebar.css'

function Sidebar(props) {
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
                            <div className="w-14">
                              <img src="../images/Logo.png" alt="" />
                            </div>
                            <div className="leading-10 text-2xl font-bold ml-1 uppercase">
                              POSCO ICT_5
                            </div>
                          </div>
                        </div>
                      </Dialog.Title>
                    </div>
                    <div className="relative flex-1 px-4 sm:px-6">
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
