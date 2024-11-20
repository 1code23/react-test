import { Form, Input, Button } from 'antd';
// import { useEffect,useRef } from 'react'
// import React, { useRef, useImperativeHandle } from 'react';

function EditForm(props) {
	const [form] = Form.useForm();
	const { data,handleSubmit=()=>{}} = props;
	// form.resetFields()//清除校验
	// form.setFieldsValue(data) //对象形式(user:{data}) 表格数据回显
	// console.log(props.visible);
	// useEffect(() => {
	// 	form.setFieldsValue(data) //对象形式(user:{data}) 表格数据回显
  // }, [props.visible])
	// const form1=useRef(null)
	const formItemLayout = {
		labelCol: { span: 4 },
		wrapperCol: { span: 20 }
	};
	const formTailLayout = {
		labelCol: { span: 4 },
		wrapperCol: { span: 20, offset: 4 }
	};

	const onFinish = (values) => {
		// console.log('Success:', values);
		handleSubmit(values)
	};
	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};
	return (
		// onSubmit={this.handleSubmit}
		<div>
			<Form initialValues={data} onFinish={onFinish}
		onFinishFailed={onFinishFailed} form={form}>
			<Form.Item label="姓名" {...formItemLayout} name='name' rules={[
						{
							required: true,
							message: '请输入姓名'
						}
					]}>
			<Input />
			</Form.Item>
			<Form.Item label="年龄" {...formItemLayout} name='age' rules={ [
						{
							required: true,
							message: '请输入年龄'
						}
					]}>
			<Input />
			</Form.Item>
			<Form.Item label="邮箱" {...formItemLayout} name='email' rules={[
						{
							required: true,
							message: '请输入正确的邮箱',
							pattern: /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
						}
					]} >
			<Input />
			</Form.Item>
			<Form.Item {...formTailLayout}>
				{/* <Button type="primary" onClick={this.props.handleSubmit}> */}
				<Button type="primary" htmlType="submit">
					提交
				</Button>
			</Form.Item>
		  </Form>
			<div >111</div>
		</div>
	);
	
}
export default EditForm ;
