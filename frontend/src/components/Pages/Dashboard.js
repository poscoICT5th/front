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
  let languageTitle = {
    "import": { ko: "입고요청 전체현황", en: "Receiving request total status", cn: "接收请求的总状态", jp: "受信要求の合計ステータス", vn: "Tổng số yêu cầu nhận hàng" },
    "importSuc": { ko: "입고처리 완료현황", en: "Receiving processing completion status", cn: "接收处理完成状态", jp: "処理完了ステータスの受信", vn: "Trạng thái hoàn thành xử lý nhận tín hiệu" },
    "export": { ko: "출고요청 전체현황", en: "Overall status of forwarding request", cn: "转运要求的总体情况", jp: "転送要求の全体的なステータス", vn: "Tình trạng tổng thể của yêu cầu xuất kho" },
    "exportSuc": { ko: "출고처리 완료현황", en: "Forwarding processing completion status", cn: "出库处理完成状态", jp: "転送処理完了ステータス", vn: "Tình trạng hoàn thành quá trình xuất kho" },
    "move": { ko: "창고이동요청 전체현황", en: "Total status of warehouse movement request", cn: "仓库搬迁请求的总状态", jp: "倉庫移動要求の合計ステータス", vn: "Tổng số yêu cầu di chuyển nhà kho" },
    "moveSuc": { ko: "창고이동처리 완료현황", en: "Warehouse movement processing completion status", cn: "仓库移动处理完成状态", jp: "倉庫移動処理完了状況", vn: "Tình trạng hoàn thành việc di chuyển nhà kho" },
    "TodoList": { ko: "할 일 목록", en: "TodoList", cn: "罗列", jp: "トドリストする", vn: "chơi búp bê" },
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
          <div className='text-4xl font-bold'>{languageTitle.TodoList[sessionStorage.language]}<div className='text-sm mx-3 mt-1'>({now})</div></div>
          <DashboardTodoList setClickTable={setClickTable} todayDate={todayDate} />
        </div>
        <div className="col-span-6">
          <div className='text-lg font-bold mt-1'>{languageTitle[clickTable][sessionStorage.language]}</div>
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