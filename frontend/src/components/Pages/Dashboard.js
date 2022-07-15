import React, { useEffect, useState } from 'react'
import DashboardImport from '../Dashboard/DashboardImport'
import DashboardExport from '../Dashboard/DashboardExport'
import DashboardMove from '../Dashboard/DashboardMove'
import DashboardTodoList from '../Dashboard/DashboardTodoList'
import DashboardAgingChart from '../Dashboard/DashboardAgingChart'
import DashboardAmountChart from '../Dashboard/DashboardAmountChart'
import moment from 'moment'
import { Calendar } from 'antd'
import './Dashboard.css'
import WordCloud from '../Map/WordCloud'
import DashboardBannerBox from '../Dashboard/DashboardBannerBox'
import DashboardNews from '../Dashboard/DashboardNews'
function Dashboard() {
  const [clickTable, setClickTable] = useState("import")
  const [todayDate, setTodayDate] = useState(moment().format("YYYY-MM-DD"))
  const [now, setNow] = useState(moment().format("YY.MM.DD HH:mm:ss"))
  const [second, setSecond] = useState(false)
  let EngtoKo = {
    "import": "입고요청 전체현황",
    "importSuc": "입고처리 완료현황",
    "export": "출고요청 전체현황",
    "exportSuc": "출고처리 완료현황",
    "move": "창고이동요청 전체현황",
    "moveSuc": "창고이동처리 완료현황",

  }
  let table = {
    "import": <DashboardImport clickTable="import" todayDate={todayDate} />,
    "importSuc": <DashboardImport clickTable="importSuc" todayDate={todayDate} />,
    "export": <DashboardExport clickTable="export" todayDate={todayDate} />,
    "exportSuc": <DashboardExport clickTable="exportSuc" todayDate={todayDate} />,
    "move": <DashboardMove clickTable="move" todayDate={todayDate} />,
    "moveSuc": <DashboardMove clickTable="moveSuc" todayDate={todayDate} />,
  }
  useEffect(() => {
    setNow(moment().format("YY.MM.DD HH:mm:ss"))
    setTimeout(() => {
      setSecond(!second)
    }, 1000);
  }, [second])
  const onChange = (value) => {
    setTodayDate(value.format('YYYY-MM-DD'));
  };
  return (
    <div data-aos="fade-up">
      <div className="grid grid-cols-12 gap-5 mx-8 h-80">
        <div className='col-span-3 text-center'>
          <div className='text-4xl font-bold'>TodoList<div className='text-sm mx-3'>({now})</div></div>
          <DashboardTodoList setClickTable={setClickTable} todayDate={todayDate} />
        </div>
        <div className="col-span-6">
          <div className='text-lg font-bold mt-1'>{EngtoKo[clickTable]}</div>
          <div className='rounded-lg my-auto'>{table[clickTable]}</div>
        </div>
        <div className="col-span-3 site-calendar-demo-card"><Calendar fullscreen={false} onChange={onChange} /></div>
      </div>
      <div className=' mt-5 grid grid-cols-2 gap-5 mx-8'>
        <div className='text-center'><DashboardAgingChart /></div>
        {/* <div className='text-center'><WordCloud /></div> */}
        {/* <div className='text-center'><DashboardNews /></div> */}
        {/* <div className='text-center'><DashboardBannerBox /></div> */}
        <div className='text-center'><DashboardAmountChart /></div>
      </div>
    </div>
  )
}

export default Dashboard