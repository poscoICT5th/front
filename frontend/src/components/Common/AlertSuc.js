import React, { useRef, useState, Fragment, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
function AlertSuc(props) {
    const cancelButtonRef = useRef(null)

    return (
        <div>
            <Transition.Root show={props.open} as={Fragment}>
                <Dialog
                    as="div"
                    className="relative z-10"
                    initialFocus={cancelButtonRef}
                    onClose={() => { props.setOpen(false) }}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 transition-opacity bg-opacity-75" />
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
                                <div className="w-full md:w-1/3 mx-auto">
                                    <div className="flex flex-col p-5 rounded-lg shadow bg-white dark:bg-neutral-800">
                                        <div className="flex flex-col items-center text-center">
                                            <div className="inline-block p-4 bg-yellow-50 rounded-full">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <h2 className="mt-2 font-semibold">Success!</h2>
                                            <p className="mt-2 text-sm leading-relaxed">{props.message}</p>
                                        </div>
                                        <div className="mt-3">
                                            <button
                                                className="w-full px-4 py-2 bg-gray-100 dark:bg-neutral-800 hover:bg-gray-200 dark:hover:dark:bg-neutral-900 text-gray-800 dark:text-gray-100 text-sm font-medium rounded-md"
                                                onClick={() => { props.setOpen(false) }}>
                                                창닫기
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </div >
    )
}

export default AlertSuc