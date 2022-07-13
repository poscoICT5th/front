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
import BarcodePrint from "../Functions/BarcodePrint";
import Popup from "./Popup";
import AlertVerify from "../Common/AlertVerify";
import CreateMoveToWarehouse from "../Create/CreateMoveToWarehouse";

function TableList(props) {
  let dispatch = useDispatch();
  let store_language = useSelector((state) => state.language);
  let logisticsExportURL = useSelector((state) => state.logisticsExportURL);
  let logisticsMoveURL = useSelector((state) => state.logisticsMoveURL);
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
    props.setSelectedList(newSelectedRowKeys);
  }
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    onSelect: (record, selected, selectedRows) => {
      setselectedRows(selectedRows);
      if (props.title === "inventory") {
        props.setSelectedRowsList(selectedRows);
      }
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
      setselectedRows(selectedRows);
      if (props.title === "inventory") {
        props.setSelectedRowsList(selectedRows);
      }
    },
  };

  props.th.forEach((element) => {
    if (element.type === "number") {
      columns.push({
        title: element[sessionStorage.getItem("language")],
        dataIndex: element.en,
        key: element,
        align: "right",
        width: 100,
        sorter: (a, b) => {
          if (a[element.en] < b[element.en]) return -1;
          if (a[element.en] > b[element.en]) return 1;
          if (a[element.en] === b[element.en]) return 0;
          else return -1;
        },
      });
    } else if (element.type === "string") {
      columns.push({
        title: element[sessionStorage.getItem("language")],
        dataIndex: element.en,
        key: element,
        align: "left",
        width: 100,
        sorter: (a, b) => {
          if (a[element.en] < b[element.en]) return -1;
          if (a[element.en] > b[element.en]) return 1;
          if (a[element.en] === b[element.en]) return 0;
          else return -1;
        },
      });
    } else if (element.type === "date") {
      columns.push({
        title: element[sessionStorage.getItem("language")],
        dataIndex: element.en,
        key: element,
        align: "right",
        width: 100,
        sorter: (a, b) => {
          if (a[element.en] < b[element.en]) return -1;
          if (a[element.en] > b[element.en]) return 1;
          if (a[element.en] === b[element.en]) return 0;
          else return -1;
        },
      });
    }
  });

  useEffect(() => {
    props.th.forEach((element) => {
      if (element.type === "number") {
        columns.push({
          title: element[sessionStorage.getItem("language")],
          dataIndex: element.en,
          key: element,
          align: "right",
          width: 100,
          sorter: (a, b) => {
            if (a[element.en] < b[element.en]) return -1;
            if (a[element.en] > b[element.en]) return 1;
            if (a[element.en] === b[element.en]) return 0;
            else return -1;
          },
        });
      } else if (element.type === "string") {
        columns.push({
          title: element[sessionStorage.getItem("language")],
          dataIndex: element.en,
          key: element,
          align: "left",
          width: 100,
          sorter: (a, b) => {
            if (a[element.en] < b[element.en]) return -1;
            if (a[element.en] > b[element.en]) return 1;
            if (a[element.en] === b[element.en]) return 0;
            else return -1;
          },
        });
      } else if (element.type === "date") {
        columns.push({
          title: element[sessionStorage.getItem("language")],
          dataIndex: element.en,
          key: element,
          align: "right",
          width: 100,
          sorter: (a, b) => {
            if (a[element.en] < b[element.en]) return -1;
            if (a[element.en] > b[element.en]) return 1;
            if (a[element.en] === b[element.en]) return 0;
            else return -1;
          },
        });
      }
    });
  }, [store_language]);

  // rows 넣기
  props.dataList.forEach((element) => {
    if (props.part === "import") {
      if (element.done_date) {
        data.push({
          key: element.instruction_no,
          ...element,
          inst_deadline: element.inst_deadline.slice(0, 10),
          inst_reg_date: element.inst_reg_date.slice(0, 10),
          order_date: element.order_date.slice(0, 10),
          done_date: element.done_date.slice(0, 10),
          width: element.width.toFixed(2),
          weight: element.weight.toFixed(2),
          height: element.height.toFixed(2),
          thickness: element.thickness.toFixed(2),
        });
      } else {
        data.push({
          key: element.instruction_no,
          ...element,
          inst_deadline: element.inst_deadline.slice(0, 10),
          inst_reg_date: element.inst_reg_date.slice(0, 10),
          order_date: element.order_date.slice(0, 10),
          width: element.width.toFixed(2),
          weight: element.weight.toFixed(2),
          height: element.height.toFixed(2),
          thickness: element.thickness.toFixed(2),
        });

      }
    } else if (props.part === "export") {
      if (element.done_date) {
        data.push({
          key: element.instruction_no,
          ...element,
          inst_deadline: element.inst_deadline.slice(0, 10),
          inst_reg_date: element.inst_reg_date.slice(0, 10),
          order_date: element.order_date.slice(0, 10),
          done_date: element.done_date.slice(0, 10),
          width: element.width.toFixed(2),
          weight: element.weight.toFixed(2),
          height: element.height.toFixed(2),
          thickness: element.thickness.toFixed(2),
        });
      } else {
        data.push({
          key: element.instruction_no,
          ...element,
          inst_deadline: element.inst_deadline.slice(0, 10),
          inst_reg_date: element.inst_reg_date.slice(0, 10),
          order_date: element.order_date.slice(0, 10),
          width: element.width.toFixed(2),
          weight: element.weight.toFixed(2),
          height: element.height.toFixed(2),
          thickness: element.thickness.toFixed(2),
        });

      }
    } else if (props.part === "move") {
      if (element.done_date) {
        data.push({
          key: element.instruction_no,
          ...element,
          inst_deadline: element.inst_deadline.slice(0, 10),
          inst_reg_date: element.inst_reg_date.slice(0, 10),
          done_date: element.done_date.slice(0, 10),
          width: element.width.toFixed(2),
          weight: element.weight.toFixed(2),
          height: element.height.toFixed(2),
          thickness: element.thickness.toFixed(2),
        });
      } else {
        data.push({
          key: element.instruction_no,
          ...element,
          inst_deadline: element.inst_deadline.slice(0, 10),
          inst_reg_date: element.inst_reg_date.slice(0, 10),
          width: element.width.toFixed(2),
          weight: element.weight.toFixed(2),
          height: element.height.toFixed(2),
          thickness: element.thickness.toFixed(2),
        });
      }
    } else if (props.part === "inventory") {
      console.log(element)
      data.push({
        key: element.lot_no,
        ...element,
        inventory_date: element.inventory_date.slice(0, 10),
        warehouse_date: element.warehouse_date.slice(0, 10),
        width: element.width.toFixed(2),
        weight: element.weight.toFixed(2),
        height: element.height.toFixed(2),
        thickness: element.thickness.toFixed(2),
      });
    } else if (props.part === "warehouse") {
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
      if (props.title === 'logistics') {
        if (
          element.done_date !== null ||
          element.status.includes("중") ||
          element.status.includes("취소")
        ) {
          check = false;
          return check;
        }
      } else if (props.title === "warehouse") {
        // element
      } else if (props.title === "inventory") {
        if (
          element.state.includes("중") ||
          element.state === null
        ) {
          check = false;
          return check
        }



      }
    });
    return check;
  }
  // 삭제(멀티)
  function deleteMulti() {
    axios.defaults.baseURL = props.axiosURL;
    if (selectedRowKeys.length === 0) {
      props.setAlertFailedOpen(true);
      props.setAlertMessage(
        "항목을 선택해주세요"
      );
    }
    if (selectedRowKeys.length > 0 && checkDeletePos()) {
      axios
        .delete(`/${props.part}`, {
          data: {
            [props.deleteBodyName]: selectedRowKeys,
          },
        })
        .then((res) => {
          props.setAlertSucOpen(true);
          props.setAlertMessage("선택한 요청이 삭제되었습니다.");
          props.setAlertVerifyOpen(false);
          handleStores();
        })
        .catch((err) => {
          props.setAlertFailedOpen(true);
          props.setAlertMessage(
            "서버와의 통신에 실패하였습니다, 다시 시도해주세요."
          );
          props.setAlertVerifyOpen(false);
          handleStores();
        });
    } else {
      props.setAlertFailedOpen(true);
      props.setAlertMessage(
        "처리중이거나 완료된 요청은 삭제가 불가능합니다."
      );
      props.setAlertVerifyOpen(false);
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
    if (selectedRowKeys.length === 0) {
      props.setAlertFailedOpen(true);
      props.setAlertMessage(
        "항목을 선택해주세요"
      );
    }
    if (selectedRowKeys.length > 0 && checkRollBackPos()) {
      axios
        .put(`/${props.part}/rollback`, {
          [props.deleteBodyName]: selectedRowKeys,
        })
        .then((res) => {
          props.setAlertSucOpen(true);
          props.setAlertMessage("선택한 요청을 되돌렸습니다");
          props.setAlertVerifyOpen(false);
          handleStores();
        })
        .catch((err) => {
          props.setAlertFailedOpen(true);
          props.setAlertMessage(
            "서버와의 통신에 실패하였습니다, 다시 시도해주세요."
          );
          props.setAlertVerifyOpen(false);
          handleStores();
        });
    } else {
      props.setAlertFailedOpen(true);
      props.setAlertMessage(
        "삭제되지 않은 요청이 포함되어있어 다중선택으로 되돌리기가 불가능합니다."
      );
      props.setAlertVerifyOpen(false);
      handleStores();

    }
  }

  // 출고체크
  function checkExportMovePos() {
    let check = true;
    selectedRows.map((element) => {
      console.log(element);
      if (element.amount === 0 || element.state !== "") {
        check = false;
        return check;
      }
    });
    return check;
  }
  // 출고
  function exportMulti() {
    axios.defaults.baseURL = logisticsExportURL;
    if (selectedRowKeys.length === 0) {
      props.setAlertFailedOpen(true);
      props.setAlertMessage(
        "항목을 선택해주세요"
      );
    }
    if (selectedRowKeys.length > 0 && checkExportMovePos()) {
      axios
        .post('/export/multi', selectedRows)
        .then((res) => {
          props.setAlertSucOpen(true);
          props.setAlertMessage("출고요청이 등록되었습니다");
          props.setAlertVerifyOpen(false);
          handleStores();
        })
        .catch((err) => {
          props.setAlertFailedOpen(true);
          props.setAlertMessage(
            "등록에 실패하였습니다, 다시 시도해주세요."
          );
          props.setAlertVerifyOpen(false);
          handleStores();
        });
    } else {
      props.setAlertFailedOpen(true);
      props.setAlertMessage(
        "선택된 항목들은 출고등록이 불가합니다"
      );
      props.setAlertVerifyOpen(false);
      handleStores();

    }
  }

  // 창고이동등록
  // 함수
  const [toWarehouse_code, setToWarehouse_code] = useState("")
  const [toWarehouseModal, setToWarehouseModal] = useState(false)
  function moveMultiAxios(warehouse_code, inst_deadline) {
    console.log(warehouse_code, inst_deadline)
    axios.defaults.baseURL = logisticsMoveURL;
    if (selectedRowKeys.length === 0) {
      props.setAlertFailedOpen(true);
      props.setAlertMessage(
        "항목을 선택해주세요"
      );
    }
    if (selectedRowKeys.length > 0 && checkExportMovePos()) {
      axios
        .post('/move/multi', {
          logiMoveList: selectedRows,
          to_warehouse: warehouse_code,
          inst_deadline: inst_deadline,
        })
        .then((res) => {
          props.setAlertSucOpen(true);
          props.setAlertMessage("창고이동요청이 등록되었습니다");
          props.setAlertVerifyOpen(false);
          setToWarehouseModal(false)
          handleStores();
        })
        .catch((err) => {
          props.setAlertFailedOpen(true);
          props.setAlertMessage(
            "등록에 실패하였습니다, 다시 시도해주세요."
          );
          props.setAlertVerifyOpen(false);
          setToWarehouseModal(false)
          handleStores();
        });
    } else {
      props.setAlertFailedOpen(true);
      props.setAlertMessage(
        "선택된 항목들은 창고이동등록이 불가합니다"
      );
      props.setAlertVerifyOpen(false);
      setToWarehouseModal(false)
      handleStores();

    }
  }
  function moveMulti() {
    setToWarehouseModal(true)
  }
  return (
    <div>
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
              if (props.title !== "warehouse") {
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
          x: props.part === "import" ? 2500
            : (props.part === "export" ? 2300
              : props.part === "move" ? 2000
                : props.part === "warehouse" ? null
                  : props.part === "inventory" ? 2300
                    : null),
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
        func={props.clickButton === "delete"
          ? deleteMulti
          : (props.clickButton === "rollback")
            ? rollBackMulti
            : (props.clickButton === "export")
              ? exportMulti
              : props.clickButton === "move"
                ? moveMulti
                : null}
      />
      <CreateMoveToWarehouse
        setToWarehouse_code={setToWarehouse_code}
        toWarehouseModal={toWarehouseModal}
        setToWarehouseModal={setToWarehouseModal}
        moveMultiAxios={moveMultiAxios}
      />
    </div>
  );
}

export default TableList;
