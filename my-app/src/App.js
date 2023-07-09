
import { useState } from 'react';
import './App.css';
import Form from './components/Form/Form';

import Ordertable from './components/Order/Ordertable';



function App() {

const [orderdetails1,setorderdetails1]=useState([])
const [orderdetails2,setorderdetails2]=useState([])
const [orderdetails3,setorderdetails3]=useState([])

  function orderhandler(orderdetails){

    if(orderdetails.table==='Table1'){
      setorderdetails1((prevState)=>{
        return [...prevState,orderdetails]
      })
    }
    if(orderdetails.table==='Table2'){
      setorderdetails2((prevState)=>{
        return [...prevState,orderdetails]
      })
    }
    if(orderdetails.table==='Table3'){
      setorderdetails3((prevState)=>{
        return [...prevState,orderdetails]
      })
    }
    
  }

  function deletehandler(e){
    e.target.parentElement.remove()
  }



  return (
    <>
    <Form orderhandler={orderhandler} ></Form>
    <h1>Orders</h1>
    <h3>Table1</h3>
    <Ordertable orderdetails={orderdetails1} deletehandler={deletehandler} ></Ordertable>
    <h3>Table2</h3>
    <Ordertable orderdetails={orderdetails2} deletehandler={deletehandler} ></Ordertable>
    <h3>Table3</h3>
    <Ordertable orderdetails={orderdetails3} deletehandler={deletehandler} ></Ordertable>
    </>
  );
}

export default App;
