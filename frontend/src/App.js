import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import "./App.css";
import Login from "./components/Account/Login";
import LogisticsExport from "./components/Pages/LogisticsExport";
import LogisticsImport from "./components/Pages/LogisticsImport";
import LosgisticsMove from "./components/Pages/LosgisticsMove";
import Inventory from "./components/Pages/Inventory";
import Warehouse from "./components/Pages/Warehouse";
import Dashboard from "./components/Pages/Dashboard";
import Sidebar from "./components/Common/Sidebar";
import Mypage from "./components/Pages/Mypage";
import Footer from "./components/Common/Footer";
import Header from "./components/Common/Header";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import TrendInventory from "./components/Trend/TrendInventory";
import { useThemeSwitcher } from "react-css-theme-switcher";
import { handleTheme, handleLanguage } from './store'
import Tracking from './components/Pages/Tracking';
import ChartTreemap from './components/Map/ChartTreemap';
import CreateAccount from './components/Pages/CreateAccount';
import { BackTop } from "antd";
import AlertSuc from "./components/Common/AlertSuc";
import AlertFailed from "./components/Common/AlertFailed";

function App() {
  let userURL = useSelector((state) => state.userURL);
  let sidebar = useSelector((state) => state.sidebar);
  let dispatch = useDispatch();
  let navigate = useNavigate();

  let nowURL = useLocation().pathname;
  const isLogin = sessionStorage.getItem("token");
  const { currentTheme, status, themes } = useThemeSwitcher();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { switcher } = useThemeSwitcher({
    theme: sessionStorage.getItem("theme"),
  });
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
    if (isLogin && nowURL === "/") {
      navigate("/Dashboard");
    }
  }, []);

  // 중복로그인처리
  useEffect(() => {
    axios.defaults.baseURL = userURL;
    if (nowURL !== "/") {
      axios
        .get("/sessionCheck", {
          params: {
            token: sessionStorage.getItem("token"),
            sessionID: sessionStorage.getItem("sessionID"),
          },
        })
        .then((res) => {
          if (res.data === false) {
            alert("다른사용자가 로그인하여 로그아웃됩니다.");
            sessionStorage.clear();
            sessionStorage.clear();
            navigate("/");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  var element = document.getElementById("theme");
  // 페이지전환될때 darkmode 확인
  useEffect(() => {
    if (isLogin) {
      if (sessionStorage.getItem("theme") === "light") {
        element.classList.remove("dark");
        switcher({ theme: themes.light });
        dispatch(handleTheme("light"));
      } else {
        element.classList.add("dark");
        switcher({ theme: themes.dark });
        dispatch(handleTheme("dark"));
      }
    } else if (isLogin === null && nowURL !== "/") {
      alert("로그인을 해주세요.");
      navigate("/");
    }
  }, []);

  // theme 변경
  function changeTheme() {
    if (sessionStorage.getItem("theme") === "dark") {
      dispatch(handleTheme("light"));
      switcher({ theme: themes.light });
      element.classList.remove("dark");
      sessionStorage.setItem("theme", "light");
    } else {
      dispatch(handleTheme("dark"));
      switcher({ theme: themes.dark });
      element.classList.add("dark");
      sessionStorage.setItem("theme", "dark");
    }
  }
  // alert button
  const [alertSucOpen, setAlertSucOpen] = useState(false)
  const [alertFailedOpen, setAlertFailedOpen] = useState(false)
  const [alertMessage, setAlertMessage] = useState("")
  return (
    <div data-aos="fade-up" className="fade-in">
      {/* Header */}
      {isLogin ? (
        <Header
          isLogin={isLogin}
          sidebarOpen={sidebarOpen}
          changeTheme={changeTheme}
          setSidebarOpen={setSidebarOpen}
        />
      ) : null}
      {/*  */}
      {/* Sidebar visible */}
      <div className={"" + (sidebarOpen === false ? null : "opacity-10")}>
        <div className="">
          {isLogin ? (
            <Sidebar
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
              // setTheme={setTheme}
              // theme={theme}
              switcher={switcher}
              themes={themes}
            />
          ) : null}
          <div className="mx-auto mx-5 min-h-screen">
            <AlertSuc open={alertSucOpen} setOpen={alertSucOpen} message={alertMessage} />
            <AlertFailed open={alertFailedOpen} setOpen={setAlertFailedOpen} message={alertMessage} />
            {/* Routes */}
            <Routes>
              <Route index element={<Login alertSucOpen={alertSucOpen} setAlertSucOpen={setAlertSucOpen} alertFailedOpen={alertFailedOpen} setAlertFailedOpen={setAlertFailedOpen} setAlertMessage={setAlertMessage} />} />
              <Route path="/Dashboard" element={<Dashboard alertSucOpen={alertSucOpen} setAlertSucOpen={setAlertSucOpen} alertFailedOpen={alertFailedOpen} setAlertFailedOpen={setAlertFailedOpen} setAlertMessage={setAlertMessage} />} />
              <Route path="/LogisticsImport" element={<LogisticsImport alertSucOpen={alertSucOpen} setAlertSucOpen={setAlertSucOpen} alertFailedOpen={alertFailedOpen} setAlertFailedOpen={setAlertFailedOpen} setAlertMessage={setAlertMessage} />} />
              <Route path="/LogisticsExport" element={<LogisticsExport alertSucOpen={alertSucOpen} setAlertSucOpen={setAlertSucOpen} alertFailedOpen={alertFailedOpen} setAlertFailedOpen={setAlertFailedOpen} setAlertMessage={setAlertMessage} />} />
              <Route path="/LosgisticsMove" element={<LosgisticsMove alertSucOpen={alertSucOpen} setAlertSucOpen={setAlertSucOpen} alertFailedOpen={alertFailedOpen} setAlertFailedOpen={setAlertFailedOpen} setAlertMessage={setAlertMessage} />} />
              <Route path="/Inventory" element={<Inventory alertSucOpen={alertSucOpen} setAlertSucOpen={setAlertSucOpen} alertFailedOpen={alertFailedOpen} setAlertFailedOpen={setAlertFailedOpen} setAlertMessage={setAlertMessage} />} />
              <Route path="/Warehouse" element={<Warehouse alertSucOpen={alertSucOpen} setAlertSucOpen={setAlertSucOpen} alertFailedOpen={alertFailedOpen} setAlertFailedOpen={setAlertFailedOpen} setAlertMessage={setAlertMessage} />} />
              <Route path="/Mypage" element={<Mypage alertSucOpen={alertSucOpen} setAlertSucOpen={setAlertSucOpen} alertFailedOpen={alertFailedOpen} setAlertFailedOpen={setAlertFailedOpen} setAlertMessage={setAlertMessage} />} />
              <Route path="/TrendInventory" element={<TrendInventory alertSucOpen={alertSucOpen} setAlertSucOpen={setAlertSucOpen} alertFailedOpen={alertFailedOpen} setAlertFailedOpen={setAlertFailedOpen} setAlertMessage={setAlertMessage} />} />
              <Route path="/Tracking" element={<Tracking alertSucOpen={alertSucOpen} setAlertSucOpen={setAlertSucOpen} alertFailedOpen={alertFailedOpen} setAlertFailedOpen={setAlertFailedOpen} setAlertMessage={setAlertMessage} />} />
              <Route path="/ChartTreemap" element={<ChartTreemap alertSucOpen={alertSucOpen} setAlertSucOpen={setAlertSucOpen} alertFailedOpen={alertFailedOpen} setAlertFailedOpen={setAlertFailedOpen} setAlertMessage={setAlertMessage} />} />
              <Route path="/CreateAccount" element={<CreateAccount alertSucOpen={alertSucOpen} setAlertSucOpen={setAlertSucOpen} alertFailedOpen={alertFailedOpen} setAlertFailedOpen={setAlertFailedOpen} setAlertMessage={setAlertMessage} />} />
            </Routes></div>
        </div>
        {nowURL !== "/" ? <Footer /> : null}
        <BackTop>
          <div >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4} onClick={() => { window.scrollTo(0, 0); }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 11l7-7 7 7M5 19l7-7 7 7" />
            </svg>
          </div>
        </BackTop>
      </div>
    </div>
  );
}

export default App;
