import React from 'react'

function SearchLOT(props) {
    return (
        <div className="col-span-1">
            <div className='grid grid-cols-3'>
                <div>LOT</div>
                <div className='col-span-2'><input
                    type="text"
                    name="LOT"
                    id="LOT"
                    autoComplete="address-level2"
                    className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    onChange={(e) => { props.setDatas({ ...props.datas, lot_no: e.target.value }); }}
                /></div>
            </div>
        </div>
    )
}

export default SearchLOT