import React, { useEffect, useState } from 'react'
import DashboardImport from '../Dashboard/Components/DashboardImport'
import DashboardExport from '../Dashboard/Components/DashboardExport'
import DashboardMove from '../Dashboard/Components/DashboardMove'
import moment from 'moment'
import DashboardRankingList from '../Dashboard/DashboardRankingList'
import DashboardMainChart from '../Dashboard/DashboardMainChart'
import RightContent from '../Dashboard/RightContent'
function Dashboard() {
  const [now, setNow] = useState(moment().format("YY.MM.DD HH:mm:ss"))
  const [second, setSecond] = useState(false)
  useEffect(() => {
    setNow(moment().format("YY.MM.DD HH:mm:ss"))
    setTimeout(() => {
      setSecond(!second)
    }, 1000);
  }, [second])

  return (
    <div data-aos="fade-up">
      <div className='text-2xl text-center my-3'>{now}</div>
      <div className="grid grid-cols-6 grid-rows-2 gap-5 text-center">
        <div className="rounded-lg col-span-2 gap-5 h-full">
          <DashboardRankingList />
        </div>
        <div className="rounded-lg col-span-2 grid grid-rows-5 gap-2">
          <div className='row-span-4'><DashboardMainChart /></div>
          <div className='row-span-1 rounded-lg grid grid-cols-2 gap-2 mt-2'>
            {/* <div>
              <button
                className="w-full inline-flex justify-center py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-cyan-500 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                onClick={() => {
                }}
              >
                입고관리
              </button>
            </div>
            <div>
              <button
                className="w-full inline-flex justify-center py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-cyan-500 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                onClick={() => {
                }}
              >
                출고관리
              </button>
            </div>
            <div>
              <button
                className="w-full inline-flex justify-center py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-cyan-500 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                onClick={() => {

                }}
              >
                창고이동관리
              </button>
            </div>
            <div>
              <button
                className="w-full inline-flex justify-center py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-cyan-500 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                onClick={() => {

                }}
              >
                창고관리
              </button>
            </div> */}
          </div>
        </div>
        <div className='col-span-2'>
          <RightContent />
        </div>
        <div className='col-span-6 grid grid-cols-3'>
          <div className="bg-cyan-0 rounded-lg col-span-1"><div className='my-3 text-lg font-bold'>입고</div><DashboardImport /></div>
          <div className="bg-cyan-0 rounded-lg col-span-1"><div className='my-3 text-lg font-bold'>출고</div><DashboardExport /></div>
          <div className="bg-cyan-0 rounded-lg col-span-1"><div className='my-3 text-lg font-bold'>창고이동</div><DashboardMove /></div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard