import { Button, Box } from "@material-ui/core";
import { Container } from "@material-ui/core";
import React from "react";

const Login = () => {
  const state = {

  }
  function handleChange(e)  {
      console.log(e)
  }
  function handleSubmit(e)  {
    console.log(e)
}

  return (
    // {login}
    <div
      style={{
        backgroundColor: "#cfe8fc",
        width: "100%",
        height: 100,
        zIndex: 0,
        position: "absolute",
      }}
    >
      <form onSubmit={handleSubmit} className="">
        <h5 className=""> Sign In</h5>
        <div className="">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange="" />
        </div>
        <div className="">
          <label htmlFor="email">Password</label>
          <input type="password" id="password" onChange={handleChange} />
        </div>
        <div className="">
          <Button>Login</Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
