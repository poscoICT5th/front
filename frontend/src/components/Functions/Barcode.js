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
    JsBarcode(canvas, barcodeInfo.instruction_no + barcodeInfo.item_name, { height: 50, displayValue: false })
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
                              <td colSpan="1">${barcodeInfo.place}</td>
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
    <div>
      <button type="button" onClick={createBarcodePrint}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
        </svg>
      </button>
    </div>
  )
}

export default Barcode