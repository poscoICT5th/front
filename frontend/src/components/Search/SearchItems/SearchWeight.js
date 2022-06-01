import React from 'react'

function SearchWeight(props) {
    return (
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
                    onChange={(e) => { props.setDatas({ ...props.datas, min_weight: e.target.value }); }}
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
                    onChange={(e) => { props.setDatas({ ...props.datas, max_weight: e.target.value }); }}
                />
            </div>
        </div>
    )
}

export default SearchWeight
