import React from "react";
import Button from "../components/Button";
import Inputbox from "../components/Inputbox";
import Title from "../components/Title";
import "../styles.css";

console.log("Hello SignUp");

function SignUp() {
  return (
    <div className="app">
      <div>
        <Title title="Sign Up" />
        <Inputbox placeholderText="First Name" />
        <Inputbox placeholderText="Last Name" />
        <Inputbox placeholderText="Email Address" />
        <Inputbox placeholderText="Password" />
        <Inputbox placeholderText="Confirm Password" />
        <Button buttontext="Create Account" />
      </div>
    </div>
  );
}

export default SignUp;
