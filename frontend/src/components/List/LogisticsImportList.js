import Aos from 'aos';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CancelRequest from '../Functions/CancelRequest';
import Select from 'react-select';
import { status, location, product_family, item_name, warehouse_code, unit } from './SelectOptions'

function LogisticsImportList() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const [logisticsImportList, setLogisticsImportList] = useState([])
  const [search, setsearch] = useState(false)
  // 데이터바인딩
  const [status_Data, setStatus_Data] = useState("전체조회")
  const [location_Data, setLocation_Data] = useState("전체조회")
  const [product_family_Data, setproduct_family_Data] = useState("전체조회")
  const [lot_no_Data, setLot_no_Data] = useState("전체조회") //
  const [item_no_Data, setItem_no_Data] = useState("전체조회") //
  const [item_name_Data, setItem_name_Data] = useState("전체조회")
  const [to_warehouse_Data, setTo_warehouse_Data] = useState("전체조회")
  const [unit_Data, setUnit_Data] = useState("전체조회")
  const [min_weight_Data, setMin_weight_Data] = useState(0)
  const [max_weight_Data, setMax_weight_Data] = useState(1000000)
  const [min_thickness_Data, setMin_thickness_Data] = useState(0)
  const [max_thickness_Data, setMax_thickness_Data] = useState(1000000)
  const [min_height_Data, setmin_height_Data] = useState(0)
  const [max_height_Data, setMax_height_Data] = useState(1000000)
  const [min_order_amount_Data, setMin_order_amount_Data] = useState(0)
  const [max_order_amount_Data, setMax_order_amount_Data] = useState(1000000)
  const [min_im_amount_Data, setMin_im_amount_Data] = useState(0)
  const [max_im_amount_Data, setMax_im_amount_Data] = useState(1000000)
  const [min_width_Data, setMin_width_Data] = useState(0)
  const [max_width_Data, setMax_width_Data] = useState(1000000)
  const [target_Data, setTarget_Data] = useState("전체조회")
  const [order_date_Data, setOrder_date_Data] = useState("전체조회")
  const [inst_reg_date_Date_Data, setInst_reg_date_Date_Data] = useState("전체조회")
  const [inst_deatline_Data, setInst_deatline_Data] = useState("전체조회")
  const [done_date_Data, setdone_date_Data] = useState("전체조회")
  //
  useEffect(() => {
    // 입고 조건검색
    axios.defaults.baseURL = "http://192.168.0.10:8081"
    axios.get('/logistics/import', {
      status: status_Data,
      location: location_Data,
      product_family: product_family_Data,
      lot_no: lot_no_Data,
      item_no: item_no_Data,
      item_name: item_name_Data,
      to_warehouse: to_warehouse_Data,
      unit: unit_Data,
      min_weight: min_weight_Data,
      max_weight: max_weight_Data,
      min_thickness: min_thickness_Data,
      max_thickness: max_thickness_Data,
      min_height: min_height_Data,
      max_height: max_height_Data,
      min_order_amount: min_order_amount_Data,
      max_order_amount: max_order_amount_Data,
      min_im_amount: min_im_amount_Data,
      max_im_amount: max_im_amount_Data,
      min_width: min_width_Data,
      max_width: max_width_Data,
      order_date: order_date_Data,
      target: target_Data,
      inst_reg_date_Date: inst_reg_date_Date_Data,
      inst_deatline: inst_deatline_Data,
      done_date: done_date_Data
    })
      .then((res) => { setLogisticsImportList(res.data) })
      .catch((err) => { console.log(err) })
  }, [search])

  return (
    <div data-aos="fade-up" className="">
      <div className="w-full mx-auto my-10">
        <div className="font-bold text-2xl text-center my-10">입고 조회</div>
        {/* Search */}
        <div className="mt-5 md:mt-0 md:col-span-2">
          <div className="overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 bg-white sm:p-6 bg-gray-100 rounded-lg">
              <div className="grid grid-cols-6 gap-4 text-center">
                {/* 첫째줄 */}
                <div className="col-span-1">
                  <label htmlFor="dropdown" className="block text-sm font-medium text-gray-700">
                    작업상태
                  </label>
                  <Select
                    defaultValue={[status[0]]}
                    // isMulti
                    name="status"
                    options={status}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    onChange={(e) => { setStatus_Data(e.value); console.log(e.value) }}
                  />
                </div>
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
              <div className="grid grid-cols-5 gap-4 text-center mt-5">
                <div className="col-span-1 grid grid-cols-4 text-center">
                  <div className=''>폭</div>
                  <div>
                    <input
                      type="text"
                      name="text"
                      id="text"
                      autoComplete="address-level2"
                      className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      onChange={(e) => { setMin_width_Data(e.target.value) }}
                    /></div>
                  <div className='text-xs'>~</div>
                  <div>
                    <input
                      type="text"
                      name="text"
                      id="text"
                      autoComplete="address-level2"
                      className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      onChange={(e) => { setMax_width_Data(e.target.value) }}
                    />
                  </div>
                </div>
                <div className="col-span-1 grid grid-cols-4 text-center">
                  <div className=''>두께</div>
                  <div>
                    <input
                      type="text"
                      name="text"
                      id="text"
                      autoComplete="address-level2"
                      className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      onChange={(e) => { setMin_thickness_Data(e.target.value) }}
                    /></div>
                  <div className='text-xs'>~</div>
                  <div>
                    <input
                      type="text"
                      name="text"
                      id="text"
                      autoComplete="address-level2"
                      className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      onChange={(e) => { setMax_thickness_Data(e.target.value) }}
                    />
                  </div>
                </div>
                <div className="col-span-1 grid grid-cols-4 text-center">
                  <div className=''>높이</div>
                  <div>
                    <input
                      type="text"
                      name="text"
                      id="text"
                      autoComplete="address-level2"
                      className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      onChange={(e) => { setmin_height_Data(e.target.value) }}
                    /></div>
                  <div className='text-xs'>-</div>
                  <div>
                    <input
                      type="text"
                      name="text"
                      id="text"
                      autoComplete="address-level2"
                      className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      onChange={(e) => { setMax_height_Data(e.target.value) }}
                    />
                  </div>
                </div>
                {/* 수량 */}
                <div className="col-span-1 grid grid-cols-4 text-center">
                  <div className=''>주문량</div>
                  <div>
                    <input
                      type="text"
                      name="text"
                      id="text"
                      autoComplete="address-level2"
                      className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      onChange={(e) => { setMin_order_amount_Data(e.target.value) }}
                    /></div>
                  <div className='text-xs'>-</div>
                  <div>
                    <input
                      type="text"
                      name="text"
                      id="text"
                      autoComplete="address-level2"
                      className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      onChange={(e) => { setMax_order_amount_Data(e.target.value) }}
                    />
                  </div>
                </div>
                {/* 입고수량 */}
                <div className="col-span-1 grid grid-cols-4 text-center">
                  <div className=''>입고수량</div>
                  <div>
                    <input
                      type="text"
                      name="text"
                      id="text"
                      autoComplete="address-level2"
                      className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      onChange={(e) => { setMin_im_amount_Data(e.target.value) }}
                    /></div>
                  <div className='text-xs'>-</div>
                  <div>
                    <input
                      type="text"
                      name="text"
                      id="text"
                      autoComplete="address-level2"
                      className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      onChange={(e) => { setMax_im_amount_Data(e.target.value) }}
                    />
                  </div>
                </div>
                {/* 중량 */}
                <div className="col-span-1 grid grid-cols-4 text-center">
                  <div className=''>중량</div>
                  <div>
                    <input
                      type="text"
                      name="text"
                      id="text"
                      autoComplete="address-level2"
                      className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      onChange={(e) => { setMin_weight_Data(e.target.value) }}
                    /></div>
                  <div className='text-xs'>-</div>
                  <div>
                    <input
                      type="text"
                      name="text"
                      id="text"
                      autoComplete="address-level2"
                      className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      onChange={(e) => { setMax_weight_Data(e.target.value) }}
                    />
                  </div>
                </div>
                {/*  */}
                {/* 거래처 */}
                <div className="col-span-1">
                  <div className='grid grid-cols-3'>
                    <div>거래처</div>
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
            <div className="px-4 py-3 text-right">
              <button
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                onClick={() => { setsearch(!search) }}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        {/* table */}
        <div className="flex flex-col mx-1 mt-2 text-center">
          <div className="-my-2 overflow-x-auto">
            <div className="py-2 align-middle inline-block min-w-full">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        status
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        location
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        instruction_no
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        product_family
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        lot_no
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        item_no
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        item_name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        amount
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        weight
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        target
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        width
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        thickness
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        height
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        order_amount
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        im_amount
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        status
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        to_warehouse
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        order_date
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        inst_reg_date
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        inst_deadline
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        done_date
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {
                      logisticsImportList.map((warehouse) => {
                        return <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{warehouse.location}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{warehouse.warehouse_code}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{warehouse.purpose}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{warehouse.warehouse_code_desc}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{warehouse.use}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{warehouse.maximum_weight}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{warehouse.maxinum_count}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{warehouse.inventory_using}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{warehouse.remarks}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900"><CancelRequest /></div>
                          </td>
                        </tr>
                      })
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LogisticsImportList