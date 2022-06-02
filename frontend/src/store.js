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
  name: "logisticsURL",
  initialState: "http://192.168.0.10:8081",
  reducers: {
    handleLogisticsURL(state, newState) {
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
  initialState: "http://192.168.0.20:8081",
  reducers: {
    handleWarehouseURL(state, newState) {
      return newState;
    },
  },
});
export let { handleWarehouseURL } = warehouseURL.actions;

// state등록해주는부분
export default configureStore({
  // {작명:createSlice만든거.reducer} 사용
  reducer: {
    tabTitle: tabTitle.reducer,
    logisticsImportURL: logisticsImportURL.reducer,
    logisticsExportURL: logisticsExportURL.reducer,
    warehouseURL: warehouseURL.reducer,
  },
});
//
