const RobotSVG = ({ className = "" }) => {
  return (
    <svg
      className={`w-full h-full ${className}`}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Blueprint-style robot illustration */}

      {/* Antenna */}
      <line
        x1="100"
        y1="30"
        x2="100"
        y2="45"
        stroke="#05BFDB"
        strokeWidth="2"
        strokeDasharray="2 2"
      />
      <circle cx="100" cy="28" r="3" fill="#00FFCB" className="animate-blueprint-glow" />

      {/* Head */}
      <rect
        x="75"
        y="45"
        width="50"
        height="40"
        stroke="#05BFDB"
        strokeWidth="2"
        fill="none"
        className="animate-blueprint-glow"
      />

      {/* Eyes */}
      <circle cx="88" cy="62" r="5" fill="#00FF00" className="animate-pulse" />
      <circle cx="112" cy="62" r="5" fill="#00FF00" className="animate-pulse" />

      {/* Eyes inner glow */}
      <circle cx="88" cy="62" r="2" fill="#00FFCB" />
      <circle cx="112" cy="62" r="2" fill="#00FFCB" />

      {/* Mouth/Display */}
      <line
        x1="85"
        y1="75"
        x2="115"
        y2="75"
        stroke="#05BFDB"
        strokeWidth="1.5"
      />

      {/* Neck connector */}
      <rect
        x="95"
        y="85"
        width="10"
        height="8"
        stroke="#05BFDB"
        strokeWidth="1.5"
        fill="none"
      />

      {/* Body */}
      <rect
        x="70"
        y="93"
        width="60"
        height="50"
        stroke="#05BFDB"
        strokeWidth="2"
        fill="none"
      />

      {/* Body details - circuit pattern */}
      <circle cx="100" cy="118" r="8" stroke="#05BFDB" strokeWidth="1" fill="none" />
      <line x1="100" y1="110" x2="100" y2="126" stroke="#05BFDB" strokeWidth="1" />
      <line x1="92" y1="118" x2="108" y2="118" stroke="#05BFDB" strokeWidth="1" />

      {/* Arms */}
      {/* Left arm */}
      <g>
        <line x1="70" y1="100" x2="55" y2="100" stroke="#05BFDB" strokeWidth="2" />
        <line x1="55" y1="100" x2="55" y2="125" stroke="#05BFDB" strokeWidth="2" />
        <circle cx="55" cy="105" r="3" stroke="#05BFDB" strokeWidth="1" fill="none" />
        <rect x="50" y="125" width="10" height="8" stroke="#05BFDB" strokeWidth="1.5" fill="none" />
      </g>

      {/* Right arm */}
      <g>
        <line x1="130" y1="100" x2="145" y2="100" stroke="#05BFDB" strokeWidth="2" />
        <line x1="145" y1="100" x2="145" y2="125" stroke="#05BFDB" strokeWidth="2" />
        <circle cx="145" cy="105" r="3" stroke="#05BFDB" strokeWidth="1" fill="none" />
        <rect x="140" y="125" width="10" height="8" stroke="#05BFDB" strokeWidth="1.5" fill="none" />
      </g>

      {/* Legs */}
      {/* Left leg */}
      <g>
        <line x1="85" y1="143" x2="85" y2="165" stroke="#05BFDB" strokeWidth="2" />
        <rect x="80" y="165" width="10" height="12" stroke="#05BFDB" strokeWidth="1.5" fill="none" />
      </g>

      {/* Right leg */}
      <g>
        <line x1="115" y1="143" x2="115" y2="165" stroke="#05BFDB" strokeWidth="2" />
        <rect x="110" y="165" width="10" height="12" stroke="#05BFDB" strokeWidth="1.5" fill="none" />
      </g>

      {/* Corner brackets for blueprint aesthetic */}
      {/* Top-left corners */}
      <path d="M 20 20 L 20 35 M 20 20 L 35 20" stroke="#05BFDB" strokeWidth="1" opacity="0.3" />
      {/* Top-right corners */}
      <path d="M 180 20 L 180 35 M 180 20 L 165 20" stroke="#05BFDB" strokeWidth="1" opacity="0.3" />
      {/* Bottom-left corners */}
      <path d="M 20 180 L 20 165 M 20 180 L 35 180" stroke="#05BFDB" strokeWidth="1" opacity="0.3" />
      {/* Bottom-right corners */}
      <path d="M 180 180 L 180 165 M 180 180 L 165 180" stroke="#05BFDB" strokeWidth="1" opacity="0.3" />

      {/* Measurement lines (blueprint style) */}
      <line x1="25" y1="45" x2="25" y2="85" stroke="#05BFDB" strokeWidth="0.5" opacity="0.3" strokeDasharray="2 2" />
      <line x1="175" y1="93" x2="175" y2="143" stroke="#05BFDB" strokeWidth="0.5" opacity="0.3" strokeDasharray="2 2" />
    </svg>
  );
};

export default RobotSVG;
