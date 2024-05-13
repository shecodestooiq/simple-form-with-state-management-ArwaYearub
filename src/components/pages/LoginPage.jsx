import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import Context from "../context/Context";

const LoginPage = () => {
  const { setUsername, setPassword } = useContext(Context);

  //creating the onChange functions here so it wont be too much inside the input field.
  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <h1>Login Page</h1>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" name="username" onChange={onChangeUsername} />

        <label htmlFor="password">Password:</label>
        <input type="password" name="password" onChange={onChangePassword} />

        <Link to="/userinfo">
          <button type="submit">Submit</button>
        </Link>
      </form>
    </>
  );
};

export default LoginPage;
