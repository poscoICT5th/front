import { Button, Select } from "antd";
import React, { useEffect, useState, useRef, Fragment } from "react";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { handleLanguage } from "../../store";
import jwtDecode from "jwt-decode";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import MypageModal from "../Pages/MypageModal";
function Header(props) {
  let dispatch = useDispatch();
  // 언어변경 select
  const { Option } = Select;
  const settingLanguage = (value) => {
    console.log(value);
    dispatch(handleLanguage(value));
    sessionStorage.setItem("language", value);
  };

  // header에 띄워줄 안녕하세요 누구님
  const [userName, setUserName] = useState("");
  const [position, setPosition] = useState("관리자");
  useEffect(() => {
    if (props.isLogin) {
      setUserName(jwtDecode(sessionStorage.getItem("token")).info.userName);
      if (jwtDecode(sessionStorage.getItem("token")).info.auth === "1") {
        setPosition("관리자");
      } else {
        setPosition("사원");
      }
    }
  }, []);
  //
  // 로그아웃
  let userURL = useSelector((state) => state.userURL);
  let navigate = useNavigate();
  async function logout(params) {
    axios.defaults.baseURL = userURL;
    axios.post("/logout").then((res) => {
      sessionStorage.clear();
      sessionStorage.clear();
      props.setAlertSucOpen(true)
      props.setAlertMessage("로그아웃되었습니다.")
      navigate("/");
    })
      .catch(() => {
        props.setAlertFailedOpen(true);
        props.setAlertMessage("통신에러가 발생하였습니다. 다시 로그아웃해주세요.")
      })
  }
  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: (
            <div>
              <MypageModal />
            </div>
          ),
        },
        {
          key: "2",
          danger: true,
          label: (
            <div
              onClick={() => {
                logout();
              }}
            >
              로그아웃
            </div>
          ),
        },
      ]}
    />
  );
  return (
    <div className="">
      <div className="flex justify-between m-6">
        {props.sidebarOpen ? (
          <div></div>
        ) : (
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              onClick={() => {
                props.setSidebarOpen(true);
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
        )}
        <div className="flex">
          <div className="mt-1.5 mr-2 cursor-pointer">
            <Dropdown overlay={menu}>
              <Space>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {position}
                {userName}
                {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
                </svg> */}
              </Space>
            </Dropdown>
          </div>
          <div>
            <Select
              defaultValue={sessionStorage.getItem("language")}
              onChange={(e) => {
                settingLanguage(e);
              }}
            >
              <Option value="ko">한국어</Option>
              <Option value="en">영어</Option>
              <Option value="jp">일본어</Option>
              <Option value="cn">중국어</Option>
              <Option value="vn">베트남어</Option>
            </Select>
          </div>
          <div>
            <Button
              onClick={() => {
                props.changeTheme();
              }}
              className=""
            >
              {sessionStorage.getItem("theme") === "light" ? (
                <div>
                  {" "}
                  {/* light */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
              ) : (
                <div>
                  {" "}
                  {/* dark */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                </div>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
