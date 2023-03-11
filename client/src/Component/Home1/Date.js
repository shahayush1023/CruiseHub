import React, { useState } from 'react'

const Date = () => {
    
    const [date,setDate]=useState();
    

    return (
    <div>
        <h1 style={{width:'50%'}}>Selected Date:{date}</h1> 
        <input type="date" style={{width:'10%'}} onChange={e=>setDate(e.target.value)}/>
    </div>
  )
}

export default Date