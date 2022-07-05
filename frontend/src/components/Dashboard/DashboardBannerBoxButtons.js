import React from 'react'
import { useNavigate, Navigate, Link } from 'react-router-dom'

function DashboardBannerBoxButtons() {
    let navigate = useNavigate();
    function navigatePage(page) {
        // navigate(page, { replace: true })
    }
    const categorys = [
        { title: "입고요청목록", page: "LogisticsImport", d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" },
        { title: "출고요청목록", page: "LogisticsExport", d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" },
        { title: "창고이동요청목록", page: "LosgisticsMove", d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" },
        { title: "창고목록", page: "Warehouse", d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" },
        { title: "창고MAP", page: "WarehouseMap", d: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" },
        { title: "재고목록", page: "Inventory", d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" },
        { title: "재고Trend", page: "TrendInventory", d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
        { title: "재고역추적", page: "Tracking", d: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" },
    ]
    return (
        <div className='grid grid-cols-3 text-center'>
            {
                categorys.map((category) => {
                    return <Link to={"/" + category.page}>
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

export default DashboardBannerBoxButtons