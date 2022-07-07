import Reactm, { Fragment, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationIcon } from '@heroicons/react/outline'
import { AnimatedTree } from 'react-tree-graph'
import axios from 'axios'
import { useSelector } from 'react-redux'
import DetailTracking from './DetailTracking'

function TrackingModal(props) {
    let inventoryURL = useSelector((state) => state.inventoryURL)
    let traceBack = useSelector((state) => state.traceBack)
    const cancelButtonRef = useRef(null)
    const [lot_no_data, setLot_no_data] = useState({})
    const [openDetail, setOpenDetail] = useState(false);
    const [data, setData] = useState({})
    const [nodeDatas, setNodeDatas] = useState({})
    const [nodeData, setNodeData] = useState({})
    const [clickNodeLot, setClickNodeLot] = useState("")

    function getLotData(item) {
        setNodeDatas({ ...nodeDatas, [item.lot_no]: item })
        if (!Array.isArray(item.consumed) || item.consumed.length === 0) {
            return { name: item.lot_no, children: [] }
        }
        else if (Array.isArray(item.consumed) && item.consumed.length !== 0) {
            return {
                name: item.lot_no, children: item.consumed.map(x => {
                    return getLotData(x)
                })
            }
        } else {
            return { name: item.lot_no, children: [] }
        }
    }
    useEffect(() => {
        axios.defaults.baseURL = traceBack
        axios.get(`/lotno/${props.item.lot_no}`)
            // axios.get(`/lotno/testlot123123`)
            .then((res) => { setData(getLotData(res.data)) })
            .catch((err) => { console.log(err) })
    }, [props.item.lot_no])
    function clickLot(params) {
        setNodeData(nodeDatas[params])
        setOpenDetail(true)
    }
    return (
        <div>
            <li onClick={() => { props.setOpenTracking(true) }}>역추적</li>
            <Transition.Root show={props.openTracking} as={Fragment}>
                <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={props.setOpenTracking}>
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
                                <Dialog.Panel className="w-lg relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all">
                                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                        <div className="sm:flex sm:items-start">
                                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                                <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900 text-center">
                                                    {props.item.lot_no}
                                                </Dialog.Title>
                                                <div className="mt-2">
                                                    <AnimatedTree
                                                        data={data}
                                                        height={500}
                                                        width={700}
                                                        duration={800}
                                                        nodeShape="circle"
                                                        svgProps={{
                                                            className: 'custom'
                                                        }}
                                                        gProps={{
                                                            onClick: function noRefCheck(e) { clickLot(e.target.textContent); setClickNodeLot(e.target.textContent) },
                                                            onContextMenu: function noRefCheck(e) { console.log(1) }
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                        <button
                                            type="button"
                                            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                            onClick={() => props.setOpenTracking(false)}
                                            ref={cancelButtonRef}
                                        >
                                            나가기
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
            <DetailTracking
                openDetail={openDetail}
                setOpenDetail={setOpenDetail}
                detailData={nodeData}
                title={clickNodeLot}
            />
        </div>
    )
}

export default TrackingModal