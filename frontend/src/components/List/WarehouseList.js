import { SortAscendingIcon, SortDescendingIcon } from '@heroicons/react/solid'
import { Tooltip } from '@mui/material'
import React from 'react'
import CancelRequest from '../Functions/CancelRequest';

function WarehouseList() {
  const data = [];
  for (let i = 0; i < 10; i++) {
    data.push({
      lotNumber: "346465653" + i * 100,
      place: "포항 공장" + i,
      name: "STRIP_KS-SCP1S_83mm_1t",
      cnt: i + 10,
      process: "ST50",
      PIC: "홍길동" + i
    });
  }
  return (
    <div className="w-11/12 mx-auto my-10">
      <div className="font-bold text-2xl text-center">재고조회</div>
      {/* Search */}
      <div className="mt-5 md:mt-0 md:col-span-2">
        <form action="#" method="POST">
          <div className="overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 bg-white sm:p-6">
              <div className="grid grid-cols-6 gap-6">

                <div className="col-span-1">
                  <label htmlFor="dropdown" className="block text-sm font-medium text-gray-700">
                    dropdown
                  </label>
                  <select
                    id="dropdown"
                    name="dropdown"
                    autoComplete="dropdown-name"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>
                <div className="col-span-1">
                  <label htmlFor="dropdown" className="block text-sm font-medium text-gray-700">
                    dropdown
                  </label>
                  <select
                    id="dropdown"
                    name="dropdown"
                    autoComplete="dropdown-name"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>
                <div className="col-span-1">
                  <label htmlFor="dropdown" className="block text-sm font-medium text-gray-700">
                    dropdown
                  </label>
                  <select
                    id="dropdown"
                    name="dropdown"
                    autoComplete="dropdown-name"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>
                <div className="col-span-1">
                  <label htmlFor="dropdown" className="block text-sm font-medium text-gray-700">
                    dropdown
                  </label>
                  <select
                    id="dropdown"
                    name="dropdown"
                    autoComplete="dropdown-name"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>
                <div className="col-span-1">
                  <label htmlFor="dropdown" className="block text-sm font-medium text-gray-700">
                    dropdown
                  </label>
                  <select
                    id="dropdown"
                    name="dropdown"
                    autoComplete="dropdown-name"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>
                <div className="col-span-1">
                  <label htmlFor="dropdown" className="block text-sm font-medium text-gray-700">
                    dropdown
                  </label>
                  <select
                    id="dropdown"
                    name="dropdown"
                    autoComplete="dropdown-name"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>
                {/*  */}
                <div className="col-span-1 grid grid-cols-3 text-center">
                  <div><label htmlFor="text" className="block text-sm font-medium text-gray-700">
                    text
                  </label>
                    <input
                      type="text"
                      name="text"
                      id="text"
                      autoComplete="address-level2"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    /></div>
                  <div>~</div>
                  <div><label htmlFor="text" className="block text-sm font-medium text-gray-700">
                    text
                  </label>
                    <input
                      type="text"
                      name="text"
                      id="text"
                      autoComplete="address-level2"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    /></div>

                </div>
                <div className="col-span-1 grid grid-cols-3 text-center">
                  <div><label htmlFor="text" className="block text-sm font-medium text-gray-700">
                    text
                  </label>
                    <input
                      type="text"
                      name="text"
                      id="text"
                      autoComplete="address-level2"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    /></div>
                  <div>~</div>
                  <div><label htmlFor="text" className="block text-sm font-medium text-gray-700">
                    text
                  </label>
                    <input
                      type="text"
                      name="text"
                      id="text"
                      autoComplete="address-level2"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    /></div>

                </div>
                <div className="col-span-1">
                  <label htmlFor="text" className="block text-sm font-medium text-gray-700">
                    text
                  </label>
                  <input
                    type="text"
                    name="text"
                    id="text"
                    autoComplete="address-level2"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                <div className="col-span-1">
                  <label htmlFor="text" className="block text-sm font-medium text-gray-700">
                    text
                  </label>
                  <input
                    type="text"
                    name="text"
                    id="text"
                    autoComplete="address-level2"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                <div className="col-span-1">
                  <label htmlFor="text" className="block text-sm font-medium text-gray-700">
                    text
                  </label>
                  <input
                    type="text"
                    name="text"
                    id="text"
                    autoComplete="address-level2"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                <div className="col-span-1">
                  <label htmlFor="text" className="block text-sm font-medium text-gray-700">
                    text
                  </label>
                  <input
                    type="text"
                    name="text"
                    id="text"
                    autoComplete="address-level2"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

              </div>
            </div>
            <div className="px-4 py-3 text-right">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Save
              </button>
            </div>
          </div>
        </form>
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
                      th1
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      th1
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      th1
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      th1
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      th1
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      th1
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      th1
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      th1
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      th1
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      th1
                    </th>

                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {
                    data.map(() => {
                      return <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">value</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">value</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">value</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">value</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">value</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">value</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">value</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">value</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">value</div>
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