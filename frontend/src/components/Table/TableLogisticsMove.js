import React from 'react'

function TableLogisticsMove(props) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-lg text-sm divide-y divide-gray-200">
        <thead className='bg-sky-50'>
          <tr>
            <th className="sticky left-0 p-4 text-left rounded-l-lg">
              <label className="sr-only" for="row_all"></label>
              <input
                className="w-5 h-5 border-gray-200 rounded hidden"
                type="checkbox"
                id="row_all"
              />
            </th>
            {
              props.th.map((key) => {
                return <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
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
              })
            }
          </tr>
        </thead>
        {/* tbody */}
        <tbody className="divide-y divide-gray-100">
          {props.logisticsMoveList.map((MoveData) => {
            return <tr>
              <td className="sticky left-0 p-4 bg-white">
                <label className="sr-only" for="row_3"></label>
                <input
                  className="w-5 h-5 border-gray-200 rounded"
                  type="checkbox"
                  id="row_3"
                  onClick={() => { }}
                />
              </td>
              {Object.values(MoveData).map((value) => {
                return <td className="p-4 font-medium whitespace-nowrap">{value}</td>
              })}

            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}

export default TableLogisticsMove