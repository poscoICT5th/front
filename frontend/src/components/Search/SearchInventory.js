import React from 'react'
import { location, warehouse_code, purpose, use,inventory_using,industry_family } from '../Common/Conditions/SelectOptions';
import SearchSelect from '../Common/Conditions/SearchSelect'
import InputText from '../Common/Conditions/InputText'

function SearchWarehouse(props) {
    const selectDatas = [
        { name: "사업장", selectOption: industry_family, grid: 1 },
        { name: "용도명", selectOption: purpose, grid: 1 },
        { name: "사용여부", selectOption: use, grid: 1 },
        { name: "재고실사", selectOption: inventory_using, grid: 1 },
        { name: "창고코드", selectOption: warehouse_code, grid: 1 },
      ]
    const inputDatas = [
        { name: "저장위치전체명", type: "text" },
        { name: "최대적치중량", type: "number" },
        { name: "최대적치매수", type: "number" },
    ]
    return (
        <div className="overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 bg-white sm:p-6 rounded-lg">
                {/* select */}
                <div className="grid grid-cols-5 gap-4 text-center mb-5">
                    {selectDatas.map((selectData) => {
                        return <SearchSelect setDatas={props.setDatas} datas={props.datas} name={selectData.name} selectData={selectData.selectOption} grid={selectData.grid} />
                    })}
                </div>
                {/* inputRange / inputText */}
                <div className="grid grid-cols-3 gap-4 text-center">
                    {inputDatas.map((inputData) => {
                        return <InputText setDatas={props.setDatas} datas={props.datas} name={inputData.name} type={inputData.type} />
                    })}
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

export default SearchWarehouse