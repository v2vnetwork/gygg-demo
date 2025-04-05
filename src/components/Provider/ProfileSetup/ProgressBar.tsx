export function ProgressBar() {
    return (
      <svg
        width="750"
        height="64"
        viewBox="0 0 750 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          fill="white"
          xmlSpace="preserve"
          style={{ whiteSpace: "pre" }}
          fontFamily="Inter"
          fontSize="24"
          fontWeight="600"
          letterSpacing="0.01em"
        >
          <tspan x="5" y="23.2273">
            Profile set up
          </tspan>
        </text>
        <text
          fill="white"
          xmlSpace="preserve"
          style={{ whiteSpace: "pre" }}
          fontFamily="Inter"
          fontSize="24"
          fontWeight="600"
          letterSpacing="0.01em"
        >
          <tspan x="708" y="23.2273">
            1/8
          </tspan>
        </text>
        <path
          d="M5 59H745"
          stroke="#E9E9E9"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <path
          d="M5 59H97.5"
          stroke="#00AABA"
          strokeWidth="10"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  