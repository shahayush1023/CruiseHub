import React from 'react'

const Contact = () => {
  return (
    <>
          <div class="ll1">
  <div class="ll2">
    <form >
      <h1 style={{fontFamily:'cursive'}}>CONTACT US!</h1>
      <div class="ll3">
        <label for="name" class="ll4"> Full Name </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Full Name"
          class='l5'
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
        />
      </div>

      <div class="ll3">
        <label for="subject" class="ll4"> Subject </label>
        <input
          type="text"
          name="subject"
          id="subject"
          placeholder="Enter your subject"
          class='l5'
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
        ></textarea>
      </div>

      <div>
        <button id='j1'>Submit</button>
      </div>
    </form>
  </div>
</div>
<style></style>
    </>
  )
}

export default Contact
