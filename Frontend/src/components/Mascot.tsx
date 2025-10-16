export function Mascot({ className = "" }: { className?: string }) {
  return (
    <div className={`${className}`}>
      <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Head */}
        <circle cx="40" cy="35" r="15" fill="#8B4513" />
        
        {/* Turban (red) */}
        <ellipse cx="40" cy="25" rx="16" ry="8" fill="#C85C5C" />
        <path d="M 24 25 Q 24 20 30 22 Q 35 20 40 20 Q 45 20 50 22 Q 56 20 56 25" fill="#C85C5C" />
        
        {/* Face details */}
        <circle cx="35" cy="35" r="2" fill="#333333" />
        <circle cx="45" cy="35" r="2" fill="#333333" />
        <path d="M 35 40 Q 40 43 45 40" stroke="#333333" strokeWidth="1.5" fill="none" />
        
        {/* Body with pagne (green) */}
        <rect x="25" y="48" width="30" height="25" rx="5" fill="#6BCB77" />
        
        {/* Pagne pattern */}
        <line x1="30" y1="52" x2="50" y2="52" stroke="#FFD56B" strokeWidth="2" />
        <line x1="30" y1="58" x2="50" y2="58" stroke="#FFD56B" strokeWidth="2" />
        <line x1="30" y1="64" x2="50" y2="64" stroke="#FFD56B" strokeWidth="2" />
        
        {/* Arms */}
        <ellipse cx="22" cy="55" rx="4" ry="10" fill="#8B4513" />
        <ellipse cx="58" cy="55" rx="4" ry="10" fill="#8B4513" />
      </svg>
    </div>
  );
}
