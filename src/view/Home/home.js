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
}

export default Home