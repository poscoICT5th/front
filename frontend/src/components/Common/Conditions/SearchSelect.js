import React from 'react'
import Select from 'react-select';
function SearchSelect(props) {
    return (
        <div className={"col-span-" + props.grid}>
            <label htmlFor="dropdown" className="block text-sm font-medium text-gray-700">
                {props.name}
            </label>
            <div className="col-span-2">
                <Select
                    defaultValue={[props.selectData[0]]}
                    // isMulti
                    name="props.data"
                    options={props.selectData}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    maxMenuHeight={200}
                    onChange={(e) => { props.setDatas({ ...props.datas, [props.name]: e.value }); }}
                />
            </div>
        </div>
    )
}

export default SearchSelect
