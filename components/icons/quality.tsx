import React from "react";

export default function Quality({
  height = 35,
  width = 35,
}: {
  height?: number;
  width?: number;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.387 29.3404C23.9886 29.3404 29.3404 23.9886 29.3404 17.387C29.3404 10.7853 23.9886 5.43359 17.387 5.43359C10.7853 5.43359 5.43359 10.7853 5.43359 17.387C5.43359 23.9886 10.7853 29.3404 17.387 29.3404Z"
        stroke="#8C1A45"
        strokeWidth="1.95601"
      />
      <path
        d="M10.8672 17.3877L15.2139 21.7344L23.9072 13.041"
        stroke="#8C1A45"
        strokeWidth="2.17334"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}