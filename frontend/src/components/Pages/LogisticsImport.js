import Aos from 'aos';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import SearchLogisticsImport from '../Search/SearchLogisticsImport';
import TableLogisticsImport from '../Table/TableLogisticsImport';
import { CaretRightOutlined } from '@ant-design/icons';
import { Collapse } from 'antd';

function LogisticsImport() {
  let LogisticsImportURL = useSelector((state) => state.logisticsImportURL)
  axios.defaults.baseURL = LogisticsImportURL
  // useEffect
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const [click, setClick] = useState(false)
  // useEffect(() => {
  //   searchAll()
  // }, [click])

  // usestate
  const [logisticsImportList, setLogisticsImportList] = useState([])
  const [datas, setDatas] = useState({
    status: "전체보기",
    location: "전체보기",
    product_family: "전체보기",
    lot_no: "전체보기",
    item_no: "전체보기",
    item_name: "전체보기",
    to_warehouse: "전체보기",
    unit: "전체보기",
    min_weight: 0,
    max_weight: 10000000,
    min_thickness: 0,
    max_thickness: 10000000,
    min_height: 0,
    max_height: 10000000,
    min_order_amount: 0,
    max_order_amount: 10000000,
    min_im_amount: 0,
    max_im_amount: 10000000,
    min_width: 0,
    max_width: 10000000,
    target: "전체보기",
    industry_family: "전체보기",
    order_date: "전체보기",
    inst_reg_date_Date: "전체보기",
    inst_deadline: "전체보기",
    done_date: "전체보기",
  })
  // const th = [
  //   "status",
  //   "location",
  //   "instruction_no",
  //   "product_family",
  //   "lot_no",
  //   "item_no",
  //   "item_name",
  //   "amount",
  //   "weight",
  //   "unit",
  //   "target",
  //   "width",
  //   "thickness",
  //   "height",
  //   "order_amount",
  //   "im_amount",
  //   "to_warehouse",
  //   "order_date",
  //   "inst_reg_date",
  //   "inst_deadline",
  //   "done_date",
  // ]
  const [deleteDatas, setdeleteDatas] = useState("")
  // function
  // 입고 조건검색
  function search() {

    axios.get('/search', {
      params: datas
    })
      .then((res) => { setLogisticsImportList(res.data); console.log(datas) })
      .catch((err) => { console.log(datas) })
  }
  // 입고 전체조회
  function searchAll() {
    axios.get('/import')
      .then((res) => { setLogisticsImportList(res.data) })
    // .catch((err) => { alert(datas) })
  }
  // 입고요청 삭제
  function deleteRequests(ins_no) {
    axios.delete(`/import/${ins_no}`)
      .then((res) => { alert(res.status) })
  }
  const { Panel } = Collapse;

  return (
    <div data-aos="fade-up" className="">
      <div className="w-full mx-auto mb-10">
        <div className="font-bold text-2xl text-center my-3">입고 조회</div>
        <Collapse
          bordered={false}
          defaultActiveKey={['2']}
          expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
          className="site-collapse-custom-collapse"
        >
          <Panel header="검색" key="1" className="site-collapse-custom-panel bg-white">
            {/* Search */}
            <div className="mt-5 md:mt-0 md:col-span-2">
              <SearchLogisticsImport setDatas={setDatas} datas={datas} search={search} searchAll={searchAll} />
            </div>
          </Panel>
          <Panel header="검색결과" key="2" className="site-collapse-custom-panel bg-white">
            {/* table */}
            <div className="mx-1 mt-2 text-center w-full">
              <TableLogisticsImport logisticsImportList={logisticsImportList} datas={datas} setdeleteDatas={setdeleteDatas} deleteRequests={deleteRequests} click={click} setClick={setClick} />
            </div>
          </Panel>
        </Collapse>

      </div>
    </div>
  )
}

export default LogisticsImport