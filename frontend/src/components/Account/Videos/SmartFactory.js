import { Tooltip } from '@mui/material'
import React from 'react'
import './Video.css'
function SmartFactory() {
    return (
        <div className="wrapper">
            <Tooltip title="Smart Factory">
                <input type="checkbox" className="maincirclevideo" />
            </Tooltip>
            <div className="video">
                <video src="/videos/SmartFactory.mp4" loop muted autoPlay playsInline />
            </div>
            <div className="text">
                <span data-text="Smart Factory" />
            </div>
        </div>
    )
}

export default SmartFactory