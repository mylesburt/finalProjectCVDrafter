import React from "react";
import Title from "../components/Title/index";
import "../styles.css";
import Inputbox from "../components/Inputbox";
import Button from "../components/Button";
import SmallText from "../components/SmallText";
import Subheading from "../components/Subheading/index";

function SignIn() {
  return (
    <div className="app">
      <div className="">
        <Title />
        <Subheading subHeadText="The best cover letter drafting web application" />
        <Inputbox placeholderText="First Name" />
        <Inputbox placeholderText="Last Name" />
        <Button buttontext="Log In" />
        <SmallText smallText="Sign Up" />
      </div>
    </div>
  );
}

export default SignIn;
