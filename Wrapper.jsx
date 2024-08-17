import React, { useState } from 'react'

function Wrapper() {
   
 const[user,setUser]=useState({uName:"Rohan",uMobile:"9190583960",uWeb:"Google",uAddress:"Ghaziabad",uCompany:"DUCAT",theme:"white",c:"",d:"",f:"",g:""})
         
 return (
    
    <>
  
    <div className="wrapper">
         <div className="data fl">
        <input 
         type='text'
         value={user.uName}
         placeholder='Enter Your Name'
         onChange={(e) => setUser({ ...user, uName: e.target.value })} />
           <input 
         type='color'
         value={user.theme}
         placeholder='Change color of  Your Name'
         onChange={(e) => setUser({ ...user, theme: e.target.value })} /><br/><br/>

   
        
        
            <input 
         type='text'
         value={user.uMobile}
         placeholder='Enter Your mobile number'
         onChange={(e) => setUser({ ...user, uMobile: e.target.value })} />
               <input 
         type='color'
         value={user.f}
         placeholder='Change color of  Address text'
         onChange={(e) => setUser({ ...user, f: e.target.value })} /><br/><br/>
     
        
            <input 
         type='text'
         value={user.uWeb}
         placeholder='Enter Your Website'
         onChange={(e) => setUser({ ...user, uWeb: e.target.value })} />
            <input 
         type='color'
         value={user.c}
         placeholder='Change color of  Website text'
         onChange={(e) => setUser({ ...user, c: e.target.value })} /><br/><br/>
           <input 
         type='text'
         value={user.uAddress}
         placeholder='Enter Your Addess'
         onChange={(e) => setUser({ ...user, uAddress: e.target.value })} />
         <input 
     type='color'
     value={user.d}
     placeholder='Change color of  Mobile text'
     onChange={(e) => setUser({ ...user, d: e.target.value })} /><br/><br/>
         <input 
         type='text'
         value={user.uCompany}
         placeholder='Enter Your Company Name'
         onChange={(e) => setUser({ ...user, uCompany: e.target.value })} />
           <input 
         type='color'
         value={user.g}
         placeholder='Change color of  company text'
         onChange={(e) => setUser({ ...user, g: e.target.value })} /><br/><br/>
        
         
      
      

    </div>
    <div className="result fr">
        <div className="title">
            <h1 style={{color:user.theme}}>{user.uName}</h1>
        </div>
        <div className="image fl">
        <p style={{color:user.c}}>{user.uWeb}</p>
        <span id='web'><p style={{color:user.f}}>{user.uAddress}</p></span>
        </div>
        <div className="name fr" >
            <p style={{color:user.d}}>{user.uMobile}</p>
            <h1 style={{color:user.g}}>{user.uCompany}</h1>
         
        </div>
    </div>
        <div className="container"></div>
    </div>
    </> )
}

export default Wrapper
