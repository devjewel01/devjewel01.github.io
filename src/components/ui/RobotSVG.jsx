const RobotSVG = ({ className = "" }) => {
  return (
    <svg
      className={`w-full h-full ${className}`}
      viewBox="0 0 240 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Modern Futuristic Robot Design */}

      {/* Main Frame Border */}
      <rect x="10" y="10" width="220" height="260" stroke="#05BFDB" strokeWidth="0.5" opacity="0.2" strokeDasharray="4 4" />

      {/* Antenna System */}
      <g className="animate-pulse">
        <line x1="120" y1="25" x2="120" y2="45" stroke="#00FFCB" strokeWidth="2" />
        <circle cx="120" cy="22" r="4" fill="#00FFCB" className="animate-blueprint-glow" />
        <circle cx="120" cy="22" r="7" stroke="#00FFCB" strokeWidth="1" opacity="0.4" />
      </g>

      {/* Head - Sleek Hexagonal Design */}
      <g>
        {/* Main head shape */}
        <path
          d="M 90 45 L 150 45 L 165 60 L 165 85 L 150 100 L 90 100 L 75 85 L 75 60 Z"
          stroke="#05BFDB"
          strokeWidth="2.5"
          fill="rgba(5, 191, 219, 0.05)"
          className="animate-blueprint-glow"
        />

        {/* Head accent lines */}
        <line x1="90" y1="50" x2="150" y2="50" stroke="#05BFDB" strokeWidth="0.5" opacity="0.5" />
        <line x1="85" y1="72" x2="155" y2="72" stroke="#05BFDB" strokeWidth="0.5" opacity="0.5" />
      </g>

      {/* Eyes - Glowing LED style */}
      <g>
        {/* Left eye */}
        <rect x="88" y="62" width="18" height="12" rx="2" fill="#00FF00" opacity="0.8" className="animate-pulse" />
        <rect x="90" y="64" width="14" height="8" rx="1" fill="#00FFCB" />
        <line x1="88" y1="68" x2="106" y2="68" stroke="#00FFCB" strokeWidth="3" opacity="0.6" />

        {/* Right eye */}
        <rect x="134" y="62" width="18" height="12" rx="2" fill="#00FF00" opacity="0.8" className="animate-pulse" />
        <rect x="136" y="64" width="14" height="8" rx="1" fill="#00FFCB" />
        <line x1="134" y1="68" x2="152" y2="68" stroke="#00FFCB" strokeWidth="3" opacity="0.6" />
      </g>

      {/* Face Display Panel */}
      <rect x="95" y="82" width="50" height="8" rx="1" stroke="#05BFDB" strokeWidth="1" fill="rgba(0, 255, 203, 0.1)" />
      <line x1="100" y1="86" x2="130" y2="86" stroke="#00FFCB" strokeWidth="1" strokeDasharray="2 1" className="animate-pulse" />

      {/* Neck/Connector */}
      <path d="M 110 100 L 105 110 L 135 110 L 130 100" stroke="#05BFDB" strokeWidth="2" fill="rgba(5, 191, 219, 0.05)" />

      {/* Body - Advanced Tech Design */}
      <g>
        {/* Main body */}
        <path
          d="M 80 110 L 160 110 L 170 120 L 170 185 L 160 195 L 80 195 L 70 185 L 70 120 Z"
          stroke="#05BFDB"
          strokeWidth="2.5"
          fill="rgba(5, 191, 219, 0.05)"
        />

        {/* Core Reactor */}
        <g className="animate-pulse">
          <circle cx="120" cy="145" r="18" stroke="#05BFDB" strokeWidth="2" fill="none" />
          <circle cx="120" cy="145" r="12" stroke="#00FFCB" strokeWidth="1.5" fill="rgba(0, 255, 203, 0.1)" />
          <circle cx="120" cy="145" r="6" fill="#00FFCB" className="animate-blueprint-glow" />
        </g>

        {/* Tech details */}
        <line x1="120" y1="127" x2="120" y2="120" stroke="#05BFDB" strokeWidth="2" />
        <line x1="120" y1="163" x2="120" y2="170" stroke="#05BFDB" strokeWidth="2" />
        <line x1="102" y1="145" x2="95" y2="145" stroke="#05BFDB" strokeWidth="2" />
        <line x1="138" y1="145" x2="145" y2="145" stroke="#05BFDB" strokeWidth="2" />

        {/* Circuit patterns */}
        <path d="M 90 125 L 100 125 L 100 135" stroke="#05BFDB" strokeWidth="1" opacity="0.6" />
        <path d="M 150 125 L 140 125 L 140 135" stroke="#05BFDB" strokeWidth="1" opacity="0.6" />
        <circle cx="100" cy="135" r="2" fill="#00FFCB" />
        <circle cx="140" cy="135" r="2" fill="#00FFCB" />
      </g>

      {/* Arms - Robotic Design */}
      {/* Left arm */}
      <g>
        <path d="M 70 125 L 45 125 L 42 130 L 42 160 L 45 165" stroke="#05BFDB" strokeWidth="2.5" />
        <circle cx="42" cy="135" r="4" stroke="#05BFDB" strokeWidth="1.5" fill="rgba(0, 255, 203, 0.2)" />
        <rect x="38" y="165" width="14" height="18" rx="2" stroke="#05BFDB" strokeWidth="2" fill="rgba(5, 191, 219, 0.05)" />
        {/* Fingers */}
        <line x1="40" y1="183" x2="40" y2="188" stroke="#05BFDB" strokeWidth="1.5" />
        <line x1="45" y1="183" x2="45" y2="190" stroke="#05BFDB" strokeWidth="1.5" />
        <line x1="50" y1="183" x2="50" y2="188" stroke="#05BFDB" strokeWidth="1.5" />
      </g>

      {/* Right arm */}
      <g>
        <path d="M 170 125 L 195 125 L 198 130 L 198 160 L 195 165" stroke="#05BFDB" strokeWidth="2.5" />
        <circle cx="198" cy="135" r="4" stroke="#05BFDB" strokeWidth="1.5" fill="rgba(0, 255, 203, 0.2)" />
        <rect x="188" y="165" width="14" height="18" rx="2" stroke="#05BFDB" strokeWidth="2" fill="rgba(5, 191, 219, 0.05)" />
        {/* Fingers */}
        <line x1="190" y1="183" x2="190" y2="188" stroke="#05BFDB" strokeWidth="1.5" />
        <line x1="195" y1="183" x2="195" y2="190" stroke="#05BFDB" strokeWidth="1.5" />
        <line x1="200" y1="183" x2="200" y2="188" stroke="#05BFDB" strokeWidth="1.5" />
      </g>

      {/* Legs - Modern Design */}
      {/* Left leg */}
      <g>
        <path d="M 95 195 L 95 235 L 90 240" stroke="#05BFDB" strokeWidth="2.5" />
        <circle cx="95" cy="210" r="4" stroke="#05BFDB" strokeWidth="1.5" fill="rgba(0, 255, 203, 0.2)" />
        <rect x="82" y="240" width="18" height="20" rx="2" stroke="#05BFDB" strokeWidth="2" fill="rgba(5, 191, 219, 0.05)" />
        <line x1="85" y1="250" x2="97" y2="250" stroke="#00FFCB" strokeWidth="1" opacity="0.6" />
      </g>

      {/* Right leg */}
      <g>
        <path d="M 145 195 L 145 235 L 150 240" stroke="#05BFDB" strokeWidth="2.5" />
        <circle cx="145" cy="210" r="4" stroke="#05BFDB" strokeWidth="1.5" fill="rgba(0, 255, 203, 0.2)" />
        <rect x="140" y="240" width="18" height="20" rx="2" stroke="#05BFDB" strokeWidth="2" fill="rgba(5, 191, 219, 0.05)" />
        <line x1="143" y1="250" x2="155" y2="250" stroke="#00FFCB" strokeWidth="1" opacity="0.6" />
      </g>

      {/* Tech Grid Overlay */}
      <g opacity="0.15">
        <line x1="60" y1="0" x2="60" y2="280" stroke="#05BFDB" strokeWidth="0.5" strokeDasharray="3 3" />
        <line x1="120" y1="0" x2="120" y2="280" stroke="#05BFDB" strokeWidth="0.5" strokeDasharray="3 3" />
        <line x1="180" y1="0" x2="180" y2="280" stroke="#05BFDB" strokeWidth="0.5" strokeDasharray="3 3" />
        <line x1="0" y1="70" x2="240" y2="70" stroke="#05BFDB" strokeWidth="0.5" strokeDasharray="3 3" />
        <line x1="0" y1="140" x2="240" y2="140" stroke="#05BFDB" strokeWidth="0.5" strokeDasharray="3 3" />
        <line x1="0" y1="210" x2="240" y2="210" stroke="#05BFDB" strokeWidth="0.5" strokeDasharray="3 3" />
      </g>

      {/* Corner Markers */}
      <path d="M 15 15 L 15 30 M 15 15 L 30 15" stroke="#00FFCB" strokeWidth="1.5" opacity="0.6" />
      <path d="M 225 15 L 225 30 M 225 15 L 210 15" stroke="#00FFCB" strokeWidth="1.5" opacity="0.6" />
      <path d="M 15 265 L 15 250 M 15 265 L 30 265" stroke="#00FFCB" strokeWidth="1.5" opacity="0.6" />
      <path d="M 225 265 L 225 250 M 225 265 L 210 265" stroke="#00FFCB" strokeWidth="1.5" opacity="0.6" />

      {/* Scanning Line Effect */}
      <line x1="15" y1="140" x2="225" y2="140" stroke="#00FFCB" strokeWidth="1" opacity="0.3" className="animate-pulse" />
    </svg>
  );
};

export default RobotSVG;
