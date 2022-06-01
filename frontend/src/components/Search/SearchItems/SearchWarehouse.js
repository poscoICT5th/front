import React from 'react'
import Select from 'react-select';
import { warehouse_code } from '../SelectOptions';

function SearchWarehouse(props) {
    return (
        <div>
            <label htmlFor="dropdown" className="block text-sm font-medium text-gray-700">
                창고코드
            </label>
            <Select
                defaultValue={[warehouse_code[0]]}
                // isMulti
                name="warehouse_code"
                options={warehouse_code}
                className="basic-multi-select"
                classNamePrefix="select"
                maxMenuHeight={200}
                onChange={(e) => { props.setDatas({ ...props.datas, warehouse_code: e.value }); }}
            />
        </div>
    )
}

export default SearchWarehouse