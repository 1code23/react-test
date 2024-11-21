import './App.css';
import './common/css/common.css'
// import About from "./About/about";
// import Home from "./Home/home";
import Login from "./Login/login";
// import Threepage from './view/three/Threepage';
// import LayoutPage from './layout/index';

// 引入路由
// import {HashRouter, BrowserRouter,Link,Routes,Route } from 'react-router-dom';
import {HashRouter,Link,Routes,Route } from 'react-router-dom';
import RotersList from './router/index'
import { Provider } from 'react-redux';
import store from './store/store';
function App() {
  return (
    
    // <BrowserRouter>
    <Provider store={store}>
    <HashRouter>
      {/* 方法二 */}
      <div className="App">
        <header className="App-header">
          {/* <Link to='/about'>跳转到关于页面</Link>
          <Link to='/home'>跳转到Home页面</Link>
          <Link to='/login'>跳转到Login页面</Link>
          <Link to='/three'>跳转到ant Design页面</Link> */}
          <RotersList></RotersList>
          {/* <Link to='/login'>跳转到Login页面</Link> */}
        {/* <LayoutPage></LayoutPage> */}
        </header>
      </div>

      {/* 方法一 */}
    {/* <div className="App">
      <header className="App-header">
        <Link to='/about'>跳转到关于页面</Link>
        <Link to='/home'>跳转到Home页面</Link>
        <Link to='/login'>跳转到Login页面</Link>
        <Link to='/three'>跳转到ant Design页面</Link>
        <Routes>
          <Route path='about' element={<About></About>}></Route>
          <Route path='home' element={<Home></Home>}></Route>
          <Route path='login' element={<Login></Login>}></Route>
          <Route path='three' element={<Threepage></Threepage>}></Route>
        </Routes>
      </header>
    </div> */}
     
    </HashRouter>
    </Provider>
    // </BrowserRouter>
  );
}

export default App;
