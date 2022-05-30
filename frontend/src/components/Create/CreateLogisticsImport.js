import React, { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import axios from 'axios'
import Select from 'react-select';
import { status, location, product_family, item_name, warehouse_code, unit } from '../List/SelectOptions'

function CreateLogisticsImport(props) {
  // data
  const [location_Data, setLocation_Data] = useState("test")
  const [product_family_Data, setproduct_family_Data] = useState("test")
  const [item_no_Data, setItem_no_Data] = useState("test") //
  const [item_name_Data, setItem_name_Data] = useState("test")
  const [to_warehouse_Data, setTo_warehouse_Data] = useState("test")
  const [unit_Data, setUnit_Data] = useState("test")
  const [weight_Data, setWeight_Data] = useState(0)
  const [thickness_Data, setThickness_Data] = useState(0)
  const [height_Data, setHeight_Data] = useState(0)
  const [order_amount_Data, setOrder_amount_Data] = useState(0)
  const [im_amount_Data, setIm_amount_Data] = useState(0)
  const [width_Data, setWidth_Data] = useState(0)
  const [target_Data, setTarget_Data] = useState("test")
  const [order_date_Data, setOrder_date_Data] = useState("test")
  const [inst_deatline_Data, setInst_deatline_Data] = useState("test")
  const [done_date_Data, setdone_date_Data] = useState("test")
  function request() {
    axios.defaults.baseURL = "http://192.168.0.10:8081"
    axios.post('/import', {
      "location": location_Data,
      "product_family": product_family_Data,
      "item_no": item_no_Data,
      "item_name": item_name_Data,
      "to_warehouse": to_warehouse_Data,
      "unit": unit_Data,
      "weight": weight_Data,
      "min_thickness": thickness_Data,
      "min_height": height_Data,
      "min_order_amount": order_amount_Data,
      "min_im_amount": im_amount_Data,
      "min_width": width_Data,
      "order_date": order_date_Data,
      "target": target_Data,
      "inst_deatline": inst_deatline_Data,
      "done_date": done_date_Data
    })
      .then((res) => { console.log(res) })
      .catch((err) => { alert(err) })
  }
  const cancelButtonRef = useRef(null)
  return (
    <div>
      <span className="ml-3 text-sm font-medium">입고예정등록</span>
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
                <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all w-1/2">
                  <div className='mx-auto'>
                    <div className="font-bold text-2xl text-center my-5">입고 요청</div>
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
                                        defaultValue={[location[0]]}
                                        // isMulti
                                        name="location"
                                        options={location}
                                        className="basic-multi-select"
                                        classNamePrefix="select"
                                        onChange={(e) => { setLocation_Data(e.value) }}
                                      />
                                    </div>
                                    {/* 제품군 */}
                                    <div className="col-span-1">
                                      <label htmlFor="dropdown" className="block text-sm font-medium text-gray-700">
                                        제품군
                                      </label>
                                      <Select
                                        defaultValue={[product_family[0]]}
                                        // isMulti
                                        name="product_family"
                                        options={product_family}
                                        className="basic-multi-select"
                                        classNamePrefix="select"
                                        onChange={(e) => { setproduct_family_Data(e.value) }}
                                      />
                                    </div>
                                    {/* 제품명 */}
                                    <div className="col-span-1">
                                      <label htmlFor="dropdown" className="block text-sm font-medium text-gray-700">
                                        제품명
                                      </label>
                                      <Select
                                        defaultValue={[item_name[0]]}
                                        // isMulti
                                        name="item_name"
                                        options={item_name}
                                        className="basic-multi-select"
                                        classNamePrefix="select"
                                        onChange={(e) => { setItem_name_Data(e.value) }}
                                      />
                                    </div>
                                    {/* 창고코드 */}
                                    <div className="col-span-1">
                                      <label htmlFor="dropdown" className="block text-sm font-medium text-gray-700">
                                        창고코드
                                      </label>
                                      <Select
                                        defaultValue={[warehouse_code[0]]}
                                        // isMulti
                                        name="warehouse_code"
                                        options={warehouse_code}
                                        className="basic-multi-select"
                                        classNamePrefix="select"
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
                                          defaultValue={[unit[0]]}
                                          // isMulti
                                          name="unit"
                                          options={unit}
                                          className="basic-multi-select"
                                          classNamePrefix="select"
                                          onChange={(e) => { setUnit_Data(e.value) }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  {/* 둘재줄 */}
                                  <div className="grid grid-cols-3 gap-4 text-center mt-5">
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
                                        <div>수량</div>
                                        <div className='col-span-2'><input
                                          type="text"
                                          name="text"
                                          id="text"
                                          autoComplete="address-level2"
                                          className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                          onChange={(e) => { setTarget_Data(e.target.value) }}
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
                                        <div>입고수량</div>
                                        <div className='col-span-2'><input
                                          type="text"
                                          name="text"
                                          id="text"
                                          autoComplete="address-level2"
                                          className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                          onChange={(e) => { setIm_amount_Data(e.target.value) }}
                                        /></div>
                                      </div>
                                    </div>
                                    {/*  */}
                                    {/* LOT */}
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
                                  </div>
                                  {/* 둘재줄 */}
                                  <div className="grid grid-cols-4 gap-4 text-center mt-5">
                                    <div className="col-span-1">
                                      <label htmlFor="dropdown" className="block text-sm font-medium text-gray-700">
                                        재고생성일
                                      </label>
                                      <div className="">
                                        달력
                                      </div>
                                    </div>
                                    <div className="col-span-1">
                                      <label htmlFor="dropdown" className="block text-sm font-medium text-gray-700">
                                        창고입고일
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
                      className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => request()}
                    >
                      insert
                    </button>
                    <button
                      type="button"
                      className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
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

export default CreateLogisticsImport