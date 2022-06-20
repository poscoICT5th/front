import JsBarcode from 'jsbarcode'
import React, { useEffect, useState } from 'react'
function Barcode(props) {
  // let barcodeInfo = {
  //   "lotNumber": "34646546465653",
  //   "place": "포항 공장",
  //   "name": "STRIP_KS-SCP1S_83mm_1t",
  //   "cnt": 566,
  //   "process": "ST50",
  //   "PIC": "홍길동"
  // }
  const [barcodeInfo, setbarcodeInfo] = useState({});
  useEffect(() => {
    setbarcodeInfo(props.itemData)
  }, [])

  function createBarcodePrint(props) {
    const canvas = document.createElement('canvas')
    JsBarcode(canvas, barcodeInfo.lot_no, { height: 50, displayValue: false })
    let barcodeUrl = canvas.toDataURL('image/png')
    let windowObj = window.open(
      "",
      "바코드 출력",
      'width=1000, height=600, toolbars=yes, scrollbars=yes, status=no, resizable=yes',
      ""
    );
    let createBarcode = `
                        <style >
                          .barcodeResult {
                            border: 1px solid black;
                            border-collapse: collapse;
                          
                          }
                          .barcodeResult * {
                            border: 1px solid black;
                            padding : 5px;
                          }
                          #bodyDiv {
                              margin:0 auto;
                              width:600;
                          }
                        </style>
                        <div id="bodyDiv">
                          <table className="barcodeResult" >
                            <tr>
                              <td colSpan="1">${barcodeInfo.location}</td>
                              <td colSpan="5" className="barcodeImg">
                                <img src=${barcodeUrl} alt="바코드 생성 실패"/><br/>
                                ${barcodeInfo.lot_no}
                              </td>
                            </tr>
                            <tr>
                              <td colSpan="1">품명</td>
                              <td colSpan="5" className="name">${barcodeInfo.item_name}</td>
                            </tr>
                            <tr>
                              <td>수 / 중량</td>
                              <td>${barcodeInfo.weight}</td>
                              <td>공정</td>
                              <td>${barcodeInfo.status}</td>
                              <td>요청지시번호</td>
                              <td>${barcodeInfo.instruction_no}</td>
                            </tr>
                          </table>
                        </div>`
    windowObj.document.body.innerHTML = createBarcode

    // 주석 제거하면 프린트 팝업뜸
    setTimeout(() => {
      // windowObj.print();
      // windowObj.close();
    }, 1);
  }
  return (
    <div className="">
      <button type="button" onClick={createBarcodePrint}>
        ║█║▌║█║▌│║▌║▌█║
      </button>
    </div>
  )
}

export default Barcode