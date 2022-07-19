import { Tabs } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ChartMotorLine from "../Map/ChartMotorLine";
import ChartRotorLine from "../Map/ChartRotorLine";
import ChartStripLine from "../Map/ChartStripLine";

function TrendInventory() {
  let inventoryURL = useSelector((state) => state.inventoryURL);

  const [clickYear, setClickYear] = useState("2022");
  const years = ["2022", "2021", "2020"];

  const [trends, setTrends] = useState([""]);
  const { TabPane } = Tabs;
  function getTrendDatas(year) {
    axios.defaults.baseURL = inventoryURL;
    axios.get("/trendAll").then((res) => {
      setTrends(res.data);
    });
  }
 
  useEffect(() => {
    setTrends([]);
    // years.forEach((year) => {
    getTrendDatas(clickYear);
    // });
  }, []);

  return (
    <div data-aos="fade-up" className="w-3/4 mx-auto">
      <div className="">
        <div className="font-bold text-2xl text-center mb-5">
          Inventory Trend
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
        <div className="mt-5"></div>
        <div className="px-6 py-3 text-xl font-bold uppercase tracking-wider text-center">
        제품군별 회전율 1년 추이
      </div>
        <div className="px-6 py-3 text-sm font-medium uppercase tracking-wider text-right">
        단위 %
      </div>
        <div className="grid grid-cols-8 gap-10">
          {years.map((value) => {
            return (
              <button
                className={
                  clickYear === value
                    ? "bg-sky-700 rounded-lg text-white"
                    : null +
                      "py-2 font-bold text-sm rounded-lg text-gray-700 hover:text-white bg-sky-100 hover:bg-sky-700"
                }
                onClick={() => {
                  setClickYear(value);
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
                      {trends
                        .filter((data) => data.year === clickYear)
                        .map((data, index) => {
                          if (index === 0) {
                            return (
                              <>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-xs font-medium uppercase tracking-wider"
                                >
                                  월
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-xs font-medium uppercase tracking-wider"
                                >
                                  {data.month}
                                </th>
                              </>
                            );
                          }
                          return (
                            <th
                              scope="col"
                              className="px-6 py-3 text-xs font-medium uppercase tracking-wider"
                            >
                              {data.month}
                            </th>
                          );
                        })}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {["motor", "rotor", "strip"].map((data1) => {
                      return (
                        <tr>
                          {trends
                            .filter((data) => data.year === clickYear)
                            .map((data2, index) => {
                              if (index === 0) {
                                return (
                                  <>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                      <div className="text-sm font-bold">
                                        {data1 + "_회전율"}
                                      </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                      <div className="text-md font-bold">
                                        {(
                                          (data2[`sum_export_${data1}`] /
                                            (data2[`sum_inven_${data1}`] /
                                              data2["day"])) *
                                          100
                                        ).toFixed(2)}
                                      </div>
                                    </td>
                                  </>
                                );
                              }
                              return (
                                <>
                                  {/* <tr> */}
                                  <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-md font-bold">
                                      {(
                                        (data2[`sum_export_${data1}`] /
                                          (data2[`sum_inven_${data1}`] /
                                            data2["day"])) *
                                        100
                                      ).toFixed(2)}
                                    </div>
                                  </td>
                                  {/* </tr> */}
                                </>
                              );
                            })}
                        </tr>
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
    </div>
  );
}

export default TrendInventory;
