import React from "react";

export const Button = (props) => {
  return (
    <button
      onClick={() =>
        props.sign === "Increment Counter"
          ? props.updateCount(1)
          : props.updateCount(-1)
      }
    >
      {props.sign}
    </button>
  );
};
