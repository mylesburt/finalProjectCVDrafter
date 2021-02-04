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
        <Subheading />
        <Inputbox />
        <Inputbox />
        <Button />
        <SmallText />
      </div>
    </div>
  );
}

export default SignIn;
