import React, { useEffect, useState } from "react";
import Timeline from "../Mypage/Timeline";
import { Card } from "antd";
import jwtDecode from 'jwt-decode';

const { Meta } = Card;

function Mypage(props) {
  const [userName, setUserName] = useState("");
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState("");
  const [team, setTeam] = useState("");
  const proverbs = ["Believe in yourself.", "Life is a journey",
    "Don't dream, Be it", "No sweat, No sweet", "No pain, No gain", "Be brave"]
//명언 랜덤
  const getRandom = function (length) {
    //console.log(parseInt(Math.random() * length));
    return proverbs[parseInt(Math.random() * length)];
  }

  useEffect(() => {
  if (true) {
    setUserName(jwtDecode(sessionStorage.getItem('token')).info.userName);
    setPhone(jwtDecode(sessionStorage.getItem('token')).info.phone);
    setEmail(jwtDecode(sessionStorage.getItem('token')).info.email);
    setTeam(jwtDecode(sessionStorage.getItem('token')).info.team);
  }
}, [userName])


  return (
    <div className="w-2/3 mx-auto" data-aos="fade-up">
      <div className="grid grid-cols-4 gap-1 text-center">
        <div className="col-span-3 mx-auto">
          <div className="shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium">
          회원 정보
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">오늘도 화이팅~</p>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Name</dt>
            <dd className="mt-1 text-sm sm:mt-0 sm:col-span-2">
              {userName}
            </dd>
          </div>
          <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Team</dt>
            <dd className="mt-1 text-sm sm:mt-0 sm:col-span-2">
              {team}
            </dd>
          </div>
          <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Phone</dt>
            <dd className="mt-1 text-sm sm:mt-0 sm:col-span-2">
              {phone}
            </dd>
          </div>
          <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Email Address</dt>
            <dd className="mt-1 text-sm sm:mt-0 sm:col-span-2">
              {email}
            </dd>
          </div>

          <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Thought Of The Day</dt>
            <dd className="mt-1 text-sm sm:mt-0 sm:col-span-2">
                    {getRandom(proverbs.length)}
            </dd>
          </div>
        </dl>
      </div>
    </div>
        </div>
      </div>
    </div>
  );
}

export default Mypage;
