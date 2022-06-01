import React from 'react'

function SearchHeight(props) {
    return (
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
                    onChange={(e) => { props.setDatas({ ...props.datas, min_height: e.target.value }); }}
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
                    onChange={(e) => { props.setDatas({ ...props.datas, max_height: e.target.value }); }}
                />
            </div>
        </div>
    )
}

export default SearchHeight