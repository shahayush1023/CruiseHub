import React from 'react'
import { useState } from 'react';
import { contact } from "../api/user";
import { useNavigate } from "react-router-dom";
const config = {
  method: "POST",
  "Content-Type": "application/json",
};
const Contact = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    message:""
  });

  let name, value;
  const handleInput = (e) => {
    console.log("value>>>",e.target.value);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const navigate = useNavigate();
  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, message } = user;
     console.log("hello");
    const data = await contact(user, config);
    
    
    console.log(data);
    if (data.message === "user send request regarding something") {
      window.alert("feedback time");
      navigate("/");
    } else {
      window.alert("invalid");
    }
  };

  return (
    <>
    <div class="ll1">
  <div class="ll2">
    <form >
      <h1 style={{fontFamily:'cursive'}}>FEEDBACK FORM!</h1>
      <div class="ll3">
        <label for="name" class="ll4"> Full Name </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Full Name"
          class='l5'
          value={user.name}
          onChange={handleInput}
        />
      </div>

      <div class="ll3">
        <label for="email" class="ll4"> Email Address </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          class='l5'
          value={user.email}
          onChange={handleInput}
        />
      </div>

      

      <div class="ll3">
        <label for="message" class="ll4"> Message </label>
        <textarea
          rows="8"
          name="message"
          id="message"
          placeholder="Type your message"
          class='l5'
          value={user.message}
          onChange={handleInput}
        ></textarea>
      </div>

      <div>
        <button id='j1' onClick={PostData}>
        Submit
        </button>
      </div>
    </form>
  </div>
</div>
<style></style>
    </>
  )
}

export default Contact
