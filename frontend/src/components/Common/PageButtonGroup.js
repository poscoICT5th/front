import React, { useState } from "react";
import { Form, Input, notification,Button, Modal  } from "antd";
import {
  BorderTopOutlined,
} from '@ant-design/icons';
import axios from "axios";
import { useSelector } from "react-redux";
import MixRegister from "./MixRegister";

function PageButtonGroup(props) {
  let inventoryURL = useSelector((state) => state.inventoryURL);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    if (props.selectedRowKeys.length>5) {
      openNotification('top');
    }else{setIsModalVisible(true);}
    //클릭하면 모달창 띄우기
    
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
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
      description:
        '최대 강화 갯수를 초과하였습니다...다시해!',
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
      .post("/mix", [values])
      .then((res)=> {
        alert("강화성공")
      })
      .catch((err) => {
        alert(err);

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
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Form
            {...layout}
            form={form}
            name="control-hooks"
            onFinish={mixregist}
          >
            { //input 에 lot_no 를 자동으로 채워준다.
              props.selectedRowKeys.length <6 ?
              props.selectedRowKeys.map((lot_no) => {
                return <Form.Item
                name={lot_no}
                label={lot_no}
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              }) : <div>강화 최대 갯수를 초과하였습니다..</div>
              
                
            }
            <Form.Item {...tailLayout}>
            <MixRegister />
              <Button type="primary" htmlType="submit" >
                강화띠리링~
              </Button>
              <Button htmlType="button" onClick={onReset}>
                Reset
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </div>
  );
}

export default PageButtonGroup;
