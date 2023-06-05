// BlueIcon.js
export const BlueIcon = ({ x, y }) => (
  <g>
    <rect x={x} y={y} width={180} height={80} fill="blue" />
    <text x={x+90} y={y+40} dominantBaseline="middle" textAnchor="middle" fill="white" fontFamily="sans-serif" fontSize="20px">
      Initiate Check
    </text>
  </g>
);

// BlackIcon.js
export const BlackIcon = ({ x, y }) => (
  <g>
    <rect x={x} y={y} width={180} height={80} stroke="black" fill="none" />
    <text x={x+90} y={y+40} dominantBaseline="middle" textAnchor="middle" fill="black" fontFamily="sans-serif" fontSize="20px">
      Initiate Check
    </text>
  </g>
);