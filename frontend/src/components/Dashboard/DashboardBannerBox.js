import React from 'react'
import { Carousel } from 'antd';
import '../Pages/Dashboard.css'
import DashboardBannerBoxButtons from './DashboardBannerBoxButtons';
import DashboardBannerBoxPosco from './DashboardBannerBoxPosco';
function DashboardBannerBox() {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };

    return (
        <div className='mt-14'>
            <Carousel afterChange={onChange}>
                <div className='mb-8'>
                    <DashboardBannerBoxButtons />
                </div>
                <div className='mb-8'>
                    <DashboardBannerBoxPosco />
                </div>
            </Carousel>
        </div>
    )
}

export default DashboardBannerBox