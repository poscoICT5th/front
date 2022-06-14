import { Tooltip } from 'antd';
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Header() {
  let navigate = useNavigate();
  return (
    <div className="mx-auto w-24 mb-10 cursor-pointer" onClick={() => { navigate("/Dashboard") }}>
      {/* <img src="https://opgg-com-image.akamaized.net/attach/images/20200925082143.1409466.gif" alt="" /> */}
      <Tooltip title="Main" placement="right">
        <img src="../images/Logo.png" alt="" />
      </Tooltip>
    </div>
  )
}

export default Header