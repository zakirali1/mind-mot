import React from "react";

function Col(props) {
  const size = props.size
    .split(" ")
    .map((size) => "col-" + size)
    .join(" ");

  return (
    <div
      className={`${size} mx-auto text-center`}
      style={{ marginBottom: "4em" }}
    >
      {props.children}
    </div>
  );
}

export default Col;
