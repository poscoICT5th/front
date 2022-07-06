import React from 'react'
import { Carousel } from 'antd';
import '../Pages/Dashboard.css'
import DashboardBannerBoxButtons1 from './DashboardBannerBoxButtons1';
import DashboardBannerBoxButtons2 from './DashboardBannerBoxButtons2';
function DashboardBannerBox() {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };

    return (
        <div className='mt-14'>
            <Carousel afterChange={onChange}>
                <div className='mb-8'>
                    <DashboardBannerBoxButtons1 />
                </div>
                <div className='mb-8'>
                    <DashboardBannerBoxButtons2 />
                </div>
            </Carousel>
        </div>
    )
}

export default DashboardBannerBox