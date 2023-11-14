import React from 'react';

interface DividerProps {
  style?: string;
}

const Divider: React.FC<DividerProps> = ({ style }) => {
  return <hr className={`my-2 border-t-4  ${style}`} />;
};

export default Divider;
