import React from 'react'
import Select from 'react-select';
import { product_family } from '../SelectOptions';

function SearchProductFamily(props) {
    return (
        <div>
            <label htmlFor="dropdown" className="block text-sm font-medium text-gray-700">
                제품군
            </label>
            <Select
                defaultValue={[product_family[0]]}
                // isMulti
                name="product_family"
                options={product_family}
                className="basic-multi-select"
                classNamePrefix="select"
                maxMenuHeight={200}
                onChange={(e) => { props.setDatas({ ...props.datas, product_family: e.value }); console.log(props.datas) }}
            />
        </div>
    )
}

export default SearchProductFamily