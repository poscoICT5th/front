import React from 'react'
import SearchCreateInventory from './SearchItems/SearchCreateInventory';
import SearchHeight from './SearchItems/SearchHeight';
import SearchImportAmount from './SearchItems/SearchImportAmount';
import SearchItemName from './SearchItems/SearchItemName';
import SearchItemNo from './SearchItems/SearchItemNo';
import SearchLocation from './SearchItems/SearchLocation';
import SearchLOT from './SearchItems/SearchLOT';
import SearchOrderAmount from './SearchItems/SearchOrderAmount';
import SearchProductFamily from './SearchItems/SearchProductFamily';
import SearchTarget from './SearchItems/SearchTarget';
import SearchThickness from './SearchItems/SearchThickness';
import SearchUnit from './SearchItems/SearchUnit';
import SearchWarehouse from './SearchItems/SearchWarehouse';
import SearchWeight from './SearchItems/SearchWeight';
import SearchWhenImport from './SearchItems/SearchWhenImport';
import SearchWidth from './SearchItems/SearchWidth';
import SearchStatusImport from './SearchItems/SearchStatusImport';

function SearchLogisticsImport(props) {
    return (
        <div className="overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 bg-white sm:p-6 bg-gray-100 rounded-lg">
                <div className="grid grid-cols-4 gap-4 text-center">
                    {/* 첫째줄 */}
                    <div className="col-span-1">
                        <SearchStatusImport setDatas={props.setDatas} datas={props.datas} />
                    </div>
                    <div className="col-span-1">
                        <SearchLocation setDatas={props.setDatas} datas={props.datas} />
                    </div>
                    <div className="col-span-1">
                        <SearchProductFamily setDatas={props.setDatas} datas={props.datas} />
                    </div>
                    {/* 단위 */}
                    <div className="col-span-1">
                        <SearchUnit setDatas={props.setDatas} datas={props.datas} />
                    </div>
                    {/* 제품명 */}
                    <div className="col-span-2">
                        <SearchItemName setDatas={props.setDatas} datas={props.datas} />
                    </div>
                    {/* 창고코드 */}
                    <div className="col-span-1">
                        <SearchWarehouse setDatas={props.setDatas} datas={props.datas} />
                    </div>
                    <div className="col-span-1">
                        <SearchTarget setDatas={props.setDatas} datas={props.datas} />
                    </div>
                </div>
                {/* 둘재줄 */}
                <div className="grid grid-cols-4 gap-4 text-center mt-5">
                    <SearchWidth setDatas={props.setDatas} datas={props.datas} />
                    <SearchThickness setDatas={props.setDatas} datas={props.datas} />
                    <SearchHeight setDatas={props.setDatas} datas={props.datas} />
                    <SearchOrderAmount setDatas={props.setDatas} datas={props.datas} />
                    <SearchImportAmount setDatas={props.setDatas} datas={props.datas} />
                    <SearchWeight setDatas={props.setDatas} datas={props.datas} />
                    <SearchLOT setDatas={props.setDatas} datas={props.datas} />
                    <SearchItemNo setDatas={props.setDatas} datas={props.datas} />
                </div>
                {/* 둘재줄 */}
                <div className="grid grid-cols-4 gap-4 text-center mt-5">
                    <SearchCreateInventory setDatas={props.setDatas} datas={props.datas} />
                    <SearchWhenImport setDatas={props.setDatas} datas={props.datas} />
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