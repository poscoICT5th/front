import axios from "axios";
import Aos from "aos";
import React, { useEffect, useState } from "react";
import CancelRequest from "../Functions/CancelRequest";
import Select from "react-select";
import { stock_place, warehouse_code, purpose } from "./SelectOptions";
//전체조회 버튼 없애고
///리스트밑에 수정 , 삭제 버튼 추가하기

function WarehouseList() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  axios.defaults.baseURL = "http://192.168.0.20:8081";
  const [warehouse, setWarehouses] = useState([]);
  const [search, setsearch] = useState(false);
  // 데이터바인딩
  const [location_Data, setLocation_Data] = useState("전체조회");
  const [warehouse_Data, setWarehouse_Data] = useState("전체조회");
  const [purpose_Data, setPurpose_Data] = useState("전체조회");
  const [use_Data, setUse_Data] = useState("전체조회");
  const [inventory_using_Data, setInventory_using_Data] = useState(0);
  const [maximum_weight_Data, setMaximum_weight_Data] = useState(0);
  const [maximum_count_Data, setMaximum_count_Data] = useState(0);
  const [warehouse_code_desc_Data, setWarehouse_code_desc_Data] = useState(0);

  // 맨처음에 전체리스트 불러오기
  useEffect(() => {
    axios
      .get("/", {})
      .then((res) => {
        setWarehouses(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // 창고조건검색
  function searchCondition() {
    axios.get("/warehouse/search", {
      location: location_Data,
      warehouse: warehouse_Data,
      purpose: purpose_Data,
      use: use_Data,
      inventory_using: inventory_using_Data,
      maximum_count: maximum_count_Data,
      maximum_weight: maximum_weight_Data,
      warehouse_code_desc: warehouse_code_desc_Data,
    });
    //  .then((res) => { setwarehouses(res.data) })
    // .catch((err) => { console.log(err) })
  }
  // 창고전체조회
  function searchAll(params) {
    axios
      .get("/warehouse", {})
      .then((res) => {
        setWarehouses(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div data-aos="fade-up" className="">
      <div className="max-w-screen-2xl mx-auto my-10">
        <div className="font-bold text-2xl text-center my-10">창고조회</div>
        {/* Search */}
        <div className="mt-5 md:mt-0 md:col-span-2">
          <div className="overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 bg-white sm:p-6 bg-gray-100 rounded-lg">
              <div className="grid grid-cols-5 gap-4 text-center">
                {/* 첫째줄 */}
                <div className="col-span-1">
                  <label
                    htmlFor="dropdown"
                    className="block text-sm font-medium text-gray-700"
                  >
                    사업장
                  </label>
                  <Select
                    defaultValue={[stock_place[0]]}
                    // isMulti
                    name="colors"
                    options={stock_place}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    onChange={(e) => {
                      setLocation_Data(e.target.value);
                    }}
                  />
                </div>
                <div className="col-span-1">
                  <label
                    htmlFor="dropdown"
                    className="block text-sm font-medium text-gray-700"
                  >
                    창고코드
                  </label>
                  <Select
                    defaultValue={[warehouse_code[0]]}
                    // isMulti
                    name="colors"
                    options={warehouse_code}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    onChange={(e) => {
                      setWarehouse_Data(e.target.value);
                    }}
                  />
                </div>
                <div className="col-span-1">
                  <label
                    htmlFor="dropdown"
                    className="block text-sm font-medium text-gray-700"
                  >
                    용도명
                  </label>
                  <Select
                    defaultValue={[purpose[0]]}
                    // isMulti
                    name="colors"
                    options={purpose}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    onChange={(e) => {
                      setPurpose_Data(e.target.value);
                    }}
                  />
                </div>

                <div className="col-span-1">
                  <label
                    htmlFor="dropdown"
                    className="block text-sm font-medium text-gray-700"
                  >
                    사용여부
                  </label>
                  <Select
                    defaultValue={[purpose[0]]}
                    // isMulti
                    name="colors"
                    options={purpose}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    onChange={(e) => {
                      setUse_Data(e.target.value);
                    }}
                  />
                </div>
                <div className="col-span-1">
                  <label
                    htmlFor="dropdown"
                    className="block text-sm font-medium text-gray-700"
                  >
                    재고실사
                  </label>
                  <Select
                    defaultValue={[purpose[0]]}
                    // isMulti
                    name="colors"
                    options={purpose}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    onChange={(e) => {
                      setInventory_using_Data(e.target.value);
                    }}
                  />
                </div>

                {/* 둘재줄 */}
                <div className="col-span-1 grid grid-cols-4 text-center">
                  <div className="col-span-2">최대적치중량</div>
                  <div>
                    <input
                      type="number"
                      min={0}
                      name="text"
                      id="text"
                      autoComplete="address-level2"
                      className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      onChange={(e) => {
                        setMaximum_weight_Data(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="col-span-1 grid grid-cols-4 text-center">
                  <div className="col-span-2">최대적치매수</div>
                  <div>
                    <input
                      type="number"
                      min={0}
                      name="text"
                      id="text"
                      autoComplete="address-level2"
                      className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      onChange={(e) => {
                        setMaximum_count_Data(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="col-span-2 grid grid-cols-4 text-center">
                  <div className="col-span-2">저장위치전체명</div>
                  <div>
                    <input
                      type="number"
                      min={0}
                      name="text"
                      id="text"
                      autoComplete="address-level2"
                      className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      onChange={(e) => {
                        setWarehouse_code_desc_Data(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 py-3 text-right">
              <button
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                onClick={() => {
                  searchCondition();
                }}
              >
                조건검색
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
                    {/* {
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
                    } */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="px-4 py-3 text-right">
          <button
            className="mr-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
            onClick={() => {
              searchCondition();
            }}
          >
            수정
          </button>

          <button
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
            onClick={() => {
              searchCondition();
            }}
          >
            삭제
          </button>
        </div>
      </div>
    </div>
  );
}

export default WarehouseList;
