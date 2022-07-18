export default function Loader({dimension}) {
  return (
    <svg
      className="spinner"
      width={`${dimension}px`}
      height={`${dimension}px`}
      viewBox={`0 0 ${dimension} ${dimension}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        className="path"
        fill="none"
        strokeWidth="6"
        strokeLinecap="round"
        cx={`${dimension/2}`}
        cy={`${dimension/2}`}
        r={`${dimension/3}`}
      ></circle>
    </svg>
  );
}
