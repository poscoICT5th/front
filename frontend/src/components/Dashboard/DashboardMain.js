import { Box, Paper } from '@mui/material'
import React, { useEffect, useState } from 'react'
import DashboardInventoryList from './List/DashboardInventoryList'
import DashboardLogisticsList from './List/DashboardLogisticsList'
import DashboardWarehouseList from './List/DashboardWarehouseList'
import Select from 'react-select';
import GraphDonut1 from './Graph/GraphDonut1'
import GraphDonut2 from './Graph/GraphDonut2'
import GraphDonut3 from './Graph/GraphDonut3'
import GraphDonut4 from './Graph/GraphDonut4'
import GraphDonut5 from './Graph/GraphDonut5'

function DashboardMain() {
  const [componentsList, setComponentsList] = useState([])
  useEffect(() => {
    console.log(componentsList)
  }, [componentsList])
  const colourOptions = [
    { value: 'GraphDonut1', label: 'GraphDonut1', color: '#00B8D9', isFixed: true },
    { value: 'GraphDonut2', label: 'GraphDonut2', color: '#0052CC', isDisabled: true },
    { value: 'GraphDonut3', label: 'GraphDonut3', color: '#5243AA' },
    { value: 'GraphDonut4', label: 'GraphDonut4', color: '#FF5630', isFixed: true },
    { value: 'GraphDonut5', label: 'GraphDonut5', color: '#FF8B00' },
    { value: 'DashboardInventoryList', label: 'DashboardInventoryList', color: '#FF8B00' },
    { value: 'DashboardLogisticsList', label: 'DashboardLogisticsList', color: '#FF8B00' },
    { value: 'DashboardWarehouseList', label: 'DashboardWarehouseList', color: '#FF8B00' },
  ];
  return (
    <div className='main'>
      <div className="header h-16">header</div>
      <div className="content1">
        <div className="grid grid-cols-4 gap-4">
          {/* calender */}
          <div>
            <div class="flex justify-center">
              <div class="block rounded-lg shadow-lg bg-white max-w-sm text-center">
                <div class="py-3 px-6 border-b border-gray-300">
                  Featured
                </div>
                <div class="p-6">
                  <h5 class="text-gray-900 text-xl font-medium mb-2">Special title treatment</h5>
                  <p class="text-gray-700 text-base mb-4">
                    With supporting text below as a natural lead-in to additional content.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* calender */}
          <div>
            <div class="flex justify-center">
              <div class="block rounded-lg shadow-lg bg-white max-w-sm text-center">
                <div class="py-3 px-6 border-b border-gray-300">
                  Featured
                </div>
                <div class="p-6">
                  <h5 class="text-gray-900 text-xl font-medium mb-2">Special title treatment</h5>
                  <p class="text-gray-700 text-base mb-4">
                    With supporting text below as a natural lead-in to additional content.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* calender */}
          <div>
            <div class="flex justify-center">
              <div class="block rounded-lg shadow-lg bg-white max-w-sm text-center">
                <div class="py-3 px-6 border-b border-gray-300">
                  Featured
                </div>
                <div class="p-6">
                  <h5 class="text-gray-900 text-xl font-medium mb-2">Special title treatment</h5>
                  <p class="text-gray-700 text-base mb-4">
                    With supporting text below as a natural lead-in to additional content.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* calender */}
          <div>
            <div class="flex justify-center">
              <div class="block rounded-lg shadow-lg bg-white max-w-sm text-center">
                <div class="py-3 px-6 border-b border-gray-300">
                  Featured
                </div>
                <div class="p-6">
                  <h5 class="text-gray-900 text-xl font-medium mb-2">Special title treatment</h5>
                  <p class="text-gray-700 text-base mb-4">
                    With supporting text below as a natural lead-in to additional content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 검색창 */}
      <div className="mt-10">
        <p>Components</p>
        <Select
          defaultValue={[]}
          isMulti
          name="colors"
          options={colourOptions}
          className="basic-multi-select"
          classNamePrefix="select"
          onChange={(e) => { setComponentsList(e) }}
          placeholder="메인화면에 나타낼 컴포넌트를 선택해주세요"
          isClearable
        />
      </div>
      {/* tag */}
      <div className="content3 mt-5">
        <div className='grid grid-cols-3'>
          {
            componentsList.map((component) => {
              return <div className="h-96 my-5">
                {component.value === "GraphDonut1"
                  ? <GraphDonut1 />
                  : null}
                {component.value === "GraphDonut2"
                  ? <GraphDonut2 />
                  : null}
                {component.value === "GraphDonut3"
                  ? <GraphDonut3 />
                  : null}
                {component.value === "GraphDonut4"
                  ? <GraphDonut4 />
                  : null}
                {component.value === "GraphDonut5"
                  ? <GraphDonut5 />
                  : null}
                {component.value === "DashboardInventoryList"
                  ? <DashboardInventoryList />
                  : null}
                {component.value === "DashboardLogisticsList"
                  ? <DashboardLogisticsList />
                  : null}
                {component.value === "DashboardWarehouseList"
                  ? <DashboardWarehouseList />
                  : null}
              </div>
            })
          }
        </div>
      </div>
      <div className='content4'></div>
    </div>
  )
}

export default DashboardMain