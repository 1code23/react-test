// forwardRef 是一个高阶组件，允许您将 ref 转发到它的子组件。这使得父组件能够直接访问其子组件的某些 DOM 节点或者实例方法。
// useImperativeHandle 是一个 Hook，用于自定义从 forwardRef 创建的 ref 的实例值。它允许组件暴露给父组件的 API（即方法或属性）进行定义。


// SiblingB.jsx
import{forwardRef, useImperativeHandle,React}  from 'react';

// const SiblingB = ({ sharedData }) => {
const SiblingB = forwardRef((props, ref) => {
    useImperativeHandle(ref, () => ({
        handleClick() {
          alert('兄弟 B 的按钮事件被触发!'); // 这里可以是其他事件处理逻辑
        }
      }));
    return (
    <div>
      <h2>Sibling B</h2>
      <p>从 Sibling A 获取的数据: {props.sharedData}</p>
    </div>
  );
});

export default SiblingB;
