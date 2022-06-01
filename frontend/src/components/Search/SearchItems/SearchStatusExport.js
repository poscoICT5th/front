import React from 'react'
import Select from 'react-select';
import { statusExport } from '../SelectOptions';

function SearchStatusExport(props) {
    return (
        <div>
            <label htmlFor="dropdown" className="block text-sm font-medium text-gray-700">
                작업상태
            </label>
            <Select
                defaultValue={[statusExport[0]]}
                // isMulti
                name="status"
                options={statusExport}
                className="basic-multi-select"
                classNamePrefix="select"
                maxMenuHeight={200}
                onChange={(e) => { props.setDatas({ ...props.datas, status: e.value }); }}
            /></div>
    )
}

export default SearchStatusExport