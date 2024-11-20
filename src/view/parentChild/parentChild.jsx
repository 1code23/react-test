// ParentComponent.jsx

// useRef 是 React 中的一个 Hook，用于创建一个可变的引用对象。它主要有两个主要用途：
// 访问 DOM 元素：使用 useRef 可以直接访问 DOM 元素，例如输入框、按钮等。
// 存储可变的值：useRef 可以用于存储任何可变的值，类似于实例属性，避免在组件重新渲染时丢失的数据。

// useState:
// 用于声明组件的状态。
// 每当状态更新时，会导致组件重新渲染。
// 用于存储需要在 UI 中显示的动态数据。

// useRef:
// 用于创建一个可变的引用对象，不会导致组件重新渲染。
// 可以存储任何可变的值，适合用来引用 DOM 元素和存储任何不需要在 UI 变化中显示的状态。


import React, { useState,useRef } from 'react';
import ChildComponent from './ChildComponent';
import SiblingA from './siblingA';
import SiblingB from './siblingB';
const ParentComponent = () => {
  const [parentData, setParentData] = useState('父组件数据');
  const [childData, setChildData] = useState('');

  const [sharedData, setSharedData] = useState(''); //兄弟组件之间共享数据

  // 回调函数，用于接收子组件传来的数据
  const handleChildData = (data) => {
    setChildData(data);
  };

  const siblingBRef = useRef();

  const handleButtonClick = () => {
    if (siblingBRef.current) {
      siblingBRef.current.handleClick(); // 调用兄弟 B 的事件处理方法
    }
  };

  return (
    <div>
      <h1>{parentData}</h1>
      <ChildComponent data={parentData} sendData={handleChildData} />
      <p>从子组件收到的数据: {childData}</p>
      <div>
        以下是兄弟组件SiblingA和SiblingB
        <SiblingA setSharedData={setSharedData} onButtonClickB={handleButtonClick} />
        <SiblingB sharedData={sharedData} ref={siblingBRef}/>
      </div>
    </div>
  );
};

export default ParentComponent;
