import { configureStore, createSlice } from '@reduxjs/toolkit'

// createSlice로 값 생성해줌
let user = createSlice({
  name: 'user',
  initialState: 'kim',
  reducers: {
    changeName(state) {
      return 'john ' + state
    }
  }
})
export let { changeName } = user.actions

let tabTitle = createSlice({
  name: 'tabTitle',
  initialState: 'MainDashboardOffice',
  reducers: {
    handleTabTitle(state, newState) {
      return newState
    }
  }
})
export let { handleTabTitle } = tabTitle.actions

// state등록해주는부분
export default configureStore({
  // {작명:createSlice만든거.reducer} 사용
  reducer: {
    user: user.reducer,
    tabTitle: tabTitle.reducer,
  }
})
//