import { Input } from 'antd';
import React from 'react'

function InputText(props) {
    return (
        <div className="col-span-1">
            <Input
                type={props.type}
                name={props.name}
                id={props.name}
                autoComplete="address-level2"
                className="block w-full rounded-md py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
                onChange={(e) => { props.setDatas({ ...props.datas, [props.name]: e.target.value }); }}
                placeholder={props.name}
            />
        </div>
    )
}

export default InputText