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
import Footer from './components/Common/Footer';
import Header from './components/Common/Header';
import GraphPie from './components/Dashboard/Graph/GraphPie';
import ChartBar1 from './components/Map/ChartBar1'
import ChartTreemap from './components/Map/ChartTreemap'
import ChartPie from './components/Map/ChartPie'

function App() {
  let isLogin = localStorage.getItem('token');
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  // useState
  // dark모드
  const [viewSidebar, setViewSidebar] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const nowURL = useLocation().pathname;
  useEffect(() => {
    if (nowURL !== "/") {
      setViewSidebar(true)
    } else {
      setViewSidebar(false)
    }
  }, [nowURL])

  // 마우스위치 가져오기
  // document.addEventListener('mousemove', logKey);
  // function logKey(e) {
  //   if (e.clientX < 5) {
  //     setmouse(0)
  //   }
  // }

  return (
    <div data-aos="fade-up" className=''>
      <div className={viewSidebar ? null : "hidden"}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer ml-6 mt-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} onClick={() => { setSidebarOpen(true) }}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </div>
      <div className={"" + (sidebarOpen === false ? null : "opacity-10")}>
        <div className="">
          {
            isLogin
              ? <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
              : null
          }
          <div className="mx-auto mx-5 min-h-screen">
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
              <Route path="/ChartTreemap" element={<ChartTreemap />} />
              <Route path="/GraphPie" element={<GraphPie />} />
              <Route path="/ChartBar1" element={<ChartBar1 />} />
              <Route path="/ChartPie" element={<ChartPie />} />
            </Routes></div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App