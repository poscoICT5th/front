import React from 'react'
import SearchExportAmount from './SearchItems/SearchExportAmount';
import SearchHeight from './SearchItems/SearchHeight';
import SearchInstRegDate from './SearchItems/SearchInstRegDate';
import SearchItemName from './SearchItems/SearchItemName';
import SearchItemNo from './SearchItems/SearchItemNo';
import SearchLocation from './SearchItems/SearchLocation';
import SearchLOT from './SearchItems/SearchLOT';
import SearchOrderAmount from './SearchItems/SearchOrderAmount';
import SearchProductFamily from './SearchItems/SearchProductFamily';
import SearchStatusExport from './SearchItems/SearchStatusExport';
import SearchTarget from './SearchItems/SearchTarget';
import SearchThickness from './SearchItems/SearchThickness';
import SearchUnit from './SearchItems/SearchUnit';
import SearchWarehouse from './SearchItems/SearchWarehouse';
import SearchWeight from './SearchItems/SearchWeight';
import SearchWhenDoneDate from './SearchItems/SearchWhenDoneDate';
import SearchWhenInstDeadline from './SearchItems/SearchWhenInstDeadline';
import SearchWhenOrderDate from './SearchItems/SearchWhenOrderDate';
import SearchWidth from './SearchItems/SearchWidth';

function SearchLogisticsExport(props) {
  return (
    <div className="overflow-hidden sm:rounded-md">
      <div className="px-4 py-5 bg-white sm:p-6 bg-gray-100 rounded-lg">
        <div className="grid grid-cols-4 gap-4 text-center">
          {/* 첫째줄 */}
          <div className="col-span-1">
            <SearchStatusExport setDatas={props.setDatas} datas={props.datas} />
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
        <div className="grid grid-cols-5 gap-4 text-center mt-5">
          <SearchWidth setDatas={props.setDatas} datas={props.datas} />
          <SearchThickness setDatas={props.setDatas} datas={props.datas} />
          <SearchHeight setDatas={props.setDatas} datas={props.datas} />
          <SearchOrderAmount setDatas={props.setDatas} datas={props.datas} />
          <SearchExportAmount setDatas={props.setDatas} datas={props.datas} />
          <SearchWeight setDatas={props.setDatas} datas={props.datas} />
          <SearchLOT setDatas={props.setDatas} datas={props.datas} />
          <SearchItemNo setDatas={props.setDatas} datas={props.datas} />
        </div>
        {/* 둘재줄 */}
        <div className="grid grid-cols-4 gap-4 text-center mt-5">
          <SearchWhenOrderDate setDatas={props.setDatas} datas={props.datas} />
          <SearchInstRegDate setDatas={props.setDatas} datas={props.datas} />
          <SearchWhenInstDeadline setDatas={props.setDatas} datas={props.datas} />
          <SearchWhenDoneDate setDatas={props.setDatas} datas={props.datas} />
        </div>
      </div>
      <div className="px-4 py-3 text-right">
        <button
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
          onClick={() => { props.search() }}
        >
          Search
        </button>
      </div>
    </div>
  )
}

export default SearchLogisticsExport