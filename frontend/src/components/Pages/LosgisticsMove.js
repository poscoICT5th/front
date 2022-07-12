import axios from "axios";
import React, { useEffect, useState } from "react";
import SearchLogisticsMove from "../Search/SearchLogisticsMove";
import { useSelector } from "react-redux";
import TableList from "../Table/TableList";

function LosgisticsMove(props) {
  let logisticsMoveURL = useSelector((state) => state.logisticsMoveURL)
  let moveReload = useSelector((state) => state.moveReload)

  // usestate
  const [logisticsMoveList, setLogisticsMoveList] = useState([])
  const [clickDelete, setClickDelete] = useState(false)
  const [clickBarcodePrint, setClickBarcodePrint] = useState(false)
  const [alertVerifyOpen, setAlertVerifyOpen] = useState(false)
  const [clickButton, setClickButton] = useState("")
  const [selectedList, setSelectedList] = useState([])
  const [clickSearch, setClickSearch] = useState(false)
  const [datas, setDatas] = useState({
    instruction_no: "전체보기",
    status: "전체보기",
    lot_no: "전체보기",
    item_code: "전체보기",
    item_name: "전체보기",
    min_move_amount: 0,
    max_move_amount: 10000000,
    unit: "전체보기",
    min_weight: 0,
    max_weight: 10000000,
    min_width: 0,
    max_width: 10000000,
    min_thickness: 0,
    max_thickness: 10000000,
    min_height: 0,
    max_height: 10000000,
    location: "전체보기",
    from_warehouse: "전체보기",
    to_warehouse: "전체보기",
    inst_reg_date: "전체보기",
    inst_deadline: "전체보기",
    done_date: "전체보기",
  })
  const th = [
    { "ko": "지시번호", "en": "instruction_no", "cn": "指示编号", "jp": "指示番号", "vn": "số chỉ thị", "size": 300, type: "number" },
    { "ko": "상태", "en": "status", "cn": "状态", "jp": "状態", "vn": "trạng thái", "size": 300, type: "string" },
    { "ko": "lot번호", "en": "lot_no", "cn": "lot编号", "jp": "lot番号", "vn": "số lot", "size": 300, type: "string" },
    { "ko": "제품코드", "en": "item_code", "cn": "产品代码", "jp": "製品コード", "vn": "mã sản phẩm", "size": 300, type: "string" },
    { "ko": "제품명", "en": "item_name", "cn": "产品名称", "jp": "製品名", "vn": "Tên sản phẩm là", "size": 300, type: "string" },
    { "ko": "이동량", "en": "move_amount", "cn": "移动量", "jp": "移動量", "vn": "lượng di chuyển", "size": 300, type: "number" },
    { "ko": "단위", "en": "unit", "cn": "单位", "jp": "単位", "vn": "đơn vị", "size": 300, type: "number" },
    { "ko": "무게", "en": "weight", "cn": "份量", "jp": "重さ", "vn": "trọng lượng", "size": 300, type: "number" },
    { "ko": "넓이", "en": "width", "cn": "广度", "jp": "広さ", "vn": "bề rộng", "size": 300, type: "number" },
    { "ko": "두께", "en": "thickness", "cn": "厚度", "jp": "厚さ", "vn": "độ dày", "size": 300, type: "number" },
    { "ko": "높이", "en": "height", "cn": "高度 ", "jp": "高さ", "vn": "chiều cao", "size": 300, type: "number" },
    { "ko": "지역", "en": "location", "cn": "地域", "jp": "地域", "vn": "khu vực", "size": 300, type: "string" },
    { "ko": "from창고", "en": "from_warehouse", "cn": "from仓库", "jp": "from倉庫", "vn": "from nhà kho", "size": 300, type: "string" },
    { "ko": "to창고", "en": "to_warehouse", "cn": "码头栈", "jp": "to倉庫", "vn": "kho chứa đồ", "size": 300, type: "string" },
    { "ko": "지시등록일", "en": "inst_reg_date", "cn": "指示登记日", "jp": "指示登録日", "vn": "ngày đăng ký chỉ thị", "size": 300, type: "date" },
    { "ko": "지시마감일", "en": "inst_deadline", "cn": "截止日期", "jp": "指示締切日", "vn": "ngày hết hạn chỉ thị", "size": 300, type: "date" },
    { "ko": "완료일", "en": "done_date", "cn": "完成日期", "jp": "完了日", "vn": "ngày hoàn thành", "size": 300, type: "date" },
    { "ko": "바코드", "en": "Barcode", "cn": "条形码", "jp": "バーコード.", "vn": "mã vạch", "size": 300, type: "string" },
  ]

  // 창고이동 전체조회
  useEffect(() => {
    axios.defaults.baseURL = logisticsMoveURL
    axios.get('/move')
      .then((res) => { setLogisticsMoveList(res.data); console.log(res.data) })
      .catch((err) => { })
  }, [])

  // 창고이동조건조회
  useEffect(() => {
    axios.defaults.baseURL = logisticsMoveURL
    axios.get('/search', {
      params: datas
    })
      .then((res) => { setLogisticsMoveList(res.data); setClickSearch(false); console.log(datas) })
      .catch((err) => { console.log(err) })
  }, [clickSearch, moveReload, datas])

  return (
    <div data-aos="fade-up" className="">
      <div className="w-full mx-auto my-10">
        <div className="font-bold text-2xl text-center my-3">창고이동 조회</div>
        < div className="mt-5 md:mt-0 md:col-span-2" >
          <SearchLogisticsMove
            setDatas={setDatas}
            datas={datas}
            setClickSearch={setClickSearch}
            clickSearch={clickSearch}
            setClickDelete={setClickDelete}
            clickDelete={clickDelete}
            setClickBarcodePrint={setClickBarcodePrint}
            setAlertVerifyOpen={setAlertVerifyOpen}
            selectedList={selectedList}
            setAlertFailedOpen={props.setAlertFailedOpen}
            setAlertMessage={props.setAlertMessage}
            setClickButton={setClickButton}
          />
        </div >
        {/* table */}
        <div className="mx-1 mt-2 text-center w-full">
          <TableList
            title={"logistics"}
            part="move"
            axiosURL={logisticsMoveURL}
            th={th}
            dataList={logisticsMoveList}
            datas={datas}
            clickDelete={clickDelete}
            setClickDelete={setClickDelete}
            deleteBodyName="logiMoveList"
            setSelectedList={setSelectedList}
            clickBarcodePrint={clickBarcodePrint}
            setClickBarcodePrint={setClickBarcodePrint}
            alertVerifyOpen={alertVerifyOpen}
            setAlertVerifyOpen={setAlertVerifyOpen}
            alertSucOpen={props.alertSucOpen}
            alertFailedOpen={props.alertFailedOpen}
            setAlertSucOpen={props.setAlertSucOpen}
            setAlertSFailedOpen={props.setAlertSFailedOpen}
            setAlertMessage={props.setAlertMessage}
            clickButton={clickButton}
          />
        </div>
      </div>
    </div>
  );
}

export default LosgisticsMove;
