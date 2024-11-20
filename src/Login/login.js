import './login.css'
import '../common/css/common.css'
import React from 'react';
import { useNavigate } from "react-router-dom"
import { Button, Form, Input,message } from 'antd';


function Login() {
  const navigate=useNavigate()

const onFinish = (values) => {
  console.log('Success:', values);
  if(values.username==='admin'&&values.password==='123456'){
    navigate('/home')
  }else{
    message.error('您输入的账号或密码有误');
  }

};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

  return (
    <div className='disfr ac fc loginBox'>
      <div className='mtb20 mt100'>这里是登录页面</div>
      <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="用户名"
      name="username"
      rules={[
        {
          required: true,
          message: '请输入用户名',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="密码"
      name="password"
      rules={[
        {
          validator: (_, value) =>{
            if(!value){
              return Promise.reject('请输入密码')
            }else if(value.length >= 6 && value.length<=10) {
              return Promise.resolve()
          }else{
              return Promise.reject('密码长度必须是6~10位')
          }
          }
        }
    ]}
      // rules={[
      //   {
      //     required: true,
      //     message: '请输入密码',
      //   },
      // ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        登录
      </Button>
    </Form.Item>
      </Form>
    </div>
  )
}

export default Login