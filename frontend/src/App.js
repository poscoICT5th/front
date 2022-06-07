import React, { useEffect, useState } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Aos from "aos";
import "aos/dist/aos.css";
import Login from './components/Account/Login'
import LogisticsExport from './components/Pages/LogisticsExport'
import LogisticsImport from './components/Pages/LogisticsImport'
import LosgisticsMove from './components/Pages/LosgisticsMove'
import Inventory from './components/Pages/Inventory'
import Warehouse from './components/Pages/Warehouse'
import Dashboard from './components/Pages/Dashboard'
import Sidebar from './components/Common/Sidebar'
import Map from './components/Map/Map'
import Map3 from './components/Map/Map3'
import Map4 from './components/Map/Map4'
import Footer from './components/Common/Footer';
import Header from './components/Common/Header';
function App() {
  let navigate = useNavigate();
  let isLogin = localStorage.getItem('id');
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  useEffect(() => {
    if (isLogin) {
      // navigate('/Main')
    }
  }, [])
  // dark모드
  const [isDark, setIsDark] = useState(false);

  return (
    <div data-aos="fade-up" className="">
      <div>
        <div className="flex">
          {
            isLogin
              ? <div className="w-72"><Sidebar /></div>
              : null
          }
          <div className="w-9/12 mx-auto">
            <Header />
            {/* Routes */}
            <Routes>
              <Route index element={<Login />} />
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/LogisticsImport" element={<LogisticsImport />} />
              <Route path="/LogisticsExport" element={<LogisticsExport />} />
              <Route path="/LosgisticsMove" element={<LosgisticsMove />} />
              <Route path="/Inventory" element={<Inventory />} />
              <Route path="/Warehouse" element={<Warehouse />} />
              <Route path="/Map" element={<Map />} />
              <Route path="/Map3" element={<Map3 />} />
              <Route path="/Map4" element={<Map4 />} />
            </Routes></div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App