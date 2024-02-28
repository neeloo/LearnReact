import React,{useState} from 'react'
import Header from '../Movie Project/Header'

function Usestate() {
  const[num,setnum]=useState(1);

  function inc(){
    // if(num<10){
    //   setnum(num+1);
    // }else{
    //   setnum(num);
    // }
    setnum(num+1);
  }

  function dec(){
    // if(num>0){
    //   setnum(num-1);
    // }else {
    //   setnum (num);
    // }

    setnum(num-1);
    
  }





  return (
    <div className='nss'>
    <Header/>
    <div className='main'>
      <h1 className='head'>{num}</h1>
      <div className="buttons">
      <button className='btn' onClick={inc}>increment</button>
      <button className='btn' onClick={dec}>decrement</button>
      </div>
    </div>

    </div>
  )
}

export default Usestate