import { Input } from 'antd';
import React from 'react'

function InputRange(props) {
    return (
        <div className="col-span-1 grid grid-cols-2 gap-4 text-center">
            <div>
                <Input
                    type="number"
                    min={0}
                    name={props.min}
                    id={props.min}
                    autoComplete="address-level2"
                    className="block w-full rounded-md py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
                    onChange={(e) => { props.setDatas({ ...props.datas, [props.min]: e.target.value }); }}
                    placeholder={props.min}
                />
            </div>
            <div>
                <Input
                    type="number"
                    min={0}
                    name={props.max}
                    id={props.max}
                    autoComplete="address-level2"
                    className="block w-full rounded-md py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
                    onChange={(e) => { props.setDatas({ ...props.datas, [props.max]: e.target.value }); }}
                    placeholder={props.max}
                />
            </div>
        </div>
    )
}

export default InputRange