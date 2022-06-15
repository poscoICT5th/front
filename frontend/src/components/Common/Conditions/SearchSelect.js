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
            <label className="block text-sm font-medium">
                {props.name}
            </label>
            <div className="col-span-2">
                <Select
                    // mode="multiple"
                    showSearch
                    allowClear
                    style={{
                        width: '100%',
                    }}

                    placeholder={props.name}
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
