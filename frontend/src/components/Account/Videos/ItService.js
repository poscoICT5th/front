import { Tooltip } from '@mui/material'
import React from 'react'

function ItService() {
    return (
        <div className="wrapper">
            <Tooltip title="IT Service">
                <input type="checkbox" className="maincirclevideo" />
            </Tooltip>
            <div className="video">
                <video src="/videos/IT.mp4" loop muted autoPlay playsInline />
            </div>
            <div className="text">
                <span data-text="It Service" />
            </div>
        </div>
    )
}

export default ItService