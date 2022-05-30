import axios from 'axios';
import Aos from 'aos';
import React, { useEffect, useState } from 'react'
import CancelRequest from '../Functions/CancelRequest';
import Select from 'react-select';
import { status,location } from './SelectOptions';

function LosgisticsMoveList() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const [warehouses, setwarehouses] = useState([])
  const [date, setDate] = useState(null);
  const [search, setsearch] = useState(false)
  
  //이동지시번호

  //lot_no

  //item_no
  //item_name
  //width
  //thickness
  //height
  //move_amount
  //from_warehouse
  //to_warehouse
  //inst_reg_date
  //inst_deadline
  //done_date

  useEffect(() => {
    // 입고
    axios.defaults.baseURL = "http://192.168.0.10:8081"
    axios.get('/warehouse', {})
      .then((res) => { setwarehouses(res.data) })
      .catch((err) => { console.log(err) })
  }, [search])

  return (
    <div data-aos="fade-up" className="">
      <div className="w-full mx-auto my-10">
        <div className="font-bold text-2xl text-center my-10">창고이동 조회</div>
        {/* Search */}
        <div className="mt-5 md:mt-0 md:col-span-2">
          <div className="overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 bg-white sm:p-6 bg-gray-100 rounded-lg">
              <div className="grid grid-cols-7 gap-4 text-center">
                {/* 첫째줄 */}
                <div className="col-span-1">
                  <label htmlFor="dropdown" className="block text-sm font-medium text-gray-700">
                    작업상태
                  </label>
               <Select
                    defaultValue={[status[0]]}
                    // isMulti
                    name="colors"
                    options={status}
                    className="basic-multi-select"
                    classNamePrefix="select"
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
                  />


                </div>
                <div className="col-span-1">
                  <label htmlFor="dropdown" className="block text-sm font-medium text-gray-700">
                    이동지시번호
                  </label>
                  <select
                    id="dropdown"
                    name="dropdown"
                    autoComplete="dropdown-name"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                  >
                    <option>전체</option>
                    <option>합격</option>
                    <option>불합격</option>
                  </select>
                </div>
                <div className="col-span-1">
                  <label htmlFor="dropdown" className="block text-sm font-medium text-gray-700">
                    사업장
                  </label>
                  <select
                    id="dropdown"
                    name="dropdown"
                    autoComplete="dropdown-name"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                  >
                    <option>전체</option>
                    <option>천안</option>
                    <option>광양</option>
                    <option>포항</option>
                  </select>
                </div>
                <div className="col-span-1">
                  <label htmlFor="dropdown" className="block text-sm font-medium text-gray-700">
                    제품군
                  </label>
                  <select
                    id="dropdown"
                    name="dropdown"
                    autoComplete="dropdown-name"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                  >
                    <option>전체</option>
                    <option>MT</option>
                    <option>ROTOR ASSY</option>
                    <option>STRIP</option>
                  </select>
                </div>
                <div className="col-span-1">
                  <label htmlFor="dropdown" className="block text-sm font-medium text-gray-700">
                    창고코드
                  </label>
                  <select
                    id="dropdown"
                    name="dropdown"
                    autoComplete="dropdown-name"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                  >
                    <option>전체</option>
                    <option>A1</option>
                    <option>A2</option>
                    <option>A3</option>
                    <option>B1</option>
                    <option>B2</option>
                    <option>B3</option>
                    <option>C1</option>
                    <option>C2</option>
                    <option>C3</option>
                  </select>
                </div>
                <div className="col-span-1">
                  <label htmlFor="dropdown" className="block text-sm font-medium text-gray-700">
                    상태사유
                  </label>
                  <select
                    id="dropdown"
                    name="dropdown"
                    autoComplete="dropdown-name"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                  >
                    <option>전체</option>
                    <option>각인대기</option>
                    <option>각인미완료</option>
                    <option>각인완료</option>
                    <option>각인완료 대차없음</option>
                    <option>대차부족</option>
                    <option>대차부족으로인한 박스작업완료</option>
                    <option>대차없음</option>
                    <option>박스포장</option>
                    <option>양산개발샘플</option>
                    <option>외관</option>
                    <option>원자재불량(포항)</option>
                    <option>원자재불량(천안)</option>
                    <option>재고구분</option>
                    <option>재선별완료</option>
                    <option>철통부족</option>
                    <option>철통부족 박스포장</option>
                    <option>치수불량</option>
                    <option>포장미완료</option>
                    <option>포장대기</option>
                  </select>
                </div>
                {/* 둘재줄 */}
                <div className="col-span-1 grid grid-cols-4 text-center">
                  <div className=''>폭</div>
                  <div>
                    <input
                      type="text"
                      name="text"
                      id="text"
                      autoComplete="address-level2"
                      className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    /></div>
                  <div className='text-xs'>-</div>
                  <div>
                    <input
                      type="text"
                      name="text"
                      id="text"
                      autoComplete="address-level2"
                      className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
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
                    /></div>
                  <div className='text-xs'>-</div>
                  <div>
                    <input
                      type="text"
                      name="text"
                      id="text"
                      autoComplete="address-level2"
                      className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
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
                    /></div>
                  <div className='text-xs'>-</div>
                  <div>
                    <input
                      type="text"
                      name="text"
                      id="text"
                      autoComplete="address-level2"
                      className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
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
                      className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
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
                      className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    /></div>
                  </div>
                </div>
                {/*  */}

                {/* 고객사 */}
                <div className="col-span-1">
                  <div className='grid grid-cols-3'>
                    <div>고객사</div>
                    <div className='col-span-2'><input
                      type="text"
                      name="text"
                      id="text"
                      autoComplete="address-level2"
                      className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    /></div>
                  </div>
                </div>
                {/*  */}
                {/* 고객사 */}
                <div className="col-span-1">
                  <div className='grid grid-cols-3'>
                    <div>제품명</div>
                    <div className='col-span-2'><input
                      type="text"
                      name="text"
                      id="text"
                      autoComplete="address-level2"
                      className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    /></div>
                  </div>
                </div>
                {/* 셋째줄 */}
                {/* 단위 */}
                <div className="col-span-1">
                  <label htmlFor="dropdown" className="block text-sm font-medium text-gray-700">
                    단위
                  </label>
                  <div className="col-span-2">
                    <select
                      id="dropdown"
                      name="dropdown"
                      autoComplete="dropdown-name"
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                    >
                      <option>전체</option>
                      <option>EA</option>
                      <option>KG</option>
                    </select>
                  </div>
                </div>
                <div className="col-span-1">
                  <label htmlFor="dropdown" className="block text-sm font-medium text-gray-700">
                    재고생성일
                  </label>
                  <div className="">

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
                        move_amount
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        from_warehouse
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

export default LosgisticsMoveList