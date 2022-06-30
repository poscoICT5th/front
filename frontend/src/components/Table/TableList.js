import React, { useEffect, useState } from "react";
import { Table } from "antd";
import axios from "axios";
import Detail from "../Detail/Detail";
import { useSelector, useDispatch } from "react-redux";
import {
  handleImportReload,
  handleExportReload,
  handleMoveReload,
  handleWarehouseReload,
  handleInventoryReload,
} from "../../store";
import InventoryMix from "../Common/InventoryMix";
import BarcodePrint from "../Functions/BarcodePrint";
import Popup from "./Popup";
import Invenupdate from "../Common/Invenupdate";

function TableList(props) {
  let dispatch = useDispatch();
  let store_language = useSelector((state) => state.language);
  const columns = [];
  const data = [];

  // select
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [selectedRows, setselectedRows] = useState([]); //선택한 행을 통째로 받아오기.
  const [openDetail, setOpenDetail] = useState(false);

  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
    props.setRollBackList(newSelectedRowKeys);
    console.log("selectedRowKeys changed: ", selectedRowKeys); //이 키를 받아서 모달창에 띄워라 ..
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    onSelect: (record, selected, selectedRows) => {
      setselectedRows(selectedRows); //여기서 찍어보니까 된다.
      // rollback
      props.setRollBackCheckList(selectedRows);
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
      setselectedRows(selectedRows); //여기서 찍어보니까 된다.
      props.setRollBackCheckList(selectedRows);
    },
  };

  props.th.forEach((element) => {
    columns.push({
      title: element[sessionStorage.getItem("language")],
      dataIndex: element.en,
      key: element,
      // width: element.size,
      align: "center",
      // sorter: (a, b) => a[element.en] - b[element.en],
      sorter: (a, b) => {
        if (a[element.en] < b[element.en]) return -1;
        if (a[element.en] > b[element.en]) return 1;
        if (a[element.en] === b[element.en]) return 0;
        else return -1;
      },
    });
  });

  function handleStores() {
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
  }

  useEffect(() => {
    props.th.forEach((element) => {
      columns.push({
        title: element[sessionStorage.getItem("language")],
        dataIndex: element.en,
        key: element,
        // width: element.size,
        align: "center",
        sorter: (a, b) => a[element.en] - b[element.en],
      });
    });
  }, [store_language]);

  // rows 넣기
  props.dataList.forEach((element) => {
    if (props.title === "logistics") {
      data.push({
        key: element.instruction_no,
        ...element,
        Barcode: <BarcodePrint items={[element]} />,
      });
    } else if (props.title === "inventory") {
      data.push({ key: element.lot_no, ...element });
    } else if (props.title === "warehouse") {
      data.push({ key: element.warehouse_code, ...element });
    }
  });

  // 삭제할수 있는지 체크하는 함수
  function checkDeletePos() {
    let check = true;
    props.rollBackCheckList.map((element) => {
      console.log(element);
      if (element.done_date !== null || element.status.includes("중")) {
        console.log("includes가 적용되고있는건가");
        check = false;
        return check;
      }
    });
    return check;
  }
  // 삭제(멀티)
  useEffect(() => {
    axios.defaults.baseURL = props.axiosURL;
    if (selectedRowKeys.length > 0 && props.clickDelete && checkDeletePos()) {
      console.log(checkDeletePos());
      axios
        .delete(`/${props.part}`, {
          data: {
            [props.deleteBodyName]: selectedRowKeys,
          },
        })
        .then((res) => {
          alert("suc");
          props.setClickDelete(false);
          handleStores();
          props.setOpenCreate(false);
        })
        .catch((err) => {
          props.setClickDelete(false);
        });
    } else if (
      selectedRowKeys.length > 0 &&
      props.clickDelete &&
      checkDeletePos() === false
    ) {
      alert("처리중이거나 완료된 요청은 삭제가 불가능합니다.");
      console.log(checkDeletePos());
      props.setClickDelete(false);
      handleStores();
    }
  }, [props.clickDelete]);

  const [detailData, setDetailData] = useState({});
  //강화 !!
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [popupXY, setPopupXY] = useState({
    X: 0,
    Y: 0,
  });
  const [popupData, setPopupData] = useState({});
  return (
    <div>
      {props.title === "inventory" ? (
        <div>
            {
                props.title === "inventory"
                    ? <div>
                        <InventoryMix
                            selectedRowKeys={selectedRowKeys}
                            selectedRows={selectedRows}
                        />
                        <Invenupdate
                            selectedRowKeys={selectedRowKeys}
                            selectedRows={selectedRows}
                        />
                    </div>
                    : null
            }
            <Table
                rowSelection={rowSelection}
                onRow={(record, rowIndex, data) => {
                    return {
                        onClick: event => { setVisiblePopup(false) }, // click row
                        onDoubleClick: event => { setDetailData(record); setOpenDetail(true) }, // double click row
                        onContextMenu: event => {
                            event.preventDefault();
                            if (!["warehouse"].includes(props.title)) {
                                setPopupXY({ ...popupXY, "X": event.pageX, "Y": event.pageY })
                                setVisiblePopup(true)
                                setPopupData(record)
                            }
                        }, // right button click row
                        onMouseEnter: event => { }, // mouse enter row
                        onMouseLeave: event => {
                            if (event.pageY > popupXY.Y - 20 || event.pageY < popupXY.Y + 20) {
                                setVisiblePopup(true)
                            }
                        }, // mouse leave row
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
            />
            <Popup
                visiblePopup={visiblePopup}
                popupXY={popupXY}
                popupData={[popupData]}
                title={props.title}
                clickBarcodePrint={props.clickBarcodePrint}
                setClickBarcodePrint={props.setClickBarcodePrint}
            />
            <Detail openDetail={openDetail}
                setOpenDetail={setOpenDetail}
                detailData={detailData}
                title={props.title}
            />
            <div className="hidden">
                <BarcodePrint
                    items={selectedRows}
                    clickBarcodePrint={props.clickBarcodePrint}
                    setClickBarcodePrint={props.setClickBarcodePrint}
                />
            </div>
          <InventoryMix
            selectedRowKeys={selectedRowKeys}
            selectedRows={selectedRows}
          />
          <Invenupdate
            selectedRowKeys={selectedRowKeys}
            selectedRows={selectedRows}
          />
        </div>
      ) : null}
      <Table
        rowSelection={rowSelection}
        onRow={(record, rowIndex, data) => {
          return {
            onClick: (event) => {
              setVisiblePopup(false);
            }, // click row
            onDoubleClick: (event) => {
              setDetailData(record);
              setOpenDetail(true);
            }, // double click row
            onContextMenu: (event) => {
              event.preventDefault();
              if (!["inventory", "warehouse"].includes(props.title)) {
                setPopupXY({ ...popupXY, X: event.pageX, Y: event.pageY });
                setVisiblePopup(true);
                setPopupData(record);
              }
            }, // right button click row
            onMouseEnter: (event) => {}, // mouse enter row
            onMouseLeave: (event) => {}, // mouse leave row
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
      />
      <Popup
        visiblePopup={visiblePopup}
        popupXY={popupXY}
        popupData={[popupData]}
        clickBarcodePrint={props.clickBarcodePrint}
        setClickBarcodePrint={props.setClickBarcodePrint}
      />
      <Detail
        openDetail={openDetail}
        setOpenDetail={setOpenDetail}
        detailData={detailData}
        title={props.title}
      />
      <div className="hidden">
        <BarcodePrint
          items={selectedRows}
          clickBarcodePrint={props.clickBarcodePrint}
          setClickBarcodePrint={props.setClickBarcodePrint}
        />
      </div>
    </div>
  );
}

export default TableList;
