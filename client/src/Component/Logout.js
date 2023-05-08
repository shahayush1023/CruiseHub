import React from "react";
import { useOutletContext } from "react-router";

const Logout = () => {
  function handle() {
    sessionStorage.removeItem("user");
    window.location.reload();
  }
  return (
    <>
      <div>
        <button
          onClick={handle}
          style={{ marginTop: "234px", marginLeft: "623px" }}
        >
          
            CLICK HERE TO LOGOUT
        </button>
      </div>
    </>
  );
};

export default Logout;
