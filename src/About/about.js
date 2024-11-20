import './about.css';
import { useSearchParams,useLocation } from 'react-router-dom';
function About() {
  // 接受路由参数一
  // 使用 useSearchParams() params 参数和修改 setparams 参数的方法
  // 数组的解构赋值
  //  const [params, setparams] = useSearchParams()
  // 需要调用 get() 方法获取对应的参数值
  // function change() {
  //   setparams('id=666&name=Lily')
  // }
  const [params]= useSearchParams()
  const id=params?params.get('id'):''
  const name=params?params.get('name'):''

  // 接受路由参数二
  const location  = useLocation()
  const age=location.state?location.state.age:''
  const address=location.state?location.state.address:''
  return (
    <div>
      <div className='textColor'>about页面</div>
     <div className='mtb20'>
     <div>路由传过的参数id为{id}</div>
      <div>路由传过的参数name为{name}</div>
     </div>
      <div>路由传过的参数方法二 年龄为：{age}地址为{address}</div>
      <div>
        <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            学习更多 React 知识
          </a>
      </div>
    </div>
  )
}

export default About