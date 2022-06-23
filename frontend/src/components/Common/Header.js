import { Tooltip } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Header() {
  let navigate = useNavigate();
  return (
    <div className="mx-auto w-20 mb-10 cursor-pointer" onClick={() => { navigate("/Dashboard") }}>
      {/* <img src="https://opgg-com-image.akamaized.net/attach/images/20200925082143.1409466.gif" alt="" /> */}
      <Tooltip title="Main" placement="right">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
      </Tooltip>
    </div>
  )
}

export default Header