import React, { useState, useEffect } from 'react';
import { Routes, Route,HashRouter,Link,Outlet } from 'react-router-dom';
import { Layout, message } from 'antd';
import RotersList from '../router/index'
import './index.css'
// import About from "../About/about";
// import Home from "../../Home/home";
// import Threepage from '../view/three/Threepage';
// import { NotFound } from 'components';
// import Sider from './Sider';
// import Header from './Header';
// import Footer from './Footer'
// import routes from '../routes';
// import { hasPermission, isMobile } from 'libs';
// import styles from './layout.module.less';

// function initRoutes(Routes, routes) {
//   for (let route of routes) {
//     if (route.component) {
//       if (!route.auth || hasPermission(route.auth)) {
//         Routes.push(<Route exact key={route.path} path={route.path} component={route.component}/>)
//       }
//     } else if (route.child) {
//       initRoutes(Routes, route.child)
//     }
//   }
// }

// export default function () {
//   const [collapsed, setCollapsed] = useState(false)
//   const [Routes, setRoutes] = useState([]);

//   useEffect(() => {
//      if (isMobile) {
//       setCollapsed(true);
//       message.warn('检测到您在移动设备上访问，请使用横屏模式。', 5)
//     }
//     const Routes = [];
//     // initRoutes(Routes, routes);
//     setRoutes(Routes)
//   }, [])

//   return (
//     <Layout>
//       {/* <Sider collapsed={collapsed}/> */}
//       <Layout style={{height: '100vh'}}>
//         <Header collapsed={collapsed} toggle={() => setCollapsed(!collapsed)}/>
//         <Layout.Content className={styles.content} id="spug-container">
//           <Switch>
//             {Routes}
//             <Route component={NotFound}/>
//           </Switch>
//           <Footer/>
//         </Layout.Content>
//       </Layout>
//     </Layout>
//   )
// }
function LayoutPage() {
  return(
    <div>
      <div>顶部区域</div>
     <div className='disfr'>
      <div className='aside'>
      <Link to='/about'>跳转到关于页面</Link>
        <Link to='/home'>跳转到Home页面</Link>
        <Link to='/login'>跳转到Login页面</Link>
        <Link to='/three'>跳转到ant Design页面</Link>
        <Link to='/redux'>跳转到Redux页面</Link>
        <Link to='/parentChild'>跳转到父子通信页面</Link>
      </div>
      <div> <Outlet />    {/* 子路由展示区域 */}</div>
     </div>
     <div>底部区域</div>
    </div>
  )
}
export default LayoutPage