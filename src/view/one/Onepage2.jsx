import { useState } from 'react'
import './Onepage.css'
import PropTypes from "prop-types";
function Onepage(props) {
  const { name, age,info, editName = () => {} } = props
  const [inputValue,setinputValue]=useState(0)
  return (<div className='OnemainBox'>
  <div className='colorred mtb20'>函数组件</div>
  <div>
    <div>接受父组件传过来数据为：名字：{name}</div>
    <div>接受父组件传过来数据为：年龄：{age}</div>
    <div>接受父组件传过来数据为：对象：{info.address}</div>

    {/* 将输入框的数据传给父 */}
    <div><input type="text" defaultValue={inputValue} onChange={(e)=>{
      const val =e.target.value;
      setinputValue(val);
    }}/></div>

    <button onClick={() => editName('李白')}>修改名字方法一</button>

    {/* 将输入框的数据传给父 */}
    <button onClick={() => editName(inputValue)}>修改名字方法二</button>
  </div>
  <button onClick={()=>change1()}>点我</button>
  </div>)
}
Onepage.defaultProps={
  num:0,
  price:0,
  onClose: () => {}
}
Onepage.propTypes={
  num:PropTypes.number.isRequired,
  price:PropTypes.number.isRequired,
}
export default Onepage