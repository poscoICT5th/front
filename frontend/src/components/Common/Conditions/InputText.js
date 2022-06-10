import { Input } from 'antd';
import React, { useEffect } from 'react'

function InputText(props) {
    useEffect(() => {
        
    }, [props])
    
    return (
        <div className="col-span-1">
            <Input
                addonBefore={props.type === "date" ? props.name : false}
                type={props.type}
                name={props.name}
                id={props.name}
                defaultValue={props.value}
                disabled={props.type === "date" ? false : true}
                autoComplete="address-level2"
                className="block w-full rounded-md text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
                onChange={(e) => { props.setDatas({ ...props.datas, [props.name]: e.target.value }); }}
                placeholder={props.name}
            />
        </div>
    )
}

export default InputText