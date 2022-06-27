import React, { useEffect, useState } from 'react'
import { Table } from 'antd';
import { useSelector } from 'react-redux';
import moment from 'moment';
import axios from "axios";

function DashboardMove() {
  let logisticsMoveURL = useSelector((state) => state.logisticsMoveURL)
  let store_language = useSelector((state) => state.language)
  const [logisticsMoveList, setLogisticsMoveList] = useState([])

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
    inst_deadline: moment().format("YY-MM-DD"),
    done_date: "전체보기",
  })

  useEffect(() => {
    axios.defaults.baseURL = logisticsMoveURL
    axios.get('/search', {
      params: datas
    })
      .then((res) => { setLogisticsMoveList(res.data); })
      .catch((err) => { console.log(datas) })
  }, [])
  const th = [
    { "ko": "지시번호", "en": "instruction_no", "cn": "指示编号", "jp": "指示番号", "vn": "số chỉ thị", "size": 300 },
    { "ko": "상태", "en": "status", "cn": "状态", "jp": "状態", "vn": "trạng thái", "size": 300 },
    { "ko": "lot번호", "en": "lot_no", "cn": "lot编号", "jp": "lot番号", "vn": "số lot", "size": 300 },
    // { "ko": "제품코드", "en": "item_code", "cn": "产品代码", "jp": "製品コード", "vn": "mã sản phẩm", "size": 300 },
    { "ko": "제품명", "en": "item_name", "cn": "产品名称", "jp": "製品名", "vn": "Tên sản phẩm là", "size": 300 },
    { "ko": "이동량", "en": "move_amount", "cn": "移动量", "jp": "移動量", "vn": "lượng di chuyển", "size": 300 },
    // { "ko": "단위", "en": "unit", "cn": "单位", "jp": "単位", "vn": "đơn vị", "size": 300 },
    // { "ko": "무게", "en": "weight", "cn": "份量", "jp": "重さ", "vn": "trọng lượng", "size": 300 },
    // { "ko": "넓이", "en": "width", "cn": "广度", "jp": "広さ", "vn": "bề rộng", "size": 300 },
    // { "ko": "두께", "en": "thickness", "cn": "厚度", "jp": "厚さ", "vn": "độ dày", "size": 300 },
    // { "ko": "높이", "en": "height", "cn": "高度 ", "jp": "高さ", "vn": "chiều cao", "size": 300 },
    // { "ko": "지역", "en": "location", "cn": "地域", "jp": "地域", "vn": "khu vực", "size": 300 },
    { "ko": "from창고", "en": "from_warehouse", "cn": "from仓库", "jp": "from倉庫", "vn": "from nhà kho", "size": 300 },
    { "ko": "to창고", "en": "to_warehouse", "cn": "码头栈", "jp": "to倉庫", "vn": "kho chứa đồ", "size": 300 },
    // { "ko": "지시등록일", "en": "inst_reg_date", "cn": "指示登记日", "jp": "指示登録日", "vn": "ngày đăng ký chỉ thị", "size": 300 },
    // { "ko": "지시마감일", "en": "inst_deadline", "cn": "截止日期", "jp": "指示締切日", "vn": "ngày hết hạn chỉ thị", "size": 300 },
    // { "ko": "완료일", "en": "done_date", "cn": "完成日期", "jp": "完了日", "vn": "ngày hoàn thành", "size": 300 },
    // { "ko": "바코드", "en": "Barcode", "cn": "条形码", "jp": "バーコード.", "vn": "mã vạch", "size": 300 },
  ]

  const columns = []

  th.forEach(element => {
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
    th.forEach(element => {
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
  return (
    <div>
      <Table
        columns={columns}
        dataSource={logisticsMoveList}
        scroll={{
          x: 1500,
          y: 500,
        }}
      />
    </div>
  )
}

export default DashboardMove