import React from 'react'
import BarcodePrint from '../Functions/BarcodePrint'
import './Popup.css'
function Popup(props) {
    return props.visiblePopup && (
        <ul
            className="popup"
            style={{
                left: `${props.popupXY.X - 50}px`,
                top: `${props.popupXY.Y - 70}px`
            }}>
            <li>{props.popupXY.X}, {props.popupXY.Y}</li>
            <li>
                <BarcodePrint
                    items={props.popupData}
                    clickBarcodePrint={props.clickBarcodePrint}
                    setClickBarcodePrint={props.setClickBarcodePrint}
                />
            </li>
        </ul>
    )
}

export default Popup