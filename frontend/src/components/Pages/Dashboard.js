import Aos from 'aos';
import React, { useState } from 'react'
import { useEffect } from 'react';
import ChartBar1 from '../Map/ChartBar1'
import ChartBar2 from '../Map/ChartBar2'
import ChartLine from '../Map/ChartLine'
import ChartPie from '../Map/ChartPie';
import ChartGauge from '../Map/ChartGauge';
import ChartTreemap from '../Map/ChartTreemap'
function Dashboard() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
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
    <div className='grid grid-cols-10 gap-5'>
      <div className='col-span-8 grid grid-rows-2 gap-5'>
        <div className='grid grid-cols-5 gap-5'>
          <div className='bg-stone-100 rounded-lg grid grid-rows-11 text-left gap-3'>
            <div className='text-center'>오래된순위</div>
            <div className='bg-stone-300 rounded-lg mx-3 transform transition hover:rotate-180 duration-300'>1</div>
            <div className='bg-stone-300 rounded-lg mx-3'>1</div>
            <div className='bg-stone-300 rounded-lg mx-3'>1</div>
            <div className='bg-stone-300 rounded-lg mx-3'>1</div>
            <div className='bg-stone-300 rounded-lg mx-3'>1</div>
            <div className='bg-stone-300 rounded-lg mx-3'>1</div>
            <div className='bg-stone-300 rounded-lg mx-3'>1</div>
            <div className='bg-stone-300 rounded-lg mx-3'>1</div>
            <div className='bg-stone-300 rounded-lg mx-3'>1</div>
            <div className='bg-stone-300 rounded-lg mx-3'>1</div>
          </div>
          <div className='col-span-3 bg-stone-100 rounded-lg'><ChartPie /></div>
          <div className='bg-stone-100 rounded-lg grid grid-rows-11 text-left gap-3'>
            <div className='text-center'>재고많은순</div>
            <div className='bg-stone-300 rounded-lg mx-3'>1</div>
            <div className='bg-stone-300 rounded-lg mx-3'>1</div>
            <div className='bg-stone-300 rounded-lg mx-3'>1</div>
            <div className='bg-stone-300 rounded-lg mx-3'>1</div>
            <div className='bg-stone-300 rounded-lg mx-3'>1</div>
            <div className='bg-stone-300 rounded-lg mx-3'>1</div>
            <div className='bg-stone-300 rounded-lg mx-3'>1</div>
            <div className='bg-stone-300 rounded-lg mx-3'>1</div>
            <div className='bg-stone-300 rounded-lg mx-3'>1</div>
            <div className='bg-stone-300 rounded-lg mx-3'>1</div>
          </div>
        </div>
        <div className='grid grid-cols-5 gap-5'>
          <div className="col-span-3 bg-stone-100 rounded-lg p-5"><ChartBar2 /></div>
          <div className="col-span-2 bg-stone-100 rounded-lg p-5"><ChartBar1 /></div>
        </div>
      </div>
      <div className='col-span-2 grid grid-rows-5 gap-2'>
        <div className='bg-stone-100 rounded-lg'></div>
        <div className='bg-stone-100 rounded-lg'></div>
        <div className='bg-stone-100 rounded-lg'></div>
        <div className='bg-stone-100 rounded-lg'></div>
        <div className='bg-stone-100 rounded-lg'></div>
      </div>
    </div>
  )
}

export default Dashboard