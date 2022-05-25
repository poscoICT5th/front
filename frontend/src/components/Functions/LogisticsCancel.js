import React from 'react'

function LogisticsCancel(props) {
  function cancel(params) {
    // axios
    alert('요청을 철회합니다' + props.itemData.lotNumber)
  }
  return (
    <div onClick={() => { cancel() }} className="cursor-pointer">요청 철회</div>
  )
}

export default LogisticsCancel