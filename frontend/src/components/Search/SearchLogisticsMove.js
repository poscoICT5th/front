import React from 'react'
import Select from "react-select";
import { statusImport, item_name, warehouse_code } from "./SelectOptions";

function SearchLogisticsMove(props) {
    return (

        <div className="overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 bg-white sm:p-6 bg-gray-100 rounded-lg">
                {/* 첫째줄 */}
                <div className="grid grid-cols-4 gap-4 text-center">
                    <div className="col-span-2">
                        <label
                            htmlFor="dropdown"
                            className="block text-sm font-medium text-gray-700"
                        >
                            From 창고
                        </label>
                        <Select
                            defaultValue={[warehouse_code[0]]}
                            name="colors"
                            options={warehouse_code}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            onChange={(e) => {
                                props.setDatas({ ...props.datas, to_warehouse: e.value });
                            }}
                        />
                    </div>
                    <div className="col-span-2">
                        <label
                            htmlFor="dropdown"
                            className="block text-sm font-medium text-gray-700"
                        >
                            To 창고
                        </label>
                        <Select
                            defaultValue={[warehouse_code[0]]}
                            name="colors"
                            options={warehouse_code}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            onChange={(e) => {
                                props.setDatas({ ...props.datas, to_warehouse: e.value });
                            }}
                        />
                    </div>
                    <div className="col-span-1">
                        <label
                            htmlFor="dropdown"
                            className="block text-sm font-medium text-gray-700"
                        >
                            작업상태
                        </label>
                        <Select
                            defaultValue={[statusImport[0]]}
                            name="colors"
                            options={statusImport}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            onChange={(e) => {
                                props.setDatas({ ...props.datas, status: e.value });
                            }}
                        />
                    </div>

                    <div className="col-span-3">
                        <label
                            htmlFor="dropdown"
                            className="block text-sm font-medium text-gray-700"
                        >
                            제품명
                        </label>
                        <Select
                            defaultValue={[item_name[0]]}
                            name="colors"
                            options={item_name}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            onChange={(e) => {
                                props.setDatas({ ...props.datas, item_name: e.value });
                            }}
                        />
                    </div>
                </div>
                {/* 둘재줄 */}
                <div className="grid grid-cols-4 text-center">
                    <div className="col-span-1 grid grid-cols-4 text-center mt-3">
                        <div className=''>폭</div>
                        <div>
                            <input
                                type="text"
                                name="min_width"
                                id="min_width"
                                autoComplete="address-level2"
                                className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                onChange={(e) => { props.setDatas({ ...props.datas, min_width: e.target.value }); }}
                            /></div>
                        <div className='text-xs'>-</div>
                        <div>
                            <input
                                type="text"
                                name="max_width"
                                id="max_width"
                                autoComplete="address-level2"
                                className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                onChange={(e) => { props.setDatas({ ...props.datas, max_width: e.target.value }); }}
                            />
                        </div>
                    </div>

                    <div className="col-span-1 grid grid-cols-4 text-center mt-3">
                        <div className=''>두께</div>
                        <div>
                            <input
                                type="text"
                                name="min_thickness"
                                id="min_thickness"
                                autoComplete="address-level2"
                                className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                onChange={(e) => { props.setDatas({ ...props.datas, min_thickness: e.target.value }); }}
                            /></div>
                        <div className='text-xs'>-</div>
                        <div>
                            <input
                                type="text"
                                name="max_thickness"
                                id="max_thickness"
                                autoComplete="address-level2"
                                className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                onChange={(e) => { props.setDatas({ ...props.datas, max_thickness: e.target.value }); }}
                            />
                        </div>
                    </div>
                    <div className="col-span-1 grid grid-cols-4 text-center mt-3">
                        <div className=''>높이</div>
                        <div>
                            <input
                                type="text"
                                name="min_height"
                                id="min_height"
                                autoComplete="address-level2"
                                className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                onChange={(e) => { props.setDatas({ ...props.datas, min_height: e.target.value }); }}
                            /></div>
                        <div className='text-xs'>-</div>
                        <div>
                            <input
                                type="text"
                                name="max_height"
                                id="max_height"
                                autoComplete="address-level2"
                                className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                onChange={(e) => { props.setDatas({ ...props.datas, max_height: e.target.value }); }}
                            />
                        </div>
                    </div>
                    {/* 수량 */}
                    <div className="col-span-1 grid grid-cols-4 text-center mt-3">
                        <div className=''>수량</div>
                        <div>
                            <input
                                type="text"
                                name="min_move_amount"
                                id="min_move_amount"
                                autoComplete="address-level2"
                                className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                onChange={(e) => { props.setDatas({ ...props.datas, min_move_amount: e.target.value }); }}
                            /></div>
                        <div className='text-xs'>-</div>
                        <div>
                            <input
                                type="text"
                                name="max_move_amount"
                                id="max_move_amount"
                                autoComplete="address-level2"
                                className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                onChange={(e) => { props.setDatas({ ...props.datas, max_move_amount: e.target.value }); }}
                            />
                        </div>
                    </div>
                    {/* 중량 */}
                    <div className="col-span-1 grid grid-cols-4 text-center mt-3">
                        <div className=''>중량</div>
                        <div>
                            <input
                                type="text"
                                name="min_weight"
                                id="min_weight"
                                autoComplete="address-level2"
                                className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                onChange={(e) => { props.setDatas({ ...props.datas, min_weight: e.target.value }); }}
                            /></div>
                        <div className='text-xs'>-</div>
                        <div>
                            <input
                                type="text"
                                name="max_weight"
                                id="max_weight"
                                autoComplete="address-level2"
                                className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                onChange={(e) => { props.setDatas({ ...props.datas, max_weight: e.target.value }); }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-4 py-3 text-right">
                <button
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                    onClick={() => {

                    }}
                >
                    Search
                </button>
            </div>
        </div>
    )
}

export default SearchLogisticsMove