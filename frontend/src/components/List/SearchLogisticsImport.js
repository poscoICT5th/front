import React from 'react'
import Select from 'react-select';
import { statusImport, location, product_family, item_name, warehouse_code, unit } from './SelectOptions'

function SearchLogisticsImport(props) {
    return (
        <div className="overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 bg-white sm:p-6 bg-gray-100 rounded-lg">
                <div className="grid grid-cols-4 gap-4 text-center">
                    {/* 첫째줄 */}
                    <div className="col-span-1">
                        <label htmlFor="dropdown" className="block text-sm font-medium text-gray-700">
                            작업상태
                        </label>
                        <Select
                            defaultValue={[statusImport[0]]}
                            // isMulti
                            name="status"
                            options={statusImport}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            maxMenuHeight={200}
                            onChange={(e) => { props.setDatas({ ...props.datas, status: e.value }); console.log(props.datas) }}
                        />
                    </div>
                    <div className="col-span-1">
                        <label htmlFor="dropdown" className="block text-sm font-medium text-gray-700">
                            사업장
                        </label>
                        <Select
                            defaultValue={[location[0]]}
                            // isMulti
                            name="location"
                            options={location}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            maxMenuHeight={200}
                            onChange={(e) => { props.setDatas({ ...props.datas, location: e.value }); console.log(props.datas) }}
                        />
                    </div>
                    <div className="col-span-1">
                        <label htmlFor="dropdown" className="block text-sm font-medium text-gray-700">
                            제품군
                        </label>
                        <Select
                            defaultValue={[product_family[0]]}
                            // isMulti
                            name="product_family"
                            options={product_family}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            maxMenuHeight={200}
                            onChange={(e) => { props.setDatas({ ...props.datas, product_family: e.value }); console.log(props.datas) }}
                        />
                    </div>
                    {/* 단위 */}
                    <div className="col-span-1">
                        <label htmlFor="dropdown" className="block text-sm font-medium text-gray-700">
                            단위
                        </label>
                        <div className="col-span-2">
                            <Select
                                defaultValue={[unit[0]]}
                                // isMulti
                                name="unit"
                                options={unit}
                                className="basic-multi-select"
                                classNamePrefix="select"
                                maxMenuHeight={200}
                                onChange={(e) => { props.setDatas({ ...props.datas, unit: e.value }); }}
                            />
                        </div>
                    </div>
                    {/* 제품명 */}
                    <div className="col-span-2">
                        <label htmlFor="dropdown" className="block text-sm font-medium text-gray-700">
                            제품명
                        </label>
                        <Select
                            defaultValue={[item_name[0]]}
                            // isMulti
                            name="item_name"
                            options={item_name}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            maxMenuHeight={200}
                            onChange={(e) => { props.setDatas({ ...props.datas, item_name: e.value }); }}
                        />
                    </div>
                    {/* 창고코드 */}
                    <div className="col-span-1">
                        <label htmlFor="dropdown" className="block text-sm font-medium text-gray-700">
                            창고코드
                        </label>
                        <Select
                            defaultValue={[warehouse_code[0]]}
                            // isMulti
                            name="warehouse_code"
                            options={warehouse_code}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            maxMenuHeight={200}
                            onChange={(e) => { props.setDatas({ ...props.datas, warehouse_code: e.value }); }}
                        />
                    </div>
                </div>
                {/* 둘재줄 */}
                <div className="grid grid-cols-5 gap-4 text-center mt-5">
                    <div className="col-span-1 grid grid-cols-4 text-center">
                        <div className=''>폭</div>
                        <div>
                            <input
                                type="number"
                                min={0}
                                name="min_weight"
                                id="min_weight"
                                autoComplete="address-level2"
                                className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                onChange={(e) => { props.setDatas({ ...props.datas, min_weight: e.value }); }}
                            /></div>
                        <div className='text-xs'>~</div>
                        <div>
                            <input
                                type="number"
                                min={0}
                                name="max_weight"
                                id="max_weight"
                                autoComplete="address-level2"
                                className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                onChange={(e) => { props.setDatas({ ...props.datas, max_weight: e.value }); }}
                            />
                        </div>
                    </div>
                    <div className="col-span-1 grid grid-cols-4 text-center">
                        <div className=''>두께</div>
                        <div>
                            <input
                                type="number"
                                min={0}
                                name="min_thickness"
                                id="min_thickness"
                                autoComplete="address-level2"
                                className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                onChange={(e) => { props.setDatas({ ...props.datas, min_thickness: e.value }); }}
                            /></div>
                        <div className='text-xs'>~</div>
                        <div>
                            <input
                                type="number"
                                min={0}
                                name="max_thickness"
                                id="max_thickness"
                                autoComplete="address-level2"
                                className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                onChange={(e) => { props.setDatas({ ...props.datas, max_thickness: e.value }); }}
                            />
                        </div>
                    </div>
                    <div className="col-span-1 grid grid-cols-4 text-center">
                        <div className=''>높이</div>
                        <div>
                            <input
                                type="number"
                                min={0}
                                name="min_height"
                                id="min_height"
                                autoComplete="address-level2"
                                className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                onChange={(e) => { props.setDatas({ ...props.datas, min_height: e.value }); }}
                            /></div>
                        <div className='text-xs'>-</div>
                        <div>
                            <input
                                type="number"
                                min={0}
                                name="max_height"
                                id="max_height"
                                autoComplete="address-level2"
                                className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                onChange={(e) => { props.setDatas({ ...props.datas, max_height: e.value }); }}
                            />
                        </div>
                    </div>
                    {/* 수량 */}
                    <div className="col-span-1 grid grid-cols-4 text-center">
                        <div className=''>주문량</div>
                        <div>
                            <input
                                type="number"
                                min={0}
                                name="min_order_amount"
                                id="min_order_amount"
                                autoComplete="address-level2"
                                className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                onChange={(e) => { props.setDatas({ ...props.datas, min_order_amount: e.value }); }}
                            /></div>
                        <div className='text-xs'>-</div>
                        <div>
                            <input
                                type="number"
                                min={0}
                                name="max_order_amount"
                                id="max_order_amount"
                                autoComplete="address-level2"
                                className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                onChange={(e) => { props.setDatas({ ...props.datas, max_order_amount: e.value }); }}
                            />
                        </div>
                    </div>
                    {/* 입고수량 */}
                    <div className="col-span-1 grid grid-cols-4 text-center">
                        <div className=''>입고수량</div>
                        <div>
                            <input
                                type="number"
                                min={0}
                                name="min_im_amount"
                                id="min_im_amount"
                                autoComplete="address-level2"
                                className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                onChange={(e) => { props.setDatas({ ...props.datas, min_im_amount: e.value }); }}
                            /></div>
                        <div className='text-xs'>-</div>
                        <div>
                            <input
                                type="number"
                                min={0}
                                name="max_im_amount"
                                id="max_im_amount"
                                autoComplete="address-level2"
                                className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                onChange={(e) => { props.setDatas({ ...props.datas, max_im_amount: e.value }); }}
                            />
                        </div>
                    </div>
                    {/* 중량 */}
                    <div className="col-span-1 grid grid-cols-4 text-center">
                        <div className=''>중량</div>
                        <div>
                            <input
                                type="number"
                                min={0}
                                name="min_weight"
                                id="min_weight"
                                autoComplete="address-level2"
                                className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                onChange={(e) => { props.setDatas({ ...props.datas, min_weight: e.value }); }}
                            /></div>
                        <div className='text-xs'>-</div>
                        <div>
                            <input
                                type="number"
                                min={0}
                                name="max_weight"
                                id="max_weight"
                                autoComplete="address-level2"
                                className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                onChange={(e) => { props.setDatas({ ...props.datas, max_weight: e.value }); }}
                            />
                        </div>
                    </div>
                    {/*  */}
                    {/* 거래처 */}
                    <div className="col-span-1">
                        <div className='grid grid-cols-3'>
                            <div>거래처</div>
                            <div className='col-span-2'><input
                                type="text"
                                name="target"
                                id="target"
                                autoComplete="address-level2"
                                className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                onChange={(e) => { props.setDatas({ ...props.datas, target: e.value }); }}
                            /></div>
                        </div>
                    </div>
                    {/*  */}
                    {/* LOT */}
                    <div className="col-span-1">
                        <div className='grid grid-cols-3'>
                            <div>LOT</div>
                            <div className='col-span-2'><input
                                type="text"
                                name="LOT"
                                id="LOT"
                                autoComplete="address-level2"
                                className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                onChange={(e) => { props.setDatas({ ...props.datas, lot_no: e.value }); }}
                            /></div>
                        </div>
                    </div>
                    {/* LOT */}
                    <div className="col-span-1">
                        <div className='grid grid-cols-3'>
                            <div>품번</div>
                            <div className='col-span-2'><input
                                type="text"
                                name="item_no"
                                id="item_no"
                                autoComplete="address-level2"
                                className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                onChange={(e) => { props.setDatas({ ...props.datas, item_no: e.value }); }}
                            /></div>
                        </div>
                    </div>
                </div>
                {/* 둘재줄 */}
                <div className="grid grid-cols-4 gap-4 text-center mt-5">
                    <div className="col-span-1">
                        <label htmlFor="dropdown" className="block text-sm font-medium text-gray-700">
                            재고생성일
                        </label>
                        <div className="">
                            달력
                        </div>
                    </div>
                    <div className="col-span-1">
                        <label htmlFor="dropdown" className="block text-sm font-medium text-gray-700">
                            창고입고일
                        </label>
                        <div className="">
                            달력
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-4 py-3 text-right">
                <button
                    className="mr-1 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                    onClick={() => { props.search() }}
                >
                    삭제
                </button>
                <button
                    className="mr-1 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                    onClick={() => { props.search() }}
                >
                    조건조회
                </button>
                <button
                    className="mr-1  inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                    onClick={() => { props.searchAll() }}
                >
                    전체조회
                </button>
            </div>
        </div>
    )
}

export default SearchLogisticsImport