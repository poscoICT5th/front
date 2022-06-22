import React, { useEffect, useState } from "react";
import { Form, Input, notification, Button, Modal } from "antd";
import { BorderTopOutlined } from "@ant-design/icons";
import axios from "axios";
import { useSelector } from "react-redux";

function PageButtonGroup(props) {
  let inventoryURL = useSelector((state) => state.inventoryURL);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [successVisible, setSuccessVisible] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    if (props.selectedRowKeys.length > 5 || props.selectedRowKeys.length < 2) {
      openNotification("top");
    } else {
      setIsModalVisible(true);
    }
    //클릭하면 모달창 띄우기
  };

  //input
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };

  const onFinish = (values) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };
  //예외처리
  const openNotification = (placement) => {
    notification.info({
      message: `X강화 금지X`,
      description: "강화 갯수는 2~5개 사이입니다!",
      placement,
    });
  };
  //usestate
  const [consumedProductsList, setConsumedProductsList] = useState([]);
  const [consumedList, setConsumedList] = useState([]);
  const [newProductList, setNewProductList] = useState({
    industry_family: "",
    stock_type: "",
    product_family: "",
    state: "",
    location: "",
    warehouse_code: "",
    item_code: "",
    item_name: "",
    amount: "",
    unit: "",
    weight: "",
    width: "",
    thickness: "",
    height: "",
    customer: "",
    stock_quality_status: "",
    status_cause: "",
  });
  useEffect(() => {
    if (props.selectedRows.length > 0) {
      setNewProductList({
        ...newProductList,
        industry_family: props.selectedRows[0].industry_family,
        stock_type: props.selectedRows[0].stock_type,
        product_family: props.selectedRows[0].product_family,
        state: "완제품",
        location: props.selectedRows[0].location,
        warehouse_code: props.warehouse_code,
        item_code: props.selectedRows[0].item_code,
        item_name: "",
        amount: 0,
        unit: props.selectedRows[0].unit,
        weight: props.selectedRows[0].weight,
        width: props.selectedRows[0].width,
        thickness: props.selectedRows[0].thickness,
        height: props.selectedRows[0].height,
        customer: "미정",
        stock_quality_status: props.selectedRows[0].stock_quality_status,
        status_cause: props.selectedRows[0].status_cause,
      });
    }
  }, [props.selectedRows]);

  console.log(props.selectedRows);
  let data = {
    consumedProducts: consumedProductsList,
    newProduct: newProductList,
  };
  //axios
  function mixregist() {
    axios.defaults.baseURL = inventoryURL;
    console.log(data);
    axios
      .post("/produce", data)
      .then((res) => {
        alert("성공");
        setSuccessVisible(true);
      })
      .catch((err) => {
        alert("실패");
        setSuccessVisible(true);
      });
  }
  function createValue(lot_no, amount) {
    return { lot_no: lot_no, amount: amount };
  }

  async function setValue(lot_no, amount) {
    if (!consumedList.includes(lot_no)) {
      setConsumedList((consumedList) => [...consumedList, lot_no]);
      setConsumedProductsList((consumedProducts) => [
        ...consumedProducts,
        createValue(lot_no, amount),
      ]);
    } else {
      const res = await setConsumedList((consumedList) =>
        consumedList.filter((value, index) => value !== lot_no)
      );
      setConsumedProductsList((consumedProducts) =>
        consumedProducts.filter((value, index) => value.lot_no !== lot_no)
      );
      setConsumedList((consumedList) => [...consumedList, lot_no]);
      setConsumedProductsList((consumedProducts) => [
        ...consumedProducts,
        createValue(lot_no, amount),
      ]);
    }
  }

  return (
    <div>
      <div className="text-right">
        {/* 강화버튼 */}
        <Button
          onClick={showModal}
          type="button"
          className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 
          shadow-sm px-4 py-2 dark:bg-gray-700 text-base font-medium dark:text-white hover:bg-gray-50 
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        >
          재료강화
        </Button>
        {/* 첫번째모달 */}
        <Modal
          title="강화 시작!!!"
          visible={isModalVisible}
          onOk={() => {
            setIsModalVisible(true);
          }}
          onCancel={() => {
            setIsModalVisible(false);
          }}
        >
          <Form
            {...layout}
            form={form}
            name="control-hooks"
            onFinish={mixregist}
          >
            {
              //input 에 lot_no 를 자동으로 채워준다.
              props.selectedRows.length < 6 ? (
                props.selectedRows.map((value) => {
                  return (
                    <Form.Item
                      name={value.lot_no}
                      label={value.lot_no}
                      type="number"
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <Input
                        onChange={(e) => {
                          setValue(value.lot_no, e.target.value);
                        }}
                        placeholder="갯수를 입력하세요."
                      />
                    </Form.Item>
                  );
                })
              ) : (
                <div>강화 최대 갯수를 초과하였습니다</div>
              )
            }
            <Form.Item {...tailLayout}>
              <button className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 
          shadow-sm px-4 py-2 dark:bg-gray-700 text-base font-medium dark:text-white hover:bg-gray-50 
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={mixregist}>강화</button>
              <button className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 
          shadow-sm px-4 py-2 dark:bg-gray-700 text-base font-medium dark:text-white hover:bg-gray-50 
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={onReset}>Reset</button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
      {/* 두번째모달 */}
      <Modal
        title="강화 성공!!!"
        visible={successVisible}
        onOk={() => {
          setIsModalVisible(false);
        }}
        // onOk={() => {
        //   setSuccessVisible(true);
        // }}
        onCancel={() => {
          setSuccessVisible(false);
        }}

      >
        <p>강화에 성공했습니다!</p>
      </Modal>
    </div>
  );
}

export default PageButtonGroup;
