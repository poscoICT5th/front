import { Table } from "antd";
import React from "react";

function WarehouseMapTable(props) {
  const columns = [
    {
      title: "amount",
      dataIndex: "amount",
      align: "center",
    },
    {
      title: "customer",
      dataIndex: "customer",
      // defaultSortOrder: 'descend',
      // sorter: (a, b) => a.age - b.age,
      align: "center",
    },
    {
      title: "height",
      dataIndex: "height",
      align: "center",
    },
    {
      title: "industry_family",
      dataIndex: "industry_family",
      align: "center",
      width: 130,
    },
    {
      title: "inventory_date",
      dataIndex: "inventory_date",
      align: "center",
      width: 130,
    },
    {
      title: "item_code",
      dataIndex: "item_code",
      align: "center",
    },
    {
      title: "item_name",
      dataIndex: "item_name",
      align: "center",
      width: 250,
    },
    {
      title: "location",
      dataIndex: "location",
      align: "center",
    },
    {
      title: "lot_no",
      dataIndex: "lot_no",
      align: "center",
    },
    {
      title: "product_family",
      dataIndex: "product_family",
      align: "center",
      width: 130,
    },
    {
      title: "state",
      dataIndex: "state",
      align: "center",
    },
    {
      title: "status_cause",
      dataIndex: "status_cause",
      align: "center",
      width: 120,
    },
    {
      title: "stock_quality_status",
      dataIndex: "stock_quality_status",
      align: "center",
      width: 170,
    },
    {
      title: "stock_type",
      dataIndex: "stock_type",
      align: "center",
    },
    {
      title: "thickness",
      dataIndex: "thickness",
      align: "center",
    },
    {
      title: "unit",
      dataIndex: "unit",
      align: "center",
    },
    {
      title: "warehouse_code",
      dataIndex: "warehouse_code",
      align: "center",
      width: 140,
    },
    {
      title: "warehouse_date",
      dataIndex: "warehouse_date",
      align: "center",
      width: 140,
    },
    {
      title: "weight",
      dataIndex: "weight",
      align: "center",
    },
    {
      title: "width",
      dataIndex: "width",
      align: "center",
    },
  ];
  return (
    <div>
      <Table
        columns={columns}
        dataSource={props.selectedInven}
        scroll={{ x: 2500, y: 1000 }}
      />
    </div>
  );
}

export default WarehouseMapTable;
