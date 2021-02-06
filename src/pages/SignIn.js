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
      <div className="bg-white shadow-md rounded px-8 py-8 pt-8">
        <Title title="Job Drafter" />
        <Subheading subHeadText="The best cover letter drafting web application" />
        <div className="px-4 pb-4">
          <SmallText smallText="Email" />
          <Inputbox placeholderText="john.smith@gmail.com" />
        </div>
        <div className="px-4 pb-4">
          <SmallText smallText="Password" />
          <Inputbox placeholderText="Enter password here" />
        </div>
        <div className="px-4 pb-4">
          <Button buttontext="Log In" />
          <Link to="/signup">
            <SmallText smallText="Sign Up" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
