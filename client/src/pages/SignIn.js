import React from "react";
import Title from "../components/Title/index";
import "../styles.css";
import Inputbox from "../components/Inputbox";
import Button from "../components/Button";
import SmallText from "../components/SmallText";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <div className="flex items-center justify-center h-screen bg-yellow-300 bg-opacity-75">
      <div className="inline-block align-middle bg-white shadow-md rounded px-8 py-8 pt-8">
        <div className="grid justify-items-center">
          <Title title="Job Drafter" />
        </div>
        <div className="px-4 pb-4">
          <SmallText smallText="Email" />
          <Inputbox placeholderText="john.smith@gmail.com" />
        </div>
        <div className="px-4 pb-4">
          <SmallText smallText="Password" />
          <Inputbox placeholderText="Enter password here" />
        </div>
        <div className="grid justify-items-center">
          <div className="flex space-x-4 px-4 pb-4">
            <Button buttontext="Log In" />
            <Link to="/signup">
              <Button buttontext="Sign Up" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
