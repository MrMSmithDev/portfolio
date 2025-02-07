import React from 'react';

interface IconProps {
  className?: '';
}

const MenuSVG: React.FC<IconProps> = ({ className = '' }) => {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g strokeLinecap="round" strokeLinejoin="round"></g>
      <g>
        <path
          d="M4 6H20M4 12H20M4 18H20"
          stroke="#ffe066"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </g>
    </svg>
  );
};

export default MenuSVG;
