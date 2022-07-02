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
import AlertVerify from "../Common/AlertVerify";

function TableList(props) {
  let dispatch = useDispatch();
  let store_language = useSelector((state) => state.language);
  const columns = [];
  const data = [];
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [selectedRows, setselectedRows] = useState([]); //선택한 행을 통째로 받아오기.
  const [openDetail, setOpenDetail] = useState(false);
  const [detailData, setDetailData] = useState({});
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [popupXY, setPopupXY] = useState({
    X: 0,
    Y: 0,
  });
  const [popupData, setPopupData] = useState({});

  function onSelectChange(newSelectedRowKeys) {
    setSelectedRowKeys(newSelectedRowKeys);
    props.setSelectedList(newSelectedRowKeys)
  }
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    onSelect: (record, selected, selectedRows) => {
      setselectedRows(selectedRows);
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
      setselectedRows(selectedRows);
    },
  };

  props.th.forEach((element) => {
    columns.push({
      title: element[sessionStorage.getItem("language")],
      dataIndex: element.en,
      key: element,
      align: "center",
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
        align: "center",
        sorter: (a, b) => {
          if (a[element.en] < b[element.en]) return -1;
          if (a[element.en] > b[element.en]) return 1;
          if (a[element.en] === b[element.en]) return 0;
          else return -1;
        },
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
  // 삭제할수 있는지 체크하는 함수
  function checkDeletePos() {
    let check = true;
    selectedRows.map((element) => {
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
  function deleteMulti() {
    axios.defaults.baseURL = props.axiosURL;
    if (selectedRowKeys.length > 0 && checkDeletePos()) {
      axios
        .delete(`/${props.part}`, {
          data: {
            [props.deleteBodyName]: selectedRowKeys,
          },
        })
        .then((res) => {
          props.setAlertSucOpen(true)
          props.setAlertMessage("선택한 요청이 삭제되었습니다.")
          props.setAlertVerifyOpen(false)
          handleStores();
        })
        .catch((err) => {
          props.setAlertFailedOpen(true)
          props.setAlertMessage("서버와의 통신에 실패하였습니다, 다시 시도해주세요.")
        });
    } else if (
      selectedRowKeys.length > 0 &&
      checkDeletePos() === false
    ) {
      alert("처리중이거나 완료된 요청은 삭제가 불가능합니다.");
      handleStores();
    }
  }
  // 롤백
  function checkRollBackPos() {
    let check = true;
    selectedRows.map((element) => {
      console.log(element);
      if (!element.status.includes("취소")) {
        check = false;
        return check;
      }
    });
    return check;
  }
  function rollBackMulti() {
    axios.defaults.baseURL = props.axiosURL;
    if (selectedRowKeys.length > 0 && checkRollBackPos()) {
      axios
        .put(`/${props.part}/rollback`, {
          [props.deleteBodyName]: selectedRowKeys,
        })
        .then((res) => {
          props.setAlertSucOpen(true)
          props.setAlertMessage("선택한 요청을 되돌렸습니다")
          props.setAlertVerifyOpen(false)
          handleStores();
        })
        .catch((err) => {
          props.setAlertFailedOpen(true)
          props.setAlertMessage("서버와의 통신에 실패하였습니다, 다시 시도해주세요.")
        });
    } else if (
      selectedRowKeys.length > 0 &&
      checkRollBackPos() === false
    ) {
      alert("삭제되지 않은 요청이 포함되어있어 다중선택으로 되돌리기가 불가능합니다.");
      handleStores();
    }
  }

  return (
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
            /></div>
          : null
      }

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
              if (!["warehouse"].includes(props.title)) {
                setPopupXY({ ...popupXY, X: event.pageX, Y: event.pageY });
                setVisiblePopup(true);
                setPopupData(record);
              }
            }, // right button click row
            onMouseEnter: (event) => { }, // mouse enter row
            onMouseLeave: (event) => { }, // mouse leave row
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
        title={props.title}
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
      <AlertVerify
        open={props.alertVerifyOpen}
        setOpen={props.setAlertVerifyOpen}
        func={
          props.clickButton === "delete"
            ? deleteMulti
            : rollBackMulti}
      />
    </div>
  );
}

export default TableList;
