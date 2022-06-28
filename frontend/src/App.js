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
import Mypage from './components/Pages/Mypage'
import Footer from './components/Common/Footer';
import Header from './components/Common/Header';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import TrendInventory from './components/Trend/TrendInventory'
import { useThemeSwitcher } from "react-css-theme-switcher";
import { handleTheme, handleLanguage } from './store'
import Tracking from './components/Pages/Tracking';

function App() {
  let userURL = useSelector((state) => state.userURL)
  let sidebar = useSelector((state) => state.sidebar)
  let dispatch = useDispatch();
  let navigate = useNavigate();

  let nowURL = useLocation().pathname
  const isLogin = sessionStorage.getItem("token")
  const { currentTheme, status, themes } = useThemeSwitcher();
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { switcher } = useThemeSwitcher({ theme: sessionStorage.getItem("theme") })
  // AOS
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  // 맨위로 끌어올려주기
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 로그인되어있고 맨첫페이지로 가려고한다면 Dashboard 로 보내주기
  useEffect(() => {
    if (isLogin && nowURL === '/') {
      navigate('/Dashboard')
    }
  }, [])


  // 중복로그인처리
  useEffect(() => {
    axios.defaults.baseURL = userURL;
    if (nowURL !== "/") {
      axios.get('/sessionCheck', {
        params: {
          token: sessionStorage.getItem('token'),
          sessionID: sessionStorage.getItem('sessionID')
        }
      })
        .then((res) => {
          if (res.data === false) {
            alert("다른사용자가 로그인하여 로그아웃됩니다.");
            sessionStorage.clear()
            sessionStorage.clear()
            navigate('/')
          }
        })
        .catch((err) => { console.log(err) })
    }
  }, [])

  var element = document.getElementById("theme");
  // 페이지전환될때 darkmode 확인
  useEffect(() => {
    if (isLogin) {
      if (sessionStorage.getItem("theme") === "light") {
        element.classList.remove("dark");
        switcher({ theme: themes.light });
        dispatch(handleTheme("light"))
      } else {
        element.classList.add("dark");
        switcher({ theme: themes.dark });
        dispatch(handleTheme("dark"))
      }
    } else if (isLogin === null && nowURL !== "/") {
      alert("로그인을 해주세요.")
      navigate("/")
    }
  }, [])

  // theme 변경
  function changeTheme() {
    if (sessionStorage.getItem("theme") === "dark") {
      dispatch(handleTheme("light"))
      switcher({ theme: themes.light });
      element.classList.remove("dark");
      sessionStorage.setItem("theme", "light")
    } else {
      dispatch(handleTheme("dark"))
      switcher({ theme: themes.dark });
      element.classList.add("dark");
      sessionStorage.setItem("theme", "dark")
    }
  }

  return (
    <div data-aos="fade-up" className='fade-in'>
      {/* Header */}
      {
        isLogin
          ? <Header
            isLogin={isLogin}
            sidebarOpen={sidebarOpen}
            changeTheme={changeTheme}
            setSidebarOpen={setSidebarOpen}
          />
          : null
      }
      {/*  */}
      {/* Sidebar visible */}
      <div className={"" + (sidebarOpen === false ? null : "opacity-10")}>
        <div className="">
          {
            isLogin
              ? <Sidebar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
                // setTheme={setTheme}
                // theme={theme}
                switcher={switcher}
                themes={themes}
              />
              : null
          }
          <div className="mx-auto mx-5 min-h-screen">
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
              <Route path="/TrendInventory" element={<TrendInventory />} />
              <Route path="/Tracking" element={<Tracking />} />
            </Routes></div>
        </div>
        {
          nowURL !== "/"
            ? <Footer />
            : null
        }
      </div>
    </div>
  )
}

export default App