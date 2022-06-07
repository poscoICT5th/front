import { Box, Paper } from '@mui/material'
import React, { useEffect, useState } from 'react'
import DashboardInventoryList from './List/DashboardInventoryList'
import DashboardLogisticsList from './List/DashboardLogisticsList'
import DashboardWarehouseList from './List/DashboardWarehouseList'
import Select from 'react-select';
import GraphPie from './Graph/GraphPie'
import GraphDonut from './Graph/GraphDonut'

function DashboardCustom() {
  const [componentsList, setComponentsList] = useState([])
  useEffect(() => {
    console.log(componentsList)
  }, [componentsList])
  const colourOptions = [
    { value: 'GraphPie', label: 'GraphPie', color: '#00B8D9', isFixed: true },
    { value: 'GraphDonut2', label: 'GraphDonut2', color: '#0052CC', isDisabled: true },
    { value: 'GraphDonut3', label: 'GraphDonut3', color: '#5243AA' },
    { value: 'GraphDonut', label: 'GraphDonut', color: '#FF5630', isFixed: true },
    { value: 'GraphDonut5', label: 'GraphDonut5', color: '#FF8B00' },
    { value: 'DashboardInventoryList', label: 'DashboardInventoryList', color: '#FF8B00' },
    { value: 'DashboardLogisticsList', label: 'DashboardLogisticsList', color: '#FF8B00' },
    { value: 'DashboardWarehouseList', label: 'DashboardWarehouseList', color: '#FF8B00' },
  ];
  return (
    <div className='main'>
      <div className="content1">
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
                {component.value === "GraphPie"
                  ? <GraphPie />
                  : null}
                {component.value === "GraphDonut"
                  ? <GraphDonut />
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

export default DashboardCustom