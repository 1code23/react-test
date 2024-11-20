// ChildComponent.jsx
import React, { useState } from 'react';

const ChildComponent = ({ data, sendData }) => {
  const [inputValue, setInputValue] = useState('');
  const [editParentDataValue, setEditParentDataValue] = useState('');

  const handleSubmit = () => {
    // 调用父组件的回调函数，将数据传递给父组件
    sendData(inputValue);
    setInputValue(''); // 清空输入框
  };
const editParentDataFun = () => {
    // 修改父组件传过来的数据
    setEditParentDataValue('我是修改后的数据哦');
  };
  return (
    <div>
      <h2>子组件接收到的数据: {data}</h2>
      <h2>修改父组件传过来的数据后: {editParentDataValue}</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="输入数据传给父组件"
      />
      <button onClick={handleSubmit}>传递数据给父组件</button>
      <button onClick={editParentDataFun}>修改父组件传过来的数据</button>
    </div>
  );
};

export default ChildComponent;
