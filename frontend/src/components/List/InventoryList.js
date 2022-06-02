import Aos from 'aos';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CancelRequest from '../Functions/CancelRequest';
import { stock_place, warehouse_code, purpose, location, use, inventory_using, industry_family, stock_quality_status, status_cause } from "../Common/Conditions/SelectOptions";
import Select from "react-select";
import { useSelector } from 'react-redux';

function InventoryList() {
  let url = useSelector((state) => state.logisticsImportURL)
  axios.defaults.baseURL = url

  //useEffect
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  axios.defaults.baseURL = "http://192.168.0.10:8081"
  const [warehouses, setWarehouses] = useState([])
  const [search, setsearch] = useState(false)
  const [industry_family, setIndustry_family] = useState(false)
  const [stock_quality_status, setStock_quality_status] = useState(false)
  const [Status_cause, setStatus_cause] = useState(false)
  const [location, setLocation_Data] = useState(false)
  //컬럼목록
  // industry_family(산업군), target(고객사),
  //   stock_type(제품구분), stock_quality_status(재고품질상태),
  //   status_cause(상태사유), location(사업장), product_family(제품군),
  //   warehouse_code(창고코드), lot_no, Item_num(품번), Item_desc(제품설명),
  //   item_name(제품명), amount(수량), weight(중량), unit(단위), customer(거래처),
  //   부동개월, width(폭) / thickness(두께) / height(높이), inventory_date(재고생성일),
  //   warehouse_date(창고입고일), warehouse_aging(창고경과일)


  // 데이터바인딩

  //
  useEffect(() => {
    // 재고
    // axios.post('/import', {
    //   status: "value"
    // })
    // .then((res) => { console.log(res) })
    // .catch((err) => { console.log(err) })
  }, [])

  return (
    <div data-aos="fade-up" className="">
      <div className="w-11/12 mx-auto my-10">
        <div className="font-bold text-2xl text-center my-10">재고 조회</div>
        {/* Search */}
        <div className="mt-5 md:mt-0 md:col-span-2">
          <div className="overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 bg-white sm:p-6 bg-gray-100 rounded-lg">
              <div className="grid grid-cols-5 gap-4 text-center">
                {/* 첫째줄 */}
                <div className="col-span-1">
                  <label htmlFor="dropdown" className="block text-sm font-medium text-gray-700">
                    산업군
                  </label>
                  <Select
                    defaultValue={[industry_family[0]]}
                    // isMulti
                    name="colors"
                    options={industry_family}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    onChange={(e) => {
                      setIndustry_family(e.value);
                    }}
                    maxMenuHeight={100}
                  />
                </div>
                <div className="col-span-1">
                  <label htmlFor="dropdown" className="block text-sm font-medium text-gray-700">
                    고객사
                  </label>
                  <select
                    id="inventory_using"
                    name="inventory_using"
                    autoComplete="inventory_using-name"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                  >
                    <option value="all">전체</option>
                    <option value="gudong">구동</option>
                    <option value="jeonjang">전장</option>
                    <option value="etc">기타</option>
                  </select>
                </div>
                <div className="col-span-1">
                  <label htmlFor="dropdown" className="block text-sm font-medium text-gray-700">
                    재고품질상태
                  </label>
                  <Select
                    defaultValue={[stock_quality_status[0]]}
                    // isMulti
                    name="colors"
                    options={stock_quality_status}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    onChange={(e) => {
                      setStock_quality_status(e.value);
                    }}
                    maxMenuHeight={100}
                  />
                </div>

                <div className="col-span-1">
                  <label htmlFor="dropdown" className="block text-sm font-medium text-gray-700">
                    상태사유
                  </label>
                  <Select
                    defaultValue={[status_cause[0]]}
                    // isMulti
                    name="colors"
                    options={status_cause}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    onChange={(e) => {
                      setStatus_cause(e.value);
                    }}
                    maxMenuHeight={100}
                  />
                </div>
                <div className="col-span-1">
                  <label htmlFor="dropdown" className="block text-sm font-medium text-gray-700">
                    사업장
                  </label>
                  <Select
                    defaultValue={[location[0]]}
                    // isMulti
                    name="colors"
                    options={location}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    onChange={(e) => {
                      setLocation_Data(e.value);
                    }}
                    maxMenuHeight={100}
                  />
                </div>

                {/* 둘재줄 */}
                <div className="col-span-1 grid grid-cols-4 text-center">
                  <div className=''>weight</div>
                  <div>
                    <input
                      type="text"
                      name="text"
                      id="text"
                      autoComplete="address-level2"
                      className="block w-full rounded-md py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
                    /></div>
                  <div className='text-xs'>-</div>
                  <div>
                    <input
                      type="text"
                      name="text"
                      id="text"
                      autoComplete="address-level2"
                      className="block w-full rounded-md py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
                    />
                  </div>
                </div>
                <div className="col-span-1 grid grid-cols-4 text-center">
                  <div className=''>count</div>
                  <div>
                    <input
                      type="text"
                      name="text"
                      id="text"
                      autoComplete="address-level2"
                      className="block w-full rounded-md py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
                    /></div>
                  <div className='text-xs'>-</div>
                  <div>
                    <input
                      type="text"
                      name="text"
                      id="text"
                      autoComplete="address-level2"
                      className="block w-full rounded-md py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
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
                      className="block w-full rounded-md py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
                    /></div>
                  <div className='text-xs'>-</div>
                  <div>
                    <input
                      type="text"
                      name="text"
                      id="text"
                      autoComplete="address-level2"
                      className="block w-full rounded-md py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
                    />
                  </div>
                </div>
                {/* 수량 */}
                <div className="col-span-1">
                  <div className='grid grid-cols-3'>
                    <div>수량</div>
                    <div className='col-span-2'><input
                      type="text"
                      name="text"
                      id="text"
                      autoComplete="address-level2"
                      className="block w-full rounded-md py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
                    /></div>
                  </div>
                </div>
                {/*  */}
                {/* 중량 */}
                <div className="col-span-1">
                  <div className='grid grid-cols-3'>
                    <div>중량</div>
                    <div className='col-span-2'><input
                      type="text"
                      name="text"
                      id="text"
                      autoComplete="address-level2"
                      className="block w-full rounded-md py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
                    /></div>
                  </div>
                </div>
                {/*  */}


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
                        hidden
                        scope="col"
                        className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        industry_family
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
                        stock_type
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        stock_quality_status
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        status_cause
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        stock_place
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        product_range
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
                        item_num
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        item_desc
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
                        unit
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        customer
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        fixed_month
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
                        inventory_date
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        warehouse_date
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        warehouse_aging
                      </th>

                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        button
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {
                      warehouses.map((warehouse) => {
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

export default InventoryList