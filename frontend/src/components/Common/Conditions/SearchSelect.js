import React, { useEffect, useState } from "react";
import { Select } from "antd";
import { useSelector } from "react-redux";
import Invenupdate from "../Invenupdate";
function SearchSelect(props) {
  const { Option } = Select;
  const options = [];
  //console.log(props.selectData)
  for (let i = 0; i < props.selectData.length; i++) {
    options.push(
      <Option key={props.selectData[i]}>{props.selectData[i]}</Option>
    );
  }
  const handleChange = (value) => {
    props.setDatas({ ...props.datas, [props.name]: value });
  };
  // label 언어설정
  let store_language = useSelector((state) => state.language);
  const [label, setLabel] = useState(props.ko);
  useEffect(() => {
    if (sessionStorage.getItem("language") === "ko") {
      setLabel(props.ko);
    } else if (sessionStorage.getItem("language") === "en") {
      setLabel(props.name);
    } else if (sessionStorage.getItem("language") === "cn") {
      setLabel(props.cn);
    } else if (sessionStorage.getItem("language") === "jp") {
      setLabel(props.jp);
    } else if (sessionStorage.getItem("language") === "vn") {
      setLabel(props.vn);
    }
  }, [store_language]);

  useEffect(() => {
    if (sessionStorage.getItem("language") === "ko") {
      setLabel(props.ko);
    } else if (sessionStorage.getItem("language") === "en") {
      setLabel(props.name);
    } else if (sessionStorage.getItem("language") === "cn") {
      setLabel(props.cn);
    } else if (sessionStorage.getItem("language") === "jp") {
      setLabel(props.jp);
    } else if (sessionStorage.getItem("language") === "vn") {
      setLabel(props.vn);
    }
  }, []);

  function onChangeInput(value) {
    //console.log(value);
    if (props.purpose === "search" && value === undefined) {
      props.setDatas({ ...props.datas, [props.name]: "전체보기" });
    } else {
      props.setDatas({ ...props.datas, [props.name]: value });
    }
  }
  function onChangeInput2(value) {
    if (props.datas.stock_quality_status === "합격") {
      //합격 선택했을 때 상태사유에 null 값을 넣기
      props.setDatas({ ...props.datas, [props.name]: "" });
    } else {
      props.setDatas({ ...props.datas, [props.name]: value });
    }
  }

  return (
    <div className={"col-span-" + props.grid}>
      <label className="block text-sm font-medium">{label}</label>
      {props.purpose === "inventory" ? (
        <div className="col-span-2">
          <Select
            showSearch
            allowClear
            style={{
              width: "100%",
            }}
            placeholder={label}
            defaultValue={[]}
            onChange={(e) => {
              onChangeInput2(e); //선택한 '합격'
            }}
            disabled={
              props.datas.stock_quality_status === "합격" &&
              props.name === "status_cause"
            }
          >
            {options}
          </Select>
        </div>
      ) : (
        <div className="col-span-2">
          <Select
            showSearch
            allowClear
            style={{
              width: "100%",
            }}
            placeholder={label}
            defaultValue={[]}
            onChange={(e) => {
              onChangeInput(e);
            }}
          >
            {options}
          </Select>
        </div>
      )}
    </div>
  );
}

export default SearchSelect;
