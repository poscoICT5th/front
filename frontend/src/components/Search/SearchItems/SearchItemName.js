import React from 'react'
import Select from 'react-select';
import { item_name } from '../SelectOptions';

function SearchItemName(props) {
    return (
        <div>
            <label htmlFor="dropdown" className="block text-sm font-medium text-gray-700">
                제품명
            </label>
            <Select
                defaultValue={[item_name[0]]}
                // isMulti
                name="item_name"
                options={item_name}
                className="basic-multi-select"
                classNamePrefix="select"
                maxMenuHeight={200}
                onChange={(e) => { props.setDatas({ ...props.datas, item_name: e.value }); }}
            />
        </div>
    )
}

export default SearchItemName