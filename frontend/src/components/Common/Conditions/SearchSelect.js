import React, { useEffect, useState } from 'react'
import { Select } from 'antd';
import { useSelector } from 'react-redux'

function SearchSelect(props) {
    const { Option } = Select;
    const options = [];
    for (let i = 0; i < props.selectData.length; i++) {
        options.push(<Option key={props.selectData[i]}>{props.selectData[i]}</Option>);
    }
    const handleChange = (value) => {
        props.setDatas({ ...props.datas, [props.name]: value });
    };
    // label 언어설정
    let store_language = useSelector((state) => state.language)
    const [label, setLabel] = useState(props.ko)
    useEffect(() => {
        if (sessionStorage.getItem("language") === "ko") {
            setLabel(props.ko)
        } else if (sessionStorage.getItem("language") === "en") {
            setLabel(props.name)
        } else if (sessionStorage.getItem("language") === "cn") {
            setLabel(props.cn)
        } else if (sessionStorage.getItem("language") === "jp") {
            setLabel(props.jp)
        } else if (sessionStorage.getItem("language") === "vn") {
            setLabel(props.vn)
        }
    }, [store_language])

    useEffect(() => {
        if (sessionStorage.getItem("language") === "ko") {
            setLabel(props.ko)
        } else if (sessionStorage.getItem("language") === "en") {
            setLabel(props.name)
        } else if (sessionStorage.getItem("language") === "cn") {
            setLabel(props.cn)
        } else if (sessionStorage.getItem("language") === "jp") {
            setLabel(props.jp)
        } else if (sessionStorage.getItem("language") === "vn") {
            setLabel(props.vn)
        }
    }, [])
    return (
        <div className={"col-span-" + props.grid}>
            <label className="block text-sm font-medium">
                {label}
            </label>

            <div className="col-span-2">
                <Select
                    // mode="multiple"
                    showSearch
                    allowClear
                    style={{
                        width: '100%',
                    }}

                    placeholder={label}
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
