/*global kakao*/
import React, { useEffect, useState } from 'react'
import { location } from '../Common/Conditions/SelectOptionsCreate';
import { warehouseXY } from '../Common/Conditions/WarehouseLocation';
import SearchSelect from '../Common/Conditions/SearchSelect'
import axios from 'axios';
import { useSelector } from 'react-redux';

const NewWarehouseMap = () => {
  let WarehouseUrl = useSelector((state) => state.warehouseURL)
  let inventoryURL = useSelector((state) => state.inventoryURL)
  const [coordinate, setCoordinate] = useState({
    x: 35.984258199999935,
    y: 129.38250669999994,
  })
  const [size, setSize] = useState({
    // eslint-disable-next-line no-restricted-globals
    x: screen.width,
    // eslint-disable-next-line no-restricted-globals
    y: screen.height
  })
  const [datas, setDatas] = useState({
    location: "천안",
    warehouse_code: "",
  })
  const [locationInfo, setLocationInfo] = useState([])
  const [warehouse_codes, setWarehouse_codes] = useState([])
  const selectDatas = [
    { name: "location", selectOption: location, grid: 1, purpose: "searchRoute", "ko": "지역", "cn": "地域", "jp": "地域", "vn": "khu vực" },
    { name: "warehouse_code", selectOption: warehouse_codes, grid: 1, purpose: "searchRoute", "ko": "창고코드", "cn": "仓库代码", "jp": "倉庫コード", "vn": "mã kho" },
  ]
  function getLocation(spotX, spotY) {
    var container = document.getElementById('map');
    var options = {
      center: new kakao.maps.LatLng(spotX, spotY),
      level: 5
    };
    var map = new kakao.maps.Map(container, options);
    var markerPosition = new kakao.maps.LatLng(spotX, spotY);
    var marker = new kakao.maps.Marker({
      position: markerPosition
    });
    marker.setMap(map);
    // var polyline = new kakao.maps.Polyline({
    //   map: map,
    //   path: [
    //     new kakao.maps.LatLng(37.49452879999996, 127.02330369999962),
    //     new kakao.maps.LatLng(coordinate.x, coordinate.y),
    //     // new kakao.maps.LatLng(33.45178067090639, 126.5726886938753)
    //   ],
    //   strokeWeight: 6,
    //   strokeColor: '#FF00FF',
    //   strokeOpacity: 1,
    //   strokeStyle: 'dashed'
    // });
    // polyline.setMap(map); // 지도에 올린다.
    // // polyline.setMap(null); // 지도에서 제거한다.
    // polyline.getMap();
    var iwContent = `
      <div style="padding:5px; margin:5px;">
        <table>
          <thead>
            <tr>
              <th colspan="2">${datas.location} ${datas.warehouse_code}</th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td>재고량</td>
            <td>${locationInfo?.length}</td>
          </tr>
          </tbody>
        </table>
      </div>
    `, // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
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
  function getLocationInfo(params) {
    axios.defaults.baseURL = inventoryURL;
    axios
      .get(`/warehouse/${datas.warehouse_code}`)
      .then((res) => {
        console.log(res.data)
        setLocationInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }


  useEffect(() => {
    getLocation(coordinate.x, coordinate.y)
  }, [])

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

  useEffect(() => {
    if (datas.warehouse_code) {
      setCoordinate({ x: warehouseXY[datas.warehouse_code].x, y: warehouseXY[datas.warehouse_code].y })
      getLocation(warehouseXY[datas.warehouse_code].x, warehouseXY[datas.warehouse_code].y)
      getLocationInfo()
    }
  }, [datas.warehouse_code])

  return (
    <div className='' data-aos="fade-up">
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
      <div className='grid grid-cols-2 gap-5'>
        <div id="map" style={{ width: size.x, height: size.y, margin: "auto" }}></div>
        <div></div>
      </div>
    </div>
  )
}

export default NewWarehouseMap;