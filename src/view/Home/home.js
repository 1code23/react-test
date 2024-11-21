import { useState } from 'react'
import logo from '../../logo.svg';
import  OnePage  from "../one/Onepage.jsx";
import TwoPage from '../two/Twopage'
import { useImmer } from 'use-immer'
import '../../common/css/common.css'
import ThemeContext from '../../ThemeContext';

function Home() {
  const initialState = {
   name:'张三',
   age:'30',
   info:{address:'上海市',work:'前端开发'},
   list:[],
   num:20,
   price:30
  }
  const [state, setState] = useImmer(initialState)
  const { name, age,num,price } = state
  const editNamefun = (e) =>{
    setState((draft) => {
      draft.name = e;
      draft.info.address = '北京'
    })
  }
  const editnumfun = (e) =>{
    setState((draft) => {
      draft.num = e;
    })
  }
  const [value1,setvalue1]=useState(0);
  const [value2,setvalue2]=useState(2);
  const change1=()=>{
    setvalue1(3)
    setvalue2(4)
  }
  return (
    <ThemeContext.Provider value={{value1,value2,change1}}>
    <div>
      <div>home页面</div>
      <div>
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        欢迎学习React<code>src/App.js</code> 这里是主页
      </p>
      <div className='disfr'>
      <OnePage name={name} age={age} info={state.info} editName={editNamefun}></OnePage>
      <TwoPage num={num} price={price} info={state.info} editNum={editnumfun}></TwoPage>
      </div>
      </div>
    </div>
    </ThemeContext.Provider>
  )
  // ThemeContext 的 Provider，将 value1、value2 和 change1 作为值提供给所有在这个 Provider 内部的组件，从而这些组件可以方便地访问和使用这些值。这种做法通常用于状态管理，使得多个组件之间可以共享和更新状态，而无需通过 props 一层层地传递。
}

export default Home