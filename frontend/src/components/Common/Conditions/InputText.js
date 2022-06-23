import { DatePicker, Input } from 'antd';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function InputText(props) {
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



    function onChangeDate(dateString) {
        if (props.purpose === "search" && dateString === "") {
            console.log("값비었음")
            props.setDatas({ ...props.datas, [props.name]: "전체보기" });
        } else {
            props.setDatas({ ...props.datas, [props.name]: dateString });
        }
    };

    function onChangeInput(value) {
        if (props.purpose === "search" && value.target.value === "" && props.type === "text") {
            props.setDatas({ ...props.datas, [props.name]: "전체보기" });
        } else if (props.purpose === "search" && value.target.value === "" && props.type === "number") {
            if (props.name.includes('min')) {
                props.setDatas({ ...props.datas, [props.name]: 0 });
            } else {
                props.setDatas({ ...props.datas, [props.name]: 10000000 });
            }
        } else {
            props.setDatas({ ...props.datas, [props.name]: value.target.value });
        }
    }
    return (
        <div className="col-span-1">
            <label className="block text-sm font-medium">
                {label}
                
            </label>
            {
                props.type !== "date"
                    ? <Input
                        type={props.type}
                        name={props.name}
                        id={props.name}
                        min={0}
                        disabled={
                            props.purpose === "create"
                                && props.type !== "date"
                                // && props.name === "width"
                                && [].includes(props.name)
                                ? true
                                : false}
                        autoComplete="address-level2"
                        className="block w-full rounded-md text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
                        onChange={(e) => { onChangeInput(e) }}
                        placeholder={label}
                        // validationErrors={{
                        //     isDefaultRequiredValue: 'Field is required'
                        // }}
                        required={true}
                        allowClear
                    />
                    :
                    <DatePicker
                        type={props.type}
                        name={props.name}
                        id={props.name}
                        autoComplete="address-level2"
                        className="block w-full rounded-md text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
                        onChange={(date, dateString) => { onChangeDate(dateString) }}
                        placeholder={label}
                        placement='topLeft'
                        allowClear
                    />
            }
        </div>
    )
}

export default InputText