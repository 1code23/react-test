import React, { useState,useEffect,useRef, } from 'react'
import './Threepage.css'
import { Select,Switch,Space, Table, Tag,Button,Modal  } from 'antd';
import {supportedDeviceList} from "../../common/constant/constant"
import filters from '../../common/utils/filters';
import EditForm from './editForm'
import { useImmer } from 'use-immer'
import useForceUpdate from 'use-force-update';
import { flushSync } from 'react-dom';

function Threepage(props){
  const selectList=[
    {
      value: '0',
      label: 'Jack',
    },
    {
      value: '1',
      label: 'Lucy',
    },
    {
      value: '2',
      label: 'yiminghe',
    },
    {
      value: '3',
      label: 'Disabled',
      disabled: true,
    },
  ]
 
  // 单选框
  const [selectvalue,setselectvalue]=useState('2')
  const [selectvalue2,setselectvalue2]=useState()
  const handleChange=(value)=>{
    setselectvalue(value);
    setselectList2([
      {
        value: 0,
        label: '北京',
      },
      {
        value: 1,
        label: '上海',
      },
      {
        value: 2,
        label: '广州',
      },
      {
        value: 3,
        label: '被禁用',
        disabled: true,
      },
    ])
  }
  const handleChange2=(value)=>{
    setselectvalue2(value);
  }


  //  开关按钮 
  const [isChecked,setisChecked]=useState(false)
  const switchChange=(value)=>{
    setisChecked(value)
  }

  // 表格头部
  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      // key: 'name',
      render: (text) => <a href="###">{text}</a>,
    },
    {
      title: '年龄',
      dataIndex: 'age',
      // key: 'age',
      render:(item)=>{
       return <span>{item}</span>
      }
    },
    {
      title: '使用设备',
      dataIndex: 'device',
      // key: 'work',
      render:(item)=>{
       return <span>{filters.typeDesc(item,supportedDeviceList)}</span>
      }
    },
    {
      title: '地址',
      dataIndex: 'address',
      // key: 'address',
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      // key: 'address',
    },
    {
      title: 'Tags',
      // key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: '操作',
      // key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a href="###">页面跳转{record.name}</a>
          <Button type="primary" danger>删除</Button>
          <Button type="primary" onClick={()=>{detailBtn(record)}}>详情</Button>
          <Button className='editBtn' onClick={()=>{editBtn(record)}}>编辑</Button>
          <span onClick={()=>{clogBtn(record)}}>点我打印该行数据</span>
        </Space>
      ),
    },
  ];
  // 表格列表数据
  const tableData = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      device:1,
      address: 'New York No. 1 Lake Park',
      email:'181@263.com',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      device:2,
      address: 'London No. 1 Lake Park',
      email:'267@qq.com',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      device:1,
      address: 'Sydney No. 1 Lake Park',
      email:'name@droi.com',
      tags: ['cool', 'teacher'],
    },
  ];
  const [selectList2,setselectList2]=useState([])

  useEffect(() => {
    /** 当组件挂载时执行一次init */
    init()
  },[])
  const init=()=>{
    //导入公共枚举值数据
    // console.log(supportedDeviceList)
    // 枚举值转换
    // console.log(filters.typeDesc(2,supportedDeviceList))
  }
 

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [detailData, setdetailData] = useState({});
  const clogBtn=(row)=>{
    console.log(row,111);
  }
  const editBtn=(row)=>{
    setcurrentRow({...currentRow,...row})
    setvisible(true);
    setisAdd(false)
  }
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const detailBtn=(row)=>{
    setdetailData(row)
    setIsModalOpen(true);
  }
  
  const [visible, setvisible] = useState(false);
  const [isAdd, setisAdd] = useState(false);
  const addBtn=()=>{
    setvisible(true);
    setcurrentRow({name:'',age:'',email:''})
    setisAdd(true)
  }
  const handleOkEdit = () => {
    setvisible(false);
  };
  const handleCancelEdit = () => {
    setvisible(false);
  };
  const [currentRow,setcurrentRow]=useImmer({name:'',age:'',email:''})
  const handleSubmit=(data)=>{
    console.log(data,'保存');
    setvisible(false);
  }
  const fancyInputRef = useRef();
  const childfunc=()=>{
    fancyInputRef.current.func()//调用子组件的方法 因为该方法是在弹框组件内部 所以需要先显示弹框后才可以调用
    fancyInputRef.current.func1()//调用子组件的方法 因为该方法是在弹框组件内部 所以需要先显示弹框后才可以调用
  }
 
  return(
    <div>
      <div className="threeBox">
        <div className='colorred mtb20'>ant Design组件</div>

          {/* 单选框 */}
        <div>
          <Select
            defaultValue={selectvalue}
            style={{
              width: 120,
            }}
            onChange={handleChange}
            options={selectList}
          />
           <Select
            defaultValue={selectvalue2}
            placeholder="请选择"
            style={{
              width: 120,
            }}
            onChange={handleChange2}
            options={selectList2}
          />
        </div>
        {/* 开关 */}
        <div><Switch checkedChildren="开启" unCheckedChildren="关闭" defaultChecked={isChecked} onChange={switchChange}/></div>
        {/* 表格 */}
        <div>
        <Button type="primary" onClick={()=>{addBtn()}}>新增</Button>
        <Button type="primary" onClick={()=>{childfunc()}}>点我</Button>
        <Table columns={columns} dataSource={tableData} />
        </div>
      </div>
      <div>
      <Modal title="查看详情" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>姓名：{detailData.name}</p>
        <p>年龄：{detailData.age}</p>
        <p>地址：{detailData.address}</p>
      </Modal>
      <Modal title={isAdd?'新增':"编辑"} open={visible} onOk={handleOkEdit} onCancel={handleCancelEdit} footer={null}>
        <EditForm data={currentRow} ref={fancyInputRef} visible={visible} handleSubmit={handleSubmit} />
      </Modal>
      </div>
    </div>
  )
}

export default Threepage