import React from 'react'
import { Carousel } from 'antd';
import '../Pages/Dashboard.css'
import DashboardBannerBoxButtons from './DashboardBannerBoxButtons';
function DashboardBannerBox() {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };
    const contentStyle = {
        lineHeight: '170px',
        textAlign: 'center',
    };

    return (
        <div className='mt-14'>
            <Carousel afterChange={onChange}>
                <div>
                    <DashboardBannerBoxButtons />
                </div>
                <div>
                    <h3 style={contentStyle}>2</h3>
                </div>
            </Carousel>
        </div>
    )
}

export default DashboardBannerBox