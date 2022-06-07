import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CreateLogisticsImport from "../Create/CreateLogisticsImport";
import CreateLogisticsExport from "../Create/CreateLogisticsExport";
import CreateLogisticsMove from "../Create/CreateLogisticsMove";
import CreateWarehouse from "../Create/CreateWarehouse";

function Sidebar() {
  let navigate = useNavigate();
  function navigatePage(component) {
    navigate(`/${component}`);
  }

  //오픈을 false로 넣어라.
  const [opens, setOpens] = useState({
    createWarehouseOpen: false,
    createLogisticsImportOpen: false,
    createLogisticsExportOpen: false,
    createLogisticsMoveOpen: false,
    createInventoryOpen: false,
  });

  const [menu, setMenu] = useState(0);

  const sidebarDatas = [
    {
      menu: "계정",
      no: 0,
      d: "M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z",
      subMenu: [
        {
          submenu: "마이페이지",
          no: 11,
          navigate: "LogisticsImport",
          d: "M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z",
        },
        {
          submenu: "로그아웃",
          no: 12,
          navigate: "/",
          d: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1",
        },
      ],
      componentMenu: [],
    },
    {
      menu: "입고관리",
      no: 0,
      d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
      subMenu: [
        {
          submenu: "입고조회",
          no: 21,
          navigate: "LogisticsImport",
          d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
        },
      ],
      componentMenu: [
        {
          component: (
            <CreateLogisticsImport
              createLogisticsImportOpen={opens.createLogisticsImportOpen}
              setOpens={setOpens}
              opens={opens}
              openData={"createLogisticsImportOpen"}
            />
          ),
          no: 22,
          d: "M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z",
          openData: "createLogisticsImportOpen",
        },
      ],
    },
    {
      menu: "출고관리",
      no: 0,
      d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01z",
      subMenu: [
        {
          submenu: "출고조회",
          no: 31,
          navigate: "LogisticsExport",
          d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
        },
      ],
      componentMenu: [
        {
          component: (
            <CreateLogisticsExport
              createLogisticsExportOpen={opens.createLogisticsExportOpen}
              setOpens={setOpens}
              opens={opens}
              openData={"createLogisticsExportOpen"}
            />
          ),
          no: 32,
          d: "M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z",
          openData: "createLogisticsExportOpen",
        },
      ],
    },
    {
      menu: "창고이동관리",
      no: 0,
      d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01z",
      subMenu: [
        {
          submenu: "창고이동조회",
          no: 41,
          navigate: "LosgisticsMove",
          d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
        },
      ],
      componentMenu: [
        {
          component: (
            <CreateLogisticsMove
              createLogisticsMoveOpen={opens.createLogisticsMoveOpen}
              setOpens={setOpens}
              opens={opens}
              openData={"createLogisticsMoveOpen"}
            />
          ),
          no: 42,
          d: "M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z",
          openData: "createLogisticsMoveOpen",
        },
      ],
    },
    {
      menu: "창고관리",
      no: 0,
      d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01z",
      subMenu: [
        {
          submenu: "창고조회",
          no: 51,
          navigate: "Warehouse",
          d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
        },
      ],
      componentMenu: [
        {
          component: (
            <CreateWarehouse
              createWarehouseOpen={opens.createWarehouseOpen}
              setOpens={setOpens}
              opens={opens}
              openData={"createWarehouseOpen"}
            />
          ),
          no: 52,
          d: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
          openData: "createWarehouseOpen",
        },
      ],
    },
    {
      menu: "재고관리",
      no: 0,
      d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01z",
      subMenu: [
        {
          submenu: "재고조회",
          no: 61,
          navigate: "Inventory",
          d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
        },
        {
          submenu: "재고MAP",
          no: 62,
          navigate: "Map4",
          d: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
        },
      ],
      componentMenu: [],
    },
  ];

  return (
    <div className="">
      <div className="flex flex-col h-full justify-between h-screen bg-white border-r">
        <div className="px-4 py-6">
          <div className="sidebar-header flex items-center justify-center">
            <div className="inline-flex">
              <svg
                className="w-10 h-10 text-red-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.757 2.034a1 1 0 01.638.519c.483.967.844 1.554 1.207 2.03.368.482.756.876 1.348 1.467A6.985 6.985 0 0117 11a7.002 7.002 0 01-14 0c0-1.79.684-3.583 2.05-4.95a1 1 0 011.707.707c0 1.12.07 1.973.398 2.654.18.374.461.74.945 1.067.116-1.061.328-2.354.614-3.58.225-.966.505-1.93.839-2.734.167-.403.356-.785.57-1.116.208-.322.476-.649.822-.88a1 1 0 01.812-.134zm.364 13.087A2.998 2.998 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879.586.585.879 1.353.879 2.121s-.293 1.536-.879 2.121z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="leading-10 text-gray-700 text-2xl font-bold ml-1 uppercase">
                POSCO ICT_5
              </span>
            </div>
          </div>

          <nav className="flex flex-col mt-6 space-y-1">
            <div
              className="flex items-center px-4 py-2 text-gray-500 rounded-lg cursor-pointer hover:bg-gray-300 hover:text-gray-700"
              style={
                menu === 1
                  ? { backgroundColor: "gray", color: "white" }
                  : { backgroundColor: "white" }
              }
              onClick={() => {
                navigate("/Dashboard");
                setMenu(1);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span className="ml-3 text-sm font-medium"> Dashboard </span>
            </div>
            {/*  */}
            {sidebarDatas.map((sidebarData) => {
              return (
                <details className="group">
                  <summary className="flex items-center px-4 py-2 text-gray-500 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700 cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d={sidebarData.d}
                      />
                    </svg>
                    <span className="ml-3 text-sm font-medium">
                      {" "}
                      {sidebarData.menu}{" "}
                    </span>
                    <span className="ml-auto transition duration-300 shrink-0 group-open:-rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>
                  </summary>
                  <nav className="mt-1.5 ml-8 flex flex-col">
                    {sidebarData.subMenu.map((submenuData) => {
                      return (
                        <div
                          className="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
                          style={
                            menu === submenuData.no
                              ? { backgroundColor: "gray", color: "white" }
                              : { backgroundColor: "white" }
                          }
                          onClick={() => {
                            navigatePage(submenuData.navigate);
                            setMenu(submenuData.no);
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d={submenuData.d}
                            />
                          </svg>
                          <span className="ml-3 text-sm font-medium">
                            {" "}
                            {submenuData.submenu}{" "}
                          </span>
                        </div>
                      );
                    })}
                    {sidebarData.componentMenu.map((componentData) => {
                      return (
                        <div>
                          <button
                            className="flex items-center w-full px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
                            onClick={() => {
                              setOpens({
                                ...opens,
                                [componentData.openData]: true,
                              });
                              console.log(componentData.openData);
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d={componentData.d}
                              />
                            </svg>
                            {componentData.component}
                          </button>
                        </div>
                      );
                    })}
                  </nav>
                </details>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
