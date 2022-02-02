import React from "react";

/** This component is used in the `icon.mdx` page. */
const CircleIcon = (props: any) => (
  <svg viewBox="0 0 200 200" {...props}>
    <path
      fill="currentColor"
      d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
    />
  </svg>
);

export default CircleIcon;
