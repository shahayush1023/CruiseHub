import React from "react";
import { useOutletContext } from "react-router";

const Logout = () => {
  function handle() {

    sessionStorage.removeItem("user");
    window.location.reload();
  }
  return <button onClick={handle}>SUre</button>;
};

export default Logout;
