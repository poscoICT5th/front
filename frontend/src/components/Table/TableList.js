import React, { useEffect, useState } from 'react'
import { Table } from 'antd';
import axios from 'axios';
import Barcode from '../Functions/Barcode'
import Detail from '../Detail/Detail';
import { useSelector, useDispatch } from 'react-redux';
import {
    handleImportReload,
    handleExportReload,
    handleMoveReload,
    handleWarehouseReload,
    handleInventoryReload
} from '../../store'
import PageButtonGroup from '../Common/PageButtonGroup';

function TableList(props) {
    let dispatch = useDispatch();
    let store_language = useSelector((state) => state.language)
    const columns = [];
    const data = [];
    // select
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [selectedRows, setselectedRows] = useState([]); //선택한 행을 통째로 받아오기.
    const [openDetail, setOpenDetail] = useState(false)
    const [openDetailUpdate, setopenDetailUpdate] = useState(false)
    const onSelectChange = (newSelectedRowKeys) => {
        setSelectedRowKeys(newSelectedRowKeys); 
        console.log('selectedRowKeys changed: ', selectedRowKeys); //이 키를 받아서 모달창에 띄워라 .. 
    };
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
        onSelect: (record, selected, selectedRows) => {
            console.log(record)
            console.log(selected)
            setselectedRows(selectedRows) //여기서 찍어보니까 된다.
        }
    };

    props.th.forEach(element => {
        columns.push(
            {
                title: element[sessionStorage.getItem("language")],
                dataIndex: element.en,
                key: element.en,
                // width: element.size,
                align: "center",
            },
        )
    })

    useEffect(() => {
        props.th.forEach(element => {
            columns.push(
                {
                    title: element[sessionStorage.getItem("language")],
                    dataIndex: element.en,
                    key: element,
                    // width: element.size,
                    align: "center",
                },
            )
        })

    }, [store_language])

    // rows 넣기
    props.dataList.forEach(element => {
        if (props.title === "logistics") {
            data.push({ key: element.instruction_no, ...element, "Barcode": <Barcode itemData={element} /> })
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
                .then((res) => {
                    alert("suc");
                    props.setClickDelete(false);
                    if (props.title === "logistics") {
                        dispatch(handleImportReload(true));
                        dispatch(handleExportReload(true));
                        dispatch(handleMoveReload(true));
                        dispatch(handleImportReload(false));
                        dispatch(handleExportReload(false));
                        dispatch(handleMoveReload(false));
                    } else if (props.title === "warehouse") {
                        dispatch(handleWarehouseReload(true));
                        dispatch(handleWarehouseReload(false));
                    } else if (props.title === "inventory") {
                        dispatch(handleInventoryReload(true));
                        dispatch(handleInventoryReload(false));
                    }
                    props.setOpenCreate(false)
                })
                .catch((err) => { props.setClickDelete(false) })

        }
    }, [props.clickDelete])

    const [detailData, setDetailData] = useState({})
    //강화 !!

    return (
        <div>
            <div><PageButtonGroup
                selectedRowKeys={selectedRowKeys}
                selectedRows={selectedRows}
             /></div>
            <Table
                rowSelection={rowSelection}
                onRow={(record, rowIndex, data) => {
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
                pagination={{ pageSize: 30 }}
                size="small"
                scroll={{
                    x: 2500,
                    // y: 1500,
                }}
                // onSelect={onSelect}
            />
            <Detail openDetail={openDetail}
                setOpenDetail={setOpenDetail}
                detailData={detailData}
                title={props.title}
            />

        </div>
    )
}

export default TableList