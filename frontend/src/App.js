import React, { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Aos from "aos";
import "aos/dist/aos.css";
import './App.css'
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
  let isLogin = localStorage.getItem('token');
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  // useState
  // dark모드
  const [isDark, setIsDark] = useState(false);
  const [mouse, setmouse] = useState(-1)
  const [viewSidebar, setViewSidebar] = useState(false)
  const nowURL = useLocation().pathname;
  useEffect(() => {
    if (nowURL !== "/") {
      setViewSidebar(true)
    } else {
      setViewSidebar(false)
    }
  }, [nowURL])


  // 마우스위치 가져오기
  document.addEventListener('mousemove', logKey);
  function logKey(e) {
    setmouse(e.clientX)
  }

  return (
    <div data-aos="fade-up" >
      <div className={"" + (viewSidebar ? "border-l-8 border-sky-500" : "")}>
        <div className="">
          {
            isLogin
              ? <Sidebar mouse={mouse} setmouse={setmouse} />
              : null
          }
          <div className="mx-auto mx-5">
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