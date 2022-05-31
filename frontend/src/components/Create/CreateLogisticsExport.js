import React, { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Select from 'react-select';
import { location, product_family, item_name, warehouse_code, unit } from './SelectOptions'
import axios from 'axios';
function CreateLogisticsExport(props) {
  // useEffect

  // usestate
  const [location_Data, setLocation_Data] = useState(null)
  const [item_no_Data, setItem_no_Data] = useState(null) //
  const [item_name_Data, setItem_name_Data] = useState(null)
  const [to_warehouse_Data, setTo_warehouse_Data] = useState(null)
  const [lot_no_Data, setLot_no_Data] = useState(null) //
  const [unit_Data, setUnit_Data] = useState(null)
  const [weight_Data, setWeight_Data] = useState(0)
  const [width_Data, setWidth_Data] = useState(0)
  const [thickness_Data, setThickness_Data] = useState(0)
  const [height_Data, setHeight_Data] = useState(0)
  const [order_amount_Data, setOrder_amount_Data] = useState(0)
  const [ex_amount_Data, setEx_amount_Data] = useState(0)
  const [ex_remain, setEx_remain] = useState(order_amount_Data - ex_amount_Data)
  const [target_Data, setTarget_Data] = useState(null)
  const [order_date_Data, setOrder_date_Data] = useState(null)
  const [inst_deadline_Data, setInst_deadline_Data] = useState(null)
  const [done_date_Data, setdone_date_Data] = useState(null)

  // function
  function request() {
    if (ex_remain > 0) {
      axios.post('/export', {
        "location": location_Data,
        "item_no": item_no_Data,
        "item_name": item_name_Data,
        "lot_no": lot_no_Data,
        "to_warehouse": to_warehouse_Data,
        "unit": unit_Data,
        "weight": weight_Data,
        "thickness": thickness_Data,
        "height": height_Data,
        "order_amount": order_amount_Data,
        "ex_amount": ex_amount_Data,
        "ex_remain": order_amount_Data - ex_amount_Data,
        "width": width_Data,
        "order_date": order_date_Data,
        "target": target_Data,
        "inst_deadline": inst_deadline_Data,
        "done_date": done_date_Data
      })
        .then((res) => { props.setCreateLogisticsExportOpen(false); })
        .catch((err) => { alert(err) })
    }
  }
  const cancelButtonRef = useRef(null)
  return (
    <div>
      <span className="ml-3 text-sm font-medium">출고예정등록</span>
      <Transition.Root show={props.createLogisticsExportOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={props.setCreateLogisticsExportOpen}>
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
                  <div className='mx-auto'>
                    <div className="font-bold text-2xl text-center my-5">출고 요청</div>
                    <div className="gap-6">
                      <div className="mt-5 md:mt-0 md:col-span-2">
                        <div className="shadow overflow-hidden sm:rounded-md">
                          <div className="px-4 py-5 bg-white sm:p-6">
                            {/* Search */}
                            <div className="mt-5 md:mt-0 md:col-span-2">
                              <div className="overflow-hidden sm:rounded-md">
                                <div className="px-4 py-5 bg-white sm:p-6 bg-gray-100 rounded-lg">
                                  <div className="grid grid-cols-3 gap-4 text-center">
                                    {/* 첫째줄 */}
                                    {/* 사업장 */}
                                    <div className="col-span-1">
                                      <label htmlFor="dropdown" className="block text-sm font-medium text-gray-700">
                                        사업장
                                      </label>
                                      <Select
                                        defaultValue={[]}
                                        // isMulti
                                        name="location"
                                        options={location}
                                        className="basic-multi-select"
                                        classNamePrefix="select"
                                        maxMenuHeight={200}
                                        onChange={(e) => { setLocation_Data(e.value) }}
                                      />
                                    </div>
                                    {/* 창고코드 */}
                                    <div className="col-span-1">
                                      <label htmlFor="dropdown" className="block text-sm font-medium text-gray-700">
                                        창고코드
                                      </label>
                                      <Select
                                        defaultValue={[]}
                                        // isMulti
                                        name="warehouse_code"
                                        options={warehouse_code}
                                        className="basic-multi-select"
                                        classNamePrefix="select"
                                        maxMenuHeight={200}
                                        onChange={(e) => { setTo_warehouse_Data(e.value) }}
                                      />
                                    </div>
                                    {/* 단위 */}
                                    <div className="col-span-1">
                                      <label htmlFor="dropdown" className="block text-sm font-medium text-gray-700">
                                        단위
                                      </label>
                                      <div className="col-span-2">
                                        <Select
                                          defaultValue={[]}
                                          // isMulti
                                          name="unit"
                                          options={unit}
                                          className="basic-multi-select"
                                          classNamePrefix="select"
                                          maxMenuHeight={200}
                                          onChange={(e) => { setUnit_Data(e.value) }}
                                        />
                                      </div>
                                    </div>
                                    {/* 제품명 */}
                                    <div className="col-span-2">
                                      <label htmlFor="dropdown" className="block text-sm font-medium text-gray-700">
                                        제품명
                                      </label>
                                      <Select
                                        defaultValue={[]}
                                        // isMulti
                                        name="item_name"
                                        options={item_name}
                                        className="basic-multi-select"
                                        classNamePrefix="select"
                                        maxMenuHeight={200}
                                        onChange={(e) => { setItem_name_Data(e.value) }}
                                      />
                                    </div>
                                  </div>
                                  {/* 둘재줄 */}
                                  <div className="grid grid-cols-4 gap-4 text-center mt-5">
                                    <div className="col-span-1">
                                      <div className='grid grid-cols-3'>
                                        <div>중량</div>
                                        <div className='col-span-2'><input
                                          type="text"
                                          name="text"
                                          id="text"
                                          autoComplete="address-level2"
                                          className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                          onChange={(e) => { setWeight_Data(e.target.value) }}
                                        /></div>
                                      </div>
                                    </div>
                                    {/*  */}
                                    <div className="col-span-1">
                                      <div className='grid grid-cols-3'>
                                        <div>폭</div>
                                        <div className='col-span-2'><input
                                          type="text"
                                          name="text"
                                          id="text"
                                          autoComplete="address-level2"
                                          className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                          onChange={(e) => { setWidth_Data(e.target.value) }}
                                        /></div>
                                      </div>
                                    </div>
                                    {/* */}
                                    <div className="col-span-1">
                                      <div className='grid grid-cols-3'>
                                        <div>두께</div>
                                        <div className='col-span-2'><input
                                          type="text"
                                          name="text"
                                          id="text"
                                          autoComplete="address-level2"
                                          className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                          onChange={(e) => { setThickness_Data(e.target.value) }}
                                        /></div>
                                      </div>
                                    </div>
                                    {/*  */}
                                    <div className="col-span-1">
                                      <div className='grid grid-cols-3'>
                                        <div>높이</div>
                                        <div className='col-span-2'><input
                                          type="text"
                                          name="text"
                                          id="text"
                                          autoComplete="address-level2"
                                          className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                          onChange={(e) => { setHeight_Data(e.target.value) }}
                                        /></div>
                                      </div>
                                    </div>
                                    {/*  */}
                                    <div className="col-span-1">
                                      <div className='grid grid-cols-3'>
                                        <div>주문량</div>
                                        <div className='col-span-2'><input
                                          type="text"
                                          name="text"
                                          id="text"
                                          autoComplete="address-level2"
                                          className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                          onChange={(e) => { setOrder_amount_Data(e.target.value) }}
                                        /></div>
                                      </div>
                                    </div>
                                    {/*  */}
                                    <div className="col-span-1">
                                      <div className='grid grid-cols-3'>
                                        <div>출고수량</div>
                                        <div className='col-span-2'><input
                                          type="text"
                                          name="text"
                                          id="text"
                                          autoComplete="address-level2"
                                          className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                          onChange={(e) => { setEx_amount_Data(e.target.value) }}
                                        /></div>
                                      </div>
                                    </div>
                                    {/*  */}
                                    {/* 품번 */}
                                    <div className="col-span-1">
                                      <div className='grid grid-cols-3'>
                                        <div>품번</div>
                                        <div className='col-span-2'><input
                                          type="text"
                                          name="text"
                                          id="text"
                                          autoComplete="address-level2"
                                          className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                          onChange={(e) => { setItem_no_Data(e.target.value) }}
                                        /></div>
                                      </div>
                                    </div>
                                    {/* LOT */}
                                    <div className="col-span-1">
                                      <div className='grid grid-cols-3'>
                                        <div>LOT</div>
                                        <div className='col-span-2'><input
                                          type="text"
                                          name="text"
                                          id="text"
                                          autoComplete="address-level2"
                                          className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                          onChange={(e) => { setLot_no_Data(e.target.value) }}
                                        /></div>
                                      </div>
                                    </div>
                                  </div>
                                  {/* 둘재줄 */}
                                  <div className="grid grid-cols-4 gap-4 text-center mt-5">
                                    <div className="col-span-1">
                                      <label htmlFor="dropdown" className="block text-sm font-medium text-gray-700">
                                        지시마감일
                                      </label>
                                      <div className="">
                                        달력
                                      </div>
                                    </div>
                                    <div className="col-span-1">
                                      <label htmlFor="dropdown" className="block text-sm font-medium text-gray-700">
                                        주문일
                                      </label>
                                      <div className="">
                                        달력
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:px-6 text-right">
                    <button
                      type="button"
                      className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => props.setCreateLogisticsExportOpen(false)}
                      ref={cancelButtonRef}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => { request() }}
                    >
                      Request
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

export default CreateLogisticsExport