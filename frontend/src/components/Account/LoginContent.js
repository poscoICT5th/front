import React, { useEffect, useState } from "react";
import "./Login.css";
import { LockClosedIcon } from "@heroicons/react/solid";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";
import { handleSidebar } from '../../store'
import jwt_decode from "jwt-decode";
import Alert from "../Common/AlertFailed";
function LoginContent() {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let userUrl = useSelector((state) => state.userURL)
  // useEffect
  useEffect(() => {
    if (isLogin) {
      navigate('/Dashboard')
    }
  }, [])

  // useState
  let isLogin = localStorage.getItem('token');
  const [id, setId] = useState(null)
  const [pw, setPw] = useState(null)
  // function
  function Login() {
    axios.defaults.baseURL = userUrl
    if (!id || !pw) {
      // if (!id && !pw) {
      //   alert("아아디와 비밀번호를 입력해주세요")
      // } else if (!id && pw) {
      //   alert("아이디를 입력해주세요")
      // } else if (id && !pw) {
      //   alert("비밀번호를 입력해주세요")
      // }
    } else {
      axios.post('/login',
        {
          id: id,
          pw: pw
        }
      )
        .then((res) => {
          localStorage.setItem("token", res.data.token)
          localStorage.setItem("sessionID", res.data.sessionID)
          localStorage.setItem("theme", "light")
          localStorage.setItem("language", "ko")
          dispatch(handleSidebar(true))
          navigate("/Dashboard");
        })
        .catch(() => {
          alert("로그인이 실패했습니다. 계정을 확인해주세요.")
        })
    }
  }
  // Alert
  const [alertOpen, setAlertOpen] = useState(false)

  return (
    <div className="h-screen">
      {/* title */}
      {/* <div className="font-bold text-2xl text-center">POSCO ICT - 5</div>     */}
      {/* Login */}
      <div className="login min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 m-auto">
        <div className="max-w-md w-full space-y-8">
          <form>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <input
                  id="id-address"
                  name="id"
                  type="id"
                  autoComplete="id"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-sky-500 focus:border-sky-500 focus:z-10 sm:text-sm"
                  placeholder="id"
                  onChange={(e) => { setId(e.target.value) }}
                />
              </div>
              <div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-sky-500 focus:border-sky-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  onChange={(e) => { setPw(e.target.value) }} t
                />
              </div>
            </div>
            <div className="mt-3">
              <button
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                onClick={() => {
                  Login();
                }}
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-sky-500 group-hover:text-sky-400"
                    aria-hidden="true"
                  />
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginContent;