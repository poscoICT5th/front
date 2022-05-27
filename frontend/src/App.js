import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Aos from "aos";
import Login from './components/Account/Login'
import LogisticsOutList from './components/List/LogisticsOutList'
import LogisticsInList from './components/List/LogisticsInList'
import LosgisticsMoveList from './components/List/LosgisticsMoveList'
import InventoryList from './components/List/InventoryList'
import WarehouseList from './components/List/WarehouseList'
import Main from './components/Pages/Main'
import Sidebar from './components/Common/Sidebar'
import Map from './components/Map/Map'
import Map1 from './components/Map/Map1'
import Map3 from './components/Map/Map3'
import CreateLogisticsIn from './components/Create/CreateLogisticsIn';


function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section data-aos="fade-up" className="">
      <div>
        <div className="flex">
          <div className="w-64"><Sidebar /></div>
          <div className="flex-auto">
            {/* Routes */}
            <Routes>
              <Route index element={<Login />} />
              <Route path="/Main" element={<Main />} />
              <Route path="/LogisticsInList" element={<LogisticsInList />} />
              <Route path="/LogisticsOutList" element={<LogisticsOutList />} />
              <Route path="/LosgisticsMoveList" element={<LosgisticsMoveList />} />
              <Route path="/InventoryList" element={<InventoryList />} />
              <Route path="/WarehouseList" element={<WarehouseList />} />
              <Route path="/CreateLogisticsIn" element={<CreateLogisticsIn />} />

              <Route path="/Map" element={<Map />} />
              <Route path="/Map1" element={<Map3 />} />
            </Routes></div>
        </div>

      </div>
    </section>
  )
}

export default App