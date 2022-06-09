import React, { useEffect } from 'react'
import { Table } from 'antd';


function TableList(props) {
    const columns = [];
    const data = [];

    props.th.forEach(element => {
        columns.push(
            {
                title: Object.keys(element)[0],
                dataIndex: Object.keys(element)[0],
                key: Object.keys(element)[0],
                width: Object.values(element)[0],
                align: "center",
            },
        )
    })
    props.dataList.forEach(element => {
        Object.keys(element).map((e)=>{})
        data.push(element)
    });
    return (
        <div>
            <Table
                columns={columns}
                dataSource={data}
                bordered
                size="small"
                scroll={{
                    x: 1500,
                    y: 1500,
                }}
            />
        </div>
    )
}

export default TableList