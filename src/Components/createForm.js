import React from "react";
import { Modal, Form, Input, Radio } from "antd";

const CreateForm = ({ visible, onCreate, onCancel }) => {
  const dayjs = require("dayjs");
  let now = dayjs();
  // console.log(now.format("DD-MM-YYYY"));
  const createdDate = now.format("DD-MM-YYYY");
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Create a new collection"
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        // initialValues={{
        //   modifier: 'public',
        // }}
      >
        <Form.Item
          name="title"
          label="Title"
          rules={[
            {
              required: true,
              message: "Please input the title of collection!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <Input type="textarea" />
        </Form.Item>
        <Form.Item
          name="tags"
          className="collection-create-form_last-form-item"
        >
          <Radio.Group>
            <Radio value="tech">Tech</Radio>
            <Radio value="feature">Feature</Radio>
            <Radio value="login">Login</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item hidden name="createdDt" initialValue={createdDate} />
      </Form>
    </Modal>
  );
};

export default CreateForm;
