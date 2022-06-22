import React, { useState } from "react";
import { Form, Input, notification, Button, Modal } from "antd";
import { BorderTopOutlined } from "@ant-design/icons";
import axios from "axios";
import { useSelector } from "react-redux";
import MixRegister from "./MixRegister";

function PageButtonGroup(props) {
  let inventoryURL = useSelector((state) => state.inventoryURL);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [successVisible, setSuccessVisible] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    if (props.selectedRowKeys.length > 5) {
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
      description: "최대 강화 갯수를 초과하였습니다...다시해!",
      placement,
    });
  };
  //usestate
  const [mixDatas, setMixDatas] = useState({
    lot_no: "",
  });
  //axios
  function mixregist(values) {
    axios.defaults.baseURL = inventoryURL;
    console.log(values);
    axios
      .post("/produce", [values])
      .then((res) => {
        alert("성공");
        setSuccessVisible(true);
      })
      .catch((err) => {
        setSuccessVisible(true);
      });
  }

  return (
    <div>
      <div className="text-right">
        <Button
          onClick={showModal}
          type="button"
          className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 dark:bg-gray-700 text-base font-medium dark:text-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        >
          test
        </Button>

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
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  );
                })
              ) : (
                <div>강화 최대 갯수를 초과하였습니다..</div>
              )
            }
            <Form.Item {...tailLayout}>
              <button  onClick={mixregist}>
                강화띠리링~
              </button>
              <button  onClick={onReset}>
                Reset
              </button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
      <Modal
        title="강화 성공!!!"
        visible={successVisible}
        onOk={() => {
          setSuccessVisible(true);
        }}
        onCancel={() => {
          setSuccessVisible(false);
        }}
      >
        <Form.Item
          name="name"
          label="name"
          rules={[
            {
              required: true,
            },
          ]}
        ></Form.Item>
      </Modal>
    </div>
  );
}

export default PageButtonGroup;
