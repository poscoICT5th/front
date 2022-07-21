import { Table } from "antd";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

function WarehouseMapTable(props) {
  let store_language = useSelector((state) => state.language);
  let columns = [];
  props.th.forEach((element) => {
    columns.push({
      title: element[sessionStorage.getItem("language")],
      dataIndex: element.en,
      key: element,
      ellipsis: true,
      align: element.type,
      width: element.size,
      fixed:element.fixed,
      sorter: (a, b) => {
        if (a[element.en] < b[element.en]) return -1;
        if (a[element.en] > b[element.en]) return 1;
        if (a[element.en] === b[element.en]) return 0;
        else return -1;
      },
    });
  });

  useEffect(() => {
    props.th.forEach((element) => {
      columns.push({
        title: element[sessionStorage.getItem("language")],
        dataIndex: element.en,
        key: element,
        align: element.type,
        ellipsis: true,
        width: element.size,
        fixed:element.fixed,
        sorter: (a, b) => {
          if (a[element.en] < b[element.en]) return -1;
          if (a[element.en] > b[element.en]) return 1;
          if (a[element.en] === b[element.en]) return 0;
          else return -1;
        },
      });
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
        pagination={{ pageSize: 14 }}
        size="small"
        scroll={{
          x: '100%',
        }}
      />
    </div>
  );
}

export default WarehouseMapTable;