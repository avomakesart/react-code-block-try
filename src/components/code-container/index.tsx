import React from "react";

function CodeContainer(props: any) {
  return (
    <div
      style={{
        padding: "1rem",
        rounded: "8px",
        margin: "1.2rem 0",
        background: "#011627"
      }}
      {...props}
    />
  );
}

export default CodeContainer;
