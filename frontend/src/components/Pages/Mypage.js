import React, { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import { Divider } from "antd";

function Mypage(props) {
  const [userName, setUserName] = useState("");
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState("");
  const [team, setTeam] = useState("");
  const proverbs = [
    "Believe in yourself.",
    "Life is a journey",
    "Don't dream, Be it",
    "No sweat, No sweet",
    "No pain, No gain",
    "Be brave",
  ];
  const getRandom = function (length) {
    return proverbs[parseInt(Math.random() * length)];
  };

  useEffect(() => {
    if (true) {
      setUserName(jwtDecode(sessionStorage.getItem("token")).info.userName);
      setPhone(jwtDecode(sessionStorage.getItem("token")).info.phone);
      setEmail(jwtDecode(sessionStorage.getItem("token")).info.email);
      setTeam(jwtDecode(sessionStorage.getItem("token")).info.team);
    }
  }, [userName]);
  //날짜
  const date = new Date();
  const day = date.getDay();
  const month = date.getMonth();
  const datedate = date.getDate();
  var week = new Array(
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일"
  );
  var today = week[day];

  return (
    <div>
      <header className="">
        <div className="mx-auto py-2 px-5">
          <h1 className="text-4xl font-bold">마이페이지</h1>
        </div>
      </header>
      <Divider orientation="left">
        {month + 1}월 {datedate}일 {today} 오늘도 화이팅
      </Divider>
      <div className="w-1/2 mx-auto mt-20" data-aos="fade-up">
        <div className="text-center">
          <div className="mx-auto">
            <div className="shadow overflow-hidden sm:rounded-lg">
              <div className="border-t border-gray-300">
                <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 mt-1">
                  <dt className="text-xl font-bold ">이름</dt>
                  <dd className="text-xl sm:mt-0 sm:col-span-2 text-gray-500">
                    {userName}
                  </dd>
                </div>

                <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-xl font-medium font-bold">담당창고</dt>
                  <dd className="mt-1 text-xl sm:mt-0 sm:col-span-2 text-gray-500">
                    {team}
                  </dd>
                </div>
                <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-xl font-medium font-bold">휴대폰</dt>
                  <dd className="mt-1 text-xl sm:mt-0 sm:col-span-2 text-gray-500">
                    {phone}
                  </dd>
                </div>
                <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-xl font-bold">이메일</dt>
                  <dd className="mt-1 text-xl sm:mt-0 sm:col-span-2 text-gray-500">
                    {email}
                  </dd>
                </div>
                <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-xl font-medium font-bold">
                    오늘의한마디
                  </dt>
                  <dd className="mt-1 text-xl sm:mt-0 sm:col-span-2 text-gray-500">
                    {getRandom(proverbs.length)}
                  </dd>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mypage;
