"use client";

import React from "react";

const BookmarkIcon = ({ fill = false }: { fill?: boolean }) => {
  if (fill) {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.99984 1.66663L12.5748 6.88329L18.3332 7.72496L14.1665 11.7833L15.1498 17.5166L9.99984 14.8083L4.84984 17.5166L5.83317 11.7833L1.6665 7.72496L7.42484 6.88329L9.99984 1.66663Z"
          fill="#1E1E1E"
          stroke="#1E1E1E"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
        stroke="#1E1E1E"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default BookmarkIcon;
