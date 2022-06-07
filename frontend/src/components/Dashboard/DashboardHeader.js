import React, { useState } from 'react'
import DatePicker from 'sassy-datepicker';
import DashboardCarousel from './DashboardCarousel';
import GraphPie from './Graph/GraphPie'
import GraphDonut from './Graph/GraphDonut'
import { useNavigate } from 'react-router-dom';
function DashboardHeader() {
    let navigate = useNavigate();
    // const onChange = (date) => {
    // };

    // useEffect

    // useState
    const [showDatas, setShowDatas] = useState({
        reqImport: 124,
        sucImport: 87,
        reqExport: 214,
        sucExport: 185,
        reqMove: 1452,
        sucMove: 1227,
    })
    function selectDate(value) {
        var selectDate = new Date(value);
    }
    const [cards, setCards] = useState([
        {
            subTitle1: "입고예정", subTitle2: "입고처리완료", req: showDatas.reqImport, suc: showDatas.sucImport, navigate: "LogisticsImport"
        },
        {
            subTitle1: "출고대기", subTitle2: "출고완료", req: showDatas.reqExport, suc: showDatas.sucExport, navigate: "LogisticsExport"
        },
        {
            subTitle1: "창고이동대기", subTitle2: "창고이동완료", req: showDatas.reqMove, suc: showDatas.sucMove, navigate: "LogisticsMove"
        },
    ])
    return (
        <div className='flex'>
            <div className=''>
                <DatePicker className='' onChange={selectDate} />
            </div>
            <div className="grow grid grid-cols-3 mx-3 gap-4 block shadow-sm rounded-xl focus:outline-none">
                {
                    cards.map((card) => {
                        // flex flex-col justify-between
                        return <div className="p-7 transition-shadow bg-white rounded-lg shadow-xl group hover:shadow-lg h-68 overflow-hidden">
                            <div className="px-5">
                                <div className="grid grid-cols-2">
                                    <div>
                                        <h5 className="text-4xl font-bold text-sky-600">{card.req}</h5>
                                        <div className="pt-2 mt-4 border-t-2 border-sky-100">
                                            <p className="text-sm font-medium tracking-widest text-gray-500 uppercase">{card.subTitle1}</p>
                                        </div>
                                    </div>
                                    <div></div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div></div>
                                    <div>
                                        <h5 className="text-4xl font-bold text-sky-600">{card.suc}</h5>
                                        <div className="pt-2 mt-4 border-t-2 border-sky-100">
                                            <p className="text-sm font-medium tracking-widest text-gray-500 uppercase">{card.subTitle2}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="inline-flex items-center text-sky-600 mt-5 mx-5">
                                <div className="text-md font-medium cursor-pointer" onClick={() => { navigate(`/${card.navigate}`) }}>자세히보기</div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 ml-3 transition-transform transform group-hover:translate-x-3"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default DashboardHeader