import './Twopage.css'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ThemeContext from '../../ThemeContext';
export default class Child extends Component {
static contextType=ThemeContext
    static defaultProps={
      num:0,
      price:0,
      onClose: () => {}
    };
    static propTypes={
      num:PropTypes.number.isRequired,
      price:PropTypes.oneOfType([PropTypes.number,PropTypes.string]),
      family: PropTypes.object, //对象
      say: PropTypes.func, //函数
      selectInfo:PropTypes.bool,//布尔值
      hobby: PropTypes.array, //数组
    }
    constructor(props){
      super(props)
      this.state = {
        inpValu:null
      }
    }

    // 点击事件触发此方法
    Childfun=(data)=>{
      this.props.editNum(data)
    }
    Childfun1=(data)=>{
      this.props.editNum(data)
    }
    Childfun3=()=>{
      this.props.editNum(this.state.inpValu)
    }
    handelChange(e){
      this.setState({
       inpValu:Number(e.target.value)
      })
    }
    render() {
    const {num,price}=this.props
    let {value1,value2,change1= () => {}}=this.context
    console.log(value1,value2);
        return (
          <div className='TwomainBox'>
            <div className='colorred mtb20'>类组件</div>
            <div>父传过来的数据--数量：{num}</div>
            <div>父传过来的数据--价格：{price}</div>
            {/* 将输入框的数据传给父 */}
            <input type="text" onChange={this.handelChange.bind(this)} defaultValue={this.state.inpValu}/>
            
            <button onClick={()=>this.Childfun1(88)}>修改数量方法一</button>
            <button onClick={this.Childfun.bind(this,12345)}>修改数量方法二</button>
            
            {/* 将输入框的数据传给父 */}
            <button onClick={()=>this.Childfun3()}>修改数量方法三</button>

            <button onClick={()=>change1()}>修改数量方法三</button>
          </div>
        )
    }
  }