import { createContext, useState } from "react";

export const LoginDetails = createContext(null);

export const LoginDetailsProvider = (props) => {
  const [loginuser, setloginuser] = useState();

  const loginvalue = { setloginuser, loginuser };

  return (
    <LoginDetails.Provider value={loginvalue}>
      {props.children}
    </LoginDetails.Provider>
  );
};
