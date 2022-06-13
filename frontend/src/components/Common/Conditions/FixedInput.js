import { Input } from 'antd';
import React from 'react'

function FixedInput(props) {
    return (
        <div className="col-span-1 text-center">
            <label className="block text-sm font-medium text-gray-700">
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