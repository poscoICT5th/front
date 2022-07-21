import { Table, Tag } from 'antd';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import AlertVerify from '../Common/AlertVerify';
import './Hotline.css'
import { useNavigate } from 'react-router-dom';
import { handleHotlineReload } from '../../store'
function Hotline(props) {
    let hotlineURL = useSelector((state) => state.hotlineURL);
    let hotlineReload = useSelector((state) => state.hotlineReload);
    let store_language = useSelector((state) => state.language);
    let navigate = useNavigate();
    let dispatch = useDispatch();
    const [hotlineList, setHotlineList] = useState([])
    const [data, setData] = useState([])
    const columns = [];
    const th = {
        status: { ko: "상태", en: "status", cn: "身份", jp: "地位", vn: "địa vị", type: "center", fixed: "", size: 50 },
        category: { ko: "카테고리", en: "category", cn: "类别", jp: "カテゴリ", vn: "Phân loại", type: "center", fixed: "", size: 50 },
        title: { ko: "제목", en: "title", cn: "标题", jp: "タイトル", vn: "Tiêu đề", type: "center", fixed: "", size: 150 },
        writer: { ko: "작성자", en: "writer", cn: "作家", jp: "作家さん", vn: "Biên kịch.", type: "center", fixed: "", size: 100 },
        content: { ko: "내용", en: "content", cn: "内容", jp: "内容", vn: "bằng lòng", type: "center", fixed: "", size: 200 },
        reg_date: { ko: "등록일", en: "Registration date", cn: "登记日期", jp: "登録年月日", vn: "Ngày đăng ký", type: "center", fixed: "", size: 100 },
        confirm_date: { ko: "처리일", en: "Processing date", cn: "处理日期", jp: "処理日", vn: "Ngày xử lý", type: "center", fixed: "", size: 100 },
    }
    Object.entries(th).forEach(([key, value], index) => {
        if (key === 'status') {
            columns.push({
                title: value[sessionStorage.getItem("language")],
                dataIndex: key,
                key: key,
                align: value.type,
                width: value.size,
                ellipsis: true,
                fixed: value.fixed,
                render: (text) => (
                    <>
                        <Tag color={text === "승인" ? "blue" : (text === "반려" ? "red" : null)} key={text}>
                            {text}
                        </Tag>
                    </>
                ),
                sorter: (a, b) => {
                    if (a[key] < b[key]) return -1;
                    if (a[key] > b[key]) return 1;
                    if (a[key] === b[key]) return 0;
                    else return -1;
                },
            });
        } else if (key === "category") {
            columns.push({
                title: value[sessionStorage.getItem("language")],
                dataIndex: key,
                key: key,
                align: value.type,
                width: value.size,
                ellipsis: true,
                fixed: value.fixed,
                render: (text) => (
                    <>
                        <Tag color={text === "제안" ? "blue" : (text === "불만" ? "red" : (text === "훈계" ? "yellow" : "gray"))} key={text}>
                            {text}
                        </Tag>
                    </>
                ),
                sorter: (a, b) => {
                    if (a[key] < b[key]) return -1;
                    if (a[key] > b[key]) return 1;
                    if (a[key] === b[key]) return 0;
                    else return -1;
                },
            });
        } else {
            columns.push({
                title: value[sessionStorage.getItem("language")],
                dataIndex: key,
                key: key,
                align: value.type,
                width: value.size,
                ellipsis: true,
                fixed: value.fixed,
                sorter: (a, b) => {
                    if (a[key] < b[key]) return -1;
                    if (a[key] > b[key]) return 1;
                    if (a[key] === b[key]) return 0;
                    else return -1;
                },
            });
        }
    });

    useEffect(() => {
        Object.entries(th).forEach(([key, value], index) => {
            if (key === 'status') {
                columns.push({
                    title: value[sessionStorage.getItem("language")],
                    dataIndex: key,
                    key: key,
                    align: value.type,
                    width: value.size,
                    ellipsis: true,
                    fixed: value.fixed,
                    render: (text) => (
                        <>
                            <Tag color={text === "승인" ? "blue" : (text === "반려" ? "red" : "gray")} key={text}>
                                {text}
                            </Tag>
                        </>
                    ),
                    sorter: (a, b) => {
                        if (a[key] < b[key]) return -1;
                        if (a[key] > b[key]) return 1;
                        if (a[key] === b[key]) return 0;
                        else return -1;
                    },
                });
            } else if (key === "category") {
                columns.push({
                    title: value[sessionStorage.getItem("language")],
                    dataIndex: key,
                    key: key,
                    align: value.type,
                    width: value.size,
                    ellipsis: true,
                    fixed: value.fixed,
                    render: (text) => (
                        <>
                            <Tag color={text === "제안" ? "blue" : (text === "불만" ? "red" : (text === "훈계" ? "yellow" : "gray"))} key={text}>
                                {text}
                            </Tag>
                        </>
                    ),
                    sorter: (a, b) => {
                        if (a[key] < b[key]) return -1;
                        if (a[key] > b[key]) return 1;
                        if (a[key] === b[key]) return 0;
                        else return -1;
                    },
                });
            } else {
                columns.push({
                    title: value[sessionStorage.getItem("language")],
                    dataIndex: key,
                    key: key,
                    align: value.type,
                    width: value.size,
                    ellipsis: true,
                    fixed: value.fixed,
                    sorter: (a, b) => {
                        if (a[key] < b[key]) return -1;
                        if (a[key] > b[key]) return 1;
                        if (a[key] === b[key]) return 0;
                        else return -1;
                    },
                });
            }
        });
    }, [store_language])

    useEffect(() => {
        setData([])
        axios.defaults.baseURL = hotlineURL
        axios.get('/')
            .then((res) => {
                setHotlineList(res.data)
                res.data.forEach(element => {
                    if (element.confirm_date === null) {
                        setData(data => [...data, {
                            key: element.hotline_id,
                            ...element,
                            reg_date: element.reg_date?.slice(0, 10),
                        }])
                    } else {
                        setData(data => [...data, {
                            key: element.hotline_id,
                            ...element,
                            reg_date: element.reg_date?.slice(0, 10),
                            confirm_date: element.confirm_date?.slice(0, 16),
                        }])

                    }
                });
            })
    }, [hotlineReload])


    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [selectedRows, setSelectedRows] = useState([])
    const [sendDatas, setSendDatas] = useState([])
    const [alertVerifyOpen, setAlertVerifyOpen] = useState(false)

    const onSelectChange = (newSelectedRowKeys) => {
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
        onSelect: (record, selected, selectedRows) => {
            setSelectedRows(selectedRows);
        },
        onSelectAll: (selected, selectedRows, changeRows) => {
            setSelectedRows(selectedRows);
        },
    };
    const [whichFunc, setWhichFunc] = useState("")
    function checkList(params) {
        let check = true;
        selectedRows.map((element) => {
            if (
                element.status !== null
            ) {
                check = false;
                return check;
            }
        });
        return check;
    }
    function tableReload() {
        dispatch(handleHotlineReload(true))
        dispatch(handleHotlineReload(false))
    }

    function rejectApprove() {
        axios.defaults.baseURL = hotlineURL
        if (selectedRowKeys.length === 0) {
            props.setAlertFailedOpen(true);
            props.setAlertMessage(
                "항목을 선택해주세요"
            );
            return;
        }
        if (selectedRowKeys.length > 0 && checkList()) {
            axios.put('/confirms', {
                hotlineInfoList: selectedRows,
                status: whichFunc
            })
                .then((e) => {
                    props.setAlertSucOpen(true);
                    props.setAlertMessage(`선택한 항목들이 ${whichFunc}처리 되었습니다.`);
                    setAlertVerifyOpen(false);
                    tableReload();
                })
                .catch(() => {
                    props.setAlertFailedOpen(true);
                    props.setAlertMessage(
                        "등록에 실패하였습니다, 다시 시도해주세요."
                    );
                    setAlertVerifyOpen(false);
                    tableReload();
                })
        } else {
            props.setAlertFailedOpen(true);
            props.setAlertMessage(
                "처리가 된 항목이 포함되어 있습니다. 다시 한번 확인해주세요."
            );
            setAlertVerifyOpen(false);
            tableReload();
        }

    }
    // 삭제
    function deleteContent() {
        axios.defaults.baseURL = hotlineURL
        if (selectedRowKeys.length === 0) {
            props.setAlertFailedOpen(true);
            props.setAlertMessage(
                "항목을 선택해주세요"
            );
            return;
        }
        if (selectedRowKeys.length > 0) {
            axios.delete('/',
                {
                    data: {
                        hotlineInfoList: selectedRows,
                    }
                })
                .then((res) => {
                    props.setAlertSucOpen(true);
                    props.setAlertMessage("선택한 항목들이 삭제처리 되었습니다.");
                    setAlertVerifyOpen(false);
                    tableReload();
                })
                .catch((err) => {
                    props.setAlertFailedOpen(true);
                    props.setAlertMessage(
                        "삭제처리에 실패하였습니다, 다시 시도해주세요."
                    );
                    setAlertVerifyOpen(false);
                    tableReload();
                })
        } else {
            props.setAlertFailedOpen(true);
            props.setAlertMessage(
                "삭제처리에 실패하였습니다, 다시 시도해주세요."
            );
            setAlertVerifyOpen(false);
            tableReload();
        }
    }
    const languageTitle = {
        "핫라인": { ko: "핫라인", en: "HotLine", cn: "热线", jp: "ホットライン", vn: "đường dây nóng" },

    }
    return (
        <div>
            <header className="">
                <div className="mx-auto py-2 px-5">
                    <h1 className="text-4xl font-bold">{languageTitle.핫라인[sessionStorage.language]}</h1>
                </div>
            </header>
            <div className="my-5 text-right">
                <button
                    className="mr-2 w-20 justify-center py-1 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-700 hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700"
                    onClick={() => { setAlertVerifyOpen(true); setWhichFunc("delete") }}
                >
                    삭제
                </button>
                <button
                    className="mr-2 w-20 justify-center py-1 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-700 hover:bg-yellow-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-700"
                    onClick={() => { setAlertVerifyOpen(true); setWhichFunc("반려") }}
                >
                    반려
                </button>
                <button
                    className="w-20 justify-center py-1 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-teal-700 hover:bg-teal-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-700"
                    onClick={() => { setAlertVerifyOpen(true); setWhichFunc("승인") }}
                >
                    승인
                </button>
            </div>
            <main>
                <div className="">
                    <Table
                        rowClassName={(record, index) => record.status !== null ? 'hover:text-gray-400 dark:bg-gray-900 line-through cursor-pointer' : "cursor-pointer"}
                        rowSelection={rowSelection}
                        columns={columns}
                        dataSource={data}
                        pagination={{ pageSize: 10 }}
                        size="small"
                        onRow={(record, rowIndex, data) => {
                            return {
                                onClick: (event) => {
                                    navigate(`/HotlineDetail/${record.hotline_id}`, { state: record })
                                }, // click row
                                onDoubleClick: (event) => {
                                }, // double click row
                                onContextMenu: (event) => {
                                    event.preventDefault();
                                }, // right button click row
                                onMouseEnter: (event) => { }, // mouse enter row
                                onMouseLeave: (event) => { }, // mouse leave row
                            };
                        }}
                    />
                </div>
            </main>
            <AlertVerify
                open={alertVerifyOpen}
                setOpen={setAlertVerifyOpen}
                func={whichFunc === "delete" ? deleteContent : rejectApprove}
            />
        </div>
    )
}

export default Hotline