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
    JsBarcode(canvas, barcodeInfo.lotNumber + barcodeInfo.name, { height: 50, displayValue: false })
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
                          <table class="barcodeResult" >
                            <tr>
                              <td colSpan="1">${barcodeInfo.place}</td>
                              <td colSpan="5" class="barcodeImg">
                                <img src=${barcodeUrl} alt="바코드 생성 실패"/><br/>
                                ${barcodeInfo.lotNumber}
                              </td>
                            </tr>
                            <tr>
                              <td colSpan="1">품명</td>
                              <td colSpan="5" class="name">${barcodeInfo.name}</td>
                            </tr>
                            <tr>
                              <td>수 / 중량</td>
                              <td>${barcodeInfo.cnt}</td>
                              <td>공정</td>
                              <td>${barcodeInfo.process}</td>
                              <td>작업자</td>
                              <td>${barcodeInfo.PIC}</td>
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
      <button type="button" onClick={createBarcodePrint}>바코드출력</button>
    </div>
  )
}

export default Barcode