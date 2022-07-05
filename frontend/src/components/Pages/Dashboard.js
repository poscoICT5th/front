import React, { useEffect, useState } from 'react'
import DashboardImport from '../Dashboard/DashboardImport'
import DashboardExport from '../Dashboard/DashboardExport'
import DashboardMove from '../Dashboard/DashboardMove'
import DashboardTodoList from '../Dashboard/DashboardTodoList'
import DashboardAgingChart from '../Dashboard/DashboardAgingChart'
import DashboardAmountChart from '../Dashboard/DashboardAmountChart'
import ChartBar2 from '../Map/ChartBar2'
import moment from 'moment'
import DashboardBannerBox from '../Dashboard/DashboardBannerBox'
function Dashboard() {
  const [clickTable, setClickTable] = useState("import")
  const [now, setNow] = useState(moment().format("YY.MM.DD HH:mm:ss"))
  const [second, setSecond] = useState(false)
  const [table, settable] = useState({
    "import": <DashboardImport clickTable="import" />,
    "importSuc": <DashboardImport clickTable="importSuc" />,
    "export": <DashboardExport clickTable="export" />,
    "exportSuc": <DashboardExport clickTable="exportSuc" />,
    "move": <DashboardMove clickTable="move" />,
    "moveSuc": <DashboardMove clickTable="moveSuc" />,
  })
  useEffect(() => {
    setNow(moment().format("YY.MM.DD HH:mm:ss"))
    setTimeout(() => {
      setSecond(!second)
    }, 1000);
  }, [second])
  return (
    <div data-aos="fade-up">
      <div className="grid grid-cols-5 gap-5 mx-8 h-full">
        <div className='col-span-1 text-center'>
          <div className='text-4xl font-bold'>TodoList<span className='text-sm mx-3'>({now})</span></div>
          <DashboardTodoList setClickTable={setClickTable} />
        </div>
        <div className="col-span-4">
          <div className='text-2xl font-bold'>{clickTable}</div>
          <div className='rounded-lg my-auto'>{table[clickTable]}</div>
        </div>
      </div>
      <div className=' mt-5 grid grid-cols-3 gap-5 mx-8'>
        <div className='text-center'><DashboardAgingChart /></div>
        <div><DashboardBannerBox /></div>
        <div className='text-center'><DashboardAmountChart /></div>
      </div>
    </div>
  )
}

export default Dashboard