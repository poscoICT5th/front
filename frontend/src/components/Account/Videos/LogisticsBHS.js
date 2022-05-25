import { Tooltip } from '@mui/material'
import React from 'react'

function LogisticssBHS() {
    return (
        <div className="wrapper">
            <Tooltip title="Logisticss & BHS">
                <input type="checkbox" className="maincirclevideo" />
            </Tooltip>
            <div className="video">
                <video src="/videos/BHS.mp4" loop muted autoPlay playsInline />
            </div>
            <div className="text">
                <span data-text="Logisticss & BHS" />
            </div>
        </div>
    )
}

export default LogisticssBHS