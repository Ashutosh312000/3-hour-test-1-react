// import { useState } from "react";



function Ordertable(props) {

  
  
    return(
        
      <>
      {props.orderdetails.map(ele=>{
        return <li key={ele.orderid}> {ele.price} {ele.dish} {ele.table} <button onClick={props.deletehandler}>DELETE</button></li>
      })}
        
        </>
    )
}

export default Ordertable;