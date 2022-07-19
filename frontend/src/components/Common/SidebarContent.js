import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CreateExport from "../Create/CreateExport";
import CreateImport from "../Create/CreateImport";
import CreateMove from "../Create/CreateMove";
import CreateWarehouse from "../Create/CreateWarehouse";
import jwtDecode from "jwt-decode";
function SidebarContent(props) {

  const [createUser, setCreateUser] = useState(false);
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      if (jwtDecode(sessionStorage.getItem("token")).info.auth === "1") {
        setCreateUser(true);
      }
    }
  }, []);

  // navigate
  let navigate = useNavigate();
  function navigatePage(component) {
    navigate(`/${component}`, { state: {} });
  }
  const [openCreate1, setOpenCreate1] = useState(false);
  const [openCreate2, setOpenCreate2] = useState(false);
  const [openCreate3, setOpenCreate3] = useState(false);
  const [openCreate4, setOpenCreate4] = useState(false);
  const [menu, setMenu] = useState(-1);
  const sidebarDatas = [
    {
      menu: "입고관리",
      no: 20,
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
            <CreateImport
              openCreate={openCreate1}
              setOpenCreate={setOpenCreate1}
              alertSucOpen={props.alertSucOpen}
              setAlertSucOpen={props.setAlertSucOpen}
              alertFailedOpen={props.alertFailedOpen}
              setAlertFailedOpen={props.setAlertFailedOpen}
              setAlertMessage={props.setAlertMessage}
            />
          ),
          openFunc: setOpenCreate1,
          no: 22,
          d: "M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z",
          openData: "createLogisticsImportOpen",
          title: "입고등록",
        },
      ],
    },
    {
      menu: "출고관리",
      no: 30,
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
            <CreateExport
              openCreate={openCreate2}
              setOpenCreate={setOpenCreate2}
              alertSucOpen={props.alertSucOpen}
              setAlertSucOpen={props.setAlertSucOpen}
              alertFailedOpen={props.alertFailedOpen}
              setAlertFailedOpen={props.setAlertFailedOpen}
              setAlertMessage={props.setAlertMessage}
            />
          ),
          openFunc: setOpenCreate2,
          no: 32,
          d: "M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z",
          openData: "createLogisticsExportOpen",
          title: "출고등록",
        },
      ],
    },
    {
      menu: "창고이동관리",
      no: 40,
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
            <CreateMove
              openCreate={openCreate3}
              setOpenCreate={setOpenCreate3}
              alertSucOpen={props.alertSucOpen}
              setAlertSucOpen={props.setAlertSucOpen}
              alertFailedOpen={props.alertFailedOpen}
              setAlertFailedOpen={props.setAlertFailedOpen}
              setAlertMessage={props.setAlertMessage}
            />
          ),
          openFunc: setOpenCreate3,
          no: 42,
          d: "M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z",
          openData: "createLogisticsMoveOpen",
          title: "창고이동등록",
        },
      ],
    },


    {
      menu: "창고관리",
      no: 50,
      d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01z",
      subMenu: [
        {
          submenu: "창고조회",
          no: 51,
          navigate: "Warehouse",
          d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
        },
        {
          submenu: "창고MAP",
          no: 62,
          navigate: "WarehouseMap",
          d: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
        },
      ],
      componentMenu: [
        {
          component: (
            <CreateWarehouse
              openCreate={openCreate4}
              setOpenCreate={setOpenCreate4}
              alertSucOpen={props.alertSucOpen}
              setAlertSucOpen={props.setAlertSucOpen}
              alertFailedOpen={props.alertFailedOpen}
              setAlertFailedOpen={props.setAlertFailedOpen}
              setAlertMessage={props.setAlertMessage}
            />
          ),
          openFunc: setOpenCreate4,
          no: 52,
          d: "M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z",
          openData: "createWarehouseOpen",
          title: "창고등록",
        },
      ],
    },


    {
      menu: "재고관리",
      no: 60,
      d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01z",
      subMenu: [
        {
          submenu: "재고조회",
          no: 61,
          navigate: "Inventory",
          d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
        },
        {
          submenu: "재고Trend",
          no: 63,
          navigate: "TrendInventory",
          d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
        },
        {
          submenu: "재고역추적",
          no: 64,
          navigate: "Tracking",
          d: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
        },
      ],
      componentMenu: [],
    },
  ];

  const menuLanguage = {
    "대시보드": { ko: "대시보드", en: "Dashboard", cn: "主板", jp: "ダッシュボード", vn: "Bảng điều khiển" },
    "입고관리": { ko: "입고관리", en: "Receiving management", cn: "入库管理", jp: "入庫管理", vn: "quản lý nhập kho" },
    "입고조회": { ko: "입고조회", en: "Receiving check", cn: "入库查询", jp: "入庫照会", vn: "kiểm tra hàng hóa nhập khẩu" },
    "입고등록": { ko: "입고등록", en: "Receiving registration", cn: "入库登记", jp: "入庫登録", vn: "đăng ký nhận hàng" },
    "출고관리": { ko: "출고관리", en: "Forwarding management", cn: "出库管理", jp: "出庫管理", vn: "quản lý xuất kho" },
    "출고조회": { ko: "출고조회", en: "Forwarding check", cn: "出库查询", jp: "出庫照会", vn: "kiểm tra xuất kho" },
    "출고등록": { ko: "출고등록", en: "Forwarding registration", cn: "出库登记", jp: "出庫登録", vn: "đăng ký xuất kho" },
    "창고이동관리": { ko: "창고이동관리", en: "Warehouse movement management", cn: "仓储转移管理", jp: "倉庫移動管理", vn: "Quản lý di chuyển nhà kho" },
    "창고이동조회": { ko: "창고이동조회", en: "Warehouse movement check", cn: "仓库移动查询", jp: "倉庫移動照会", vn: "kiểm tra việc di chuyển kho hàng" },
    "창고이동등록": { ko: "창고이동등록", en: "Warehouse movement registration", cn: "仓库转移登记", jp: "倉庫移動登録", vn: "đăng ký di chuyển nhà kho" },
    "창고관리": { ko: "창고관리", en: "Warehouse management", cn: "仓库管理", jp: "倉庫管理", vn: "quản lý kho" },
    "창고조회": { ko: "창고조회", en: "Warehouse check", cn: "仓库查询", jp: "倉庫照会", vn: "kiểm tra kho" },
    "창고MAP": { ko: "창고 MAP", en: "Warehouse map", cn: "仓库地图", jp: "倉庫地図", vn: "bản đồ kho" },
    "창고등록": { ko: "창고등록", en: "Warehouse registration", cn: "仓库登记", jp: "倉庫登録", vn: "đăng ký nhà kho" },
    "재고관리": { ko: "재고관리", en: "Inventory management", cn: "库存管理", jp: "在庫管理", vn: "quản lý tồn kho" },
    "재고조회": { ko: "재고조회", en: "Inventory check", cn: "盘存", jp: "在庫照会", vn: "kiểm tra hàng tồn kho" },
    "재고Trend": { ko: "재고 Trend", en: "Inventory trend", cn: "库存趋势", jp: "在庫の趨勢", vn: "xu hướng tồn kho" },
    "재고역추적": { ko: "LOT tracking", en: "LOT tracking", cn: "库存逆追踪", jp: "在庫逆追跡", vn: "theo dõi ngược hàng tồn kho" },
    "마이페이지": { ko: "마이페이지", en: "My Page", cn: "我的页面", jp: "マイページ", vn: "Mai Trang" },
    "계정생성": { ko: "계정생성", en: "Create an account creation", cn: "创建账户", jp: "アカウント作成", vn: "tạo tài khoản" },
    "핫라인": { ko: "핫라인", en: "HotLine", cn: "热线", jp: "ホットライン", vn: "đường dây nóng" },
  }

  return (
    <div>
      <div className="">
        <div className="flex flex-col h-screen justify-between">
          <div className="px-4 py-2">
            <nav className="flex flex-col mt-6 space-y-1">
              <div
                className="flex items-center px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700"
                style={
                  menu === 0
                    ? { backgroundColor: "gray", color: "white" }
                    : null
                }
                onClick={() => {
                  navigatePage("Dashboard");
                  setMenu(0);
                  props.setSidebarOpen(false);
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
                <span className="ml-3 text-sm font-medium"> {menuLanguage["대시보드"][sessionStorage.getItem("language")]} </span>
              </div>
              <div
                className="flex items-center px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700"
                style={
                  menu === 1
                    ? { backgroundColor: "gray", color: "white" }
                    : null
                }
                onClick={() => {
                  navigatePage("Mypage");
                  setMenu(1);
                  props.setSidebarOpen(false);
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
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                  />
                </svg>
                <span className="ml-3 text-sm font-medium"> {menuLanguage["마이페이지"][sessionStorage.getItem("language")]} </span>
              </div>
              {createUser ? (
                <div
                  className="flex items-center px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700"
                  style={
                    menu === 2
                      ? { backgroundColor: "gray", color: "white" }
                      : null
                  }
                  onClick={() => {
                    navigatePage("CreateAccount");
                    setMenu(2);
                    props.setSidebarOpen(false);
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
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="ml-3 text-sm font-medium"> {menuLanguage["계정생성"][sessionStorage.getItem("language")]} </span>
                </div>
              ) : null}
              {
                createUser
                  ? <div
                    className="flex items-center px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700"
                    style={
                      menu === 111
                        ? { backgroundColor: "gray", color: "white" }
                        : null
                    }
                    onClick={() => {
                      navigatePage("Hotline");
                      setMenu(111);
                      props.setSidebarOpen(false);
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                    </svg>
                    <span className="ml-3 text-sm font-medium"> {menuLanguage["핫라인"][sessionStorage.getItem("language")]} </span>
                  </div>
                  : null
              }
              {/*  */}
              {sidebarDatas.map((sidebarData) => {
                return (
                  <details className="group" key={sidebarData.menu}>
                    <summary className="flex items-center px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700 cursor-pointer">
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
                        {menuLanguage[sidebarData.menu][sessionStorage.getItem("language")]}
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
                            key={submenuData.no}
                            className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
                            style={
                              menu === submenuData.no
                                ? { backgroundColor: "gray", color: "white" }
                                : null
                            }
                            onClick={() => {
                              navigatePage(submenuData.navigate);
                              setMenu(submenuData.no);
                              props.setSidebarOpen(false);
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
                              {menuLanguage[submenuData.submenu][sessionStorage.getItem("language")]}
                            </span>
                          </div>
                        );
                      })}
                      {createUser
                        ? sidebarData.componentMenu.map((componentData) => {
                          return (
                            <div key={componentData.title}>
                              <button
                                className="flex items-center w-full px-4 py-2 rounded-lg hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
                                onClick={() => {
                                  componentData.openFunc(true);
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
                                <span className="ml-3 text-sm font-medium">
                                  {" "}
                                  {menuLanguage[componentData.title][sessionStorage.getItem("language")]}
                                </span>
                                {componentData.component}
                              </button>
                            </div>
                          );
                        })
                        : null
                      }
                    </nav>
                  </details>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidebarContent;
