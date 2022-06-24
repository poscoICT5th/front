import React, { useEffect, useRef, useState } from 'react'
import Barcode from 'react-jsbarcode'
function BarcodePrint(props) {
    const printRef = useRef();
    function onClickPrint(params) {
        let printContent = printRef.current;
        let windowObj = window.open(
            '',
            'Print',
            'width=1350, height=800, toolbars=no, scrollbars=no, status=no, resizable=no'
        );
        windowObj.document.writeln(printContent.innerHTML);
        windowObj.document.close();
        windowObj.focus();
        windowObj.print();
        windowObj.close();
        props.setClickBarcodePrint(false)
    }

    useEffect(() => {
        if (props.items.length > 0 && props.clickBarcodePrint) {
            onClickPrint()
        }
    }, [props.clickBarcodePrint])

    return (
        <div>
            <button onClick={onClickPrint} type="button">║█║▌║█║▌│║▌║▌█║</button>
            <div ref={printRef} className="hidden">
                {
                    props.items.map((item) => {
                        return <Barcode value={item.lot_no} />
                    })
                }
            </div>
        </div>
    )
}

export default BarcodePrint