import React from "react";
import Title from "../components/Title/index";
import "../styles.css";
import Inputbox from "../components/Inputbox";
import Button from "../components/Button";
import SmallText from "../components/SmallText";
import Subheading from "../components/Subheading/index";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <div className="app">
      <div className="">
        <Title title="Job Drafter" />
        <Subheading subHeadText="The best cover letter drafting web application" />
        <Inputbox placeholderText="Email" />
        <Inputbox placeholderText="Password" />
        <Button buttontext="Log In" />
        <Link to="/signup">
          <SmallText smallText="Sign Up" />
        </Link>
      </div>
    </div>
  );
}

export default SignIn;
