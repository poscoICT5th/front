import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CreateLogisticsIn from '../Create/CreateLogisticsIn';

function Sidebar() {
  let navigate = useNavigate();
  function navigatePage(component) {
    navigate(`/${component}`)
  }
  const [createLogisticsInOpen, setCreateLogisticsInOpen] = useState(false)
  const [menu, setMenu] = useState(0)
  return (
    <div>
      <aside
        className="sidebar w-64 transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in"
      >
        {/* Dashboard Title */}
        <div className="sidebar-header flex items-center justify-center py-4">
          <div className="inline-flex">
            <svg className="w-10 h-10 text-red-400" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M11.757 2.034a1 1 0 01.638.519c.483.967.844 1.554 1.207 2.03.368.482.756.876 1.348 1.467A6.985 6.985 0 0117 11a7.002 7.002 0 01-14 0c0-1.79.684-3.583 2.05-4.95a1 1 0 011.707.707c0 1.12.07 1.973.398 2.654.18.374.461.74.945 1.067.116-1.061.328-2.354.614-3.58.225-.966.505-1.93.839-2.734.167-.403.356-.785.57-1.116.208-.322.476-.649.822-.88a1 1 0 01.812-.134zm.364 13.087A2.998 2.998 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879.586.585.879 1.353.879 2.121s-.293 1.536-.879 2.121z"
                clip-rule="evenodd"
              />
            </svg>
            <span className="leading-10 text-gray-700 text-2xl font-bold ml-1 uppercase">POSCO ICT_5</span>
          </div>
        </div>
        <div className="sidebar-content px-4 py-6">
          <ul className="flex flex-col w-full">
            <li className="my-px">
              <p className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700 cursor-pointer" style={menu === 0 ? { backgroundColor: "gray" } : { backgroundColor: "white" }} onClick={() => { navigatePage("Main"); setMenu(0) }}>
                <span className="flex items-center justify-center text-lg text-gray-400">
                  <svg
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </span>
                <span className="ml-3">Main</span>
              </p>
            </li>
            {/* Manage */}
            <li className="my-px">
              <span className="flex font-medium text-sm text-gray-300 px-4 my-4 uppercase">Manage</span>
            </li>
            <li className="my-px">
              <p className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700 cursor-pointer" style={menu === 11 ? { backgroundColor: "gray" } : { backgroundColor: "white" }} onClick={() => { navigatePage("LogisticsInList"); setMenu(11) }}>
                <span className="flex items-center justify-center text-lg text-gray-400">
                  <svg
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                </span>
                <span className="ml-3">입고조회</span>
              </p>
            </li>
            <li className="my-px">
              <p className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700 cursor-pointer" style={menu === 12 ? { backgroundColor: "gray" } : { backgroundColor: "white" }} onClick={() => { setCreateLogisticsInOpen(true); setMenu(12) }}>
                <span className="flex items-center justify-center text-lg text-gray-400">
                  <svg
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <CreateLogisticsIn setCreateLogisticsInOpen={setCreateLogisticsInOpen} createLogisticsInOpen={createLogisticsInOpen} />
              </p>
            </li>
            <li className="my-px">
              <p className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700 cursor-pointer" style={menu === 13 ? { backgroundColor: "gray" } : { backgroundColor: "white" }} onClick={() => { navigatePage("LogisticsOutList"); setMenu(13) }}>
                <span className="flex items-center justify-center text-lg text-gray-400">
                  <svg
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                </span>
                <span className="ml-3">출고조회</span>
                <span
                  className="flex items-center justify-center text-xs text-red-500 font-semibold bg-red-100 h-6 px-2 rounded-full ml-auto"
                >Alarm</span>
              </p>
            </li>
            <li className="my-px">
              <p className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700 cursor-pointer" style={menu === 14 ? { backgroundColor: "gray" } : { backgroundColor: "white" }} onClick={() => { navigatePage("createOut"); setMenu(14) }}>
                <span className="flex items-center justify-center text-lg text-green-400">
                  <svg
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <span className="ml-3">출고예정등록</span>
              </p>
            </li>
            <li className="my-px">
              <p className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700 cursor-pointer" style={menu === 15 ? { backgroundColor: "gray" } : { backgroundColor: "white" }} onClick={() => { navigatePage("LosgisticsMoveList"); setMenu(15) }}>
                <span className="flex items-center justify-center text-lg text-gray-400">
                  <svg
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                </span>
                <span className="ml-3">창고이동조회</span>
                <span
                  className="flex items-center justify-center text-xs text-red-500 font-semibold bg-red-100 h-6 px-2 rounded-full ml-auto"
                >Alarm</span>
              </p>
            </li>
            <li className="my-px">
              <p className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700 cursor-pointer" style={menu === 16 ? { backgroundColor: "gray" } : { backgroundColor: "white" }} onClick={() => { navigatePage("createOut"); setMenu(16) }}>
                <span className="flex items-center justify-center text-lg text-green-400">
                  <svg
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <span className="ml-3">창고이동등록</span>
              </p>
            </li>
            {/* 재고관리 */}
            <li className="my-px">
              <span className="flex font-medium text-sm text-gray-300 px-4 my-4 uppercase">Inventory</span>
            </li>
            <li className="my-px">
              <p className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700 cursor-pointer" style={menu === 21 ? { backgroundColor: "gray" } : { backgroundColor: "white" }} onClick={() => { navigatePage("InventoryList"); setMenu(21) }}>
                <span className="flex items-center justify-center text-lg text-gray-400">
                  <svg
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                </span>
                <span className="ml-3">재고조회</span>
              </p>
            </li>
            <li className="my-px">
              <p className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700 cursor-pointer" style={menu === 22 ? { backgroundColor: "gray" } : { backgroundColor: "white" }} onClick={() => { navigatePage("2"); setMenu(22) }}>
                <span className="flex items-center justify-center text-lg text-gray-400">
                  <svg
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <span className="ml-3">Sub Menu</span>
              </p>
            </li>
            <li className="my-px">
              <p className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700 cursor-pointer" style={menu === 23 ? { backgroundColor: "gray" } : { backgroundColor: "white" }} onClick={() => { navigatePage("3"); setMenu(23) }}>
                <span className="flex items-center justify-center text-lg text-gray-400">
                  <svg
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                </span>
                <span className="ml-3">Sub Menu</span>
                <span
                  className="flex items-center justify-center text-xs text-red-500 font-semibold bg-red-100 h-6 px-2 rounded-full ml-auto"
                >Alarm</span>
              </p>
            </li>
            <li className="my-px">
              <p className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700 cursor-pointer" style={menu === 24 ? { backgroundColor: "gray" } : { backgroundColor: "white" }} onClick={() => { navigatePage("4"); setMenu(24) }}>
                <span className="flex items-center justify-center text-lg text-green-400">
                  <svg
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <span className="ml-3">Sub Menu</span>
              </p>
            </li>
            {/* Warehouse */}
            <li className="my-px">
              <span className="flex font-medium text-sm text-gray-300 px-4 my-4 uppercase">Warehouse</span>
            </li>
            <li className="my-px">
              <p className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700 cursor-pointer" style={menu === 31 ? { backgroundColor: "gray" } : { backgroundColor: "white" }} onClick={() => { navigatePage("WarehouseList"); setMenu(31) }}>
                <span className="flex items-center justify-center text-lg text-gray-400">
                  <svg
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                </span>
                <span className="ml-3">창고조회</span>
              </p>
            </li>
            <li className="my-px">
              <p className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700 cursor-pointer" style={menu === 32 ? { backgroundColor: "gray" } : { backgroundColor: "white" }} onClick={() => { navigatePage("WarehouseList"); setMenu(32) }}>
                <span className="flex items-center justify-center text-lg text-gray-400">
                  <svg
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <span className="ml-3">창고이동등록</span>
              </p>
            </li>
            <li className="my-px">
              <p className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700 cursor-pointer" style={menu === 33 ? { backgroundColor: "gray" } : { backgroundColor: "white" }} onClick={() => { navigatePage("Setting"); setMenu(33) }}>
                <span className="flex items-center justify-center text-lg text-gray-400">
                  <svg
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <span className="ml-3">Settings</span>
              </p>
            </li>
            <li className="my-px">
              <p className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700 cursor-pointer" style={menu === 34 ? { backgroundColor: "gray" } : { backgroundColor: "white" }} onClick={() => { navigatePage("Logout"); setMenu(34) }}>
                <span className="flex items-center justify-center text-lg text-red-400">
                  <svg
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                    />
                  </svg>
                </span>
                <span className="ml-3">Logout</span>
              </p>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  )
}

export default Sidebar