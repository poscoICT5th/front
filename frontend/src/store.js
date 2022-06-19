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
  initialState: "http://192.168.0.10:8081",
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
  initialState: "http://192.168.0.10:8082",
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
  initialState: "http://192.168.0.10:8083",
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
  initialState: "http://192.168.0.20:8084",
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
  initialState: "http://192.168.0.20:8085",
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
  initialState: "http://192.168.0.10:8086",
  reducers: {
    handleUserURL(state, newState) {
      return newState;
    },
  },
});
export let { handleUserURL } = userURL.actions;

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

// create export suc
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

// create export suc
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
// create export suc
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
  initialState: localStorage.getItem("language"),
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
  initialState: localStorage.getItem("theme"),
  reducers: {
    handleTheme(state, newState) {
      return newState;
    },
  },
});
export let { handleTheme } = theme.actions;

// sidebar view
let sidebar = createSlice({
  name: "sidebar",
  initialState: false,
  reducers: {
    handleSidebar(state, newState) {
      return newState;
    },
  },
});
export let { handleSidebar } = sidebar.actions;

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
    sidebar: sidebar.reducer,
  },
});
//
