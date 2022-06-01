import React from 'react'
import Select from 'react-select';
import { target } from '../SelectOptions';

function SearchTarget(props) {
    return (
        <div>
            <label htmlFor="dropdown" className="block text-sm font-medium text-gray-700">
                거래처
            </label>
            <Select
                defaultValue={[target[0]]}
                // isMulti
                name="target"
                options={target}
                className="basic-multi-select"
                classNamePrefix="select"
                maxMenuHeight={200}
                onChange={(e) => { props.setDatas({ ...props.datas, target: e.value }); console.log(props.datas) }}
            />
        </div>
    )
}

export default SearchTarget