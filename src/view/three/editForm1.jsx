import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
class EditForm extends Component {
	componentWillReceiveProps(nextProps) {
		!nextProps.visible && this.props.form.resetFields();
	}
	render() {
		const { data } = this.props;
		// let data=JSON.parse(JSON.stringify(this.props.data1))
		
		console.log(data,111);
		const formItemLayout = {
			labelCol: { span: 4 },
			wrapperCol: { span: 20 }
		};
		const formTailLayout = {
			labelCol: { span: 4 },
			wrapperCol: { span: 20, offset: 4 }
		};
		const submitt=()=>{
			console.log(data,2222);
		}
		const onFinish = (values) => {
			console.log('Success:', values);
		};
		const onFinishFailed = (errorInfo) => {
			console.log('Failed:', errorInfo);
		};
		const [form] = Form.useForm();
		return (
			// onSubmit={this.handleSubmit}
			<Form  onFinish={onFinish}
			onFinishFailed={onFinishFailed} ref="editForm" form={form}>
				<Form.Item label="姓名" {...formItemLayout} name={data.name} rules={[
							{
								required: true,
								message: '请输入姓名'
							}
						]}>
				<Input />
				</Form.Item>
				<Form.Item label="年龄" {...formItemLayout} name={data.age} rules={ [
							{
								required: true,
								message: '请输入年龄'
							}
						]}>
				<Input />
				</Form.Item>
				{/* <Form.Item label="邮箱" {...formItemLayout} name={data.email} rules={[
							{
								required: true,
								message: '请输入正确的邮箱',
								pattern: /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
							}
						]} >
				<Input />
				</Form.Item> */}
				<Form.Item {...formTailLayout}>
					{/* <Button type="primary" onClick={this.props.handleSubmit}> */}
					<Button type="primary" htmlType="submit">
						提交
					</Button>
				</Form.Item>
			</Form>
		);
	}
}
export default EditForm;
