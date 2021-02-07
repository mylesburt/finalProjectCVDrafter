import React from "react";

function Inputbox(props) {
  return (
    <div>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
        placeholder={props.placeholderText}
      />
    </div>
  );
}

export default Inputbox;
