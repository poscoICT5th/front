import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import axios from "axios"
function RightContent() {
   useEffect(() => {
     axios.get()
   }, [])
   
    return (
        <div className="col-span-1">
            <div className="grid grid-cols-1 gap-4">
                <div className='bg-cyan-100 rounded-lg h-20'>
                    <div className="grid grid-cols-2 h-full">
                        <div className='my-auto mx-auto'>처리한것</div>
                        <div className="my-auto mx-auto">10</div>
                    </div>
                </div>
                <div className='bg-cyan-100 rounded-lg h-20'>
                    <div className="grid grid-cols-2 h-full">
                        <div className='my-auto mx-auto'>처리한것</div>
                        <div className="my-auto mx-auto">10</div>
                    </div>
                </div>
                <div className='bg-cyan-100 rounded-lg h-20'>
                    <div className="grid grid-cols-2 h-full">
                        <div className='my-auto mx-auto'>처리한것</div>
                        <div className="my-auto mx-auto">10</div>
                    </div>
                </div>
                <div className='bg-cyan-100 rounded-lg h-20'>
                    <div className="grid grid-cols-2 h-full">
                        <div className='my-auto mx-auto'>처리한것</div>
                        <div className="my-auto mx-auto">10</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightContent