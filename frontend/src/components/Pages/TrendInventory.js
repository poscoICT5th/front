import { Tabs } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ChartMotorLine from "../Map/ChartMotorLine";
import ChartRotorLine from "../Map/ChartRotorLine";
import ChartStripLine from "../Map/ChartStripLine";

function TrendInventory() {
  let inventoryURL = useSelector((state) => state.inventoryURL);
  const [clickData, setClickData] = useState({
    month: 1,
  });
  const years = [2022, 2021, 2020];
  const months = {
    Jan: "01",
    Feb: "02",
    Mar: "03",
    Apr: "04",
    May: "05",
    Jun: "06",
    Jul: "07",
    Aug: "08",
    Sep: "09",
    Oct: "10",
    Nov: "11",
    Dec: "12",
  };
  const [datas, setDatas] = useState({
    day_2022: 0,
    day_2021: 0,
    day_2020: 0,
    sum_export_motor_2022: 0,
    sum_export_motor_2021: 0,
    sum_export_motor_2020: 0,
    sum_export_rotor_2022: 0,
    sum_export_rotor_2021: 0,
    sum_export_rotor_2020: 0,
    sum_export_strip_2022: 0,
    sum_export_strip_2021: 0,
    sum_export_strip_2020: 0,
    sum_inven_motor_2022: 0,
    sum_inven_motor_2021: 0,
    sum_inven_motor_2020: 0,
    sum_inven_rotor_2022: 0,
    sum_inven_rotor_2021: 0,
    sum_inven_rotor_2020: 0,
    sum_inven_strip_2022: 0,
    sum_inven_strip_2021: 0,
    sum_inven_strip_2020: 0,
  });

  const { TabPane } = Tabs;
  function getTrendDatas(year) {
    axios.defaults.baseURL = inventoryURL;
    axios.get(`/trend/year/${year}/month/${clickData.month}`).then((res) => {
      console.log(res.data[0]["day"]);
      setDatas({
        ...datas,
        [`sum_export_motor_${year}`]: res.data[0]["sum_export_motor"],
        [`sum_export_rotor_${year}`]: res.data[0]["sum_export_rotor"],
        [`sum_export_strip_${year}`]: res.data[0]["sum_export_strip"],
        [`sum_inven_motor_${year}`]: res.data[0]["sum_inven_motor"],
        [`sum_inven_rotor_${year}`]: res.data[0]["sum_inven_rotor"],
        [`sum_inven_strip_${year}`]: res.data[0]["sum_inven_strip"],
        [`day_${year}`]: res.data[0]["sum_inven_strip"],
      });
    });
  }
  useEffect(() => {
    years.forEach((year) => {
      getTrendDatas(year);
    });
  }, [clickData]);

  return (
    <div data-aos="fade-up" className="w-3/4 mx-auto">
      <div className="">
        <div className="font-bold text-2xl text-center mb-5">
          Inventory Trend
        </div>
        <div className="grid grid-cols-12 gap-2">
          {Object.keys(months).map((value) => {
            return (
              <button
                className="py-2 font-bold text-sm rounded-lg text-gray-700 hover:text-white bg-sky-100 hover:bg-sky-700"
                onClick={() => {
                  setClickData({ ...clickData, month: months[value] });
                }}
              >
                {value}
              </button>
            );
          })}
        </div>
        {/* table */}
        <div className="flex flex-col mx-1 mt-5 text-center max-h-72">
          <div className="-my-2 overflow-x-auto">
            <div className="py-2 align-middle inline-block min-w-full">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-medium uppercase tracking-wider"
                      >
                        연도
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-medium uppercase tracking-wider"
                      >
                        Motor-재고회전율
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-medium uppercase tracking-wider"
                      >
                        Rotor-재고회전율
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-medium uppercase tracking-wider"
                      >
                        Strip-재고회전율
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {years.map((year) => {
                      return (
                        <>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm">{year}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm">
                                {datas[`sum_export_motor_${year}`] *
                                  datas[`sum_inven_motor_${year}`] !==
                                  0 ? (
                                  (
                                    (datas[`sum_export_motor_${year}`] /
                                      datas[`sum_inven_motor_${year}`] /
                                      datas[`day_${year}`]) *
                                    100
                                  ).toFixed(2) + "%"
                                ) : (
                                  <div>-</div>
                                )}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm">
                                {datas[`sum_export_rotor_${year}`] *
                                  datas[`sum_inven_rotor_${year}`] !==
                                  0 ? (
                                  (
                                    (datas[`sum_export_rotor_${year}`] /
                                      datas[`sum_inven_rotor_${year}`] /
                                      datas[`day_${year}`]) *
                                    100
                                  ).toFixed(2) + "%"
                                ) : (
                                  <div>-</div>
                                )}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm">
                                {datas[`sum_export_strip_${year}`] *
                                  datas[`sum_inven_strip_${year}`] !==
                                  0 ? (
                                  (
                                    (datas[`sum_export_strip_${year}`] /
                                      datas[`sum_inven_strip_${year}`] /
                                      datas[`day_${year}`]) *
                                    100
                                  ).toFixed(2) + "%"
                                ) : (
                                  <div>-</div>
                                )}
                              </div>
                            </td>
                          </tr>
                        </>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-6 py-3 text-xs font-medium uppercase tracking-wider text-right">
        ※ 재고회전율 = 출고량 / 평균재고량 * 100 %
      </div>
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab="Motor Trend" key="1">
          <ChartMotorLine />
        </TabPane>
        <TabPane tab="Rotor Trend" key="2">
          <ChartRotorLine />
        </TabPane>
        <TabPane tab="Strip Trend" key="3">
          <ChartStripLine />
        </TabPane>
      </Tabs>
    </div>
  );
}

export default TrendInventory;
