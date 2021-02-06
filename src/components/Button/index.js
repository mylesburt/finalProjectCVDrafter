import React from "react";

function Button(props) {
  return (
    <div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        {props.buttontext}
      </button>
    </div>
  );
}

export default Button;
