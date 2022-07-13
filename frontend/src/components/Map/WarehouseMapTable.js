import { Table } from "antd";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

function WarehouseMapTable(props) {
  let store_language = useSelector((state) => state.language);
  let columns = [];
  props.th.forEach((element) => {
    if (element.type === "number") {
      columns.push({
        title: element[sessionStorage.getItem("language")],
        dataIndex: element.en,
        key: element,
        align: "right",
        width: 100,
        sorter: (a, b) => {
          if (a[element.en] < b[element.en]) return -1;
          if (a[element.en] > b[element.en]) return 1;
          if (a[element.en] === b[element.en]) return 0;
          else return -1;
        },
      });
    } else if (element.type === "string") {
      columns.push({
        title: element[sessionStorage.getItem("language")],
        dataIndex: element.en,
        key: element,
        align: "left",
        width: 100,
        sorter: (a, b) => {
          if (a[element.en] < b[element.en]) return -1;
          if (a[element.en] > b[element.en]) return 1;
          if (a[element.en] === b[element.en]) return 0;
          else return -1;
        },
      });
    } else if (element.type === "date") {
      columns.push({
        title: element[sessionStorage.getItem("language")],
        dataIndex: element.en,
        key: element,
        align: "right",
        width: 100,
        sorter: (a, b) => {
          if (a[element.en] < b[element.en]) return -1;
          if (a[element.en] > b[element.en]) return 1;
          if (a[element.en] === b[element.en]) return 0;
          else return -1;
        },
      });
    }
  });

  useEffect(() => {
    props.th.forEach((element) => {
      if (element.type === "number") {
        columns.push({
          title: element[sessionStorage.getItem("language")],
          dataIndex: element.en,
          key: element,
          align: "right",
          sorter: (a, b) => {
            if (a[element.en] < b[element.en]) return -1;
            if (a[element.en] > b[element.en]) return 1;
            if (a[element.en] === b[element.en]) return 0;
            else return -1;
          },
        });
      } else if (element.type === "string") {
        columns.push({
          title: element[sessionStorage.getItem("language")],
          dataIndex: element.en,
          key: element,
          align: "left",
          sorter: (a, b) => {
            if (a[element.en] < b[element.en]) return -1;
            if (a[element.en] > b[element.en]) return 1;
            if (a[element.en] === b[element.en]) return 0;
            else return -1;
          },
        });
      } else if (element.type === "date") {
        columns.push({
          title: element[sessionStorage.getItem("language")],
          dataIndex: element.en,
          key: element,
          align: "right",
          sorter: (a, b) => {
            if (a[element.en] < b[element.en]) return -1;
            if (a[element.en] > b[element.en]) return 1;
            if (a[element.en] === b[element.en]) return 0;
            else return -1;
          },
        });
      }
    });
  }, [store_language]);
  const data = [];
  props.selectedInven.forEach((element) => {
    data.push({
      key: element.lot_no,
      ...element,
      inventory_date: element.inventory_date.slice(0, 10),
      warehouse_date: element.warehouse_date.slice(0, 10),
    });
  });

  return (
    <div>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 10 }}
        size="small"
        scroll={{
          x: 2500,
        }}
      />
    </div>
  );
}

export default WarehouseMapTable;