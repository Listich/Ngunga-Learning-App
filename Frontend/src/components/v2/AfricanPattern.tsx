interface AfricanPatternProps {
  variant?: "dots" | "zigzag" | "triangles";
  className?: string;
  color?: string;
}

export function AfricanPattern({
  variant = "dots",
  className = "",
  color = "#6BCB77",
}: AfricanPatternProps) {
  if (variant === "dots") {
    return (
      <svg
        className={className}
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="dots"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1.5" fill={color} opacity="0.15" />
            <circle cx="10" cy="10" r="1.5" fill={color} opacity="0.15" />
            <circle cx="18" cy="2" r="1.5" fill={color} opacity="0.15" />
            <circle cx="2" cy="18" r="1.5" fill={color} opacity="0.15" />
            <circle cx="18" cy="18" r="1.5" fill={color} opacity="0.15" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>
    );
  }

  if (variant === "zigzag") {
    return (
      <svg
        className={className}
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="zigzag"
            x="0"
            y="0"
            width="40"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 10 L10 0 L20 10 L30 0 L40 10"
              stroke={color}
              strokeWidth="2"
              fill="none"
              opacity="0.2"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#zigzag)" />
      </svg>
    );
  }

  return (
    <svg
      className={className}
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="triangles"
          x="0"
          y="0"
          width="30"
          height="30"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M15 5 L25 20 L5 20 Z"
            fill={color}
            opacity="0.1"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#triangles)" />
    </svg>
  );
}
