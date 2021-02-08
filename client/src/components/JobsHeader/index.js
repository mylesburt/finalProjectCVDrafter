import React from "react";
import "../../styles.css";

function JobsHeader(props) {
  return (
    <div className="grid grid-cols-10">
      <div className="flex items-center justify-center col-start-1 col-end-3 flex bg-gray-300">
        <div className="py-6">
          <p>Jobs List</p>
        </div>
        <div>
          <div>{props.jobListData}</div>
        </div>
      </div>
    </div>
  );
}

export default JobsHeader;
