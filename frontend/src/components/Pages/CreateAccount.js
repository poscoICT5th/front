import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function CreateAccount() {
    let warehouseURL = useSelector((state) => state.warehouseURL)
    let userURL = useSelector((state) => state.userURL)
    const [warehouse_codes, setWarehouse_codes] = useState([])
    const [location, setLocation] = useState("포항")
    const [userData, setUserData] = useState({
        id: "",
        pw: "",
        name: "",
        phone: "",
        email: "",
        team: "",
        auth: "",
        menu_option: "",
    })
    useEffect(() => {
        axios.defaults.baseURL = warehouseURL
        axios.get(`warehouse/${location}`)
            .then((res) => {
                console.log(res.data)
                setWarehouse_codes([])
                for (let index = 0; index < res.data.length; index++) {
                    setWarehouse_codes(warehouse_codes => [...warehouse_codes, res.data[index].warehouse_code])
                }
            })
            .catch((err) => { })
    }, [location])

    function createUser() {
        axios.defaults.baseURL = userURL
        axios.post('/create', userData)
            .then((res) => { console.log(res) })
    }
    return (
        <div data-aos="fade-up">
            <div className="mt-10 w-1/2 mx-auto">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="md:col-span-1">
                        <div className="px-4 sm:px-0">
                            <h3 className="text-lg leading-6 font-bold">계정생성</h3>
                            <p className="mt-1 text-sm">해당 웹사이트를 이용하기 위해 회사 직원들에게 부여할 계정을 생성합니다</p>
                        </div>
                    </div>
                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <div className="shadow overflow-hidden sm:rounded-md">
                            <div className="px-4 py-5 bg-white dark:bg-neutral-800 sm:p-6">
                                <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-6">
                                        <label htmlFor="email-address" className="block text-sm font-medium">
                                            아이디
                                        </label>
                                        <input
                                            type="text"
                                            name="email-address"
                                            id="email-address"
                                            autoComplete="email"
                                            className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        />
                                    </div>

                                    <div className="col-span-6">
                                        <label htmlFor="last-name" className="block text-sm font-medium">
                                            비밀번호
                                        </label>
                                        <input
                                            type="password"
                                            name="last-name"
                                            id="last-name"
                                            autoComplete="family-name"
                                            className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        />
                                    </div>

                                    <div className="col-span-6">
                                        <label htmlFor="first-name" className="block text-sm font-medium">
                                            이름
                                        </label>
                                        <input
                                            type="text"
                                            name="first-name"
                                            id="first-name"
                                            autoComplete="given-name"
                                            className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        />
                                    </div>

                                    <div className="col-span-6">
                                        <label htmlFor="country" className="block text-sm font-medium">
                                            지역
                                        </label>
                                        <select
                                            id="country"
                                            name="country"
                                            autoComplete="country-name"
                                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white dark:bg-neutral-800 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                                            onChange={(e) => { setLocation(e.target.value) }}
                                        >
                                            <option value="포항">포항</option>
                                            <option value="광양">광양</option>
                                            <option value="천안">천안</option>
                                        </select>
                                    </div>

                                    <div className="col-span-6">
                                        <label htmlFor="country" className="block text-sm font-medium">
                                            담당창고
                                        </label>
                                        <select
                                            id="country"
                                            name="country"
                                            autoComplete="country-name"
                                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white dark:bg-neutral-800 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                                        >
                                            {
                                                warehouse_codes.map(warehouse => {
                                                    return <option value={warehouse.warehouse_code}>{warehouse.warehouse_code}</option>
                                                })
                                            }
                                        </select>
                                    </div>

                                    <div className="col-span-6">
                                        <label htmlFor="country" className="block text-sm font-medium">
                                            직급
                                        </label>
                                        <select
                                            id="country"
                                            name="country"
                                            autoComplete="country-name"
                                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white dark:bg-neutral-800 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                                        >
                                            <option>관리</option>
                                            <option>사원</option>
                                            <option>현장</option>
                                        </select>
                                    </div>

                                    <div className="col-span-6">
                                        <label htmlFor="first-name" className="block text-sm font-medium">
                                            이메일
                                        </label>
                                        <input
                                            type="text"
                                            name="first-name"
                                            id="first-name"
                                            autoComplete="given-name"
                                            className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        />
                                    </div>

                                    <div className="col-span-6">
                                        <label htmlFor="first-name" className="block text-sm font-medium">
                                            연락처
                                        </label>
                                        <input
                                            type="text"
                                            name="first-name"
                                            id="first-name"
                                            autoComplete="given-name"
                                            className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="px-4 py-3 bg-gray-50 dark:bg-neutral-800 text-right sm:px-6">
                                <button
                                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                                    onClick={createUser}
                                >
                                    생성
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateAccount