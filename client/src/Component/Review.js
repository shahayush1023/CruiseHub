import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getReview } from "../api/user";
const Review = () => {
    const [data, setData] = useState([{name:"vaishal",email:"vaishal58@gmail.com",message:"hello"}]);
    
    useEffect(()=>{
       console.log("data in use>>",data);
    },[data])
    useEffect(() => {
        console.log("data>>",data);
           async function fetchData() {
            const record = await getReview();
            console.log("record>>>",record);
           
                setData(record.data);
               
            
            

          }
      
          fetchData();
       
        
          
      }, []);
    return (
    <>
        <div class="testimonial-heading">
              <h1>CUSTOMERS FEEDBACK</h1>
            </div>
      {
      data.map((ele)=>{
          console.log(ele.name);
          console.log(ele.message);
          return (
          <div className="review1">
          
          <h2 className="review2">{ele.name} <span>👇</span></h2>
          <p className="review3">{ele.message}</p>
         </div>
    );
        })
      } 
       

         
       
    </>
  );
};

export default Review;
