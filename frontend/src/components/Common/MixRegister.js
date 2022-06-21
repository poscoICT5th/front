import React from 'react';
import {Form, Button, Modal  } from 'antd';
import { useState } from 'react';

function MixRegister() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [form] = Form.useForm();
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div> <Button type="primary" onClick={showModal}>
   zzzzz
  </Button>
  <Modal title="강화 성공!!!" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
    <p>강화 조합</p>
  
              <Form.Item
                name="name"
                label="name"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
              </Form.Item>
  </Modal></div>
  )
}

export default MixRegister