import React, { useState } from 'react'
import TrackingModal from '../Detail/TrackingModal'
import BarcodePrint from '../Functions/BarcodePrint'
import './Popup.css'
function Popup(props) {
    const [openTracking, setOpenTracking] = useState(false)

    return props.visiblePopup && (
        <ul
            className="popup"
            style={{
                left: `${props.popupXY.X - 50}px`,
                top: `${props.popupXY.Y - 90}px`
            }}>
            {/* <li>{props.popupXY.X}, {props.popupXY.Y}</li> */}
            {
                props.title === "inventory"
                    ?
                    <li>
                        <TrackingModal
                            openTracking={openTracking}
                            setOpenTracking={setOpenTracking}

                        />
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