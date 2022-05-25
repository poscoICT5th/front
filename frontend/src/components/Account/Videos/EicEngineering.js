import { Tooltip } from '@mui/material'
import React from 'react'

function EicEngineering() {
    return (
        <div className="wrapper">
            <Tooltip title="EIC Engineering">
                <input type="checkbox" className="maincirclevideo" />
            </Tooltip>
            <div className="video">
                <video src="/videos/EIC.mp4" loop muted autoPlay playsInline />
            </div>
            <div className="text">
                <span data-text="EIC Engineering" />
            </div>
        </div>
    )
}

export default EicEngineering