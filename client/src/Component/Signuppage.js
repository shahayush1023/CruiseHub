import React, { useReducer, useState } from "react";
import { signup } from "../api/user";
import { useNavigate } from "react-router-dom";
const config = {
  method: "POST",
  "Content-Type": "application/json",
};

const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  let name, value;
  const handleInput = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const navigate = useNavigate();
  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, password, cpassword } = user;

    const data = await signup(user, config);
    // console.log(data);
    // const res = await fetch("http://localhost:5000/signup", {
    //   method: "POST",

    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     name: name,
    //     email: email,
    //     password: password,
    //     confirmpassword: cpassword,
    //   }),
    // });
    // const data = await res.json();
    console.log(data);
    if (data.message === "user signed up") {
      window.alert("succesfully registration");
      navigate("/");
    } else {
      window.alert("invalid");
    }
  };
  return (
    <>
      <div className="l1">
        <form method="POST" className="l2">
          <div className="l3">
            <div style={{ display: "flex" }}>
              <h3 className="l4">SignUp</h3>
              <img
                src={require("./signup logo.png")}
                style={{ height: "80px", margin: "-80px 0px 0px 0px" }}
              ></img>
            </div>

            <div className="form-group mt-3">
              <label>UserName</label>
              <input
                type="text"
                name="name"
                id="name"
                className="form-control mt-1"
                placeholder="Enter UserName"
                autoComplete="off"
                value={user.name}
                onChange={handleInput}
                required
              />
            </div>
            <div className="form-group mt-3">
              <label>Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-control mt-1"
                placeholder="Enter Email"
                autoComplete="off"
                value={user.email}
                onChange={handleInput}
                required
              />
            </div>

            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                name="password"
                id="password"
                className="form-control mt-1"
                placeholder="Enter password"
                autoComplete="off"
                value={user.password}
                onChange={handleInput}
                required
              />
            </div>

            <div className="form-group mt-3">
              <label>Confirm Password</label>
              <input
                type="password"
                name="cpassword"
                id="cpassword"
                className="form-control mt-1"
                placeholder="Confirm password"
                onChange={handleInput}
                value={user.cpassword}
                required
              />
            </div>
            <div className="d-grid gap-2 mt-4">
              <button
                type="submit"
                name="signup"
                id="signup"
                onClick={PostData}
                className="btn btn-success"
              >
                Create An Account
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
