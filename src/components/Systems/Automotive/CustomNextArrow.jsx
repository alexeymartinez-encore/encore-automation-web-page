export default function CustomNextArrow({ className, style, onClick }) {
  return (
    <button
      className={`slick-next bg-black bg-opacity-50 text-white rounded-full w-8 h-8 flex items-center justify-center ${className}`}
      style={{ ...style, display: "block", right: "10px" }}
      onClick={onClick}
    >
      &gt;
    </button>
  );
}
