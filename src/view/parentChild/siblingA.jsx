// SiblingA.jsx
import React from 'react';

const SiblingA = ({ setSharedData,onButtonClickB }) => {
  const handleChange = (e) => {
    setSharedData(e.target.value); // 改变共享数据
  };

  return (
    <div>
      <h2>Sibling A</h2>
      <input type="text" onChange={handleChange} placeholder="输入数据" />
      <button onClick={onButtonClickB}>点击我触发兄弟 B 的按钮事件</button>
    </div>
  );
};

export default SiblingA;
