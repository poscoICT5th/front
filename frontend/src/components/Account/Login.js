import React, { useEffect, useState } from "react";
import "./Login.css";
import { LockClosedIcon } from "@heroicons/react/solid";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";

function Login(props) {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let userUrl = useSelector((state) => state.userURL)
  // useState
  const [id, setId] = useState("")
  const [pw, setPw] = useState("")
  // function
  function enter(e) {
    if (e.keyCode === 13) {
      login()
    }
  }
  function login() {
    console.log(id)
    console.log(pw)
    axios.defaults.baseURL = userUrl
    axios.post('/login',
      {
        id: id,
        pw: pw
      }
    )
      .then((res) => {
        console.log(res)
        sessionStorage.setItem("token", res.data.token)
        sessionStorage.setItem("sessionID", res.data.sessionID)
        sessionStorage.setItem("theme", "light")
        sessionStorage.setItem("language", "ko")
        navigate("/Dashboard");
      })
      .catch(() => {
        props.setAlertFailedOpen(true)
        props.setAlertMessage("로그인 계정을 다시 확인해주세요")
      })
  }
  return (
    <div className="h-screen">
      <div className="login min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 m-auto">
        <div className="max-w-md w-full space-y-2">
          <div className="font-bold text-2xl text-center">POSCO ICT - 5</div>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <input
                id="id-address"
                name="id"
                type="text"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-sky-500 focus:border-sky-500 focus:z-10 sm:text-sm"
                placeholder="id"
                onChange={(e) => { setId(e.target.value) }}
                onKeyDown={(e) => { enter(e) }}
              />
            </div>
            <div>
              <input
                id="password"
                name="password"
                type="password"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-sky-500 focus:border-sky-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                onChange={(e) => { setPw(e.target.value) }}
                onKeyDown={(e) => { enter(e) }}
              />
            </div>
          </div>
          <div className="mt-1">
            <button
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
              onClick={() => {
                login();
              }}
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon
                  className="h-5 w-5 text-sky-500 group-hover:text-sky-400"
                  aria-hidden="true"
                />
              </span>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;