import { Box, Paper } from '@mui/material'
import React from 'react'
import DashboardInventoryList from './DashboardInventoryList'
import DashboardLogisticsList from './DashboardLogisticsList'
import DashboardWarehouseList from './DashboardWarehouseList'

function DashboardMain() {
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
      <div className="content2">

      </div>
      <div className="content3">content3</div>
    </div>
  )
}

export default DashboardMain