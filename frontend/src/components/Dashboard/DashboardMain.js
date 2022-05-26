import React from 'react'
import DashboardInventoryList from './DashboardInventoryList'
import DashboardLogisticsList from './DashboardLogisticsList'
import DashboardWarehouseList from './DashboardWarehouseList'

function DashboardMain() {
  return (
    <div>
      <div className='grid grid-cols-2 gap-5'>
        <div><DashboardInventoryList /></div>
        <div><DashboardLogisticsList /></div>
        <div><DashboardWarehouseList /></div>
        <div><DashboardInventoryList /></div>
      </div>

    </div>
  )
}

export default DashboardMain