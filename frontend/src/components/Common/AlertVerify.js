import React, { useRef, useState, Fragment, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
function AlertVerify(props) {
    const cancelButtonRef = useRef(null)

    return (
        <div>
            <Transition.Root show={props.open} as={Fragment}>
                <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={() => { props.setOpen(false) }}>
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
                                    <div className="flex flex-col p-5 rounded-lg shadow bg-white">
                                        <div className="flex flex-col items-center text-center">
                                            <div className="inline-block p-4 bg-yellow-50 rounded-full">
                                                <svg className="w-12 h-12 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z" /></svg>
                                            </div>
                                            <h2 className="mt-2 font-semibold text-gray-800">알람창</h2>
                                            <p className="mt-2 text-sm text-gray-600 leading-relaxed">계속 진행하시겠습니까?</p>
                                        </div>

                                        <div className="mt-3 flex gap-5">
                                            <button
                                                className="w-full px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md"
                                                onClick={() => { props.setOpen(false) }}>
                                                아니오
                                            </button>
                                            <button
                                                className="w-full px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md"
                                                onClick={() => { props.func() }}>
                                                네
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

export default AlertVerify