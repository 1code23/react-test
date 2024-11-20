
// useEffect(() => {
//     // 副作用操作
//     return () => {
//       // 可选的清理操作
//     };
//   }, [dependencies]);
//   第一个参数是一个函数，包含您想要执行的副作用代码。
//   第二个参数是一个依赖数组，用于控制副作用的执行时机。
//   如果数组为空 []，则副作用将在组件首次挂载时执行，并在卸载时清理（类似于 componentDidMount 和 componentWillUnmount）。
//   如果数组中包含变量，当这些变量发生变化时，副作用将再次执行（类似于 componentDidUpdate）。
// useEffect(() => {
//     const handleClick = () => console.log('Clicked');
//     window.addEventListener('click', handleClick);
  
//     // 清理
//     return () => {
//       window.removeEventListener('click', handleClick);
//     };
//   }, []);

import React, { useState, useEffect } from 'react';

const DataFetcher = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect 用于模拟数据获取
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('网络响应错误');
        }
        const result = await response.json();
        setData(result); // 更新数据状态
      } catch (err) {
        setError(err); // 捕获错误
      } finally {
        setLoading(false); // 数据获取完成
      }
    };

    fetchData(); // 调用数据获取函数
  }, []); // 空依赖数组，表示仅在组件挂载和卸载时执行

  // 根据状态渲染不同内容
  if (loading) {
    return <div>加载中...</div>;
  }

  if (error) {
    return <div>错误: {error.message}</div>;
  }

  return (
    <div>
      <h1>获取的数据:</h1>
      <ul>
        {data.map(post => (
          <li key={post.id}>{post.title}</li> // 显示获取到的数据
        ))}
      </ul>
    </div>
  );
};

export default DataFetcher;
