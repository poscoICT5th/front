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

// create import suc
let createImportSuc = createSlice({
  name: "createImportSuc",
  initialState: false,
  reducers: {
    handleCreateImportSuc(state, newState) {
      return newState;
    },
  },
});
export let { handleCreateImportSuc } = createImportSuc.actions;

// create export suc
let createExportSuc = createSlice({
  name: "createExportSuc",
  initialState: false,
  reducers: {
    handleCreateExportSuc(state, newState) {
      return newState;
    },
  },
});
export let { handleCreateExportSuc } = createExportSuc.actions;

// create export suc
let createMoveSuc = createSlice({
  name: "createMoveSuc",
  initialState: false,
  reducers: {
    handleCreateMoveSuc(state, newState) {
      return newState;
    },
  },
});
export let { handleCreateMoveSuc } = createMoveSuc.actions;

// create export suc
let createWarehouseSuc = createSlice({
  name: "createWarehouseSuc",
  initialState: false,
  reducers: {
    handleCreateWarehouseSuc(state, newState) {
      return newState;
    },
  },
});
export let { handleCreateWarehouseSuc } = createWarehouseSuc.actions;

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
    createImportSuc: createImportSuc.reducer,
    createExportSuc: createExportSuc.reducer,
    createMoveSuc: createMoveSuc.reducer,
    createWarehouseSuc: createWarehouseSuc.reducer,
  },
});
//
