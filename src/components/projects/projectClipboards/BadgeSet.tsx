import React, { useMemo } from 'react';

interface BadgeProps {
  title: string;
}

export const Badge: React.FC<BadgeProps> = ({ title }) => {
  return (
    <div className="py-1 px-3 bg-blue-500 rounded w-min select-none">
      <p className="text-blue-bg">{title}</p>
    </div>
  );
};

interface BadgeSetProps {
  titleArr: string[];
}

const BadgeSet: React.FC<BadgeSetProps> = ({ titleArr }) => {
  const badgeArr = useMemo(() => {
    return titleArr.map((title) => <Badge title={title} />);
  }, [titleArr]);

  return <>{badgeArr}</>;
};

export default BadgeSet;
