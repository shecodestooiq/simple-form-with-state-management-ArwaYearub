import React from "react";
import { useContext } from "react";
import Context from "../context/Context";


const DisplayPage = () => {

    const {username, password} = useContext(Context)

    return (
    <>
    <h1>Your UserName is {username}</h1>
    <h2>Your Password is  {password}</h2>
    </>
    );
}
 
export default DisplayPage;