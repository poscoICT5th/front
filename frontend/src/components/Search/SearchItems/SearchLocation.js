import React from 'react'
import Select from 'react-select';
import { location } from '../SelectOptions';

function SearchLocation(props) {
    return (
        <div>
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
            /></div>
    )
}

export default SearchLocation