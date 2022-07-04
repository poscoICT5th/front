import { configureStore, createSlice } from "@reduxjs/toolkit";

// createSlice로 값 생성해줌

let tabTitle = createSlice({
  name: "tabTitle",
  initialState: "MainDashboardOffice",
  reducers: {
    handleTabTitle(state, newState) {
      return newState;
    },
  },
});
export let { handleTabTitle } = tabTitle.actions;

// 물류입고 url
let logisticsImportURL = createSlice({
  name: "logisticsImportURL",
  initialState: "http://35.77.20.236:8080/import",
  // initialState: "http://192.168.0.10:8081",
  reducers: {
    handleLogisticsImportURL(state, newState) {
      return newState;
    },
  },
});
export let { handleLogisticsImportURL } = logisticsImportURL.actions;

// 물류출고 url
let logisticsExportURL = createSlice({
  name: "logisticsExportURL",
  initialState: "http://13.230.30.203:8080/export",
  reducers: {
    handleLogisticsURL(state, newState) {
      return newState;
    },
  },
});
export let { handleLogisticsExportURL } = logisticsExportURL.actions;
// 물류이동 url
let logisticsMoveURL = createSlice({
  name: "logisticsMoveURL",
  initialState: "http://35.77.44.58:8080/move",
  reducers: {
    handleLogisticsURL(state, newState) {
      return newState;
    },
  },
});
export let { handleLogisticsMoveURL } = logisticsMoveURL.actions;

// 창고 url
let warehouseURL = createSlice({
  name: "warehouseURL",
  initialState: "http://35.74.235.120:8080/warehouse",
  // initialState: "http://192.168.0.20:8084",
  reducers: {
    handleWarehouseURL(state, newState) {
      return newState;
    },
  },
});
export let { handleWarehouseURL } = warehouseURL.actions;

// 인벤토리 url
let inventoryURL = createSlice({
  name: "inventoryURL",
  //initialState: "http://13.230.73.69:8080/inventory",
  initialState: "http://192.168.0.10:8085",
  reducers: {
    handleInventoryURL(state, newState) {
      return newState;
    },
  },
});
export let { handleInventoryURL } = inventoryURL.actions;

// 유저 url
let userURL = createSlice({
  name: "userURL",
  initialState: "http://18.177.162.121:8080/user",
  reducers: {
    handleUserURL(state, newState) {
      return newState;
    },
  },
});
export let { handleUserURL } = userURL.actions;

// 추적 url
let traceBack = createSlice({
  name: "traceBack",
  initialState: "http://18.181.232.168:8080/traceback",
  reducers: {
    handletraceBack(state, newState) {
      return newState;
    },
  },
});
export let { handletraceBack } = traceBack.actions;

// import reload
let importReload = createSlice({
  name: "importReload",
  initialState: false,
  reducers: {
    handleImportReload(state, newState) {
      return newState;

    },
  },
});
export let { handleImportReload } = importReload.actions;

// export reload
let exportReload = createSlice({
  name: "exportReload",
  initialState: false,
  reducers: {
    handleExportReload(state, newState) {
      return newState;
    },
  },
});
export let { handleExportReload } = exportReload.actions;

// move reload
let moveReload = createSlice({
  name: "moveReload",
  initialState: false,
  reducers: {
    handleMoveReload(state, newState) {
      return newState;
    },
  },
});
export let { handleMoveReload } = moveReload.actions;

// warehouse reload
let warehouseReload = createSlice({
  name: "warehouseReload",
  initialState: false,
  reducers: {
    handleWarehouseReload(state, newState) {
      return newState;
    },
  },
});
export let { handleWarehouseReload } = warehouseReload.actions;
// inventory reload
let inventoryReload = createSlice({
  name: "inventoryReload",
  initialState: false,
  reducers: {
    handleInventoryReload(state, newState) {
      return newState;
    },
  },
});
export let { handleInventoryReload } = inventoryReload.actions;

// language
let language = createSlice({
  name: "language",
  initialState: sessionStorage.getItem("language"),
  reducers: {
    handleLanguage(state, newState) {
      return newState;
    },
  },
});
export let { handleLanguage } = language.actions;

// dark Mode theme
let theme = createSlice({
  name: "theme",
  initialState: sessionStorage.getItem("theme"),
  reducers: {
    handleTheme(state, newState) {
      return newState;
    },
  },
});
export let { handleTheme } = theme.actions;

// 성공alert
let alertSuc = createSlice({
  name: "alertSuc",
  initialState: false,
  reducers: {
    handleAlertSuc(state, newState) {
      return newState;
    },
  },
});
export let { handleAlertSuc } = alertSuc.actions;

// 실패 alert
let alertFail = createSlice({
  name: "alertFail",
  initialState: false,
  reducers: {
    handleAlertFail(state, newState) {
      return newState;
    },
  },
});
export let { handleAlertFail } = alertFail.actions;

// 확인 alert
let alertVerify = createSlice({
  name: "alertVerify",
  initialState: false,
  reducers: {
    handleAlertVerify(state, newState) {
      return newState;
    },
  },
});
export let { handleAlertVerify } = alertVerify.actions;

// alert 메시지
let alertMessage = createSlice({
  name: "alertMessage",
  initialState: "",
  reducers: {
    handleAlertMessage(state, newState) {
      return newState;
    },
  },
});
export let { handleAlertMessage } = alertMessage.actions;


// state등록해주는부분
export default configureStore({
  // {작명:createSlice만든거.reducer} 사용
  reducer: {
    tabTitle: tabTitle.reducer,
    logisticsImportURL: logisticsImportURL.reducer,
    logisticsExportURL: logisticsExportURL.reducer,
    logisticsMoveURL: logisticsMoveURL.reducer,
    warehouseURL: warehouseURL.reducer,
    inventoryURL: inventoryURL.reducer,
    userURL: userURL.reducer,
    importReload: importReload.reducer,
    exportReload: exportReload.reducer,
    moveReload: moveReload.reducer,
    warehouseReload: warehouseReload.reducer,
    inventoryReload: inventoryReload.reducer,
    language: language.reducer,
    theme: theme.reducer,
    traceBack: traceBack.reducer,
    alertSuc: alertSuc.reducer,
    alertFail: alertFail.reducer,
    alertMessage: alertMessage.reducer,
    alertVerify: alertVerify.reducer,
  },
});