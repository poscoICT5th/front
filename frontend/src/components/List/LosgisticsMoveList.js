import axios from "axios";
import Aos from "aos";
import React, { useEffect, useState } from "react";
import CancelRequest from "../Functions/CancelRequest";
import Select from "react-select";
import { statusImport, location, item_name } from "./SelectOptions";
//폭, 두께 , 높이, 이동수량
//from창고, to창고, 이동지시번호
//


function LosgisticsMoveList() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const [logisticsMoveList, setLogisticsMoveList] = useState([])

  //변수
  const [status_Data, setStatus_Data] = useState("전체조회");
  const [location_Data, setLocation_Data] = useState("전체조회");
  const [instruction_Data, setInstruction_Data] = useState("전체조회");
  const [lot_no_Data, setLot_no_Data] = useState("전체조회");
  const [item_no_Data, setItem_no_Data] = useState("전체조회");
  const [item_name_Data, setItem_name_Data] = useState("전체조회");
  const [Min_width_Data, setMin_width_Data] = useState(0);
  const [Max_width_Data, setMax_width_Data] = useState(1000000);
  const [Min_thickness_Data, setMin_thickness_Data] = useState(0);
  const [Max_thickness_Data, setMax_thickness_Data] = useState(1000000);
  const [Min_height_Data, setMin_height_Data] = useState(0);
  const [Max_height_Data, setMax_height_Data] = useState(0);
  const [Amount_Data, setAmount_Data] = useState(0);
  const [From_warehouse_Data, setFrom_warehouse_Data] = useState("전체조회");
  const [To_warehouse_Data, setTo_warehouse_Data] = useState("전체조회");
  useEffect(() => {
    // 입고
    axios.defaults.baseURL = "http://192.168.0.10:8081";
    axios
      .get("/warehouse", {
        status: status_Data,
        location: location_Data,
        //  Instruction: Instruction_Data,
        // Lot_no: Lot_no_Data,
        //Item_no: Item_no_Data,
        //Item_name: Item_name_Data,
        Min_width: Min_width_Data,
        Max_width: Max_width_Data,
        Min_thickness: Min_thickness_Data,
        Max_thickness: Max_thickness_Data,
        Min_height: Min_height_Data,
        Max_height: Max_height_Data,
        Amount: Amount_Data,
        From_warehouse: From_warehouse_Data,
        To_warehouse: To_warehouse_Data,
      })
      .then((res) => {
        setLogisticsMoveList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div data-aos="fade-up" className="">
      <div className="w-full mx-auto my-10">
        <div className="font-bold text-2xl text-center my-10">창고이동 조회</div>
        {/* Search */}
        <div className="mt-5 md:mt-0 md:col-span-2">
          <div className="overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 bg-white sm:p-6 bg-gray-100 rounded-lg">
              {/* 첫째줄 */}
              <div className="grid grid-cols-4 gap-4 text-center">
                <div className="col-span-1">
                  <label
                    htmlFor="dropdown"
                    className="block text-sm font-medium text-gray-700"
                  >
                    작업상태
                  </label>
                  <Select
                    defaultValue={[statusImport[0]]}
                    // isMulti
                    name="colors"
                    options={statusImport}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    onChange={(e) => {
                      setStatus_Data(e.target.value);
                    }}
                  />
                </div>

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
                      setLocation_Data(e.target.value);
                    }}
                  />
                </div>


                <div className="col-span-2">
                  <label
                    htmlFor="dropdown"
                    className="block text-sm font-medium text-gray-700"
                  >
                    제품명
                  </label>
                  <Select
                    defaultValue={[item_name[0]]}
                    // isMulti
                    name="colors"
                    options={item_name}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    onChange={(e) => {
                      setItem_name_Data(e.target.value);
                    }}
                  />
                </div>
              </div>


              {/* 둘재줄 */}
              <div className="col-span-1 grid grid-cols-4 text-center">
                <div className="col-span-1">
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

              <div className="col-span-1">
                <div className="grid grid-cols-3">
                  <div>from창고</div>
                  <div className="col-span-2">
                    <input
                      type="text"
                      name="text"
                      id="text"
                      autoComplete="address-level2"
                      className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      onChange={(e) => {
                        setFrom_warehouse_Data(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
              {/*  */}

              {/* to창고 */}
              <div className="col-span-1">
                <div className="grid grid-cols-3">
                  <div>to창고</div>
                  <div className="col-span-2">
                    <input
                      type="text"
                      name="text"
                      id="text"
                      autoComplete="address-level2"
                      className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      onChange={(e) => {
                        setTo_warehouse_Data(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* 셋째줄 */}




            </div>
            <div className="px-4 py-3 text-right">
              <button
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                onClick={() => {

                }}
              >
                Search
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
                    <label className="sr-only" for="row_all"></label>
                    <input
                      className="w-5 h-5 border-gray-200 rounded"
                      type="checkbox"
                      id="row_all"
                    />
                  </th>
                  <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                    <div className="flex items-center">
                      Status
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
                      amount
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
                      done_date
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
                      height
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
                      im_amount
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
                      inst_deadline
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
                      inst_reg_date
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
                      instruction_no
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
                      item_name
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
                      item_no
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
                      location
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
                      lot_no
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
                      order_amount
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
                      order_date
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
                      target
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
                      thickness
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
                      to_warehouse
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
                      unit
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
                      weight
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
                  <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap rounded-r-lg">
                    <div className="flex items-center">
                      width
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
                {logisticsMoveList.map((data) => {
                  return <tr>
                    <td className="sticky left-0 p-4 bg-white">
                      <label className="sr-only" for="row_3"></label>
                      <input
                        className="w-5 h-5 border-gray-200 rounded"
                        type="checkbox"
                        id="row_3"
                        onClick={() => { }}
                      />
                    </td>
                    <td className="p-4 font-medium whitespace-nowrap">{data.status}</td>
                    <td className="p-4 text-gray-700 whitespace-nowrap">
                      {data.amount}
                    </td>
                    <td className="p-4 text-gray-700 whitespace-nowrap">
                      {data.done_date}
                    </td>
                    <td className="p-4 text-gray-700 whitespace-nowrap">
                      {data.height}
                    </td>
                    <td className="p-4 text-gray-700 whitespace-nowrap">
                      {data.im_amount}
                    </td>
                    <td className="p-4 text-gray-700 whitespace-nowrap">
                      {data.inst_deadline}
                    </td>
                    <td className="p-4 text-gray-700 whitespace-nowrap">
                      {data.inst_reg_date}
                    </td>
                    <td className="p-4 text-gray-700 whitespace-nowrap">
                      {data.instruction_no}
                    </td>
                    <td className="p-4 text-gray-700 whitespace-nowrap">
                      {data.item_name}
                    </td>
                    <td className="p-4 text-gray-700 whitespace-nowrap">
                      {data.item_no}
                    </td>
                    <td className="p-4 text-gray-700 whitespace-nowrap">
                      {data.location}
                    </td>
                    <td className="p-4 text-gray-700 whitespace-nowrap">
                      {data.lot_no}
                    </td>
                    <td className="p-4 text-gray-700 whitespace-nowrap">
                      {data.order_amount}
                    </td>
                    <td className="p-4 text-gray-700 whitespace-nowrap">
                      {data.order_date}
                    </td>
                    <td className="p-4 text-gray-700 whitespace-nowrap">
                      {data.target}
                    </td>
                    <td className="p-4 text-gray-700 whitespace-nowrap">
                      {data.thickness}
                    </td>
                    <td className="p-4 text-gray-700 whitespace-nowrap">
                      {data.to_warehouse}
                    </td>
                    <td className="p-4 text-gray-700 whitespace-nowrap">
                      {data.unit}
                    </td>
                    <td className="p-4 text-gray-700 whitespace-nowrap">
                      {data.weight}
                    </td>
                    <td className="p-4 text-gray-700 whitespace-nowrap">
                      {data.width}
                    </td>
                  </tr>
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LosgisticsMoveList;
