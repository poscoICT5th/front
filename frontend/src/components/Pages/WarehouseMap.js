import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ChartTreemap from "../Map/ChartTreemap";
import WarehouseMapTable from "../Map/WarehouseMapTable";
function WarehouseMap() {
  let inventoryURL = useSelector((state) => state.inventoryURL);
  const [selectedInven, setSelectedInven] = useState([]);
  const [clickLocation, setClickLocation] = useState("광양")
  
  const getInvenByWare = (warehouseCode) => {
    axios.defaults.baseURL = inventoryURL;
    axios
      .get(`/warehouse/${warehouseCode}`)
      .then((res) => {
        setSelectedInven([...res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    setSelectedInven([])
  }, [clickLocation])
  
  return (
    <div data-aos="fade-up" className="grid grid-cols-2">
      <div className="h-3/4 w-3/4 mx-auto">
        <ChartTreemap getInvenByWare={getInvenByWare}
          setClickLocation={setClickLocation}
          clickLocation={clickLocation}
        />
      </div>
      <div className="mx-10 h-1/2">
        <WarehouseMapTable selectedInven={selectedInven} />
      </div>
    </div>
  );
}

export default WarehouseMap;
