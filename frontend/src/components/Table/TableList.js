import React, { useEffect, useState } from 'react'
import { Table } from 'antd';
import axios from 'axios';


function TableList(props) {
    const columns = [];
    const data = [];
    // select
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const onSelectChange = (newSelectedRowKeys) => {
        setSelectedRowKeys(newSelectedRowKeys);
        console.log('selectedRowKeys changed: ', selectedRowKeys);
    };
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };
    //
    // column, data 넣기 
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
        if (props.title === "logistics") {
            data.push({ key: element.instruction_no, ...element })
        } else if (props.title === "inventory") {
            data.push({ key: element.lot_no, ...element })
        } else if (props.title === "warehouse") {
            data.push({ key: element.warehouse_code, ...element })
        }
    });
    // 
    useEffect(() => {
        axios.defaults.baseURL = props.axiosURL
        if (selectedRowKeys.length > 0) {
            axios.delete(`/${props.part}`,
                {
                    data:
                    {
                        [props.deleteBodyName]: selectedRowKeys
                    }
                }
            )
                .then((res) => { alert("suc"); props.setClickDelete(false) })
                .catch((err) => { ; props.setClickDelete(false) })

        }
    }, [props.clickDelete])


    return (
        <div>
            <Table
                rowSelection={rowSelection}
                columns={columns}
                dataSource={data}
                bordered
                pagination={{ pageSize: 20 }}
                size="small"
                scroll={{
                    x: 1500,
                    // y: 1500,
                }}
            />
        </div>
    )
}

export default TableList