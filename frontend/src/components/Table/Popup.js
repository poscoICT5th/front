import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BarcodePrint from '../Functions/BarcodePrint'
import './Popup.css'
function Popup(props) {
    let navigate = useNavigate();
    return props.visiblePopup && (
        <ul
            className="popup"
            style={{
                left: `${props.popupXY.X - 90}px`,
                top: `${props.popupXY.Y - 90}px`
            }}>
            {
                props.title === "inventory"
                    ?
                    <li>
                        <div onClick={() => { navigate('/Tracking', { state: props.popupData[0] }) }}>역추적</div>
                    </li>
                    : <li>
                        <BarcodePrint
                            items={props.popupData}
                            clickBarcodePrint={props.clickBarcodePrint}
                            setClickBarcodePrint={props.setClickBarcodePrint}
                        />
                    </li>
            }
        </ul>
    )
}

export default Popup