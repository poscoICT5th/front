import React from 'react'

function SearchExportAmount(props) {
    return (
        <div className="col-span-1 grid grid-cols-4 text-center">
            <div className=''>출고수량</div>
            <div>
                <input
                    type="number"
                    min={0}
                    name="min_ex_amount"
                    id="min_ex_amount"
                    autoComplete="address-level2"
                    className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    onChange={(e) => { props.setDatas({ ...props.datas, min_ex_amount: e.target.value }); }}
                /></div>
            <div className='text-xs'>-</div>
            <div>
                <input
                    type="number"
                    min={0}
                    name="max_ex_amount"
                    id="max_ex_amount"
                    autoComplete="address-level2"
                    className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    onChange={(e) => { props.setDatas({ ...props.datas, max_ex_amount: e.target.value }); }}
                />
            </div>
        </div>
    )
}

export default SearchExportAmount