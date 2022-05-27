import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CancelRequest from '../Functions/CancelRequest';



function WarehouseList() {
  const [warehouses, setwarehouses] = useState([])
  const [search, setsearch] = useState(false)
  // 데이터바인딩
  const [location, setLocation] = useState(null)
  const [warehouse_code, setWarehouse_code] = useState(null)
  const [purpose, setPurpose] = useState(null)
  const [warehouse_code_desc, setWarehouse_code_desc] = useState(null)
  const [use, setUse] = useState(null)
  const [minimum_weight, setMinimum_weight] = useState(null)
  const [maximum_weight, setMaximum_weight] = useState(null)
  const [minumum_count, setMinumum_count] = useState(null)
  const [maximum_count, setMaximum_count] = useState(null)
  const [inventory_using, setInventory_using] = useState(null)
  const [remarks, setRemarks] = useState(null)
  //
  useEffect(() => {
    // 창고조회
    axios.defaults.baseURL = "http://192.168.0.10:8081"
    axios.get('/warehouse/search', {
      location: location,
      warehouse_code: warehouse_code,
      purpose: purpose,
      use: use,
      minimum_weight: minimum_weight,
      maximum_weight: maximum_weight,
      minumum_count: minumum_count,
      maximum_count: maximum_count,
      inventory_using: inventory_using,
    })
      .then((res) => { setwarehouses(res.data) })
      .catch((err) => { console.log(err) })
  }, [search])

  function searchAll() {
    axios.defaults.baseURL = "http://192.168.0.10:8081"
    axios.get('/warehouse', {
      location: location,
      warehouse_code: warehouse_code,
      purpose: purpose,
      use: use,
      minimum_weight: minimum_weight,
      maximum_weight: maximum_weight,
      minumum_count: minumum_count,
      maximum_count: maximum_count,
      inventory_using: inventory_using,
    })
      .then((res) => { setwarehouses(res.data) })
      .catch((err) => { console.log(err) })
  }
  return (
    <div className="max-w-screen-2xl mx-auto my-10">
      <div className="font-bold text-2xl text-center my-10">창고조회</div>
      {/* Search */}
      <div className="mt-5 md:mt-0 md:col-span-2">
        <div className="overflow-hidden sm:rounded-md">
          <div className="px-4 py-5 bg-white sm:p-6 bg-gray-100 rounded-lg">
            <div className="grid grid-cols-5 gap-4 text-center">
              {/* 첫째줄 */}
              <div className="col-span-1">
                <label htmlFor="dropdown" className="block text-sm font-medium text-gray-700">
                  location
                </label>
                <select
                  id="dropdown"
                  name="dropdown"
                  autoComplete="dropdown-name"
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                  onClick={(e) => { setLocation(e.target.value) }}
                >
                  <option value="all">전체</option>
                  <option value="천안">천안</option>
                  <option value="광양">광양</option>
                  <option value="포항">포항</option>
                </select>
              </div>
              <div className="col-span-1">
                <label htmlFor="dropdown" className="block text-sm font-medium text-gray-700">
                  inventory_using
                </label>
                <select
                  id="inventory_using"
                  name="inventory_using"
                  autoComplete="inventory_using-name"
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                  onClick={(e) => { setInventory_using(e.target.value) }}
                >
                  <option value="all">전체</option>
                  <option value="구동">구동</option>
                  <option value="전장">전장</option>
                  <option value="기타">기타</option>
                </select>
              </div>
              <div className="col-span-1">
                <label htmlFor="dropdown" className="block text-sm font-medium text-gray-700">
                  purpose
                </label>
                <select
                  id="dropdown"
                  name="dropdown"
                  autoComplete="dropdown-name"
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                  onClick={(e) => { setPurpose(e.target.value) }}
                >
                  <option value="all">전체</option>
                  <option value="완제품">완제품</option>
                  <option value="반제품">반제품</option>
                  <option value="불량품">불량품</option>
                </select>
              </div>

              <div className="col-span-1">
                <label htmlFor="dropdown" className="block text-sm font-medium text-gray-700">
                  use
                </label>
                <select
                  id="dropdown"
                  name="dropdown"
                  autoComplete="dropdown-name"
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                  onClick={(e) => { setUse(e.target.value) }}
                >
                  <option value="all">전체</option>
                  <option value="사용">사용</option>
                  <option value="미사용">미사용</option>

                </select>
              </div>
              <div className="col-span-1">
                <label htmlFor="dropdown" className="block text-sm font-medium text-gray-700">
                  warehouse_code
                </label>
                <select
                  id="dropdown"
                  name="dropdown"
                  autoComplete="dropdown-name"
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                  onClick={(e) => { setWarehouse_code(e.target.value) }}
                >
                  <option value="all">전체</option>
                  <option value="A1">A1</option>
                  <option value="A2">A2</option>
                  <option value="A3">A3</option>
                  <option value="B1">B1</option>
                  <option value="B2">B2</option>
                  <option value="B3">B3</option>
                  <option value="C1">C1</option>
                  <option value="C2">C2</option>
                  <option value="C3">C3</option>
                </select>
              </div>

              {/* 둘재줄 */}
              <div className="col-span-1 grid grid-cols-4 text-center">
                <div className=''>weight</div>
                <div>
                  <input
                    type="number"
                    min={0}
                    name="text"
                    id="text"
                    autoComplete="address-level2"
                    className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    onChange={(e) => { setMinimum_weight(e.target.value) }}
                  /></div>
                <div className='text-xs'>-</div>
                <div>
                  <input
                    type="number"
                    min={0}
                    name="text"
                    id="text"
                    autoComplete="address-level2"
                    className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    onChange={(e) => { setMaximum_weight(e.target.value) }}
                  />
                </div>
              </div>
              <div className="col-span-1 grid grid-cols-4 text-center">
                <div className=''>count</div>
                <div>
                  <input
                    type="number"
                    min={0}
                    name="text"
                    id="text"
                    autoComplete="address-level2"
                    className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    onChange={(e) => { setMinumum_count(e.target.value) }}
                  /></div>
                <div className='text-xs'>-</div>
                <div>
                  <input
                    type="number"
                    min={0}
                    name="text"
                    id="text"
                    autoComplete="address-level2"
                    className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    onChange={(e) => { setMaximum_count(e.target.value) }}
                  />
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
                      location
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      warehouse_code
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      purpose
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      warehouse_code_desc
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      use
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      maximum_weight
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      maxinum_count
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      inventory_using
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      remarks
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      뭔가의버튼
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
  )
}

export default WarehouseList