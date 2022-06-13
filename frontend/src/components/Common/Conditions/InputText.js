import { DatePicker, Input } from 'antd';
import React, { useEffect } from 'react'

function InputText(props) {
    useEffect(() => {

    }, [props])
    const onChange = (date, dateString) => {
        console.log(date, dateString);
    };
    return (
        <div className="col-span-1">
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
                                && props.name ==="width"
                                ? true
                                : false}
                        autoComplete="address-level2"
                        className="block w-full rounded-md text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
                        onChange={(e) => { props.setDatas({ ...props.datas, [props.name]: e.target.value }); }}
                        placeholder={props.name}
                    />
                    :
                    <DatePicker
                        type={props.type}
                        name={props.name}
                        id={props.name}
                        autoComplete="address-level2"
                        className="block w-full rounded-md text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
                        onChange={(date, dateString) => { props.setDatas({ ...props.datas, [props.name]: dateString }); }}
                        placeholder={props.name}
                        placement='topLeft'
                    />
            }
        </div>
    )
}

export default InputText