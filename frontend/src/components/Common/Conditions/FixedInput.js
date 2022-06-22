import { Input } from 'antd';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

function FixedInput(props) {
    let store_language = useSelector((state) => state.language)
    const [language, setLanguage] = useState("")
    const [label, setLabel] = useState(props.ko)
    useEffect(() => {
        setLanguage(store_language)
        if (store_language === "ko") {
            setLabel(props.data.ko)
        } else if (store_language === "en") {
            setLabel(props.data.name)
        } else if (store_language === "cn") {
            setLabel(props.data.cn)
        } else if (store_language === "jp") {
            setLabel(props.data.jp)
        } else if (store_language === "vn") {
            setLabel(props.data.vn)
        }
    }, [store_language])

    useEffect(() => {
        setLanguage(sessionStorage.getItem("language"))
        if (sessionStorage.getItem("language") === "ko") {
            setLabel(props.data.ko)
        } else if (sessionStorage.getItem("language") === "en") {
            setLabel(props.data.name)
        } else if (sessionStorage.getItem("language") === "cn") {
            setLabel(props.data.cn)
        } else if (sessionStorage.getItem("language") === "jp") {
            setLabel(props.data.jp)
        } else if (sessionStorage.getItem("language") === "vn") {
            setLabel(props.data.vn)
        }
    }, [])
    return (
        <div className="col-span-1 text-center">
            <label className="block text-sm font-medium">
                {label}
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