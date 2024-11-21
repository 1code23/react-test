import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
const ExampleComponent = () => {
  const count = useSelector((state) => state.counterData.count); // 访问 count
  const userstr = useSelector((state) => state.userData.user); // 访问 user
  const boolstr = useSelector((state) => state.boolData.Boolean); // 访问 Boolean

  const dispatch = useDispatch(); //用于获取 Redux store 的 dispatch 函数。dispatch 函数允许你发送（分发）动作（action）到 Redux store，以便更新应用程序的状态。

  const updateCount = () => {
    dispatch({ type: 'INCREMENT' }); // 分发增加 count 的动作 调用redux中的INCREMENT
  };
  const updateUser = () => {
    dispatch({ type: 'SET_USER',payload:'我是修改后的user' });  
  };
  const updateBool = () => {
    dispatch({ type: 'SET_BOOLEAN',payload:!boolstr });  
  };

  return (
    <div>
      <h1>当前显示的count为 {count}</h1> {/* 显示当前 count */}
      <h1>当前显示的user中的user为 {userstr}</h1>
      <h1>bool为 {boolstr ? 'true' : 'false'}</h1>
      <button onClick={updateCount}>点我增加count</button> {/* 按钮，点击后增加 count */}
      <button onClick={updateUser}>点我修改user</button> {/* 按钮，修改 user */}
      <button onClick={updateBool}>点我修改bool</button> {/* 按钮，修改 user */}
    </div>
  );
};

export default ExampleComponent;