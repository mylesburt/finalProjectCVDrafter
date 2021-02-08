import Axios from "axios";
import React from "react";
import JobsHeader from "../components/JobsHeader";
import Navbar from "../components/Navbar";
import "../styles.css";

console.log("Hello Dashboard");

function Dashboard() {
  const [jobs, setJobs] = React.useState([]);
  Axios({
    url: "/api/jobs",
  }).then((res) => {
    setJobs(res.data);
  });
  return (
    <div className="container mx-auto">
      <Navbar
        navHeader="CV Draft (replace with prop logo)"
        navUserId="*prop in user first and last name*"
      />
      <div className="container mx-auto">
        <JobsHeader />
        {/* <Body />
        <ParagraphBar /> */}
      </div>
    </div>
  );
}

export default Dashboard;
