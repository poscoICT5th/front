import React from 'react'
import { Select } from 'antd';
function SearchSelect(props) {
    const { Option } = Select;
    const options = [];
    for (let i = 0; i < props.selectData.length; i++) {
        options.push(<Option key={props.selectData[i]}>{props.selectData[i]}</Option>);
    }
    const handleChange = (value) => {
        props.setDatas({ ...props.datas, [props.name]: value });
    };
    return (
        <div className={"col-span-" + props.grid}>
            {/* <label htmlFor="dropdown" className="block text-sm font-medium text-gray-700">
                {props.name}
            </label> */}
            <div className="col-span-2">
                <Select
                    // mode="multiple"
                    allowClear
                    style={{
                        width: '100%',
                    }}
                    placeholder="Please select"
                    defaultValue={[]}
                    onChange={handleChange}
                >
                    {options}
                </Select>
            </div>
        </div>
    )
}

export default SearchSelect
