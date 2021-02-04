import React from "react";

function Inputbox(props) {
  return (
    <div>
      <input placeholder={props.placeholderText} />
    </div>
  );
}

export default Inputbox;
