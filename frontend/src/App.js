import React, { useEffect } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Aos from "aos";
import "aos/dist/aos.css";
import Login from './components/Account/Login'
import LogisticsExportList from './components/List/LogisticsExportList'
import LogisticsImportList from './components/List/LogisticsImportList'
import LosgisticsMoveList from './components/List/LosgisticsMoveList'
import InventoryList from './components/List/InventoryList'
import WarehouseList from './components/List/WarehouseList'
import Main from './components/Pages/Main'
import Sidebar from './components/Common/Sidebar'
import Map from './components/Map/Map'
import Map3 from './components/Map/Map3'
import CreateLogisticsImport from './components/Create/CreateLogisticsImport';
import Map4 from './components/Map/Map4'

function App() {
  let navigate = useNavigate();
  let isLogin = localStorage.getItem('id');
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  useEffect(() => {
    if (isLogin) {
      navigate('/Main')
    }
  }, [])
  return (
    <div data-aos="fade-up" className="">
      <div>
        <div className="flex">
          {
            isLogin
              ? <div className="w-72"><Sidebar /></div>
              : null
          }
          <div className="flex-auto w-5/6 mx-8">
            {/* Routes */}
            <Routes>
              <Route index element={<Login />} />
              <Route path="/Main" element={<Main />} />
              <Route path="/LogisticsImportList" element={<LogisticsImportList />} />
              <Route path="/LogisticsExportList" element={<LogisticsExportList />} />
              <Route path="/LosgisticsMoveList" element={<LosgisticsMoveList />} />
              <Route path="/InventoryList" element={<InventoryList />} />
              <Route path="/WarehouseList" element={<WarehouseList />} />
              <Route path="/CreateLogisticsImport" element={<CreateLogisticsImport />} />
              <Route path="/Map" element={<Map />} />
              <Route path="/Map3" element={<Map3 />} />
              <Route path="/Map4" element={<Map4 />} />
            </Routes></div>
        </div>

      </div>
    </div>
  )
}

export default App