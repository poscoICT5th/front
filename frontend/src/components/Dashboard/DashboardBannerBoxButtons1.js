import React from 'react'
import { Link } from 'react-router-dom'

function DashboardBannerBoxButtons1() {

    const categorys = [
        { title: "입고요청목록", page: "LogisticsImport", d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" },
        { title: "출고요청목록", page: "LogisticsExport", d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" },
        { title: "창고이동요청목록", page: "LosgisticsMove", d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" },
        { title: "창고목록", page: "Warehouse", d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" },
    ]
    return (
        <div className='grid grid-cols-2 text-center'>
            {
                categorys.map((category) => {
                    return <Link to={"/" + category.page} key={category.page}>
                        <div className='grid grid-rows-2'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    className="h-14 w-14 mx-auto text-slate-700 dark:text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    onClick={() => { }}>
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d={category.d} />
                                </svg>
                            </div>
                            <div className='text-slate-700 dark:text-white'>
                                {category.title}
                            </div>
                        </div>
                    </Link>
                })
            }
        </div>
    )
}

export default DashboardBannerBoxButtons1