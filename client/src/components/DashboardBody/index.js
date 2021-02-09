import React from "react";
import JobsHeader from "../JobsHeader";
import SmallText from "../SmallText";
import Inputbox from "../Inputbox";
import Button from "../Button";

function DashboardBody() {
  return (
    <div className="col-span-3 bg-gray-300">
      <JobsHeader />
      <div className="mt-3 space-y-1 px-4 pb-4">
        <SmallText smallText="Job: " />
        <Inputbox />
        <SmallText smallText="Company: " />
        <Inputbox />
        <SmallText smallText="Due Date: " />
        <Inputbox />
        <SmallText smallText="URL: " />
        <Inputbox />
      </div>
      <div className="px-4 pb-4 flex items-center justify-center">
        <Button buttontext="+" />
      </div>
    </div>
  );
}

export default DashboardBody;
