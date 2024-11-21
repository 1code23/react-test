// ParentComponent.jsx
import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const [parentData, setParentData] = useState('父组件数据');
  const [childData, setChildData] = useState('');

  // 回调函数，用于接收子组件传来的数据
  const handleChildData = (data) => {
    setChildData(data);
  };

  return (
    <div>
      <h1>{parentData}</h1>
      <ChildComponent data={parentData} sendData={handleChildData} />
      <p>从子组件收到的数据: {childData}</p>
    </div>
  );
};

export default ParentComponent;
