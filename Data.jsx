import React, { useState } from 'react'

function Data() {
 const[user,setUser]=useState({uName:"",uMobile:""})
  return (
    <>
    {/* <div className="data fl">
        <input 
         type='text'
         value={user.uName}
         placeholder='Enter Your Name'
         onChange={(e) => setUser({ ...user, uName: e.target.value })} /><br/>
            <input 
         type='text'
         value={user.uMobile}
         placeholder='Enter Your Name'
         onChange={(e) => setUser({ ...user, uMobile: e.target.value })} />
    </div>
    <div className="result fr">
        <div className="title">
            <h1>{user.uName}</h1>
        </div>
        <div className="image fl"></div>
        <div className="name fr" >
            <h1>{user.uMobile}</h1>
        </div>
    </div> */}
    </>
  )
}

export default Data
