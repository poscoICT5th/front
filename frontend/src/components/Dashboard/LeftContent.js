import React, { useEffect, useState } from 'react'
import { Tab } from '@headlessui/react'
import ChartPie from './Components/Chart/ChartPie'
import DashboardImport from './Components/Table/DashboardImport'
import DashboardExport from './Components/Table/DashboardExport'
import DashboardMove from './Components/Table/DashboardMove'
import moment from "moment";
import DashboardRankingList from './Components/List/DashboardRankingList'
function LeftContent() {
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    const [now, setNow] = useState(moment().format("YY.MM.DD HH:mm:ss"))
    const [second, setSecond] = useState(false)
    useEffect(() => {
        setNow(moment().format("YY.MM.DD HH:mm:ss"))
        setTimeout(() => {
            setSecond(!second)
        }, 1000);
    }, [second])

    function checkValue(value) {
        if (dashboardCustom.some(e => e.value === value)) {
            removeTab(value)
        } else {
            addTab(value)
        }
    }

    function createTab(value) {
        if (value === "rankingService") {
            return {
                label: value,
                value: value,
                disabled: false,
                defaultChecked: false,
                component: <DashboardRankingList />
            }
        }
        return {
            label: value,
            value: value,
            disabled: false,
            defaultChecked: false,
            component: <ChartPie />
        }
    }

    function addTab(value) {
        setDashboardCustom(dashboardCustom => [...dashboardCustom, createTab(value)])
    }

    function removeTab(value) {
        setDashboardCustom(dashboardCustom.filter(tab => tab.value !== value));
    }
    const [customCheckbox, setCustomCheckbox] = useState([
        {
            label: "전체현황",
            value: "Dashboard",
            disabled: true,
            defaultChecked: true,
        },
        {
            label: '입고현황',
            value: 'logisticsImport',
            disabled: true,
            defaultChecked: true,
        },
        {
            label: '출고현황',
            value: 'logisticsExport',
            disabled: true,
            defaultChecked: true,
        },
        {
            label: '창고이동현황',
            value: 'logisticsMove',
            disabled: true,
            defaultChecked: true,
        },
        {
            label: '창고현황',
            value: 'warehouse',
            disabled: false,
            defaultChecked: false,
        },
        {
            label: '재고현황',
            value: 'inventory',
            disabled: false,
            defaultChecked: false,
        },
        {
            label: '입출고 비교차트',
            value: 'compareImportExport',
            disabled: false,
            defaultChecked: false,
        },
        {
            label: '랭킹서비스',
            value: 'rankingService',
            disabled: false,
            defaultChecked: false,
        },
    ])
    const [dashboardCustom, setDashboardCustom] = useState(
        [
            {
                label: '전체현황',
                value: 'Dashboard',
                disabled: true,
                defaultChecked: true,
                component: <ChartPie />,
            },
            {
                label: '입고현황',
                value: 'logisticsImport',
                disabled: true,
                defaultChecked: true,
                component: <DashboardImport />,
            },
            {
                label: '출고현황',
                value: 'logisticsExport',
                disabled: true,
                defaultChecked: true,
                component: <DashboardExport />,
            },
            {
                label: '창고이동현황',
                value: 'logisticsMove',
                disabled: true,
                defaultChecked: true,
                component: <DashboardMove />,
            },
        ]
    )
    return (
        <div className="col-span-6 grid grid-cols-8 gap-5">
            <div className='col-span-1 ml-1'>
                <p className='text-sm'>{now}(기준)</p>
                <div className="mt-4 space-y-4">
                    {
                        customCheckbox.map((tab) => {
                            return <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input
                                        id={tab.value}
                                        name={tab.value}
                                        type="checkbox"
                                        defaultChecked={tab.defaultChecked}
                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                        disabled={tab.disabled}
                                        value={tab.value}
                                        onClick={(e) => { checkValue(e.target.value) }}
                                    />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label className="font-medium text-gray-700">
                                        {tab.label}
                                    </label>
                                </div>
                            </div>
                        })
                    }

                </div>
            </div>
            <div className='col-span-7'>
                <Tab.Group>
                    <Tab.List className="flex space-x-1 rounded-xl bg-cyan-500 p-1">
                        {dashboardCustom.map((tab) => (
                            <Tab
                                key={tab.value}
                                className={({ selected }) =>
                                    classNames(
                                        'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                                        'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                        selected
                                            ? 'bg-white shadow'
                                            : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                                    )
                                }
                            >
                                {tab.label}
                            </Tab>
                        ))}
                    </Tab.List>
                    {
                        dashboardCustom.map((tab) => {
                            return <Tab.Panel
                                className={classNames(
                                    'rounded-xl bg-white p-3',
                                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                                )}
                            >
                                {tab.component}
                            </Tab.Panel>
                        })
                    }

                </Tab.Group>
            </div>

        </div>
    )
}

export default LeftContent