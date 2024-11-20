import './four.css'
import { useNavigate } from "react-router-dom"
function Login() {
  const navigate=useNavigate()

  function goAboout(){
    // navigate('/about')
    // navigate('/about',{replace:true})//跳转时不加入历史记录
    // navigate('/about?id=1001',{replace:true})//跳转时不加入历史记录
    navigate("/about?id=1001&name='名字'")//路由传参方法一
  }
  function goAboout1(){
    navigate("/about",{state:{age:21,address:'上海'}})//路由传参方法二
  }

  return (
    <div>
      <div>这里是登录页面</div>
      <button onClick={()=>goAboout()}>跳转到关于页面</button>
      <button onClick={()=>{goAboout()}} className="mlf20">跳转到关于页面传参方法一</button>
      <button onClick={goAboout1}>跳转到关于页面传参方法二</button>
    </div>
  )
}

export default Login