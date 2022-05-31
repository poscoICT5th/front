import axios from "axios";
import Aos from "aos";
import React, { useEffect, useState } from "react";
import CancelRequest from "../Functions/CancelRequest";
import Select from "react-select";
import { stock_place, warehouse_code, purpose, location, use, inventory_using} from "./SelectOptions";
//전체조회 버튼 없애고
///리스트밑에 수정 , 삭제 버튼 추가하기

function WarehouseList() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  axios.defaults.baseURL = "http://192.168.0.20:8081";
  const [warehouse, setWarehouses] = useState([]);

  // 데이터바인딩
  const [location_Data, setLocation_Data] = useState(null);
  const [warehouse_Data, setWarehouse_Data] = useState(null);
  const [purpose_Data, setPurpose_Data] = useState(null);
  const [use_Data, setUse_Data] = useState(null);
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
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // 창고조건검색
  function searchCondition() {
    axios.get("/search", {
      "location": location_Data,
      "warehouse": warehouse_Data,
      "purpose": purpose_Data,
      "use": use_Data,
      "inventory_using": inventory_using_Data,
      "maximum_count": maximum_count_Data,
      "maximum_weight": maximum_weight_Data,
      "warehouse_code_desc": warehouse_code_desc_Data,
    })
      .then((res) => { setWarehouses(res.data); console.log(res.data) })
    .catch((err) => { console.log(err) })
  }
  // 창고전체조회
 
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
                      setWarehouse_Data(e.value);
                    }}
                    maxMenuHeight={100}
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
                      setPurpose_Data(e.value);
                    }}
                    maxMenuHeight={100}
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
                    defaultValue={[use[0]]}
                    // isMulti
                    name="colors"
                    options={use}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    onChange={(e) => {
                      setUse_Data(e.value);
                    }}
                    maxMenuHeight={100}
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
                    defaultValue={[inventory_using[0]]}
                    // isMulti
                    name="colors"
                    options={inventory_using}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    onChange={(e) => {
                      setInventory_using_Data(e.value);
                    }}
                    maxMenuHeight={100}
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
                <div className="mx-1 mt-2 text-center w-full">
          <div className="overflow-x-auto">
            <table className="min-w-lg text-sm divide-y divide-gray-200">
              <thead className='bg-sky-50'>
                <tr>
                  <th className="sticky left-0 p-4 text-left rounded-l-lg">
                    <label className="sr-only" for="row_all">Select All</label>
                    <input
                      className="w-5 h-5 border-gray-200 rounded"
                      type="checkbox"
                      id="row_all"
                    />
                  </th>
                  <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                    <div className="flex items-center">
                      사업장
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 ml-1.5 text-gray-700"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </th>
                  <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                    <div className="flex items-center">
                      창고코드
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 ml-1.5 text-gray-700"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </th>
                  <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                    <div className="flex items-center">
                      용도명
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 ml-1.5 text-gray-700"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </th>
                  <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                    <div className="flex items-center">
                      사용여부
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 ml-1.5 text-gray-700"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </th>
                  <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                    <div className="flex items-center">
                      재고실사
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 ml-1.5 text-gray-700"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </th>
                  <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                    <div className="flex items-center">
                      최대적치중량
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 ml-1.5 text-gray-700"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </th>
                  <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                    <div className="flex items-center">
                      최대적치매수
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 ml-1.5 text-gray-700"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </th>
                  <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                    <div className="flex items-center">
                    저장위치전체명
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 ml-1.5 text-gray-700"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </th>
                </tr>
              </thead>
              {/* tbody */}
              <tbody className="divide-y divide-gray-100">
                {warehouse.map((data) => {
                  return <tr>  {/* input 창이니까 여기는 넣지 x */}
                    <td className="sticky left-0 p-4 bg-white">
                      <label className="sr-only" for="row_3"></label>
                      <input
                        className="w-5 h-5 border-gray-200 rounded"
                        type="checkbox"
                        id="row_3"
                      />
                    </td>
                    <td className="p-4 font-medium whitespace-nowrap">{data.location}</td>
                    <td className="p-4 text-gray-700 whitespace-nowrap">
                      {data.warehouse_code}
                    </td>
                    <td className="p-4 text-gray-700 whitespace-nowrap">
                      {data.purpose}
                    </td>
                    <td className="p-4 text-gray-700 whitespace-nowrap">
                      {data.use}
                    </td>
                    <td className="p-4 text-gray-700 whitespace-nowrap">
                      {data.inventory_using}
                    </td>
                    <td className="p-4 text-gray-700 whitespace-nowrap">
                      {data.maximum_weight}
                    </td>
                    <td className="p-4 text-gray-700 whitespace-nowrap">
                      {data.maximum_count}
                    </td>
                    <td className="p-4 text-gray-700 whitespace-nowrap">
                      {data.warehouse_code_desc}
                    </td>
                  </tr>
                })}
              </tbody>
            </table>
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
