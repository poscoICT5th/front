import Aos from 'aos';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import SearchLogisticsImport from '../Search/SearchLogisticsImport';
import TableList from '../Table/TableList';
import { handleImportReload } from '../../store'


function LogisticsImport() {
  let logisticsImportURL = useSelector((state) => state.logisticsImportURL)
  let importReload = useSelector((state) => state.importReload)
  axios.defaults.baseURL = logisticsImportURL
  let dispatch = useDispatch();
  // useEffect
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  // useState
  const [logisticsImportList, setLogisticsImportList] = useState([])
  const [clickDelete, setClickDelete] = useState(false)
  const [datas, setDatas] = useState({
    instruction_no: "전체보기",
    status: "전체보기",
    lot_no: "전체보기",
    item_code: "전체보기",
    item_name: "전체보기",
    min_order_amount: 0,
    max_order_amount: 10000000,
    min_im_amount: 0,
    max_im_amount: 10000000,
    unit: "전체보기",
    min_weight: 0,
    max_weight: 10000000,
    min_thickness: 0,
    max_thickness: 10000000,
    min_height: 0,
    max_height: 10000000,
    min_width: 0,
    max_width: 10000000,
    industry_family: "전체보기",
    product_family: "전체보기",
    location: "전체보기",
    to_warehouse: "전체보기",
    customer: "전체보기",
    order_date: "전체보기",
    inst_reg_date: "전체보기",
    inst_deadline: "전체보기",
    done_date: "전체보기",
  })

  // 전체조회
  useEffect(() => {
    axios.get('/import')
      .then((res) => { setLogisticsImportList(res.data); })
  }, [])

  // 입고 조건검색
  const [clickSearch, setClickSearch] = useState(false)
  useEffect(() => {
    // if (clickSearch || importReload) {
    axios.get('/search', {
      params: datas
    })
      .then((res) => { setLogisticsImportList(res.data); setClickSearch(false); })
      .catch((err) => { console.log(err) })
    // }
  }, [clickSearch, importReload, datas])

  // 입고 되돌리기
  const [clickRollback, setClickRollback] = useState(false)
  const [rollBackList, setRollBackList] = useState([])
  const [rollBackCheckList, setRollBackCheckList] = useState([])

  function rollBackAxios(params) {
    console.log(rollBackList)
    axios.put('/import/rollback', {
      logiImportList: rollBackList
    }
    )
      .then((res) => {
        setClickRollback(false);
        alert("선택한 요청을 되돌렸습니다.(말이쁘게수정해야함)");
        dispatch(handleImportReload(true));
        dispatch(handleImportReload(false))
      })
      .catch((err) => { setClickRollback(false); })
  }
  async function rollBack() {
    setClickRollback(false)
    let rollBackPos = true;
    // 롤백할수 있는 목록들인지 체크중
    await rollBackCheckList.forEach((element) => {
      if (element.status !== "입고취소") {
        rollBackPos = false
        alert(element.instruction_no + "는 삭제되지 않은 지시입니다.")
      }
    })
    // 롤백할수있는 목록들이라면 axios 통신
    if (rollBackPos) {
      rollBackAxios()
    }
  }

  useEffect(() => {
    if (clickRollback) {
      rollBack();
    }
  }, [clickRollback])

  // 바코드 여러개출력
  const [clickBarcodePrint, setClickBarcodePrint] = useState(false)


  // const th = [
  //   { "instruction_no": 180 },
  //   { "status": 100 },
  //   { "lot_no": 180 },
  //   { "item_code": 100 },
  //   { "item_name": 300 },
  //   { "order_amount": 150 },
  //   { "im_amount": 120 },
  //   { "unit": 100 },
  //   { "weight": 100 },
  //   { "width": 100 },
  //   { "thickness": 100 },
  //   { "height": 100 },
  //   { "industry_family": 180 },
  //   { "product_family": 150 },
  //   { "location": 100 },
  //   { "to_warehouse": 125 },
  //   { "customer": 100 },
  //   { "order_date": 200 },
  //   { "inst_reg_date": 200 },
  //   { "inst_deadline": 200 },
  //   { "done_date": 200 },
  //   { "barcode": 500 },
  // ]
  const th = [
    { "ko": "지시번호", "en": "instruction_no", "cn": "指示编号", "jp": "指示番号", "vn": "số chỉ thị", "size": 300 },
    { "ko": "상태", "en": "status", "cn": "状态", "jp": "状態", "vn": "trạng thái", "size": 300 },
    { "ko": "lot번호", "en": "lot_no", "cn": "lot编号", "jp": "lot番号", "vn": "số lot", "size": 300 },
    { "ko": "제품코드", "en": "item_code", "cn": "产品代码", "jp": "製品コード", "vn": "mã sản phẩm", "size": 300 },
    { "ko": "제품명", "en": "item_name", "cn": "产品名称", "jp": "製品名", "vn": "Tên sản phẩm là", "size": 300 },
    { "ko": "주문량", "en": "order_amount", "cn": "订货量", "jp": "注文量", "vn": "lượng đặt hàng", "size": 300 },
    { "ko": "입고수량", "en": "im_amount", "cn": "入库数量", "jp": "入庫数量", "vn": "số lượng nhập kho", "size": 300 },
    { "ko": "단위", "en": "unit", "cn": "单位", "jp": "単位", "vn": "đơn vị", "size": 300 },
    { "ko": "무게", "en": "weight", "cn": "份量", "jp": "重さ", "vn": "trọng lượng", "size": 300 },
    { "ko": "넓이", "en": "width", "cn": "广度", "jp": "広さ", "vn": "bề rộng", "size": 300 },
    { "ko": "두께", "en": "thickness", "cn": "厚度", "jp": "厚さ", "vn": "độ dày", "size": 300 },
    { "ko": "높이", "en": "height", "cn": "高度 ", "jp": "高さ", "vn": "chiều cao", "size": 300 },
    { "ko": "산업군", "en": "industry_family", "cn": "产业群", "jp": "産業群", "vn": "lực lượng công nghiệp", "size": 300 },
    { "ko": "제품군", "en": "product_family", "cn": "产品群", "jp": "製品群", "vn": "dòng sản phẩm", "size": 300 },
    { "ko": "지역", "en": "location", "cn": "地域", "jp": "地域", "vn": "khu vực", "size": 300 },
    { "ko": "창고코드", "en": "to_warehouse", "cn": "仓库代码", "jp": "倉庫コード", "vn": "mã kho", "size": 300 },
    { "ko": "고객사", "en": "customer", "cn": "客户公司", "jp": "顧客会社", "vn": "công ty khách hàng", "size": 300 },
    { "ko": "주문일", "en": "order_date", "cn": "订货日", "jp": "注文日", "vn": "ngày đặt hàng", "size": 300 },
    { "ko": "지시등록일", "en": "inst_reg_date", "cn": "指示登记日", "jp": "指示登録日", "vn": "ngày đăng ký chỉ thị", "size": 300 },
    { "ko": "지시마감일", "en": "inst_deadline", "cn": "截止日期", "jp": "指示締切日", "vn": "ngày hết hạn chỉ thị", "size": 300 },
    { "ko": "완료일", "en": "done_date", "cn": "完成日期", "jp": "完了日", "vn": "ngày hoàn thành", "size": 300 },
    { "ko": "바코드", "en": "Barcode", "cn": "条形码", "jp": "バーコード.", "vn": "mã vạch", "size": 300 },


  ]
  return (
    <div data-aos="fade-up" className="">
      <div className="w-full mx-auto mb-10">
        <div className="font-bold text-2xl text-center my-3">입고 조회</div>
        {/* Search */}
        <div className="mt-5 md:mt-0 md:col-span-2">
          <SearchLogisticsImport
            setDatas={setDatas}
            datas={datas}
            setClickSearch={setClickSearch}
            clickSearch={clickSearch}
            setClickDelete={setClickDelete}
            clickDelete={clickDelete}
            setClickRollback={setClickRollback}
            setClickBarcodePrint={setClickBarcodePrint}
          />
        </div>

        {/* table */}
        <div className="mx-1 mt-2 text-center w-full">
          <TableList
            title={"logistics"}
            part="import"
            axiosURL={logisticsImportURL}
            th={th}
            dataList={logisticsImportList}
            datas={datas}
            clickDelete={clickDelete}
            deleteBodyName="logiImportList"
            setClickDelete={setClickDelete}
            setRollBackCheckList={setRollBackCheckList}
            rollBackCheckList={rollBackCheckList}
            setRollBackList={setRollBackList}
            clickBarcodePrint={clickBarcodePrint}
            setClickBarcodePrint={setClickBarcodePrint}
          />
        </div>
      </div>
    </div>
  )
}

export default LogisticsImport