import React from 'react'
import Select from 'react-select';
import { unit } from '../SelectOptions';

function SearchUnit(props) {
    return (
        <div>
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
    )
}

export default SearchUnit