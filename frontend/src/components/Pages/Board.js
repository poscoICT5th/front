import { Table, Tag } from 'antd';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import AlertVerify from '../Common/AlertVerify';
import './Board.css'
import { useNavigate } from 'react-router-dom';
import { handleBoardReload } from '../../store'
function Board(props) {
    let boardURL = useSelector((state) => state.boardURL);
    let store_language = useSelector((state) => state.language);
    let navigate = useNavigate();
    let dispatch = useDispatch();
    const [boardList, setBoardList] = useState([])
    const [data, setData] = useState([])
    const th = {
        status: { ko: "상태", en: "status", cn: "身份", jp: "地位", vn: "địa vị" },
        category: { ko: "카테고리", en: "category", cn: "类别", jp: "カテゴリ", vn: "Phân loại" },
        title: { ko: "제목", en: "title", cn: "标题", jp: "タイトル", vn: "Tiêu đề" },
        writer: { ko: "작성자", en: "writer", cn: "作家", jp: "作家さん", vn: "Biên kịch." },
        content: { ko: "내용", en: "content", cn: "内容", jp: "内容", vn: "bằng lòng" },
        reg_date: { ko: "등록일", en: "Registration date", cn: "登记日期", jp: "登録年月日", vn: "Ngày đăng ký" },
        confirm_date: { ko: "처리일", en: "Processing date", cn: "处理日期", jp: "処理日", vn: "Ngày xử lý" },
    }
    let columns = [
        {
            title: th["status"][sessionStorage.getItem('language')],
            dataIndex: "status",
            key: "status",
            align: "center",
            sorter: (a, b) => {
                if (a < b) return -1;
                if (a > b) return 1;
                if (a === b) return 0;
                else return -1;
            },
            render: (text) => (
                <>
                    <Tag color={text === "승인" ? "blue" : (text === "반려" ? "red" : "gray")} key={text}>
                        {text}
                    </Tag>
                </>
            ),
        },
        {
            title: th["category"][sessionStorage.getItem('language')],
            dataIndex: "category",
            key: "category",
            align: "center",
            sorter: (a, b) => {
                if (a < b) return -1;
                if (a > b) return 1;
                if (a === b) return 0;
                else return -1;
            },
            render: (text) => (
                <>
                    <Tag color={text === "제안" ? "blue" : (text === "불만" ? "red" : (text === "훈계" ? "yellow" : "gray"))} key={text}>
                        {text}
                    </Tag>
                </>
            ),
        },
        {
            title: th["title"][sessionStorage.getItem('language')],
            dataIndex: "title",
            key: "title",
            align: "center",
            sorter: (a, b) => {
                if (a < b) return -1;
                if (a > b) return 1;
                if (a === b) return 0;
                else return -1;
            },
            render: (text) => <div className='font-bold'>{text}</div>,
        },
        {
            title: th["writer"][sessionStorage.getItem('language')],
            dataIndex: "writer",
            key: "writer",
            align: "center",
            sorter: (a, b) => {
                if (a < b) return -1;
                if (a > b) return 1;
                if (a === b) return 0;
                else return -1;
            },
        },
        {
            title: th["reg_date"][sessionStorage.getItem('language')],
            dataIndex: "reg_date",
            key: "reg_date",
            align: "right",
            sorter: (a, b) => {
                if (a < b) return -1;
                if (a > b) return 1;
                if (a === b) return 0;
                else return -1;
            },
        },
        {
            title: th["confirm_date"][sessionStorage.getItem('language')],
            dataIndex: "confirm_date",
            key: "confirm_date",
            align: "right",
            sorter: (a, b) => {
                if (a < b) return -1;
                if (a > b) return 1;
                if (a === b) return 0;
                else return -1;
            },
        }
    ];
    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        columns = [
            {
                title: th["status"][sessionStorage.getItem('language')],
                dataIndex: "status",
                key: "status",
                align: "center",
                sorter: (a, b) => {
                    if (a < b) return -1;
                    if (a > b) return 1;
                    if (a === b) return 0;
                    else return -1;
                },
                render: (text) => (
                    <>
                        <Tag color={text === "승인" ? "blue" : (text === "반려" ? "red" : "gray")} key={text}>
                            {text}
                        </Tag>
                    </>
                ),
            },
            {
                title: th["category"][sessionStorage.getItem('language')],
                dataIndex: "category",
                key: "category",
                align: "center",
                sorter: (a, b) => {
                    if (a < b) return -1;
                    if (a > b) return 1;
                    if (a === b) return 0;
                    else return -1;
                },
                render: (text) => (
                    <>
                        <Tag color={text === "제안" ? "blue" : (text === "불만" ? "red" : (text === "훈계" ? "yellow" : "gray"))} key={text}>
                            {text}
                        </Tag>
                    </>
                ),
            },
            {
                title: th["title"][sessionStorage.getItem('language')],
                dataIndex: "title",
                key: "title",
                align: "center",
                sorter: (a, b) => {
                    if (a < b) return -1;
                    if (a > b) return 1;
                    if (a === b) return 0;
                    else return -1;
                },
                render: (text) => <div className='font-bold'>{text}</div>,
            },
            {
                title: th["writer"][sessionStorage.getItem('language')],
                dataIndex: "writer",
                key: "writer",
                align: "center",
                sorter: (a, b) => {
                    if (a < b) return -1;
                    if (a > b) return 1;
                    if (a === b) return 0;
                    else return -1;
                },
            },
            {
                title: th["reg_date"][sessionStorage.getItem('language')],
                dataIndex: "reg_date",
                key: "reg_date",
                align: "right",
                sorter: (a, b) => {
                    if (a < b) return -1;
                    if (a > b) return 1;
                    if (a === b) return 0;
                    else return -1;
                },
            },
            {
                title: th["confirm_date"][sessionStorage.getItem('language')],
                dataIndex: "confirm_date",
                key: "confirm_date",
                align: "right",
                sorter: (a, b) => {
                    if (a < b) return -1;
                    if (a > b) return 1;
                    if (a === b) return 0;
                    else return -1;
                },
            }
        ];
    }, [store_language])


    useEffect(() => {
        setData([])
        axios.defaults.baseURL = boardURL
        axios.get('/')
            .then((res) => {
                setBoardList(res.data)
                res.data.forEach(element => {
                    console.log(element)
                    if (element.confirm_date === null) {
                        setData(data => [...data, {
                            key: element.hotline_id,
                            ...element,
                            reg_date: element.reg_date.slice(0, 10),
                        }])
                    } else {
                        setData(data => [...data, {
                            key: element.hotline_id,
                            ...element,
                            reg_date: element.reg_date.slice(0, 10),
                            confirm_date: element.confirm_date.slice(0, 10),
                        }])

                    }
                });
            })
    }, [])


    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [selectedRows, setSelectedRows] = useState([])
    const [alertVerifyOpen, setAlertVerifyOpen] = useState(false)

    const onSelectChange = (newSelectedRowKeys) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
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
                element.status === null
            ) {
                check = false;
                return check;
            }
        });
        return check;
    }
    function tableReload(params) {
        dispatch(handleBoardReload(true))
        dispatch(handleBoardReload(false))
    }
    // 반려
    function reject(params) {
        axios.defaults.baseURL = boardURL
        if (selectedRowKeys.length === 0) {
            props.setAlertFailedOpen(true);
            props.setAlertMessage(
                "항목을 선택해주세요"
            );
            return;
        }
        if (selectedRowKeys.length > 0 && checkList()) {
            axios.put('/confirms', {
                hotlineIDList: selectedRowKeys,
                status: "반려"
            })
                .then((e) => {
                    props.setAlertSucOpen(true);
                    props.setAlertMessage("선택한 항목들이 반려처리 되었습니다.");
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
                "등록에 실패하였습니다, 다시 시도해주세요."
            );
            setAlertVerifyOpen(false);
            tableReload();
        }

    }
    // 승인
    function approve(params) {
        axios.defaults.baseURL = boardURL
        if (selectedRowKeys.length === 0) {
            props.setAlertFailedOpen(true);
            props.setAlertMessage(
                "항목을 선택해주세요"
            );
            return;
        }
        if (selectedRowKeys.length > 0 && checkList()) {
            axios.put('/confirms', {
                hotlineIDList: selectedRowKeys,
                status: "승인"
            })
                .then((res) => {
                    props.setAlertSucOpen(true);
                    props.setAlertMessage("선택한 항목들이 승인처리 되었습니다.");
                    setAlertVerifyOpen(false);
                    tableReload();
                })
                .catch((err) => {
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
                "요청처리에 실패하였습니다, 다시 시도해주세요."
            );
            setAlertVerifyOpen(false);
            tableReload();
        }
    }
    // 삭제
    function deleteContent(params) {
        axios.defaults.baseURL = boardURL
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
                        hotlineIDList: selectedRowKeys,
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
                        "등록에 실패하였습니다, 다시 시도해주세요."
                    );
                    setAlertVerifyOpen(false);
                    tableReload();
                })
        } else {
            props.setAlertFailedOpen(true);
            props.setAlertMessage(
                "등록에 실패하였습니다, 다시 시도해주세요."
            );
            setAlertVerifyOpen(false);
            tableReload();
        }
    }
    return (
        <div>
            <header className="">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold">Board</h1>
                </div>
            </header>
            <div className="my-5 text-right">
                <button
                    className="mr-2 w-20 justify-center py-1 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500"
                    onClick={() => { setAlertVerifyOpen(true); setWhichFunc("delete") }}
                >
                    삭제
                </button>
                <button
                    className="mr-2 w-20 justify-center py-1 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500"
                    onClick={() => { setAlertVerifyOpen(true); setWhichFunc("reject") }}
                >
                    반려
                </button>
                <button
                    className="w-20 justify-center py-1 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-lime-500 hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500"
                    onClick={() => { setAlertVerifyOpen(true); setWhichFunc("approve") }}
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
                                    console.log(record)
                                    navigate(`/BoardDetail/${record.hotline_id}`, { state: record })
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
                func={whichFunc === "reject" ? reject : (whichFunc === "approve" ? approve : deleteContent)}
            />
        </div>
    )
}

export default Board