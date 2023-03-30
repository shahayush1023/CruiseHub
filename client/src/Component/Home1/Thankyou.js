import React from "react";
import "./ThankYou.css";

const Thankyou = () => {
  return (
    <>
      <div class="thankyou-page">
        <div class="_header">
          <div class="logo">
            <img src="https://codexcourier.com/images/banner-logo.png" alt="" />
          </div>
          <h1>Thank You! @CRUISEHUB</h1>
        </div>
        <div class="_body">
          <div class="_box">
            <h2>
              <strong></strong>.
            </h2>
            <p style={{textAlign:'center'}}>
              Thanks a bunch for trusting us. It means a lot to us, just like
              you do! We will make sure that you enjoyed your holiday a most.
            </p>
          </div>
        </div>
        <div class="_footer">
          <p>
            Having trouble? Mail on <a href="">cruisehub@cruisehub.com</a>{" "}
          </p>
          <a class="btn" href="/">
            Back to homepage
          </a>
        </div>
      </div>
    </>
  );
};

export default Thankyou;
