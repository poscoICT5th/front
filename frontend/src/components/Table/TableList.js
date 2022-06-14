import React, { useEffect, useState } from 'react'
import { Table } from 'antd';
import axios from 'axios';
import Barcode from '../Functions/Barcode'
import Detail from '../Detail/Detail';

function TableList(props) {
    const columns = [];
    const data = [];
    // select
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [openDetail, setOpenDetail] = useState(false)
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
            data.push({ key: element.instruction_no, ...element, "barcode": <Barcode itemData={element} /> })
        } else if (props.title === "inventory") {
            data.push({ key: element.lot_no, ...element })
        } else if (props.title === "warehouse") {
            data.push({ key: element.warehouse_code, ...element })
        }
    });
    // 삭제(멀티)
    useEffect(() => {
        axios.defaults.baseURL = props.axiosURL
        if (selectedRowKeys.length > 0 && props.clickDelete) {
            console.log(selectedRowKeys)
            axios.delete(`/${props.part}`,
                {
                    data:
                    {
                        [props.deleteBodyName]: selectedRowKeys
                    }
                }
            )
                .then((res) => { alert("suc"); props.setClickDelete(false) })
                .catch((err) => { props.setClickDelete(false) })

        }
    }, [props.clickDelete])

    const [detailData, setDetailData] = useState({})
    return (
        <div>
            <Table
                rowSelection={rowSelection}
                onRow={(record, rowIndex) => {
                    return {
                        onClick: event => { }, // click row
                        onDoubleClick: event => { setDetailData(record); setOpenDetail(true) }, // double click row
                        onContextMenu: event => { }, // right button click row
                        onMouseEnter: event => { }, // mouse enter row
                        onMouseLeave: event => { }, // mouse leave row
                    };
                }}
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
            <Detail openDetail={openDetail} setOpenDetail={setOpenDetail} detailData={detailData} />
        </div>
    )
}

export default TableList