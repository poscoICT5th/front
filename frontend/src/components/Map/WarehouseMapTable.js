import { Table } from "antd";
import React from "react";

function WarehouseMapTable(props) {
  const columns = [
    {
      title: "amount",
      dataIndex: "amount",
      align: "center",
      defaultSortOrder: 'descend',
      sorter: {
        compare: (a, b) => a.amount - b.amount,
      },
    },
    {
      title: "customer",
      dataIndex: "customer",
       defaultSortOrder: 'descend',
      align: "center",
      sorter: (a, b) => {
        if (a.customer < b.customer) return -1;
        if (a.customer >b.customer) return 1;
        if (a.customer === b.customer) return 0;
        else return -1;
      },
    },
    {
      title: "height",
      dataIndex: "height",
      align: "center",
      sorter: {
        compare: (a, b) => a.height - b.height,
      },
    },
    {
      title: "industry_family",
      dataIndex: "industry_family",
      align: "center",
      width: 130,
      sorter: (a, b) => {
        if (a.industry_family < b.industry_family) return -1;
        if (a.industry_family >b.industry_family) return 1;
        if (a.industry_family === b.industry_family) return 0;
        else return -1;
      },
    },
    {
      title: "inventory_date",
      dataIndex: "inventory_date",
      align: "center",
      width: 130,
      sorter: (a, b) => {
        if (a.inventory_date < b.inventory_date) return -1;
        if (a.inventory_date >b.inventory_date) return 1;
        if (a.inventory_date === b.inventory_date) return 0;
        else return -1;
      },
    },
    {
      title: "item_code",
      dataIndex: "item_code",
      align: "center",
      sorter: (a, b) => {
        if (a.item_code < b.item_code) return -1;
        if (a.item_code >b.item_code) return 1;
        if (a.item_code === b.item_code) return 0;
        else return -1;
      },
    },
    {
      title: "item_name",
      dataIndex: "item_name",
      align: "center",
      width: 250,
      sorter: (a, b) => {
        if (a.item_name < b.item_name) return -1;
        if (a.item_name >b.item_name) return 1;
        if (a.item_name === b.item_name) return 0;
        else return -1;
      },
    },
    {
      title: "location",
      dataIndex: "location",
      align: "center",
      sorter: (a, b) => {
        if (a.location < b.location) return -1;
        if (a.location >b.location) return 1;
        if (a.location === b.location) return 0;
        else return -1;
      },
    },
    {
      title: "lot_no",
      dataIndex: "lot_no",
      align: "center",
      sorter: (a, b) => {
        if (a.lot_no < b.lot_no) return -1;
        if (a.lot_no >b.lot_no) return 1;
        if (a.lot_no === b.lot_no) return 0;
        else return -1;
      },
    },
    {
      title: "product_family",
      dataIndex: "product_family",
      align: "center",
      width: 130,
      sorter: (a, b) => {
        if (a.product_family < b.product_family) return -1;
        if (a.product_family >b.product_family) return 1;
        if (a.product_family === b.product_family) return 0;
        else return -1;
      },
    },
    {
      title: "state",
      dataIndex: "state",
      align: "center",
      sorter: (a, b) => {
        if (a.state < b.state) return -1;
        if (a.state >b.state) return 1;
        if (a.state === b.state) return 0;
        else return -1;
      },
    },
    {
      title: "status_cause",
      dataIndex: "status_cause",
      align: "center",
      width: 120,
      sorter: (a, b) => {
        if (a.status_cause < b.status_cause) return -1;
        if (a.status_cause >b.status_cause) return 1;
        if (a.status_cause === b.status_cause) return 0;
        else return -1;
      },
    },
    {
      title: "stock_quality_status",
      dataIndex: "stock_quality_status",
      align: "center",
      width: 170,
      sorter: (a, b) => {
        if (a.status_cause < b.status_cause) return -1;
        if (a.status_cause >b.status_cause) return 1;
        if (a.status_cause === b.status_cause) return 0;
        else return -1;
      },
    },
    {
      title: "stock_type",
      dataIndex: "stock_type",
      align: "center",
      sorter: (a, b) => {
        if (a.stock_type < b.stock_type) return -1;
        if (a.stock_type >b.stock_type) return 1;
        if (a.stock_type === b.stock_type) return 0;
        else return -1;
      },
    },
    {
      title: "thickness",
      dataIndex: "thickness",
      align: "center",
      sorter: {
        compare: (a, b) => a.thickness - b.thickness,
      },
    },
    {
      title: "unit",
      dataIndex: "unit",
      align: "center",
      sorter: (a, b) => {
        if (a.unit < b.unit) return -1;
        if (a.unit >b.unit) return 1;
        if (a.unit === b.unit) return 0;
        else return -1;
      },
    },
    {
      title: "warehouse_code",
      dataIndex: "warehouse_code",
      align: "center",
      width: 140,
      sorter: (a, b) => {
        if (a.warehouse_code < b.warehouse_code) return -1;
        if (a.warehouse_code >b.warehouse_code) return 1;
        if (a.warehouse_code === b.warehouse_code) return 0;
        else return -1;
      },
    },
    {
      title: "warehouse_date",
      dataIndex: "warehouse_date",
      align: "center",
      width: 140,
      sorter: (a, b) => {
        if (a.warehouse_date < b.warehouse_date) return -1;
        if (a.warehouse_date >b.warehouse_date) return 1;
        if (a.warehouse_date === b.warehouse_date) return 0;
        else return -1;
      },
    },
    {
      title: "weight",
      dataIndex: "weight",
      align: "center",
      sorter: {
        compare: (a, b) => a.weight - b.weight,
      },
    },
    {
      title: "width",
      dataIndex: "width",
      align: "center",
      sorter: {
        compare: (a, b) => a.width - b.width,
      },
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