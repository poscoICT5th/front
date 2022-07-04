import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ChartLine from "../Map/ChartLine";
import ChartLine1 from "../Map/ChartLine1";
import ChartLine2 from "../Map/ChartLine2";

function TrendInventory() {
  // 월간 평균 재고량  = (월초 재고량 + 월말 재고량)/2
  //재고 회전율 산식
  //출고량/평균재고량

  let inventoryURL = useSelector((state) => state.inventoryURL);
  // 날짜 수
  //const [cnt, setCnt] = useState(0);

  //연간 출고량 motor
  const [export_motor_sum_2022, setExport_motor_sum_2022] = useState(0);
  const [export_motor_sum_2021, setExport_motor_sum_2021] = useState(0);
  const [export_motor_sum_2020, setExport_motor_sum_2020] = useState(0);
  //연간 출고량 rotor
  const [export_rotor_sum_2022, setExport_rotor_sum_2022] = useState(0);
  const [export_rotor_sum_2021, setExport_rotor_sum_2021] = useState(0);
  const [export_rotor_sum_2020, setExport_rotor_sum_2020] = useState(0);
  //연간 출고량 strip
  const [export_strip_sum_2022, setExport_strip_sum_2022] = useState(0);
  const [export_strip_sum_2021, setExport_strip_sum_2021] = useState(0);
  const [export_strip_sum_2020, setExport_strip_sum_2020] = useState(0);

  //평균재고량 motor
  const [inven_motor_2022, setInven_motor_2022] = useState(0);
  const [inven_motor_2021, setInven_motor_2021] = useState(0);
  const [inven_motor_2020, setInven_motor_2020] = useState(0);
  //평균재고량 rotor
  const [inven_rotor_2022, setInven_rotor_2022] = useState(0);
  const [inven_rotor_2021, setInven_rotor_2021] = useState(0);
  const [inven_rotor_2020, setInven_rotor_2020] = useState(0);
  //평균재고량 strip
  const [inven_strip_2022, setInven_strip_2022] = useState(0);
  const [inven_strip_2021, setInven_strip_2021] = useState(0);
  const [inven_strip_2020, setInven_strip_2020] = useState(0);

  //setCnt(currentValue.export_motor.length)
  //axios
  useEffect(() => {
    axios.defaults.baseURL = inventoryURL;
    axios.get("/trend").then((res) => {
      //  console.log(res.data, "날짜를 찍어보자");

      res.data.reduce(function (total, currentValue) {
        //연간 재고회전율 구하기
        if (currentValue.date >= 1640962800000) {
          //22년도 설정하고

          setExport_motor_sum_2022(
            //22년도 출고량 구한다.
            (export_motor_sum_2022) =>
              export_motor_sum_2022 + currentValue.export_motor
          );
          setExport_rotor_sum_2022(
            (export_rotor_sum_2022) =>
              export_rotor_sum_2022 + currentValue.export_rotor
          );
          setExport_strip_sum_2022(
            (export_strip_sum_2022) =>
              export_strip_sum_2022 + currentValue.export_strip
          );
          setInven_motor_2022(
            // 22년도 재고량 구한다.
            (inven_motor_2022) => inven_motor_2022 + currentValue.inven_motor
          );
          setInven_rotor_2022(
            (inven_rotor_2022) => inven_rotor_2022 + currentValue.inven_rotor
          );
          setInven_strip_2022(
            (setInven_strip_2022) =>
              setInven_strip_2022 + currentValue.inven_strip
          );
        } else if (
          currentValue.date >= 1609426800000 &&
          currentValue.date < 1640962800000
        ) {
          //2021년도
          setExport_motor_sum_2021(
            //22년도 출고량 구한다.
            (export_motor_sum_2021) =>
              export_motor_sum_2021 + currentValue.export_motor
          );
          setExport_rotor_sum_2021(
            (export_rotor_sum_2021) =>
              export_rotor_sum_2021 + currentValue.export_rotor
          );
          setExport_strip_sum_2021(
            (export_strip_sum_2021) =>
              export_strip_sum_2021 + currentValue.export_strip
          );

          setInven_motor_2021(
            // 22년도 재고량 구한다.
            (inven_motor_2021) => inven_motor_2021 + currentValue.inven_motor
          );
          setInven_rotor_2021(
            (inven_rotor_2021) => inven_rotor_2021 + currentValue.inven_rotor
          );
          setInven_strip_2021(
            (inven_strip_2021) => inven_strip_2021 + currentValue.inven_strip
          );
        } else {
          //2020년도
          setExport_motor_sum_2020(
            (export_motor_sum_2020) =>
              export_motor_sum_2020 + currentValue.export_motor
          );
          setExport_rotor_sum_2020(
            (export_rotor_sum_2020) =>
              export_rotor_sum_2020 + currentValue.export_rotor
          );
          setExport_strip_sum_2020(
            (export_strip_sum_2020) =>
              export_strip_sum_2020 + currentValue.export_strip
          );
          setInven_motor_2020(
            (inven_motor_2020) => inven_motor_2020 + currentValue.inven_motor
          );
          setInven_rotor_2020(
            (inven_rotor_2020) => inven_rotor_2020 + currentValue.inven_rotor
          );
          setInven_strip_2020(
            (inven_strip_2020) => inven_strip_2020 + currentValue.inven_strip
          );
        }
        return null;
      }, 0);
      //setCnt(res.data.length);
      //console.log(currentValue.export_motor.length, " 길이 ");
    });
  }, []);
  const data = [];
  for (let i = 0; i < 3; i++) {
    data.push({
      lotNumber: "346465653" + i * 100,
      place: "포항 공장" + i,
      name: "STRIP_KS-SCP1S_83mm_1t",
      cnt: i + 10,
      process: "ST50",
      PIC: "홍길동" + i,
    });
  }
  return (
    <div>
      <div className="mx-auto ">
        <div className="font-bold text-2xl text-center ">Inventory Trend</div>

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
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm">2022</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm">
                          {(
                            (export_motor_sum_2022 / inven_motor_2022 / 178) *
                            100
                          ).toFixed(2)}
                          %
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm">
                          {(
                            (export_rotor_sum_2022 / inven_rotor_2022 / 178) *
                            100
                          ).toFixed(2)}
                          %
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm">
                          {(
                            (export_strip_sum_2022 / inven_strip_2022 / 178) *
                            100
                          ).toFixed(2)}
                          %
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm">2021</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm">
                          {(
                            (export_motor_sum_2021 / inven_motor_2021 / 365) *
                            100
                          ).toFixed(2)}
                          %{" "}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm">
                          {(
                            (export_rotor_sum_2021 / inven_rotor_2021 / 365) *
                            100
                          ).toFixed(2)}
                          %
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm">
                          {(
                            (export_strip_sum_2021 / inven_strip_2021 / 365) *
                            100
                          ).toFixed(2)}
                          %
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm">2020</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm">
                          {(
                            (export_motor_sum_2020 / inven_motor_2020 / 365) *
                            100
                          ).toFixed(2)}
                          %
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm">
                          {(
                            (export_rotor_sum_2020 / inven_rotor_2020 / 365) *
                            100
                          ).toFixed(2)}
                          %
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm">
                          {(
                            (export_strip_sum_2020 / inven_strip_2020 / 365) *
                            100
                          ).toFixed(2)}
                          %
                        </div>
                      </td>
                    </tr>
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
      {/* 여기부터 그래프 */}

      <div className="grid grid-cols-1 grid-rows-3 gap-3 rounded-lg">
        <div>
          <ChartLine />
        </div>
        <div>
          <ChartLine1 />
        </div>
        <div>
          <ChartLine2 />
        </div>
      </div>
    </div>
  );
}

export default TrendInventory;
