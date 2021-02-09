import React from "react";
import "../../styles.css";

function JobsHeader(props) {
  return (
    <div className="flex items-center justify-center flex-col bg-gray-800 text-white">
      <p className="py-5">Jobs List</p>
      <p className="py-3">Create a job</p>
    </div>
  );
}

export default JobsHeader;
