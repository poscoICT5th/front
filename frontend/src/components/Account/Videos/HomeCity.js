import { Tooltip } from '@mui/material'
import React from 'react'

function HomeCity() {
    return (
        <div className="wrapper">
            <Tooltip title="Home & City">
                <input type="checkbox" className="maincirclevideo" />
            </Tooltip>
            <div className="video">
                <video src="/videos/Homecity.mp4" loop muted autoPlay playsInline />
            </div>
            <div className="text">
                <span data-text="HomeCity" />
            </div>
        </div>
    )
}

export default HomeCity