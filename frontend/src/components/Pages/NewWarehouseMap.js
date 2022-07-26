/*global kakao*/
import React, { useEffect, useState } from 'react'
import { location } from '../Common/Conditions/SelectOptionsCreate';
import SearchSelect from '../Common/Conditions/SearchSelect'
import axios from 'axios';
import { useSelector } from 'react-redux';

const NewWarehouseMap = () => {
  let WarehouseUrl = useSelector((state) => state.warehouseURL)
  let InventoryURL = useSelector((state) => state.inventoryURL)
  const [x, setX] = useState(37.36542481451541)
  const [y, setY] = useState(127.10676860117488)
  const [size, setSize] = useState({
    // eslint-disable-next-line no-restricted-globals
    x: screen.width / 1.2,
    // eslint-disable-next-line no-restricted-globals
    y: screen.height / 1.6
  })
  const [warehouse_codes, setWarehouse_codes] = useState([])
  const selectDatas = [
    { name: "location", selectOption: location, grid: 1, purpose: "searchRoute", "ko": "지역", "cn": "地域", "jp": "地域", "vn": "khu vực" },
    { name: "warehouse_code", selectOption: warehouse_codes, grid: 1, purpose: "searchRoute", "ko": "창고코드", "cn": "仓库代码", "jp": "倉庫コード", "vn": "mã kho" },
  ]
  function getLocation() {
    var container = document.getElementById('map');
    var options = {
      center: new kakao.maps.LatLng(x, y),
      level: 3
    };
    var map = new kakao.maps.Map(container, options);
    var markerPosition = new kakao.maps.LatLng(x, y);
    var marker = new kakao.maps.Marker({
      position: markerPosition
    });
    marker.setMap(map);
    var iwContent = '<div style="padding:5px;">이곳이다!!!!</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
      iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

    // 인포윈도우를 생성합니다
    var infowindow = new kakao.maps.InfoWindow({
      content: iwContent,
      removable: iwRemoveable
    });

    // 마커에 클릭이벤트를 등록합니다
    kakao.maps.event.addListener(marker, 'click', function () {
      // 마커 위에 인포윈도우를 표시합니다
      infowindow.open(map, marker);
    });
  }
  useEffect(() => {
    getLocation()
  }, [])

  const [datas, setDatas] = useState({
    location: "천안"
  })
  useEffect(() => {
    axios.defaults.baseURL = WarehouseUrl
    axios.get(`warehouse/${datas.location}`)
      .then((res) => {
        setWarehouse_codes([])
        for (let index = 0; index < res.data.length; index++) {
          setWarehouse_codes(warehouse_codes => [...warehouse_codes, res.data[index].warehouse_code])
        }
      })
      .catch((err) => { })
  }, [datas.location])
  return (
    <div className=''>
      <h2 className='text-center font-bold text-2xl mb-5'>New Warehouse Map Route</h2>
      <div className='grid grid-cols-2 gap-5 w-1/2 mx-auto mb-5 text-center'>
        {selectDatas.map((selectData) => {
          return <SearchSelect
            setDatas={setDatas}
            datas={datas}
            name={selectData.name}
            purpose={selectData.purpose}
            selectData={selectData.selectOption}
            grid={selectData.grid}
            ko={selectData.ko}
            cn={selectData.cn}
            jp={selectData.jp}
            vn={selectData.vn}
          />
        })}
      </div>
      <div id="map" style={{ width: size.x, height: size.y, margin: "auto" }}></div>
    </div>
  )
}

export default NewWarehouseMap;