import React from "react";

export default function CustomPrevArrow({ className, style, onClick }) {
  return (
    <button
      className={`slick-prev bg-black bg-opacity-50 text-white rounded-full w-8 h-8 flex items-center justify-center ${className}`}
      style={{ ...style, display: "block", left: "10px" }}
      onClick={onClick}
    >
      &lt;
    </button>
  );
}
