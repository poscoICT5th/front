import React, { useState } from 'react'

function MapList(props) {
    return (
        <div>
            {/* table */}
            <div className="flex flex-col mx-1 mt-2 text-center">
                <div className="-my-2 overflow-x-auto">
                    <div className="py-2 align-middle inline-block min-w-full">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            status
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            location
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            instruction_no
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            product_family
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            lot_no
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            item_no
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            item_name
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            amount
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            weight
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            target
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            width
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            thickness
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            height
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            order_amount
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            im_amount
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            status
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            to_warehouse
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            order_date
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            inst_reg_date
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            inst_deadline
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            done_date
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {
                                        props.dataList.map((warehouse) => {
                                            return <tr>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">{warehouse.location}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">{warehouse.warehouse_code}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">{warehouse.purpose}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">{warehouse.warehouse_code_desc}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">{warehouse.use}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">{warehouse.maximum_weight}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">{warehouse.maxinum_count}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">{warehouse.inventory_using}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">{warehouse.remarks}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">Button</div>
                                                </td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MapList