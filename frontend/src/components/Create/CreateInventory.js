import React, { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationIcon } from '@heroicons/react/outline'

function CreateInventory(props) {

  const cancelButtonRef = useRef(null)
  return (
    <div>
      <Transition.Root show={props.createLogisticsImportOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={props.setCreateLogisticsImportOpen}>
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
                  <div className='w-full mx-auto'>
                    <div className="font-bold text-2xl text-center my-5">입고 요청</div>
                    <div className="gap-6">
                      <div className="mt-5 md:mt-0 md:col-span-2">
                        <div className="shadow overflow-hidden sm:rounded-md">
                          <div className="px-4 py-5 bg-white sm:p-6">
                            <div className='grid-rows-5 gap-4'>
                              {/* 첫번째줄 */}
                              <div className='grid grid-cols-4 gap-6 m-5'>
                                <div className="">
                                  <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                    Country
                                  </label>
                                  <select
                                    id="country"
                                    name="country"
                                    autoComplete="country-name"
                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                                  >
                                    <option>United States</option>
                                    <option>Canada</option>
                                    <option>Mexico</option>
                                  </select>
                                </div>
                                <div className="">
                                  <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                    Country
                                  </label>
                                  <select
                                    id="country"
                                    name="country"
                                    autoComplete="country-name"
                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                                  >
                                    <option>United States</option>
                                    <option>Canada</option>
                                    <option>Mexico</option>
                                  </select>
                                </div>
                              </div>
                              {/* 두번째줄 */}
                              <div className='grid grid-cols-5 gap-6 m-5'>
                                <div className="">
                                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                    First name
                                  </label>
                                  <input
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
                                  />
                                </div>
                                <div className="">
                                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                    First name
                                  </label>
                                  <input
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
                                  />
                                </div>
                                <div className="">
                                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                    First name
                                  </label>
                                  <input
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
                                  />
                                </div>
                                <div className="">
                                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                    First name
                                  </label>
                                  <input
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
                                  />
                                </div>
                                <div className="">
                                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                    First name
                                  </label>
                                  <input
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
                                  />
                                </div>
                                <div className="">
                                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                    First name
                                  </label>
                                  <input
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
                                  />
                                </div>
                                <div className="">
                                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                    First name
                                  </label>
                                  <input
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
                                  />
                                </div>
                                <div className="">
                                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                    First name
                                  </label>
                                  <input
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
                                  />
                                </div>
                                <div className="">
                                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                    First name
                                  </label>
                                  <input
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
                                  />
                                </div>
                                <div className="">
                                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                    First name
                                  </label>
                                  <input
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
                                  />
                                </div>
                                <div className="">
                                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                    First name
                                  </label>
                                  <input
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
                                  />
                                </div>
                                <div className="">
                                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                    First name
                                  </label>
                                  <input
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
                                  />
                                </div>
                                <div className="">
                                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                    First name
                                  </label>
                                  <input
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
                                  />
                                </div>
                                <div className="">
                                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                    First name
                                  </label>
                                  <input
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
                                  />
                                </div>
                              </div>
                              <div className='grid grid-cols-4 m-5'>
                                <div>c1</div>
                                <div>c2</div>
                                <div>c3</div>
                                <div>c4</div>
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
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => props.setCreateLogisticsImportOpen(false)}
                    >
                      Deactivate
                    </button>
                    <button
                      type="button"
                      className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => props.setCreateLogisticsImportOpen(false)}
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
  )
}

export default CreateInventory