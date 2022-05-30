import axios from "axios";
import Aos from "aos";
import React, { useEffect, useState } from "react";
import CancelRequest from "../Functions/CancelRequest";
import Select from "react-select";
import { status, location, item_name } from "./SelectOptions";

function LosgisticsMoveList() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const [warehouses, setwarehouses] = useState([]);
  const [search, setsearch] = useState(false);

  //변수
  const [status_Data, setStatus_Data] = useState("전체조회");
  const [location_Data, setLocation_Data] = useState("전체조회");
  const [Instruction_Data, setInstruction_Data] = useState("전체조회");
  const [Lot_no_Data, setLot_no_Data] = useState("전체조회");
  const [Item_no_Data, setItem_no_Data] = useState("전체조회");
  const [Item_name_Data, setItem_name_Data] = useState("전체조회");
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
        Instruction: Instruction_Data,
        Lot_no: Lot_no_Data,
        Item_no: Item_no_Data,
        Item_name: Item_name_Data,
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
        setwarehouses(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [search]);

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
                  <label
                    htmlFor="dropdown"
                    className="block text-sm font-medium text-gray-700"
                  >
                    작업상태
                  </label>
                  <Select
                    defaultValue={[status[0]]}
                    // isMulti
                    name="colors"
                    options={status}
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
                <div className="col-span-1">
                  <label
                    htmlFor="dropdown"
                    className="block text-sm font-medium text-gray-700"
                  >
                    이동지시번호
                  </label>
                  <div className="col-span-2">
                    <input
                      type="text"
                      name="text"
                      id="text"
                      autoComplete="address-level2"
                      className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      onChange={(e) => {
                        setInstruction_Data(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="col-span-1">
                  <label
                    htmlFor="dropdown"
                    className="block text-sm font-medium text-gray-700"
                  >
                    lot_no
                  </label>
                  <select
                    id="dropdown"
                    name="dropdown"
                    autoComplete="dropdown-name"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                    onChange={(e) => {
                      setLot_no_Data(e.target.value);
                    }}
                  >
                    <option>전체</option>
                    <option>천안</option>
                    <option>광양</option>
                    <option>포항</option>
                  </select>
                </div>
                <div className="col-span-1">
                  <label
                    htmlFor="dropdown"
                    className="block text-sm font-medium text-gray-700"
                  >
                    품번
                  </label>
                  <select
                    id="dropdown"
                    name="dropdown"
                    autoComplete="dropdown-name"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                    onChange={(e) => {
                      setItem_no_Data(e.target.value);
                    }}
                  >
                    <option>전체</option>
                    <option>MT</option>
                    <option>ROTOR ASSY</option>
                    <option>STRIP</option>
                  </select>
                </div>
                <div className="col-span-1">
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

              <div className="grid grid-cols-4 gap-4 text-center">
                {/* 둘재줄 */}
                <div className="col-span-1 grid grid-cols-4 text-center">
                  <div className="">폭</div>
                  <div>
                    <input
                      type="text"
                      name="text"
                      id="text"
                      autoComplete="address-level2"
                      className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      onChange={(e) => {
                        setMin_width_Data(e.target.value);
                      }}
                    />
                  </div>
                  <div className="text-xs">-</div>
                  <div>
                    <input
                      type="text"
                      name="text"
                      id="text"
                      autoComplete="address-level2"
                      className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      onChange={(e) => {
                        setMax_width_Data(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="col-span-1 grid grid-cols-4 text-center">
                  <div className="">두께</div>
                  <div>
                    <input
                      type="text"
                      name="text"
                      id="text"
                      autoComplete="address-level2"
                      className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      onChange={(e) => {
                        setMin_thickness_Data(e.target.value);
                      }}
                    />
                  </div>
                  <div className="text-xs">-</div>
                  <div>
                    <input
                      type="text"
                      name="text"
                      id="text"
                      autoComplete="address-level2"
                      className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      onChange={(e) => {
                        setMax_thickness_Data(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="col-span-1 grid grid-cols-4 text-center">
                  <div className="">높이</div>
                  <div>
                    <input
                      type="text"
                      name="text"
                      id="text"
                      autoComplete="address-level2"
                      className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      onChange={(e) => {
                        setMin_height_Data(e.target.value);
                      }}
                    />
                  </div>
                  <div className="text-xs">-</div>
                  <div>
                    <input
                      type="text"
                      name="text"
                      id="text"
                      autoComplete="address-level2"
                      className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      onChange={(e) => {
                        setMax_height_Data(e.target.value);
                      }}
                    />
                  </div>
                </div>
                {/* 수량 */}
                <div className="col-span-1">
                  <div className="grid grid-cols-3">
                    <div>이동수량</div>
                    <div className="col-span-2">
                      <input
                        type="text"
                        name="text"
                        id="text"
                        autoComplete="address-level2"
                        className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        onChange={(e) => {
                          setAmount_Data(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                </div>
                {/*  */}
                {/* from창고 */}
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
                {/* 고객사 */}

                {/* 단위 */}
                <div className="col-span-1">
                  <label
                    htmlFor="dropdown"
                    className="block text-sm font-medium text-gray-700"
                  >
                    지시마감기한
                  </label>
                  <div className="col-span-2">
                    <div className="">달력</div>
                  </div>
                </div>

                <div className="col-span-1">
                  <label
                    htmlFor="dropdown"
                    className="block text-sm font-medium text-gray-700"
                  >
                    작업완료일
                  </label>
                  <div className="">달력</div>
                </div>

                <div className="col-span-1">
                  <label
                    htmlFor="dropdown"
                    className="block text-sm font-medium text-gray-700"
                  >
                    지시등록일
                  </label>
                  <div className="">달력</div>
                </div>
              </div>
            </div>
            <div className="px-4 py-3 text-right">
              <button
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                onClick={() => {
                  setsearch(!search);
                }}
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
                    {warehouses.map((warehouse) => {
                      return (
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              {warehouse.location}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              {warehouse.warehouse_code}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              {warehouse.purpose}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              {warehouse.warehouse_code_desc}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              {warehouse.use}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              {warehouse.maximum_weight}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              {warehouse.maxinum_count}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              {warehouse.inventory_using}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              {warehouse.remarks}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              <CancelRequest />
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LosgisticsMoveList;
