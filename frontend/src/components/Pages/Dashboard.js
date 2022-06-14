import Aos from 'aos';
import React, { useState } from 'react'
import { useEffect } from 'react';
import ChartBar1 from '../Map/ChartBar1'
import ChartBar2 from '../Map/ChartBar2'
import ChartLine from '../Map/ChartLine'
import ChartPie from '../Map/ChartPie';
import ChartGauge from '../Map/ChartGauge';
import ChartTreemap from '../Map/ChartTreemap'
import './Dashboard.css'
import { useSelector } from 'react-redux';
import axios from 'axios';
function Dashboard() {
  let inventoryURL = useSelector((state) => state.inventoryURL)
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const [tenSeconds, setTenSeconds] = useState(false)
  const [agingRankingList, setAgingRankingList] = useState([])
  const [amountRankingList, setAmountRankingList] = useState([])
  useEffect(() => {
    axios.defaults.baseURL = inventoryURL
    axios.get('/aging')
      .then((res => { setAgingRankingList(res.data) }))
    axios.get('/amount')
      .then((res => { setAmountRankingList(res.data) }))
    setTimeout(() => {
      setTenSeconds(!tenSeconds)
    }, 11000);
  }, [])

  const [rankingTime, setrankingTime] = useState({
    "1": false,
    "2": false,
    "3": false,
    "4": false,
    "5": false,
    "6": false,
    "7": false,
    "8": false,
    "9": false,
    "10": false,
  })
  return (
    <div className='grid grid-cols-10 gap-5 text-center'>
      <div className='col-span-8 grid grid-rows-2 gap-5'>
        <div className='grid grid-cols-5 gap-5'>
          <div className='rounded-lg grid gap-3 py-3 break-words'>
            <div className=''>오래된순위</div>
            {agingRankingList.map((agingItem, index) => {
              return <div className='bg-stone-300 rounded-lg mx-3 px-2 text-ellipsis overflow-hidden truncate'>{index + 1}. {agingItem.lot_no}</div>
            })}
          </div>
          <div className='col-span-3 rounded-lg'><ChartPie /></div>
          <div className='rounded-lg grid gap-3 py-3 break-words'>
            <div className=''>재고많은순위</div>
            {amountRankingList.map((amountItem) => {
              return <div className='bg-stone-300 rounded-lg mx-3 px-2 text-ellipsis overflow-hidden truncate '>({amountItem.sum}) {amountItem.item_name}</div>
            })}
          </div>
        </div>
        <div className='grid grid-cols-5 gap-5'>
          <div className="col-span-3 rounded-lg p-5"><ChartLine /></div>
          <div className="col-span-2 rounded-lg p-5"><ChartBar1 /></div>
        </div>
      </div>
      <div className='col-span-2 grid grid-rows-5 gap-2'>
        <div className='rounded-lg'></div>
        <div className='rounded-lg'></div>
        <div className='rounded-lg'></div>
        <div className='rounded-lg'></div>
        <div className='rounded-lg'></div>
      </div>
    </div>
  )
}

export default Dashboard