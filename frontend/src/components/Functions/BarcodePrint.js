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
        if (props.items.length > 0 && props.clickBarcodePrint === true) {
            onClickPrint()
        }
    }, [props.clickBarcodePrint])

    return (
        <div>
            <button onClick={onClickPrint} type="button">║█║▌║█║▌│║▌║▌█║</button>
            <div ref={printRef} className="hidden">
                {
                    props.items.map((item) => {
                        return <div className="grid grid-rows-4 border-stone-700 bg-black">
                            <div className="row-span-2">
                                <Barcode value={item.lot_no} />
                            </div>
                            <div className=''>
                                <div>LOT : {item.lot_no}  지시번호 : {item.instruction_no}</div>
                            </div>
                            <div className=''>
                                <div>물품명 : {item.item_name}  공정상태 : {item.status}</div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default BarcodePrint