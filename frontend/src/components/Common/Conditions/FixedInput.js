import { Input } from 'antd';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

function FixedInput(props) {
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
        <div className="col-span-1 text-center">
            <label className="block text-sm font-medium">
                {props.label}
            </label>
            <Input
                min={0}
                disabled={true}
                value={props.value}
                autoComplete="address-level2"
                className="block w-full rounded-md text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
            />
        </div>
    )
}

export default FixedInput