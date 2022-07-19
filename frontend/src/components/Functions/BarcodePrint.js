import React, { useEffect, useRef, useState } from 'react'
import Barcode from 'react-jsbarcode'
function BarcodePrint(props) {
    const printRef = useRef();
    function onClickPrint(params) {
        props.setClickBarcodePrint(false)
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
                        return <><table className="" key={item.lot_no} style={{ border: "1px solid black", height: "360", width: "600px", textAlign: "center" }}>
                            <tr>
                                <th style={{ border: "1px solid black", width: "150px" }}>LOT</th>
                                <td style={{ border: "1px solid black", width: "400px" }}>{item.lot_no}</td>
                            </tr>
                            <tr>
                                <th style={{ border: "1px solid black", width: "150px" }}>지시번호</th>
                                <td style={{ border: "1px solid black", width: "400px" }}>{item.instruction_no}</td>
                            </tr>
                            <tr rowspan="2">
                                <th style={{ border: "1px solid black", width: "150px" }}>바코드</th>
                                <td style={{ border: "1px solid black", width: "400px" }}> <Barcode value={item.lot_no} /></td>
                            </tr>
                            <tr colspan="2">
                                <th style={{ border: "1px solid black", width: "150px" }}>물품명</th>
                                <td style={{ border: "1px solid black", width: "400px" }}>{item.item_name}</td>
                            </tr>
                            <tr colspan="2">
                                <th style={{ border: "1px solid black", width: "150px" }}>공정상태</th>
                                <td style={{ border: "1px solid black", width: "400px" }}>{item.status}</td>
                            </tr>
                        </table><br></br></>
                    })
                }
            </div>
        </div>
    )
}

export default BarcodePrint