import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Account/Login'
import LogisticsList from './components/List/LogisticsList'
import InventoryList from './components/List/InventoryList'
import WarehouseList from './components/List/WarehouseList'
import Main from './components/Pages/Main'
import Aos from "aos";
import Sidebar from './components/Common/Sidebar'
import Map from './components/Map/Map'
import Map1 from './components/Map/Map1'
import Map3 from './components/Map/Map3'


function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section data-aos="fade-up" className="">
      <div>
        <div class="flex ">
          <div class="w-64"><Sidebar /></div>
          <div class="flex-auto">
            {/* Routes */}
            <Routes>
              <Route index element={<Login />} />
              <Route path="/Main" element={<Main />} />
              <Route path="/LogisticsList" element={<LogisticsList />} />
              <Route path="/InventoryList" element={<InventoryList />} />
              <Route path="/WarehouseList" element={<WarehouseList />} />
              <Route path="/Map" element={<Map />} />
              <Route path="/Map1" element={<Map3 />} />
            </Routes></div>
        </div>

      </div>
    </section>
  )
}

export default App