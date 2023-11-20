import React, { useEffect } from "react";
import Link from 'react-router-dom';


const Logout =() =>{
 const handleSubmit = () => {
 }  
 

 useEffect(()=>{
    handleSubmit();
 },[])


  return (
    <>
      <Link to='/'><p>Hello</p></Link>
      <p>Hello</p>
    </>
  );
}

export default Logout;
