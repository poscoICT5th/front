import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import "./App.css";
import Sidebar from "./components/Common/Sidebar";
import Footer from "./components/Common/Footer";
import Header from "./components/Common/Header";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useThemeSwitcher } from "react-css-theme-switcher";
import { handleTheme, handleLanguage } from "./store";
import { BackTop } from "antd";
import AlertSuc from "./components/Common/AlertSuc";
import AlertFailed from "./components/Common/AlertFailed";
import Router from "./Router";

function App() {
  let userURL = useSelector((state) => state.userURL);
  let dispatch = useDispatch();
  let navigate = useNavigate();

  let nowURL = useLocation().pathname;
  const isLogin = sessionStorage.getItem("token");
  const { themes } = useThemeSwitcher();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { switcher } = useThemeSwitcher({
    theme: sessionStorage.getItem("theme"),
  });
  // AOS
  useEffect(() => {
    Aos.init({ duration: 1000 });
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 1100);
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
            setAlertFailedOpen(true)
            setAlertMessage("다른사용자가 로그인하여 로그아웃됩니다")
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
      setAlertFailedOpen(true)
      setAlertMessage("로그인을 해주세요")
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
  const [alertSucOpen, setAlertSucOpen] = useState(false);
  const [alertFailedOpen, setAlertFailedOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  return (
    <div data-aos="fade-up" className="fade-in overflow-y-auto">
      {/* Header */}
      {isLogin ? (
        <Header
          isLogin={isLogin}
          sidebarOpen={sidebarOpen}
          changeTheme={changeTheme}
          setSidebarOpen={setSidebarOpen}
          setAlertSucOpen={setAlertSucOpen}
          setAlertFailedOpen={setAlertFailedOpen}
          setAlertMessage={setAlertMessage}
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
              switcher={switcher}
              themes={themes}
              alertSucOpen={alertSucOpen}
              setAlertSucOpen={setAlertSucOpen}
              alertFailedOpen={alertFailedOpen}
              setAlertFailedOpen={setAlertFailedOpen}
              setAlertMessage={setAlertMessage}
            />
          ) : null}
          <AlertSuc
            open={alertSucOpen}
            setOpen={setAlertSucOpen}
            message={alertMessage}
          />
          <AlertFailed
            open={alertFailedOpen}
            setOpen={setAlertFailedOpen}
            message={alertMessage}
          />
          <div className="mx-auto mx-24 min-h-screen">
            {/* Routes */}
            <Router
              alertSucOpen={alertSucOpen}
              setAlertSucOpen={setAlertSucOpen}
              alertFailedOpen={alertFailedOpen}
              setAlertFailedOpen={setAlertFailedOpen}
              setAlertMessage={setAlertMessage}
            />
          </div>
        </div>
        {nowURL !== "/" ? <Footer /> : null}
        <BackTop>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={4}
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 11l7-7 7 7M5 19l7-7 7 7"
              />
            </svg>
          </div>
        </BackTop>
      </div>
    </div>
  );
}

export default App;
