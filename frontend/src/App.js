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
import Mypage from './components/Account/Mypage'
import Footer from './components/Common/Footer';
import Header from './components/Common/Header';
import GraphPie from './components/Dashboard/Graph/GraphPie';
import ChartBar1 from './components/Map/ChartBar1'
import ChartTreemap from './components/Map/ChartTreemap'
import ChartPie from './components/Map/ChartPie'
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import TrendInventory from './components/Trend/TrendInventory'
import { useThemeSwitcher } from "react-css-theme-switcher";
// import { Switch } from "antd";
function App() {
  let nowURL = useLocation().pathname
  let prePath = localStorage.getItem("prePath")
  useEffect(() => {
    if (prePath !== nowURL) {
      console.log(prePath, nowURL)
      localStorage.setItem("prePath", nowURL)
      window.location.reload()
    }
  }, [nowURL])



  let userURL = useSelector((state) => state.userURL)
  let navigate = useNavigate();
  const [isLogin, setisLogin] = useState(localStorage.getItem('token'))
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  const { switcher, currentTheme, status, themes } = useThemeSwitcher();
  const [viewSidebar, setViewSidebar] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  localStorage.setItem("URL", nowURL)

  useEffect(() => {
    Aos.init({ duration: 1000 });
    if (nowURL === "/") {
      setViewSidebar(false)
    } else {
      setViewSidebar(true)
      // 중복로그인처리
      axios.defaults.baseURL = userURL;
      axios.get('/sessionCheck', {
        params: {
          token: localStorage.getItem('token'),
          sessionID: localStorage.getItem('sessionID')
        }
      })
        .then((res) => {
          if (res.data === false) {
            alert("다른사용자가 로그인하여 로그아웃됩니다.");
            localStorage.clear()
            sessionStorage.clear()
            navigate('/')
          }
        })
        .catch((err) => { console.log(err) })
    }
  }, []);

  // 페이지전환될때 darkmode 확인
  useEffect(() => {
    var element = document.getElementById("theme");
    if (isLogin) {
      if (localStorage.getItem("theme") === "light") {
        setTheme("light")
        switcher({ theme: themes.light });
        element.classList.remove("dark");
        localStorage.setItem("theme", "light")
      } else {
        setTheme("dark")
        switcher({ theme: themes.dark });
        element.classList.add("dark");
        localStorage.setItem("theme", "dark")
      }
    } else if (isLogin === false && nowURL !== "/") {
      alert("로그인을 해주세요.")
      navigate("/")
    }
  }, [])

  function changeTheme(params) {
    var element = document.getElementById("theme");
    if (isLogin) {
      if (localStorage.getItem("theme") === "dark") {
        setTheme("light")
        switcher({ theme: themes.light });
        element.classList.remove("dark");
        localStorage.setItem("theme", "light")
      } else {
        setTheme("dark")
        switcher({ theme: themes.dark });
        element.classList.add("dark");
        localStorage.setItem("theme", "dark")
      }
    } else if (nowURL !== "/") {
      alert("로그인을 해주세요.")
      navigate("/")
    }
  }

  return (
    <div data-aos="fade-up" className='fade-in'>
      <div className={viewSidebar || isLogin ? null : "hidden"}>
        <div className='flex justify-between m-6'>
          <div className=''>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} onClick={() => { setSidebarOpen(true) }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
          <div>
            <button onClick={() => { changeTheme() }}>
              {
                theme === "light"
                  ? <div> {/* light */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg></div>
                  : <div> {/* dark */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  </div>
              }
            </button>
          </div>
        </div>
      </div>
      <div className={"" + (sidebarOpen === false ? null : "opacity-10")}>
        <div className="">
          {
            isLogin
              ? <Sidebar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
                setTheme={setTheme}
                theme={theme}
                switcher={switcher}
                themes={themes}
              />
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
              <Route path="/Mypage" element={<Mypage />} />
              <Route path="/ChartTreemap" element={<ChartTreemap />} />
              <Route path="/GraphPie" element={<GraphPie />} />
              <Route path="/ChartBar1" element={<ChartBar1 />} />
              <Route path="/ChartPie" element={<ChartPie />} />
              <Route path="/TrendInventory" element={<TrendInventory />} />
            </Routes></div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App