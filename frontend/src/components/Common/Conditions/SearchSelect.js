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
    let store_language = useSelector((state) => state.language.payload)
    const [language, setLanguage] = useState("")
    const [label, setLabel] = useState(props.ko)
    useEffect(() => {
        setLanguage(store_language)
        if (store_language === "ko") {
            setLabel(props.ko)
        } else if (store_language === "en") {
            setLabel(props.name)
        } else if (store_language === "cn") {
            setLabel(props.cn)
        } else if (store_language === "jp") {
            setLabel(props.jp)
        } else if (store_language === "vn") {
            setLabel(props.vn)
        }
    }, [store_language])

    useEffect(() => {
        setLanguage(localStorage.getItem("language"))
        if (localStorage.getItem("language") === "ko") {
            setLabel(props.ko)
        } else if (localStorage.getItem("language") === "en") {
            setLabel(props.name)
        } else if (localStorage.getItem("language") === "cn") {
            setLabel(props.cn)
        } else if (localStorage.getItem("language") === "jp") {
            setLabel(props.jp)
        } else if (localStorage.getItem("language") === "vn") {
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
