import React, { useEffect, useState } from "react";

function TableInventory(props) {
  return (
    <div className="overflow-x-auto max-h-96">
      <table className="text-sm divide-y divide-gray-200">
        <thead className="bg-sky-50 sticky top-0">
          <tr>
            <th className="left-0 p-4 text-left rounded-l-lg">
              <label className="sr-only" for="row_all"></label>
              <input
                className="w-5 h-5 border-gray-200 rounded hidden"
                type="checkbox"
                id="row_all"
              />
            </th>
            {props.th.map((key) => {
              return (
                <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                  <div className="flex items-center">
                    {key}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 ml-1.5 text-gray-700"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {props.inventoryList.map((InventoryData) => {
            return <tr>
              <td className="sticky left-0 p-4 bg-white">
                <button
                  className="p-4 font-medium whitespace-nowrap bg-red-50 hover:bg-red-300 rounded-lg"
                  id="row_3"
                  onClick={(e) => {  props.deleteInventory(InventoryData.warehouse_code); props.setClick(!props.click)}}
                >삭제</button>
              </td>
              {Object.values(InventoryData).map((value) => {
                return <td className="p-4 font-medium whitespace-nowrap">{value}</td>
              })}
            </tr>
          })}
        </tbody>
      </table>
    </div>
  );
}
export default TableInventory;
